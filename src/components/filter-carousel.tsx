"use client";

import { cn } from "@/lib/utils";
import {
  Carousel,
  CarouselApi,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselContent,
} from "@/components/ui/carousel";
import { Badge } from "./ui/badge";
import { useEffect, useState } from "react";
import { Skeleton } from "./ui/skeleton";

interface FilterCarouselProps {
  value?: string | null;
  isLoading?: boolean;
  onSelect: (value: string | null) => void;
  data: {
    value: string;
    label: string;
  }[];
}

export const FilterCarousel = ({
  value,
  isLoading,
  onSelect,
  data,
}: FilterCarouselProps) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="relative w-full">
      {/*Left fade*/}
      <div
        className={cn(
          "absolute top-0 left-12 bottom-0 w-12 z-10 bg-gradient-to-r from-white to-transparent pointer-events-none",
          current === 1 && "hidden"
        )}
      />
      <Carousel
        setApi={setApi}
        opts={{ align: "start", dragFree: true }}
        className="w-full px-12"
      >
        <CarouselContent className="-ml-3">
          {isLoading &&
            Array.from({ length: 32 }).map((_, index) => (
              <CarouselItem key={index} className="pl-3 basis-auto">
                <Skeleton className="h-8 w-24 rounded-lg" />
              </CarouselItem>
            ))}
          {!isLoading && (
            <>
              <CarouselItem
                onClick={() => onSelect && onSelect(null)}
                className="basis-auto pl-3"
              >
                <Badge
                  variant={!value ? "default" : "secondary"}
                  className="cursor-pointer whitespace-nowrap rounded-lg px-3 py-1 text-sm"
                >
                  All
                </Badge>
              </CarouselItem>
              {data.map((item) => (
                <CarouselItem
                  key={item.value}
                  onClick={() => onSelect && onSelect(item.value)}
                  className="basis-auto pl-3"
                >
                  <Badge
                    variant={value === item.value ? "default" : "secondary"}
                    className="cursor-pointer whitespace-nowrap rounded-lg px-3 py-1 text-sm"
                  >
                    {item.label}
                  </Badge>
                </CarouselItem>
              ))}
            </>
          )}
        </CarouselContent>
        <CarouselPrevious className="left-0 z-20" />
        <CarouselNext className="right-0 z-20" />
      </Carousel>
      {/*Right fade*/}
      <div
        className={cn(
          "absolute top-0 right-12 bottom-0 w-12 z-10 bg-gradient-to-l from-white to-transparent pointer-events-none",
          current === count && "hidden"
        )}
      />
    </div>
  );
};

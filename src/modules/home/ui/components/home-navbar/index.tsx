import { SidebarTrigger } from "@/components/ui/sidebar";
import Image from "next/image";
import Link from "next/link";
import { SearchInput } from "./search-input";

export const HomeNavbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex h-16 items-center bg-white px-2 pr-5">
      <div className="flex items-center gap-4 w-full">
        <div className="flex items-center flex-shrink-0">
          <SidebarTrigger />
          <Link href="/">
            <div className="flex items-center p-4 gap-1">
              <Image src="/logo.svg" alt="logo" width={32} height={32} />
              <p className="text-xl font-semibold tracking-tight">FlexTube</p>
            </div>
          </Link>
        </div>
        {/* Search bar */}
        <div className="flex-1 justify-center max-w[720px] mx-auto">
          <SearchInput />
        </div>
      </div>
    </nav>
  );
};

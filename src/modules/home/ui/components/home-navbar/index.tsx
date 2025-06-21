import { SidebarTrigger } from "@/components/ui/sidebar";
import Image from "next/image";
import Link from "next/link";
import { SearchInput } from "./search-input";
import { AuthButton } from "@/modules/auth/ui/components/auth-button";

export const HomeNavbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex h-16 items-center bg-white px-2 pr-5">
      <div className="flex w-full items-center justify-between gap-4">
        <div className="flex flex-shrink-0 items-center">
          <SidebarTrigger />
          <Link href="/">
            <div className="flex items-center gap-1 p-4">
              <Image src="/logo.svg" alt="logo" width={32} height={32} />
              <p className="text-xl font-semibold tracking-tight">FlexTube</p>
            </div>
          </Link>
        </div>
        {/* Search bar */}
        <div className="mx-auto flex w-full max-w-[720px] justify-center">
          <SearchInput />
        </div>
        <div className="flex flex-shrink-0 items-center gap-4">
          <AuthButton />
        </div>
      </div>
    </nav>
  );
};

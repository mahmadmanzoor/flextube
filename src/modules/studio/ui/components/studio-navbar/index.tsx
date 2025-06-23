import { SidebarTrigger } from "@/components/ui/sidebar";
import Image from "next/image";
import Link from "next/link";
import { AuthButton } from "@/modules/auth/ui/components/auth-button";
import { StudioUploadModal } from "../studio-upload-modal";

export const StudioNavbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex h-16 items-center bg-white px-2 pr-5 border-bottom shadow-md">
      <div className="flex w-full items-center justify-between gap-4">
        <div className="flex flex-shrink-0 items-center">
          <SidebarTrigger />
          <Link href="/studio">
            <div className="flex items-center gap-1 p-4">
              <Image src="/logo.svg" alt="logo" width={32} height={32} />
              <p className="text-xl font-semibold tracking-tight">Studio</p>
            </div>
          </Link>
        </div>
        {/* Spacer */}
        <div className="flex-1" />
        <div className="flex flex-shrink-0 items-center gap-4">
          <StudioUploadModal />
          <AuthButton />
        </div>
      </div>
    </nav>
  );
};

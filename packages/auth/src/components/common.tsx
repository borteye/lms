import banner from "@workspace/assets/images/auth-image.svg";
import logo from "@workspace/assets/images/logo.png";

import Image from "next/image";

export default function Common({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full h-screen overflow-hidden">
      <div className="flex items-center justify-between gap-4 h-full">
        <div className="w-full md:w-1/2 px-4 md:px-8 py-6 max-w-[600px] mx-auto flex flex-col gap-8 overflow-y-scroll max-h-[90vh] no-scrollbar">
          <Image
            src={logo}
            alt="logo"
            quality={100}
            width={1000}
            height={1000}
            priority
            className="w-40 object-contain mb-6"
          />
          {children}
        </div>
        <div className="h-auto max-h-screen w-1/2 hidden md:block">
          <Image
            src={banner}
            alt="banner"
            className="w-full min-h-screen object-cover"
          />
        </div>
      </div>
    </div>
  );
}

import Image from "next/image";
import onboarding from "@workspace/assets/images/onboarding.png";
import logo from "@workspace/assets/images/logo.png";
export default function OnboardingCommon({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full h-screen overflow-hidden">
      <div className="flex items-center justify-between gap-4 h-full">
        <div className="h-full w-1/2 hidden md:flex flex-col gap-12 bg-primary/10  items-center justify-center">
          <Image
            src={onboarding}
            alt="banner"
            className="w-3/5 mx-auto object-cover"
          />
          <div>
            <h1 className="text-2xl md:text-4xl font-bold">
              Built for Schools,
              <br /> Trusted by Educators.
            </h1>
            <p className="md:text-lg text-gray-700 mt-2">
              Register confidently with a platform designed specifically <br />
              for education institutions.
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/2 px-4 md:px-8 py-6 max-w-[600px] mx-auto flex flex-col gap-8 overflow-y-scroll max-h-[90vh] no-scrollbar">
          {/* <Image
            src={logo}
            alt="logo"
            quality={100}
            width={1000}
            height={1000}
            priority
            className="w-40 object-contain mb-4"
          /> */}
          {children}
        </div>
      </div>
    </div>
  );
}

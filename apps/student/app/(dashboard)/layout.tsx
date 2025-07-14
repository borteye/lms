import {
  SidebarProvider,
  SidebarTrigger,
} from "@workspace/ui/components/sidebar";
import { AppSidebar } from "@workspace/common/components/app-sidebar";
import HeaderBar from "@workspace/common/components/header-bar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-full h-screen overflow-hidden">
        <SidebarTrigger />
        <HeaderBar />
        <div className="mt-8 p-3 xl:p-6 overflow-y-scroll h-[calc(100vh-79px)] pb-16">
          {children}
        </div>
      </main>
    </SidebarProvider>
  );
}

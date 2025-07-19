"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@workspace/ui/components/sidebar";
import Image from "next/image";
import logo from "@workspace/assets/images/logo.png";
import { usePathname } from "next/navigation";
import { bottomItems, navigationItems } from "../lib/loops";
export function AppSidebar() {
  const path = usePathname();

  return (
    <Sidebar collapsible="offcanvas">
      <SidebarHeader>
        <Image
          src={logo}
          alt="logo"
          className="w-30 mx-auto"
          width={1000}
          height={1000}
        />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.id}>
                  <SidebarMenuButton
                    isActive={path.includes(item.href)}
                    asChild
                  >
                    <a href={item.href}>
                      <item.icon />
                      <span>{item.label}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup className="mt-auto">
          <SidebarGroupContent>
            <SidebarMenu>
              {bottomItems.map((item) => (
                <SidebarMenuItem key={item.id}>
                  <SidebarMenuButton
                    asChild
                    isActive={item.href.includes(path)}
                  >
                    <a href={item.href} className="flex items-center gap-3">
                      <item.icon className="w-5 h-5" />
                      <span>{item.label}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t">
        <div className="p-4">
          <div className="flex items-center gap-2 text-xs text-gray-400">
            <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
            <span>LEARN EASE 2025</span>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}

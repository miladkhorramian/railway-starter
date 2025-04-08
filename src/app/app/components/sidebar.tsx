"use client";

import * as React from "react";
import { HomeIcon, UserCircle2Icon } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import LogoutUser from "@/components/widgets/logout-user";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const SonnerTester = () => {
  return (
    <Button
      variant="outline"
      onClick={() =>
        toast("Event has been created", {
          description: "امروز سه شنبه است",
          action: {
            label: "Undo",
            onClick: () => console.log("Undo"),
          },
        })
      }
    >
      Show Toast
    </Button>
  );
};

// Menu items.
const items = [
  {
    title: "خانه",
    url: "/",
    icon: HomeIcon,
  },
];

export function AppSidebar() {
  return (
    <Sidebar side="right">
      <SidebarHeader className="py-2">
        <p className="text-md font-bold">سامانه راه‌آهن</p>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>منو</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map(item => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <div className="flex gap-3 justify-center hover:bg-muted transition-colors items-center text-slate-600 hover:cursor-pointer rounded p-3">
          <UserCircle2Icon size={32} />
          <span>احمد احمدی</span>
        </div>
        <LogoutUser />
        <SonnerTester />
      </SidebarFooter>
    </Sidebar>
  );
}

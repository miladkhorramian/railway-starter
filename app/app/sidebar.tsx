import * as React from "react";
import {
  Calendar1Icon,
  TrainIcon,
  UserCircle2Icon,
  Users2Icon,
} from "lucide-react";

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

// Menu items.
const items = [
  {
    title: "زمان‌بندی",
    url: "/app",
    icon: Calendar1Icon,
  },
  {
    title: "ماشین‌های اعزامی",
    url: "/app/trains",
    icon: TrainIcon,
  },
  {
    title: "مدیریت کاربران",
    url: "",
    icon: Users2Icon,
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
      </SidebarFooter>
    </Sidebar>
  );
}

"use client";

import * as React from "react";

import { Button } from "../ui/button";
import { LogOutIcon } from "lucide-react";
import { cn, delay } from "@/lib/utils";
import { redirect } from "next/navigation";

const LogoutUser = () => {
  //
  const handleLogout = async () => {
    await delay();
    redirect("/login");
  };
  //
  return (
    <Button
      variant="destructive"
      onClick={handleLogout}
      className="w-full gap-3 flex rounded-sm px-3 py-5"
    >
      <span className={cn("inline")}>خروج</span>
      <LogOutIcon className="rotate-180 w-5 h-5" />
    </Button>
  );
};

export default LogoutUser;

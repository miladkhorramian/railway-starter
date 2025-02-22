"use client";

import * as React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { useForm } from "react-hook-form";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { EyeIcon, EyeOffIcon, LockIcon, User2Icon } from "lucide-react";

function delay() {
  return new Promise(resolve => setTimeout(resolve, 2500));
}

function AuthLoginPage() {
  const [passwordVisible, setPasswordVisible] = React.useState(false);
  const router = useRouter();
  const form = useForm();

  const onSubmit = async () => {
    await delay();
    router.push("/");
  };

  return (
    <div className="grid place-items-center w-lvw h-lvh bg-muted p-3 lg:p-8">
      <Card className="grid grid-cols-1 p-0 lg:grid-cols-2 w-full h-full border-none shadow-none">
        <div className="bg-slate-700 rounded-[inherit] lg:rounded-l-none grid place-items-center">
          <Card className="border-none shadow-none w-[320px] h-fit section-padding">
            <CardHeader className="text-center">
              <CardTitle>ورود ادمین</CardTitle>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                  <div className="grid w-full  max-w-80  mx-auto items-center gap-2 ">
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel asChild>
                            <Label className="text-xs" htmlFor="phone">
                              موبایل
                            </Label>
                          </FormLabel>
                          <FormControl>
                            <div className="relative flex items-center justify-center">
                              <span className="absolute right-2">
                                <User2Icon className="w-5 h-5" />
                              </span>
                              <Input
                                {...field}
                                type="number"
                                placeholder="موبایل"
                                className="pr-8 border border-[#e9ebff3c] text-xs"
                              />
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="grid w-full  max-w-80  mx-auto items-center gap-2 mt-6">
                    <FormField
                      control={form.control}
                      name="password"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel asChild>
                            <div className="flex justify-between items-center">
                              <Label className="text-xs" htmlFor="password">
                                کلمه عبور
                              </Label>
                              <Button
                                size="icon"
                                variant="ghost"
                                className="hover:bg-slate-700 hover:text-white"
                                onClick={() =>
                                  setPasswordVisible(!passwordVisible)
                                }
                              >
                                {passwordVisible ? (
                                  <EyeIcon className="h-5 w-5" />
                                ) : (
                                  <EyeOffIcon className="h-5 w-5" />
                                )}
                              </Button>
                            </div>
                          </FormLabel>
                          <FormControl>
                            <div className="relative flex items-center justify-center">
                              <span className="absolute right-2">
                                <LockIcon className="w-5 h-5" />
                              </span>
                              <Input
                                {...field}
                                type={passwordVisible ? "text" : "password"}
                                placeholder="کلمه عبور"
                                className="pr-8 border border-[#e9ebff3c] text-xs"
                              />
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <CardFooter>
                      <Button
                        type="submit"
                        className=" w-full rounded-lg mt-2 text-white cursor-pointer"
                      >
                        ورود
                      </Button>
                    </CardFooter>
                  </div>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
        <div className="place-items-center hidden lg:grid">
          <Image width={480} height={480} src={"/login.jpg"} alt="" />
        </div>
      </Card>
    </div>
  );
}

export default AuthLoginPage;

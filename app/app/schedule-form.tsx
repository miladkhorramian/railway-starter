"use client";

import * as React from "react";
import { useForm } from "react-hook-form";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import TargetRegions from "./target-regions";
import { Button } from "@/components/ui/button";
import { delay } from "@/lib/utils";

type ScheduleFormProps = {
  onHandleSubmit: (params?: unknown) => void;
};

const ScheduleForm = ({ onHandleSubmit }: ScheduleFormProps) => {
  const form = useForm();

  const onSubmit = async () => {
    await delay();
    onHandleSubmit();
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <Card className="w-full max-w-lg">
          <CardHeader>
            <CardTitle>زمان‌بندی</CardTitle>
          </CardHeader>
          <CardContent className="w-full flex flex-col gap-5">
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>سرعت ماشین‌های اعزامی</FormLabel>
                  <FormControl>
                    <div className="relative flex items-center justify-center">
                      <Input
                        {...field}
                        type="number"
                        placeholder="سرعت ماشین‌های اعزامی را وارد کنید."
                        className="pr-8 border border-[#e9ebff3c] text-xs"
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>بیشینه زمان فعالیت در روز</FormLabel>
                  <FormControl>
                    <div className="relative flex items-center justify-center">
                      <Input
                        {...field}
                        type="number"
                        placeholder="بیشینه زمان فعالیت در روز را وارد کنید."
                        className="pr-8 border border-[#e9ebff3c] text-xs"
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>ناحیه هدف</FormLabel>
                  <FormControl>
                    <div className="relative flex items-center justify-center">
                      <TargetRegions onValueChange={field.onChange} />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
          <CardFooter className="gap-3 justify-end !w-full">
            <Button
              type="button"
              variant="secondary"
              onClick={() => onHandleSubmit()}
            >
              زمان‌بندی بهینه
            </Button>
            <Button type="submit">زمان‌بندی</Button>
          </CardFooter>
        </Card>
      </form>
    </Form>
  );
};

export { ScheduleForm };

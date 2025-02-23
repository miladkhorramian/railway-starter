"use client";

import * as React from "react";

import { ColumnDef } from "@tanstack/react-table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DataTableLocal } from "@/components/widgets/data-table-local";

import { faker } from "@faker-js/faker";
import { Button } from "@/components/ui/button";
import { DownloadIcon } from "lucide-react";

function generateMockTrains(rows = 10) {
  const blocks = [
    "تهران-ری",
    "چشمه-کیان-سلمان",
    "گل-تپه-خواجه نصیر",
    "عجبشیر-بروز بهمن",
  ];
  const machineRegions = ["مرکز", "شمال شرق", "آذربایجان"];
  const dispatchRegions = ["تهران", "قم", "اصفهان"];
  const dispatchUsers = ["محمد", "علی", "حسین", "رضا"];

  const data = [];
  for (let i = 0; i < rows; i++) {
    data.push({
      machine: faker.number.int({ min: 1, max: 10 }),
      region: faker.helpers.arrayElement(machineRegions),
      dispatchBlock: faker.helpers.arrayElement(blocks),
      dispatchRegion: faker.helpers.arrayElement(dispatchRegions),
      dispatchUser: faker.helpers.arrayElement(dispatchUsers),
    });
  }
  return data;
}

const columns: ColumnDef<unknown>[] = [
  { accessorKey: "machine", header: "ماشین" },
  { accessorKey: "region", header: "ناحیه" },
  { accessorKey: "dispatchBlock", header: "بلوک اعزامی" },
  { accessorKey: "dispatchRegion", header: "ناحیه اعزامی" },
  { accessorKey: "dispatchUser", header: "کاربر اعزام کننده" },
];

export const TrainsList = () => {
  const trains = generateMockTrains();

  return (
    <Card>
      <CardHeader className="flex flex-row items-center gap-5">
        <CardTitle>لیست ماشین‌های اعزامی</CardTitle>
        <Button variant="secondary" className="gap-2">
          دانلود
          <DownloadIcon size={20} />
        </Button>
      </CardHeader>
      <CardContent>
        <DataTableLocal columns={columns} data={trains} />
      </CardContent>
    </Card>
  );
};

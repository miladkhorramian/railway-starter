import { DataTableLocal } from "@/components/widgets/data-table-local";
import { ColumnDef } from "@tanstack/react-table";
import { generateMockSchedules } from "./fakes";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { DownloadIcon } from "lucide-react";
import { Switch } from "@/components/ui/switch";

const columns: ColumnDef<unknown>[] = [
  { accessorKey: "block", header: "بلوک" },
  { accessorKey: "machineId", header: "آیدی ماشین" },
  { accessorKey: "machineRegion", header: "ناحیه ماشین" },
  { accessorKey: "departureDay", header: "روز اعزام" },
  { accessorKey: "departureDate", header: "تاریخ اعزام" },
  { accessorKey: "startTime", header: "زمان شروع" },
  { accessorKey: "endTime", header: "زمان پایان" },
  { accessorKey: "travelTime", header: "زمان سفر" },
  { accessorKey: "subtaskCompletionTime", header: "مجموع زمان تکمیل زیرکوبی" },
  { accessorKey: "remainingSubtask1", header: "زیرکوبی باقیمانده نوع 1" },
  { accessorKey: "completedSubtask1", header: "زیرکوبی تکمیل شده نوع 1" },
  { accessorKey: "remainingSubtask2", header: "زیرکوبی باقیمانده نوع 2" },
  { accessorKey: "completedSubtask2", header: "زیرکوبی تکمیل شده نوع 2" },
  {
    accessorKey: "selection",
    header: "انتخاب برای اعزام",
    cell: ({ getValue }) => (
      <Switch value={String(getValue())} style={{ direction: "ltr" }} />
    ),
  },
];

type ScheduleListProps = object;

const ScheduleList = () => {
  const schedules = generateMockSchedules();

  return (
    <Card>
      <CardHeader className="flex flex-row items-center gap-5">
        <CardTitle>لیست زمان‌بندی‌ها</CardTitle>
        <Button variant="secondary" className="gap-2">
          دانلود
          <DownloadIcon size={20} />
        </Button>
      </CardHeader>
      <CardContent>
        <DataTableLocal columns={columns} data={schedules} />
      </CardContent>
    </Card>
  );
};

export { columns as scheduleListData, ScheduleList, type ScheduleListProps };

"use client";

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { InputSearch } from "@/components/widgets/input-search";

interface DataTableLocalProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  className?: string;
  rowClassName?: string;
  headClassName?: string;
  bodyClassName?: string;
  cellClassName?: string;
  headRowClassName?: string;
  headerClassName?: string;
  shouldRenderHeader?: boolean;
}

const DataTableLocal = <TData, TValue>({
  columns,
  data,
  className,
  bodyClassName,
  rowClassName,
  headClassName,
  cellClassName,
  headRowClassName,
  headerClassName,
  shouldRenderHeader = true,
}: DataTableLocalProps<TData, TValue>) => {
  const [globalFilter, setGlobalFilter] = useState("");

  const table = useReactTable({
    data,
    columns,
    state: {
      globalFilter,
    },
    onGlobalFilterChange: setGlobalFilter,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <div className={cn("rounded-md", className)}>
      <div className="flex justify-between items-center py-4">
        {/* Search Bar */}
        <InputSearch
          placeholder="جستجو..."
          value={globalFilter ?? ""}
          onChange={e => setGlobalFilter(e.target.value)}
          className="w-full max-w-full lg:max-w-96"
        />
      </div>

      <Table>
        {shouldRenderHeader && (
          <TableHeader className={cn("border-none", headerClassName)}>
            {table.getHeaderGroups().map(headerGroup => (
              <TableRow
                key={headerGroup.id}
                className={cn("border-none", headRowClassName)}
              >
                {headerGroup.headers.map(header => (
                  <TableHead
                    key={header.id}
                    className={cn(
                      "text-right p-3 font-bold text-sm bg-muted text-muted-foreground first:rounded-r-xl last:rounded-l-xl",
                      headClassName
                    )}
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
        )}
        <TableBody className={bodyClassName}>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map(row => (
              <>
                {/* <Link className="" href={`/profile/competitions/${param.id}/${row.index+1}`}> */}
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                  className={cn(
                    "border-none p-3 h-12 hover:bg-background",
                    rowClassName
                  )}
                >
                  {row.getVisibleCells().map(cell => (
                    <TableCell
                      key={cell.id}
                      className={cn(
                        "text-right border-none p-3 first:rounded-r-xl last:rounded-l-xl",
                        cellClassName
                      )}
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
                {/* </Link> */}
              </>
            ))
          ) : (
            <TableRow className={rowClassName}>
              <TableCell colSpan={columns.length} className="h-24 text-right">
                داده‌ای یافت نشد.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>

      {/* Pagination Controls */}
      <div className="flex flex-col lg:flex-row-reverse gap-3 items-center mt-3">
        <div className="flex items-center gap-3">
          <Button
            size="icon"
            variant="secondary"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            <ChevronRightIcon className="h-5 w-5" />
          </Button>
          <Button
            size="icon"
            variant="secondary"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            <ChevronLeftIcon className="h-5 w-5" />
          </Button>
        </div>
        <span className="text-sm text-muted-foreground">
          صفحه {table.getState().pagination.pageIndex + 1} از{" "}
          {table.getPageCount()}
        </span>
      </div>
    </div>
  );
};

export { type DataTableLocalProps, DataTableLocal };

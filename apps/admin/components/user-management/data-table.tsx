"use client";

import * as React from "react";
import Link from "next/link";
import {
  ColumnDef,
  ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
  VisibilityState,
} from "@workspace/ui/lib/client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@workspace/ui/components/table";
import { Input } from "@workspace/ui/components/input";
import { Button } from "@workspace/ui/components/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@workspace/ui/components/select";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@workspace/ui/components/dropdown-menu";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@workspace/ui/components/dialog";
import {
  ChevronDown,
  Columns3,
  Columns3Icon,
  Cone,
  EllipsisVertical,
  Trash2,
} from "lucide-react";
import funnel from "@workspace/assets/images/funnel.svg";
import Image from "next/image";
import { useState } from "react";

interface DataTableProps<TData extends { id: string; slug: string }, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export function DataTable<TData extends { id: string; slug: string }, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = useState<SortingState>([] as SortingState);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>(
    [] as ColumnFiltersState
  );
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [globalFilter, setGlobalFilter] = useState("");
  const [rowSelection, setRowSelection] = useState<Record<string, boolean>>({});
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      globalFilter,
      rowSelection,
    },
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  const selectedRows = table.getFilteredSelectedRowModel().rows;

  return (
    <div>
      {/* Table */}
      <div className="rounded-xl shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
        <div className="flex items-center justify-between gap-6 px-6 py-4">
          {selectedRows.length > 0 && (
            <div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <div className="flex items-center cursor-pointer">
                    <EllipsisVertical className="h-6 w-6 md:hidden" />
                    <Button
                      variant="outline"
                      className="hidden md:flex border border-input text-black text-base font-medium min-h-10 py-4"
                    >
                      <EllipsisVertical />
                      Bulk actions
                    </Button>
                  </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="start">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        variant="ghost"
                        onClick={() => {
                          const ids = selectedRows.map(
                            (row) => row.original.id
                          );
                          setSelectedIds(ids);
                        }}
                        className="min-w-full text-destructive hover:bg-destructive/20 text-base font-medium min-h-10 py-4"
                      >
                        <Trash2 />
                        Delete selected
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>
                          <div className="bg-destructive/20 text-destructive w-fit rounded-full p-3 mx-auto">
                            <Trash2 />
                          </div>
                        </DialogTitle>

                        <DialogDescription className="text-center text-black text-lg font-semibold">
                          Delete selected Users
                        </DialogDescription>
                        <DialogDescription className="text-center">
                          Are you sure you would like to do this?
                        </DialogDescription>
                      </DialogHeader>

                      <DialogClose asChild>
                        <div className="flex justify-center gap-4">
                          <Button
                            variant="outline"
                            className=" border-input text-black min-h-10 w-fit py-4"
                          >
                            Cancel
                          </Button>
                          <Button
                            variant="destructive"
                            className="min-h-10 py-4 w-fit"
                            onClick={() => {
                              console.log("delete this", selectedIds);
                            }}
                          >
                            Confirm
                          </Button>
                        </div>
                      </DialogClose>
                    </DialogContent>
                  </Dialog>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          )}
          <div className="flex w-full items-center justify-end gap-4">
            <Input
              placeholder="Search..."
              value={globalFilter ?? ""}
              onChange={(event) => setGlobalFilter(event.target.value)}
              className="max-w-sm h-11 bg-transparent border border-input focus-visible:ring-0 focus-visible:ring-offset-0"
            />
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Image
                  src={funnel}
                  alt="funnel"
                  width={24}
                  height={24}
                  className="cursor-pointer"
                />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-[300px] p-4">
                <div className="flex items-center font-semibold justify-between gap-8">
                  <h1>Filters</h1>
                  <Button
                    variant="ghost"
                    className="text-destructive text-sm w-fit p-0"
                    onClick={() => table.resetColumnFilters()}
                  >
                    Reset
                  </Button>
                </div>
                <div className="flex flex-col gap-6 mt-4">
                  <div>
                    <h1 className="font-semibold text-sm">Role</h1>
                    <Select
                      onValueChange={(value) =>
                        table.getColumn("role")?.setFilterValue(value)
                      }
                    >
                      <SelectTrigger className="w-full min-h-6 bg-transparent">
                        <SelectValue placeholder="Filter by role" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Student">Student</SelectItem>
                        <SelectItem value="Teacher">Teacher</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <h1 className="font-semibold text-sm">Status</h1>
                    <Select
                      onValueChange={(value) =>
                        table.getColumn("status")?.setFilterValue(value)
                      }
                    >
                      <SelectTrigger className="w-full min-h-6 bg-transparent">
                        <SelectValue placeholder="Filter by status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Active">Active</SelectItem>
                        <SelectItem value="Inactive">Inactive</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Columns3Icon
                  className="cursor-pointer"
                  aria-label="Three column view"
                />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {table
                  .getAllColumns()
                  .filter((column) => column.getCanHide())
                  .map((column) => {
                    return (
                      <DropdownMenuCheckboxItem
                        key={column.id}
                        className="capitalize"
                        checked={column.getIsVisible()}
                        onCheckedChange={(value) =>
                          column.toggleVisibility(!!value)
                        }
                      >
                        {column.id}
                      </DropdownMenuCheckboxItem>
                    );
                  })}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow className="bg-muted/50" key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead
                    key={header.id}
                    className="font-semibold text-base py-4"
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
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => {
                const user = row.original as unknown as {
                  id: string;
                  slug: string;
                };
                return (
                  <TableRow
                    key={row.id}
                    data-state={row.getIsSelected() && "selected"}
                  >
                    {row.getVisibleCells().map((cell) => {
                      // Check if this is the select or actions column
                      const isSelectColumn = cell.column.id === "select";
                      const isActionsColumn = cell.column.id === "actions";

                      // If it's select or actions column, render normally
                      if (isSelectColumn || isActionsColumn) {
                        return (
                          <TableCell key={cell.id}>
                            {flexRender(
                              cell.column.columnDef.cell,
                              cell.getContext()
                            )}
                          </TableCell>
                        );
                      }

                      // For all other columns, wrap in Link
                      return (
                        <TableCell key={cell.id}>
                          <Link
                            href={`/user-management/${user.slug}`}
                            className="block w-full h-full cursor-pointer"
                          >
                            {flexRender(
                              cell.column.columnDef.cell,
                              cell.getContext()
                            )}
                          </Link>
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="text-muted-foreground flex-1 text-sm">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}

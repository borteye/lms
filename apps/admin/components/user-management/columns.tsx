"use client";

import { ColumnDef } from "@workspace/ui/lib/client";
import { Button } from "@workspace/ui/components/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
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
  EllipsisVertical,
  Eye,
  MoreHorizontal,
  SquarePen,
  Trash2,
  Trash2Icon,
} from "lucide-react";
import { Checkbox } from "@workspace/ui/components/checkbox";
import { cn } from "@workspace/ui/lib/utils";
import Link from "next/link";

export type User = {
  id: string;
  slug: string;
  firstName: string;
  lastName: string;
  email: string;
  contact: string;
  role: "Student" | "Teacher";
  status: "Active" | "Inactive";
  class: string;
};

export const columns: ColumnDef<User>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
        className="bg-white"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "firstName",
    header: "First Name",
  },
  {
    accessorKey: "lastName",
    header: "Last Name",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "contact",
    header: "Contact",
  },
  {
    accessorKey: "role",
    header: "Role",
    cell: ({ row }) => {
      const user = row.original;

      return (
        <div
          className={cn(
            "px-2 py-1 w-fit rounded-sm text-xs font-medium",
            user.role === "Teacher"
              ? "bg-yellow-100 border border-yellow-300 text-yellow-600"
              : "bg-primary/20 text-primary border border-primary/50"
          )}
        >
          {user.role}
        </div>
      );
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const user = row.original;

      return (
        <div
          className={cn(
            "px-2 py-1 w-fit rounded-sm text-xs font-medium",
            user.status === "Active"
              ? "bg-green-100 border border-green-300 text-green-600"
              : "bg-red-100 border border-red-300 text-red-600"
          )}
        >
          {user.status}
        </div>
      );
    },
  },
  {
    accessorKey: "class",
    header: "Class",
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const user = row.original;
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <EllipsisVertical className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent align="end" className="font-medium">
            {/* View */}
            <DropdownMenuItem asChild>
              <Link
                href={`/user-management/${user.slug}`}
                className="flex items-center gap-2"
              >
                <Eye className="w-4 h-4" />
                View
              </Link>
            </DropdownMenuItem>

            {/* Edit */}
            <DropdownMenuItem onClick={() => console.log("Edit", user)}>
              <Link
                href={`/user-management/${user.slug}/edit`}
                className="flex items-center gap-2"
              >
                <SquarePen className="w-4 h-4" />
                Edit
              </Link>
            </DropdownMenuItem>

            {/* Delete with Dialog */}
            {/* <DropdownMenuItem asChild> */}
            <Dialog>
              <DialogTrigger asChild>
                <DropdownMenuItem
                  onSelect={(e) => e.preventDefault()}
                  className="text-destructive hover:text-destructive focus:text-destructive focus:bg-destructive/20" // ⬅ stops dropdown from closing
                >
                  <Trash2 className="w-4 h-4" color="red" />
                  Delete
                </DropdownMenuItem>
              </DialogTrigger>

              <DialogContent>
                <DialogHeader>
                  <DialogTitle>
                    <div className="bg-destructive/20 text-destructive w-fit rounded-full p-3 mx-auto">
                      <Trash2 />
                    </div>
                  </DialogTitle>
                  <DialogDescription className="text-center text-black text-lg font-semibold">
                    Delete user
                  </DialogDescription>
                  <DialogDescription className="text-center">
                    Are you sure you would like to do this?
                  </DialogDescription>
                </DialogHeader>

                <DialogClose asChild>
                  <div className="flex justify-center gap-4">
                    <Button
                      variant="outline"
                      className="border-input w-fit text-black min-h-10 py-4"
                    >
                      Cancel
                    </Button>
                    <Button
                      variant="destructive"
                      className="min-h-10 w-fit py-4"
                      onClick={() => console.log("delete this", user.id)}
                    >
                      Confirm
                    </Button>
                  </div>
                </DialogClose>
              </DialogContent>
            </Dialog>
            {/* </DropdownMenuItem> */}
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

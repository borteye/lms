import { columns, User } from "@/components/user-management/columns";
import { DataTable } from "@/components/user-management/data-table";
import BreadCrumb from "@workspace/common/components/bread-crumb";
import { Button } from "@workspace/ui/components/button";
import { Plus } from "lucide-react";
import Link from "next/link";

export default function UserManagement() {
  const data: User[] = [
    {
      id: "1",
      slug: "stephanie-amankwah-baffo",
      firstName: "Stephanie",
      lastName: "Amankwah Baffo",
      email: "casoramgt@gmail.com",
      contact: "0591559061",
      role: "Teacher",
      status: "Active",
      class: "Grade 5",
    },
    {
      id: "2",
      slug: "dice-stephens",
      firstName: "Dice",
      lastName: "Stephens",
      email: "jetayor@gmail.com",
      contact: "+233550211409",
      role: "Student",
      status: "Inactive",
      class: "Grade 3",
    },
    {
      id: "3",
      slug: "burberry-winnifred",
      firstName: "Burberry",
      lastName: "Winnifred",
      email: "sepenuwinnifred@gmail.com",
      contact: "0261108637",
      role: "Teacher",
      status: "Active",
      class: "Grade 4",
    },
  ];
  return (
    <div className="flex flex-col gap-12">
      <div className="flex flex-col gap-4">
        <BreadCrumb
          prevHref="/user-management"
          prevLabel="Users"
          title="List"
        />
        <div className="flex md:items-end justify-between md:flex-row flex-col gap-4">
          <h1 className="text-3xl font-bold">Users Management</h1>
          <Link href="/user-management/create">
            <Button size="icon" className="w-fit">
              <Plus />
              Add New User
            </Button>
          </Link>
        </div>
      </div>
      <DataTable columns={columns} data={data} />
    </div>
  );
}

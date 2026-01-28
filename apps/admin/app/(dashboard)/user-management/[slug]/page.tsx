import BreadCrumb from "@workspace/common/components/bread-crumb";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@workspace/ui/components/accordion";
import { Button } from "@workspace/ui/components/button";
import Link from "next/link";

export default function ViewUser() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col md:flex-row  md:items-end justify-between gap-4">
        <div className="flex flex-col gap-4">
          <BreadCrumb
            prevHref="/user-management"
            prevLabel="Users"
            title="View"
          />
          <h1 className="text-3xl font-bold">User Details: Gabriel Borteye</h1>
        </div>
        <Link href="/user-management/1/edit">
          <Button className="w-fit">Edit</Button>
        </Link>
      </div>
      <Accordion type="multiple" defaultValue={["item-1", "item-2"]}>
        <AccordionItem value="item-1">
          <AccordionTrigger>Personal Information</AccordionTrigger>
          <AccordionContent className="border-t-2 grid grid-cols-1 md:grid-cols-2 gap-y-6 p-4">
            <div>
              <h2 className="text-base font-semibold">First Name</h2>
              <p>Gabriel</p>
            </div>
            <div>
              <h2 className="text-base font-semibold">Last Name</h2>
              <p>Borteye</p>
            </div>
            <div>
              <h2 className="text-base font-semibold">Email Adress</h2>
              <p>gabrielborteye12199@gmail.com</p>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Account Information</AccordionTrigger>
          <AccordionContent className="border-t-2 grid grid-cols-1 md:grid-cols-2 gap-y-6 p-4">
            <div>
              <h2 className="text-base font-semibold">Role</h2>
              <p className="bg-primary/20 text-primary border border-primary/50 w-fit px-2 py-1 rounded-md">
                Student
              </p>
            </div>
            <div>
              <h2 className="text-base font-semibold">Onboarded</h2>
              <p>Not Onboarded</p>
            </div>
            <div>
              <h2 className="text-base font-semibold">Created At</h2>
              <p>Aug 6, 2025 16:31:30</p>
            </div>
            <div>
              <h2 className="text-base font-semibold">Last Updated</h2>
              <p>Aug 6, 2025 16:31:30</p>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

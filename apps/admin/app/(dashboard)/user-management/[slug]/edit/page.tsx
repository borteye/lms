"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@workspace/ui/components/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@workspace/ui/components/select";
import { Input } from "@workspace/ui/components/input";
import LoaderButton from "@workspace/ui/components/loader-button";
import BreadCrumb from "@workspace/common/components/bread-crumb";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@workspace/ui/components/accordion";
import { useForm, zodResolver } from "@workspace/ui/lib/client";
import { createUserSchema } from "@/lib/create-user-schema";
import { z } from "@workspace/ui/lib/server";
import { Button } from "@workspace/ui/components/button";
import Link from "next/link";

export default function EditUser() {
  const defaultValues = {
    firstName: "",
    lastName: "",
    email: "",
    role: "",
    class: "",
  };

  const form = useForm<z.infer<typeof createUserSchema>>({
    defaultValues,
    resolver: zodResolver(createUserSchema),
  });

  const onSubmit = () => {
    console.log(form.getValues());
  };

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col md:flex-row  md:items-end justify-between gap-4">
        <div className="flex flex-col gap-4">
          <BreadCrumb
            prevHref="/user-management"
            prevLabel="Users"
            title="Create"
          />
          <h1 className="text-3xl font-bold">Edit User: Gabriel Borteye</h1>
        </div>
        <div className="flex gap-4">
          <Link href="/user-management/1">
            <Button className="w-fit" variant="outline">
              View
            </Button>
          </Link>

          <Button className="bg-destructive w-fit">Delete</Button>
        </div>
      </div>

      <div className="mt-4 flex flex-col gap-8">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <Accordion type="multiple" defaultValue={["item-1", "item-2"]}>
              <AccordionItem value="item-1">
                <AccordionTrigger>Personal Information</AccordionTrigger>
                <AccordionContent className="border-t-2 flex flex-col gap-y-6 p-4">
                  <div className="flex flex-col md:flex-row gap-4  justify-between">
                    <div className="flex-1 ">
                      <FormField
                        control={form.control}
                        name="firstName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>
                              First name{" "}
                              <span className="text-destructive">*</span>
                            </FormLabel>
                            <FormControl>
                              <Input
                                placeholder="John"
                                {...field}
                                className="h-12 rounded-xl"
                                variant={
                                  form.formState.errors.firstName
                                    ? "outline_destructive"
                                    : "outline"
                                }
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <div className="flex-1 ">
                      <FormField
                        control={form.control}
                        name="lastName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>
                              Last name{" "}
                              <span className="text-destructive">*</span>
                            </FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Doe"
                                {...field}
                                className="h-12 rounded-xl"
                                variant={
                                  form.formState.errors.lastName
                                    ? "outline_destructive"
                                    : "outline"
                                }
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          Email <span className="text-destructive">*</span>
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="e.g johndoe@gmail.com"
                            {...field}
                            className="h-12 rounded-xl"
                            variant={
                              form.formState.errors.email
                                ? "outline_destructive"
                                : "outline"
                            }
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Account Settings</AccordionTrigger>
                <AccordionContent className="border-t-2 pt-4">
                  <div className="flex flex-col gap-4">
                    <FormField
                      control={form.control}
                      name="role"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>
                            Role <span className="text-destructive">*</span>
                          </FormLabel>
                          <FormControl>
                            <Select
                              value={field.value}
                              onValueChange={field.onChange}
                            >
                              <SelectTrigger
                                className="w-full bg-white min-h-12 rounded-xl"
                                error={Boolean(form.formState.errors.role)}
                              >
                                <SelectValue placeholder="Select Role" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="teacher">Teacher</SelectItem>
                                <SelectItem value="student">Student</SelectItem>
                              </SelectContent>
                            </Select>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="class"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>
                            Assign to class{" "}
                            <span className="text-destructive">*</span>
                          </FormLabel>
                          <FormControl>
                            <Select
                              value={field.value}
                              onValueChange={field.onChange}
                            >
                              <SelectTrigger
                                className="w-full bg-white min-h-12 rounded-xl"
                                error={Boolean(form.formState.errors.class)}
                              >
                                <SelectValue placeholder="Select Class" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="teacher">Teacher</SelectItem>
                                <SelectItem value="student">Student</SelectItem>
                              </SelectContent>
                            </Select>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <div className="flex flex-col md:flex-row gap-4 justify-end mt-8">
              <Link href="/dashboard">
                <Button variant="outline">Cancel</Button>
              </Link>

              <LoaderButton loading>Save changes</LoaderButton>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}

"use client";

import { Input } from "@workspace/ui/components/input";
import Common from "./components/common";
import { Eye, EyeClosed } from "lucide-react";
import { Button } from "@workspace/ui/components/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@workspace/ui/components/form";
import { useForm } from "@workspace/ui/lib/index";
import { zodResolver } from "@workspace/ui/lib/index";
import { useState } from "react";
import { signUpSchema } from "./lib/schema";
import Link from "next/link";

export default function SignUp() {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const defaultValues = {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    confirm_password: "",
  };
  const form = useForm<typeof defaultValues>({
    defaultValues,
    resolver: zodResolver(signUpSchema),
  });

  const onSubmit = (data: typeof defaultValues) => {
    console.log(data);
  };
  return (
    <Common>
      <>
        <div>
          <h1 className="text-2xl font-bold">Create an Account</h1>
          <p className="mt-2">
            Welcome. To create your account use the one time credentials we sent
            to your email. Then reset password to your preference.
          </p>
          <p className="font-light mt-4">
            Already have an account?{" "}
            <Link className="font-bold text-primary" href="/sign-in">
              Login
            </Link>
          </p>
        </div>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-y-6 mt-6"
          >
            <div className="flex flex-col md:flex-row gap-x-8 justify-between">
              <div className="flex-1 ">
                <FormField
                  control={form.control}
                  name="first_name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>First name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Ohemaa"
                          {...field}
                          variant={
                            form.formState.errors.first_name
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
              <div className="flex-1">
                <FormField
                  control={form.control}
                  name="last_name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Last name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Addo"
                          {...field}
                          variant={
                            form.formState.errors.last_name
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
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="e.g oheemantia@gmail.com"
                      {...field}
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
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input
                        placeholder="your password"
                        type={showPassword ? "text" : "password"}
                        variant={
                          form.formState.errors.password
                            ? "outline_destructive"
                            : "outline"
                        }
                        {...field}
                      />
                      <div
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute top-4 right-4 cursor-pointer"
                      >
                        {showPassword ? <EyeClosed /> : <Eye />}
                      </div>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="confirm_password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirm Password</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input
                        placeholder="your password"
                        type={showPassword ? "text" : "password"}
                        variant={
                          form.formState.errors.confirm_password
                            ? "outline_destructive"
                            : "outline"
                        }
                        {...field}
                      />
                      <div
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute top-4 right-4 cursor-pointer"
                      >
                        {showPassword ? <EyeClosed /> : <Eye />}
                      </div>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button size="lg">Create Account</Button>
          </form>
        </Form>
      </>
    </Common>
  );
}

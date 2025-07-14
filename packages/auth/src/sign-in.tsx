"use client";

import { Input } from "@workspace/ui/components/input";
import Common from "./components/common";
import { Eye, EyeClosed } from "lucide-react";
import { Button } from "@workspace/ui/components/button";
import Link from "next/link";
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
import { signInSchema } from "./lib/schema";

export default function SignIn() {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const defaultValues = {
    email: "",
    password: "",
  };
  const form = useForm<typeof defaultValues>({
    defaultValues,
    resolver: zodResolver(signInSchema),
  });

  const onSubmit = (data: typeof defaultValues) => {
    console.log(data);
  };
  return (
    <Common>
      <>
        <div>
          <h1 className="text-2xl font-bold">Welcome Back</h1>
          <p className="mt-2 ">Login to continue your learning.</p>
          <p className="font-light mt-4">
            Don't have an account?{" "}
            <Link className="font-bold text-primary" href="/sign-up">
              Create an account
            </Link>
          </p>
        </div>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-y-6 mt-6"
          >
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
                      variant={form.formState.errors.email && "destructive"}
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
                          form.formState.errors.password && "destructive"
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
            <Link
              href="/forgot-password"
              className="text-primary font-medium my-4"
            >
              Forgot Password
            </Link>
            <Button size="lg">Log In</Button>
          </form>
        </Form>
      </>
    </Common>
  );
}

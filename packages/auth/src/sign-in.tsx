"use client";

import { Input } from "@workspace/ui/components/input";
import Common from "./components/common";
import { Eye, EyeClosed } from "lucide-react";
import LoaderButton from "@workspace/ui/components/loader-button";
import Link from "next/link";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@workspace/ui/components/form";
import { useState } from "react";
import useSignIn from "./hooks/use-sign-in";

export default function SignIn({ admin }: { admin?: boolean }) {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const { form, onSubmit } = useSignIn();

  return (
    <Common>
      <>
        <div>
          <h1 className="text-2xl font-bold">Welcome Back</h1>
          {admin ? (
            <p className="mt-2 ">Login to continue managing your school.</p>
          ) : (
            <p className="mt-2 ">Login to continue your learning.</p>
          )}
          {admin && (
            <p className="font-light mt-4">
              Don't have an account?{" "}
              <Link className="font-bold text-primary" href="/sign-up">
                Create an account
              </Link>
            </p>
          )}
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
            <LoaderButton loading={form.formState.isSubmitting} size="lg">
              {form.formState.isSubmitting ? "Logging in" : "Log In"}
            </LoaderButton>
          </form>
        </Form>
      </>
    </Common>
  );
}

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
import { useForm, zodResolver } from "@workspace/ui/lib/client";
import { useState } from "react";
import { resetPasswordSchema } from "./lib/schema";



export default function ResetPassword() {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const defaultValues = {
    password: "",
    passwordConfirmation: "",
  };
  const form = useForm<typeof defaultValues>({
    defaultValues,
    resolver: zodResolver(resetPasswordSchema),
  });

  const onSubmit = (data: typeof defaultValues) => {
    console.log(data);
  };
  return (
    <Common>
      <>
        <div>
          <h1 className="text-2xl font-bold">Reset Your Password</h1>
          <p className="mt-2 text-[#757575]">
            Reset your password to yor preference. Kindly follow the password
            requirement to set a new one.
          </p>
        </div>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-y-6 mt-6"
          >
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
              name="passwordConfirmation"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirm Password</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input
                        placeholder="your password"
                        type={showPassword ? "text" : "password"}
                        variant={
                          form.formState.errors.passwordConfirmation
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
            <Button size="lg">Reset Password</Button>
          </form>
        </Form>
      </>
    </Common>
  );
}

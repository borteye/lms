"use client";

import { Input } from "@workspace/ui/components/input";
import Common from "./components/common";
import { Button } from "@workspace/ui/components/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@workspace/ui/components/form";
import { useForm , zodResolver} from "@workspace/ui/lib/client";
import { forgotPasswordSchema } from "./lib/schema";
export default function ForgotPassword() {
  const defaultValues = {
    email: "",
  };
  const form = useForm<typeof defaultValues>({
    defaultValues,
    resolver: zodResolver(forgotPasswordSchema),
  });

  const onSubmit = (data: typeof defaultValues) => {
    console.log(data);
  };
  return (
    <Common>
      <>
        <div>
          <h1 className="text-2xl font-bold">Forgot Password?</h1>
          <p className="mt-2 text-[#757575]">
            Enter your email to reset password.
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
            <Button size="lg"> Send Reset Link</Button>
          </form>
        </Form>
      </>
    </Common>
  );
}

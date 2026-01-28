"use client";

import { toast } from "@workspace/ui/lib/server";
import { useForm, zodResolver } from "@workspace/ui/lib/client";
import { signInSchema } from "../lib/schema";
import { signInAction } from "../action/auth";

export default function useSignIn() {
  const defaultValues = {
    email: "",
    password: "",
  };
  const form = useForm<typeof defaultValues>({
    defaultValues,
    resolver: zodResolver(signInSchema),
  });

  const onSubmit = async (data: typeof defaultValues) => {
    try {
      const [response, error] = await signInAction(data);

      if (error) {
        console.log("error", error);
        const errorMessage =
          error.errors?.[0]?.errorMessage ||
          error.message ||
          "Sign in failed. Please try again.";
        toast.error(errorMessage);
      } else if (response) {
        form.reset();
        toast.success(response.message);
        window.location.href = "/dashboard";
      }
    } catch (error) {
      toast.error("An unexpected error occurred. Please try again later.");
    }
  };

  return { form, onSubmit };
}

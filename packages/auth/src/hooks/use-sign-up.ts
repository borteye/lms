"use client";

import { signUpAction } from "../action/auth";
import { toast } from "@workspace/ui/lib/server";
import { useForm, zodResolver } from "@workspace/ui/lib/client";
import { signUpSchema } from "../lib/schema";
import { useRouter } from "next/navigation";

export default function useSignUp() {
  const router = useRouter();
  const defaultValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    passwordConfirmation: "",
  };
  const form = useForm<typeof defaultValues>({
    defaultValues,
    resolver: zodResolver(signUpSchema),
  });

  const onSubmit = async (values: typeof defaultValues) => {
    const data = {
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      password: values.password,
      passwordConfirmation: values.passwordConfirmation,
      role: "admin",
    };
    try {
      const [response, error] = await signUpAction(data);

      if (error) {
        const errorMessage =
          error.errors?.[0]?.errorMessage ||
          error.message ||
          "Sign up failed. Please try again.";
        toast.error(errorMessage);
      } else if (response) {
        form.reset();
        router.push("/onboarding");
        toast.success(response.message);
      }
    } catch (error) {
      toast.error("An unexpected error occurred. Please try again later.");
    }
  };

  return { form, onSubmit };
}

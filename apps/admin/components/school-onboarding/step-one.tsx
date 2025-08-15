"use client";

import { Button } from "@workspace/ui/components/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@workspace/ui/components/form";
import { Input } from "@workspace/ui/components/input";
import { UseFormReturn } from "@workspace/ui/lib/client";
import { z } from "@workspace/ui/lib/server";
import { PhoneInput } from "@workspace/common/lib/client";
import { schoolSchema } from "@/lib/onboarding-schema";
import { FormEvent } from "react";

export default function BasicInformation({
  form,
  onNext,
}: {
  form: UseFormReturn<z.infer<typeof schoolSchema>>;
  onNext: () => void;
}) {
  const { formState, trigger } = form;

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const isValid = await trigger([
      "schoolName",
      "schoolAddress",
      "schoolEmail",
      "schoolPhoneNumber",
    ]);
    if (!isValid) return;
    
    onNext();
  };
  return (
    <Form {...form}>
      <form onSubmit={(e) => onSubmit(e)} className="flex flex-col gap-y-6">
        <h1 className="text-2xl font-bold">Basic School Information</h1>
        <FormField
          control={form.control}
          name="schoolName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name of your School <span className="text-red-500 text-lg">*</span></FormLabel>
              <FormControl>
                <Input
                  placeholder="e.g Bethel Memorial"
                  {...field}
                  variant={formState.errors.schoolName && "destructive"}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="schoolAddress"
          render={({ field }) => (
            <FormItem>
              <FormLabel>School Address <span className="text-red-500 text-lg">*</span></FormLabel>
              <FormControl>
                <Input
                  placeholder="e.g Westland, East Legon"
                  {...field}
                  variant={formState.errors.schoolAddress && "destructive"}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="schoolPhoneNumber"
          render={({ field, fieldState }) => (
            <FormItem>
              <FormLabel>School Phone Number <span className="text-red-500 text-lg">*</span></FormLabel>
              <FormControl>
                <PhoneInput
                  country={"gh"}
                  value={field.value?.replace("+", "") || ""}
                  placeholder="233 567 876 987"
                  onChange={(value) => {
                    form.setValue("schoolPhoneNumber", `+${value}`, {
                      shouldValidate: true,
                      shouldTouch: true,
                    });
                  }}
                  onBlur={field.onBlur}
                  inputProps={{
                    name: "mobileNumber",
                    required: true,
                  }}
                  inputStyle={{
                    width: "100%",
                    height: "56px",
                    backgroundColor: "#E5E5E5",
                    borderRadius: "10px",
                  }}
                  containerClass={`${
                    fieldState.error &&
                    "border-2 border-destructive/50 bg-input focus-visible:ring-destructive rounded-[5px_10px_10px_5px]"
                  }`}
                  enableSearch
                  disableSearchIcon
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="schoolEmail"
          render={({ field }) => (
            <FormItem>
              <FormLabel>School Email Address <span className="text-red-500 text-lg">*</span></FormLabel>
              <FormControl>
                <Input
                  placeholder="e.g 2Tl9W@example.com"
                  {...field}
                  variant={formState.errors.schoolEmail && "destructive"}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="text-right">
          <Button type="submit">Next</Button>
        </div>
      </form>
    </Form>
  );
}

"use client";

import { schoolSchema } from "@/lib/onboarding-schema";
import { UseFormReturn } from "@workspace/ui/lib/client";
import { z } from "@workspace/ui/lib/server";
import { Button } from "@workspace/ui/components/button";
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
import { FormEvent, useMemo } from "react";
import ImageCard from "./image-card";
import { countryList, moment } from "@workspace/common/lib/client";

export default function ClassificationAndLocation({
  form,
  onNext,
  onBack,
}: {
  form: UseFormReturn<z.infer<typeof schoolSchema>>;
  onNext: () => void;
  onBack: () => void;
}) {
  const options = useMemo(() => countryList().getData(), []);
  const timezones = moment.tz.names();

  const { formState, trigger } = form;

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const isValid = await trigger([
      "schoolLogo",
      "schoolType",
      "country",
      "timezone",
    ]);
    if (!isValid) return;

    onNext();
  };

  return (
    <Form {...form}>
      <form onSubmit={(e) => onSubmit(e)} className="flex flex-col gap-y-6">
        <h1 className="text-2xl font-bold">School Classification & Location</h1>
        <FormField
          control={form.control}
          name="schoolLogo"
          render={({ field }) => (
            <FormItem>
              <FormLabel>School's Logo</FormLabel>
              <FormControl>
                <ImageCard
                  placeholder="Logo"
                  description="School Logo"
                  field={field}
                  className={
                    formState.errors.schoolLogo &&
                    "border-2 border-destructive/50 focus-visible:ring-destructive"
                  }
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="schoolType"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                School Type <span className="text-red-500 text-lg">*</span>
              </FormLabel>
              <FormControl>
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger
                    className="w-full"
                    error={Boolean(formState.errors.schoolType)}
                  >
                    <SelectValue placeholder="Select Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="junior high">JUNIOR HIGH</SelectItem>
                    <SelectItem value="senior high">SENIOR HIGH</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="country"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                School Country <span className="text-red-500 text-lg">*</span>
              </FormLabel>
              <FormControl>
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger
                    className="w-full"
                    error={Boolean(formState.errors.country)}
                  >
                    <SelectValue placeholder="Select Country" />
                  </SelectTrigger>
                  <SelectContent>
                    {options.map((country) => (
                      <SelectItem key={country.label} value={country.label}>
                        {country.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="timezone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                School Timezone <span className="text-red-500 text-lg">*</span>
              </FormLabel>
              <FormControl>
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger
                    className="w-full"
                    error={Boolean(formState.errors.timezone)}
                  >
                    <SelectValue placeholder="Select Timezone" />
                  </SelectTrigger>
                  <SelectContent>
                    {timezones.map((tz, i) => (
                      <SelectItem key={i} value={tz}>
                        {tz}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex justify-end gap-5">
          <Button variant="outline" onClick={onBack}>
            Back
          </Button>
          <Button type="submit">Next</Button>
        </div>
      </form>
    </Form>
  );
}

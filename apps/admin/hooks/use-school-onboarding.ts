"use client";

import { schoolOnboardingAction } from "@/actions/school";
import { schoolSchema } from "@/lib/onboarding-schema";
import { toast, z } from "@workspace/ui/lib/server";
import { useState } from "react";

export default function useSchoolOnboarding() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const onSubmit = async (values: z.infer<typeof schoolSchema>) => {
    setIsLoading(true);
    try {
      let formData = new FormData();
      formData.append("schoolName", values.schoolName as string);
      formData.append("schoolAddress", values.schoolAddress as string);
      formData.append("schoolEmail", values.schoolEmail as string);
      formData.append("schoolPhoneNumber", values.schoolPhoneNumber as string);
      formData.append("schoolType", values.schoolType as string);
      formData.append("country", values.country as string);
      formData.append("timezone", values.timezone as string);
      formData.append("academicYear", values.academicYear as string);
      formData.append("academicStartDate", values.academicStartDate as string);
      formData.append("academicEndDate", values.academicEndDate as string);
      formData.append(
        "numberOfTermsOrSemesters",
        values.numberOfTermsOrSemesters as string
      );
      formData.append(
        "currentTermOrSemester",
        values.currentTermOrSemester as string
      );
      formData.append("gradingSystem", JSON.stringify(values.gradingSystem));
      formData.append("schoolLogo", values.schoolLogo as Blob);

      const [response, error] = await schoolOnboardingAction(formData);
      setIsLoading(false);

      if (error) {
        const errorMessage =
          error.errors?.[0]?.errorMessage ||
          error.message ||
          "Onboarding failed. Please try again.";
        toast.error(errorMessage);
      } else if (response) {
        toast.success(response?.message);
        window.location.href = "/dashboard"
      }
    } catch (error) {
      setIsLoading(false);
      toast.error("An unexpected error occurred. Please try again later.");
    }
  };

  return { onSubmit, isLoading };
}

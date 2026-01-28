"use client";

import { useForm, zodResolver } from "@workspace/ui/lib/client";
import BasicInformation from "./step-one";
import OnboardingCommon from "@workspace/common/components/onboarding/common";
import { useQueryState, parseAsStringEnum } from "@workspace/common/lib/client";
import { Progress } from "@workspace/ui/components/progress";
import { z } from "@workspace/ui/lib/server";
import { schoolSchema } from "@/lib/onboarding-schema";
import ClassificationAndLocation from "./step-two";
import AcademicSetup from "./step-three";
import Success from "./success";

const steps = ["1", "2", "3", "4"];

export default function OnboardingMain() {
  const [activeTab, setActiveTab] = useQueryState(
    "step",
    parseAsStringEnum(steps).withDefault(steps[0] as string)
  );

  const progress = (Number(activeTab) / steps.length) * 100;

  const defaultValues: z.infer<typeof schoolSchema> = {
    schoolName: "",
    schoolAddress: "",
    schoolEmail: "",
    schoolPhoneNumber: "",
    schoolLogo: undefined,
    schoolType: "junior high",
    country: "",
    timezone: "",
    academicYear: "",
    academicStartDate: "",
    academicEndDate: "",
    numberOfTermsOrSemesters: "",
    currentTermOrSemester: "",
    gradingSystem: [],
  };

  const handleNext = () => {
    const currentIndex = steps.indexOf(activeTab);
    const nextTab = steps[currentIndex + 1];

    if (currentIndex > -1 && nextTab) {
      setActiveTab(nextTab);
    }
  };

  const handleBack = () => {
    const currentIndex = steps.indexOf(activeTab);
    const previousTab = steps[currentIndex - 1];

    if (currentIndex > 0 && previousTab) {
      setActiveTab(previousTab);
    }
  };

  const form = useForm<z.infer<typeof schoolSchema>>({
    defaultValues,
    resolver: zodResolver(schoolSchema),
    mode: "onChange",
  });

  return (
    <OnboardingCommon>
      <div className="flex flex-col gap-4">
        {Number(activeTab) <= Number(steps[2]) ? (
          <p className="text-center">
            {activeTab} out of {steps.length} completed
          </p>
        ) : (
          <p className="text-center">Completed Successfully</p>
        )}

        <Progress value={progress} className="w-full" />
      </div>
      {activeTab === steps[0] && (
        <BasicInformation form={form} onNext={handleNext} />
      )}
      {activeTab === steps[1] && (
        <ClassificationAndLocation
          form={form}
          onNext={handleNext}
          onBack={handleBack}
        />
      )}
      {activeTab === steps[2] && (
        <AcademicSetup form={form} onNext={handleNext} onBack={handleBack} />
      )}
      {activeTab === steps[3] && <Success />}
    </OnboardingCommon>
  );
}

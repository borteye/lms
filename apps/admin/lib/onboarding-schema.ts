import { parsePhoneNumberFromString } from "@workspace/common/lib/client";
import { z } from "@workspace/ui/lib/server";

const validatePhoneNumber = (phoneNumber: string) => {
  const parsedNumber = parsePhoneNumberFromString(phoneNumber || "");
  return parsedNumber && parsedNumber.isValid();
};

const gradeSchema = z.object({
  min: z
    .string({ message: "Min is required" })
    .min(1, { message: "Min is required" }),
  max: z
    .string({ message: "Max is required" })
    .min(1, { message: "Max is required" }),
  grade: z
    .string({ message: "Grade is required" })
    .min(1, { message: "Grade is required" }),
  remark: z
    .string({ message: "Remark is required" })
    .min(1, { message: "Remark is required" }),
});

export const formOneSchema = z.object({
  schoolName: z
    .string()
    .min(2, { message: "School name must be at least 2 characters" }),
  schoolAddress: z
    .string()
    .min(2, { message: "Address must be at least 2 characters" }),
  schoolEmail: z.string({ message: "Email is required" }).email(),
  schoolPhoneNumber: z
    .string()
    .nonempty("Phone number is required")
    .refine((value) => validatePhoneNumber(value), {
      message: "Invalid phone number format",
    }),
});

export const formTwoSchema = z.object({
  schoolLogo: z.instanceof(File).optional(),
  schoolType: z.enum(["junior high", "senior high"]),
  country: z.string().min(1, { message: "Country is required" }),
  timezone: z.string().min(1, { message: "Timezone is required" }),
});

export const formThreeSchema = z.object({
  academicYear: z
    .string()
    .min(1, { message: "Academic year is required" })
    .regex(/^\d{4}\/\d{4}$/, {
      message: "Academic year must be in the format YYYY/YYYY",
    }),
  academicStartDate: z.string().min(1, { message: "Start date is required" }),
  academicEndDate: z.string().min(1, { message: "End date is required" }),
  numberOfTermsOrSemesters: z
    .string()
    .min(1, { message: "Number of terms/semesters must be at least 1" }),
  currentTermOrSemester: z
    .string()
    .min(1, { message: "Current term is required" }),
  gradingSystem: z.array(gradeSchema),
});

export const schoolSchema = z
  .object({})
  .merge(formOneSchema.partial())
  .merge(formTwoSchema.partial())
  .merge(formThreeSchema.partial());

import { schoolSchema } from "@/lib/onboarding-schema";
import { useFieldArray, UseFormReturn } from "@workspace/ui/lib/client";
import { z } from "@workspace/ui/lib/server";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@workspace/ui/components/form";
import { FormEvent, useState } from "react";
import { Button } from "@workspace/ui/components/button";
import { Input } from "@workspace/ui/components/input";
import { ChevronDownIcon } from "lucide-react";
import { Calendar } from "@workspace/ui/components/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@workspace/ui/components/popover";
import { format } from "@workspace/common/lib/server";
import useSchoolOnboarding from "@/hooks/use-school-onboarding";
import LoaderButton from "@workspace/ui/components/loader-button";

export default function AcademicSetup({
  form,
  onNext,
  onBack,
}: {
  form: UseFormReturn<z.infer<typeof schoolSchema>>;
  onNext: () => void;
  onBack: () => void;
}) {
  const [openStartDate, setOpenStartDate] = useState(false);
  const [openEndDate, setOpenEndDate] = useState(false);
  // const [date, setDate] = useState<Date | undefined>(undefined);

  const { formState, trigger, control, getValues } = form;

  const academicStartDate = form.watch("academicStartDate");
  const academicEndDate = form.watch("academicEndDate");

  const { fields, append, remove } = useFieldArray({
    control,
    name: "gradingSystem",
  });

  const { onSubmit, isLoading } = useSchoolOnboarding();
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const isValid = await trigger([
      "academicYear",
      "academicStartDate",
      "academicEndDate",
      "numberOfTermsOrSemesters",
      "currentTermOrSemester",
      "gradingSystem",
    ]);

    if (!isValid) return;

    console.log("Form values:", getValues());
    await onSubmit(getValues());
    // onNext();
  };

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit} className="flex flex-col gap-y-6">
        <h1 className="text-2xl font-bold">
          Academic Settings & Grading System
        </h1>

        <FormField
          control={form.control}
          name="academicYear"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Academic Year
                <span className="text-red-500 text-lg">*</span>
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="e.g 2025/2026"
                  {...field}
                  variant={formState.errors.academicYear && "destructive"}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="academicStartDate"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Academic Start Date
                <span className="text-red-500 text-lg">*</span>
              </FormLabel>
              <FormControl>
                <Popover open={openStartDate} onOpenChange={setOpenStartDate}>
                  <PopoverTrigger
                    asChild
                    error={Boolean(formState.errors.academicStartDate)}
                  >
                    <Button
                      variant="ghost"
                      id="date"
                      className="md:w-full justify-between"
                    >
                      {academicStartDate
                        ? academicStartDate
                        : "Select start date"}
                      <ChevronDownIcon />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent
                    className="w-auto overflow-hidden p-0"
                    align="start"
                  >
                    <Calendar
                      mode="single"
                      selected={
                        academicStartDate
                          ? new Date(academicStartDate)
                          : undefined
                      }
                      captionLayout="dropdown"
                      onSelect={(date) => {
                        if (date) {
                          field.onChange(format(date, "yyyy-MM-dd"));
                          setOpenStartDate(false);
                        }
                      }}
                    />
                  </PopoverContent>
                </Popover>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="academicEndDate"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Academic End Date
                <span className="text-red-500 text-lg">*</span>
              </FormLabel>
              <FormControl>
                <Popover open={openEndDate} onOpenChange={setOpenEndDate}>
                  <PopoverTrigger
                    asChild
                    error={Boolean(formState.errors.academicEndDate)}
                  >
                    <Button
                      variant="ghost"
                      id="date"
                      className="md:w-full justify-between"
                    >
                      {academicEndDate ? academicEndDate : "Select end date"}
                      <ChevronDownIcon />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent
                    className="w-auto overflow-hidden p-0"
                    align="start"
                  >
                    <Calendar
                      mode="single"
                      selected={
                        academicEndDate ? new Date(academicEndDate) : undefined
                      }
                      captionLayout="dropdown"
                      onSelect={(date) => {
                        if (date) {
                          field.onChange(format(date, "yyyy-MM-dd"));
                          setOpenEndDate(false);
                        }
                      }}
                    />
                  </PopoverContent>
                </Popover>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="numberOfTermsOrSemesters"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Number of Terms/Semesters
                <span className="text-red-500 text-lg">*</span>
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="e.g 2"
                  type="number"
                  min={1}
                  {...field}
                  variant={
                    formState.errors.numberOfTermsOrSemesters && "destructive"
                  }
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="currentTermOrSemester"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Current Term/Semester
                <span className="text-red-500 text-lg">*</span>
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="e.g First Term or First Semester"
                  {...field}
                  variant={
                    formState.errors.currentTermOrSemester && "destructive"
                  }
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="space-y-4">
          <FormLabel className="text-lg">Grades</FormLabel>

          {formState.errors.gradingSystem && (
            <div className="text-red-500 text-sm">
              {formState.errors.gradingSystem.message}
            </div>
          )}

          {fields.map((field, index) => (
            <div
              key={field.id}
              className="flex flex-col md:grid md:grid-cols-4 gap-4 border p-4 rounded-md bg-gray-50"
            >
              <FormField
                control={form.control}
                name={`gradingSystem.${index}.min`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-base">Min Score</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="0"
                        min={0}
                        max={100}
                        {...field}
                        variant={
                          formState.errors.gradingSystem?.[index]?.min &&
                          "destructive"
                        }
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name={`gradingSystem.${index}.max`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-base">Max Score</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="100"
                        min={0}
                        max={100}
                        {...field}
                        variant={
                          formState.errors.gradingSystem?.[index]?.max &&
                          "destructive"
                        }
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name={`gradingSystem.${index}.grade`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-base">Grade</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="A+"
                        className="capitalize"
                        {...field}
                        variant={
                          formState.errors.gradingSystem?.[index]?.grade &&
                          "destructive"
                        }
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name={`gradingSystem.${index}.remark`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-base">Remark</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        className="capitalize"
                        placeholder="Excellent"
                        {...field}
                        variant={
                          formState.errors.gradingSystem?.[index]?.remark &&
                          "destructive"
                        }
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="col-span-4 text-right">
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={() => remove(index)}
                  className="text-red-500 hover:text-red-700"
                >
                  Remove
                </Button>
              </div>
            </div>
          ))}
          <div className="flex justify-end">
            <Button
              type="button"
              onClick={() =>
                append({ min: "", max: "", grade: "", remark: "" })
              }
              size="sm"
            >
              Add Grade
            </Button>
          </div>
        </div>

        {fields.length === 0 && (
          <div className="text-center py-8 text-gray-500">
            No grades added yet. Click "Add Grade" to get started.
          </div>
        )}

        <div className="flex justify-end gap-3">
          <Button type="button" variant="outline" onClick={onBack}>
            Back
          </Button>
          <LoaderButton loading={isLoading} size="lg">
            {isLoading ? "Onboarding..." : "Submit"}
          </LoaderButton>
        </div>
      </form>
    </Form>
  );
}

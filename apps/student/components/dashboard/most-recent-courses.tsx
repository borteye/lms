"use client";

import { cn } from "@workspace/ui/lib/utils";
import { useSidebar } from "@workspace/ui/components/sidebar";
import CourseCard from "@workspace/common/components/course-card";

export default function MostRecentCourses() {
  const { open } = useSidebar();

  return (
    <div>
      <h1 className="text-lg font-semibold mb-6">Most Recent Courses</h1>
      <div
        className={cn(
          "grid justify-center items-center gap-8 grid-cols-1 sm:grid-cols-2",
          open ? "lg:grid-cols-3" : "xl:grid-cols-4"
        )}
      >
        <CourseCard role="admin" />
      </div>
    </div>
  );
}

"use client";

import { useSidebar } from "@workspace/ui/components/sidebar";
import AssignmentCard from "./assignment-card";
import { cn } from "@workspace/ui/lib/utils";

export default function AssignmentSection() {
  const { open } = useSidebar();
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2  gap-6 mt-8",
        !open && "lg:grid-cols-3"
      )}
    >
      <AssignmentCard />
      <AssignmentCard />
      <AssignmentCard />
    </div>
  );
}

"use client";

import { useSidebar } from "@workspace/ui/components/sidebar";
import { cn } from "@workspace/ui/lib/utils";

export default function CoursesCommon({
  children,
}: {
  children: React.ReactNode;
}) {
  const { open } = useSidebar();
  return (
    <div
      className={cn(
        "grid justify-center items-center gap-8 grid-cols-1 sm:grid-cols-2",
        open ? "md:grid-cols-2 lg:grid-cols-3" : "md:grid-cols-3 xl:grid-cols-4"
      )}
    >
      {children}
    </div>
  );
}

"use client";

import { NuqsAdapter } from "../lib/server";
import { Toaster } from "@workspace/ui/lib/server";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NuqsAdapter>
      {children}
      <Toaster richColors position="top-center" duration={10000} />
    </NuqsAdapter>
  );
}

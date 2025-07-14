"use client";

import { useEffect, useState } from "react";
import SplashScreen from "./splash-screen";

export default function PageWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(true);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    // Check if this is a true initial load vs refresh
    const isInitialLoad =
      !window.performance.getEntriesByType("navigation")[0] ||
      (
        window.performance.getEntriesByType(
          "navigation"
        )[0] as PerformanceNavigationTiming
      ).type === "navigate";

    // Alternative approach: Check if splash was shown in this session
    const alreadyShown = sessionStorage.getItem("splash-shown");

    if (alreadyShown || !isInitialLoad) {
      setIsLoading(false);
      setHydrated(true);
    } else {
      sessionStorage.setItem("splash-shown", "true");
      setIsLoading(true);

      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 2000);
      setHydrated(true);
      return () => clearTimeout(timer);
    }
  }, []);

  if (!hydrated) return null;

  if (isLoading) {
    return <SplashScreen />;
  }

  return <>{children}</>;
}

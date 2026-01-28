import { NextRequest, NextResponse } from "next/server";

const publicRoutes = [
  "/",
  "/sign-in",
  "/sign-up",
  "/forgot-password",
  "/onboarding",
];

const excludedRoutes = [
  "/api/auth",
  "/api/",
  "/_next",
  "/favicon.ico",
  "/static",
];

export function middleware(req: NextRequest) {
  const authToken = req.cookies.get("auth-token")?.value;
  const isOnboarded = req.cookies.get("is-onboarded")?.value;
  const currentPath = req.nextUrl.pathname;

  if (excludedRoutes.some((route) => currentPath.startsWith(route))) {
    return NextResponse.next();
  }

  if (!authToken && !publicRoutes.includes(currentPath)) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  if (isOnboarded === "false" && currentPath !== "/onboarding") {
    return NextResponse.redirect(new URL("/onboarding", req.url));
  }

  if (
    authToken &&
    isOnboarded === "true" &&
    publicRoutes.includes(currentPath) &&
    currentPath !== "/dashboard"
  ) {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api/auth|_next/static|_next/image|favicon.ico).*)"],
};

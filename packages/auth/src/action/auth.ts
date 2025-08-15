"use server";
import { cookies } from "next/headers";

import {
  ApiResponse,
  AuthMetaData,
  UserMetaData,
} from "@workspace/common/types";
import { fetchWrapper } from "@workspace/common/lib/fetch-wrapper";
import { signInSchema, signUpSchema } from "../lib/schema";
import { z } from "@workspace/ui/lib/server";

type signInValues = z.infer<typeof signInSchema>;
type signUpValues = z.infer<typeof signUpSchema>;

export async function signInAction(
  payload: signInValues
): Promise<[ApiResponse<AuthMetaData> | null, ApiResponse<never> | null]> {
  const response = await fetchWrapper<ApiResponse<AuthMetaData>, signInValues>(
    `/api/auth/sign-in`,
    {
      method: "POST",
      body: payload,
    }
  );

  if ("error" in response) {
    return [null, response.error as ApiResponse<never>];
  }

  const cookieStore = await cookies();

  cookieStore.set("auth-token", response.data?.token || "");
  cookieStore.set(
    "is-onboarded",
    String(response.data?.user?.is_onboarded || false)
  );
  cookieStore.set("user-id", response.data?.user?.id || "");
  cookieStore.set("user-email", response.data?.user?.email || "");
  cookieStore.set("user-name", response.data?.user?.name || "");
  cookieStore.set("user-role", response.data?.user?.role || "");

  return [response, null];
}

export async function signUpAction(
  payload: signUpValues
): Promise<[ApiResponse<AuthMetaData> | null, ApiResponse<never> | null]> {
  const response = await fetchWrapper<ApiResponse<AuthMetaData>, signUpValues>(
    `/api/auth/sign-up`,
    {
      method: "POST",
      body: payload,
    }
  );

  if ("error" in response) {
    return [null, response.error as ApiResponse<never>];
  }

  const cookieStore = await cookies();

  cookieStore.set("auth-token", response.data?.token || "");
  cookieStore.set(
    "is-onboarded",
    String(response.data?.user?.is_onboarded || false)
  );
  cookieStore.set("user-id", response.data?.user?.id || "");
  cookieStore.set("user-email", response.data?.user?.email || "");
  cookieStore.set("user-name", response.data?.user?.name || "");
  cookieStore.set("user-role", response.data?.user?.role || "");

  return [response, null];
}

export async function getUserMetaData(): Promise<UserMetaData | null> {
  const cookieStore = await cookies();
  const response = {
    email: cookieStore.get("user-email")?.value,
    name: cookieStore.get("user-name")?.value,
    role: cookieStore.get("user-role")?.value,
  };

  if (!response.email || !response.name || !response.role) {
    return null;
  }

  return response as UserMetaData;
}

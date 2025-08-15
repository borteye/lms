"use server";

import { fetchWrapper } from "@workspace/common/lib/fetch-wrapper";
import { ApiResponse, AdminOnboarding } from "@workspace/common/types";
import { cookies } from "next/headers";

export async function schoolOnboardingAction(
  payload: FormData
): Promise<[ApiResponse<AdminOnboarding> | null, ApiResponse<never> | null]> {
  const token = (await cookies()).get("auth-token")?.value;

  const response = await fetchWrapper<ApiResponse<AdminOnboarding>, FormData>(
    `/api/school/create-school`,
    {
      method: "POST",
      body: payload,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  if ("error" in response) {
    return [null, response.error as ApiResponse<never>];
  }

  const cookieStore = await cookies();

  cookieStore.set("school-id", String(response.data?.schoolId) || "");
  cookieStore.set("is-onboarded", String(response.data?.is_onboarded || false));

  return [response, null];
}

import { cookies } from "next/headers";

export async function signOutAction(): Promise<void> {
  const cookieStore = await cookies();

  cookieStore.delete("auth-token");
  cookieStore.delete("is-onboarded");
  cookieStore.delete("user-id");
  cookieStore.delete("user-email");
  cookieStore.delete("user-name");
  cookieStore.delete("user-role");

  window.location.href = "/";
}

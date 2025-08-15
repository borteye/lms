export type Role = "teacher" | "student" | "admin";

export interface ApiError {
  field: string;
  errorMessage: string;
}

export interface ApiResponse<T = Record<string, unknown>> {
  message: string;
  code: number;
  data?: T;
  subCode: string;
  errors?: ApiError[] | null;
}

export interface UserMetaData {
  id: string;
  name: string;
  email: string;
  role: Role;
  school_id?: string;
  is_onboarded?: boolean;
}

export interface AuthMetaData {
  user: UserMetaData;
  token: string;
}

export interface GradingSystem {
  min: string;
  max: string;
  grade: string;
  remark: string;
}

export interface AdminOnboarding {
  schoolId: number;
  is_onboarded: boolean;
}


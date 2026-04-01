export type UserRole = "user" | "admin";

export type AuthUser = {
  id: string;
  email: string;
  name: string | null;
  role: UserRole;
  githubUsername?: string | null;
};

export type MeUser = {
  id: string;
  email: string;
  name: string | null;
  avatarUrl: string | null;
  githubUsername: string | null;
  role: UserRole;
  lastLoginAt: string | null;
  createdAt: string;
};

export type ApiSuccess<T> = {
  success: true;
  data: T;
  message?: string | null;
};

export type ApiError = {
  success: false;
  error: string;
  message?: string | null;
};

export type ApiResponse<T> = ApiSuccess<T> | ApiError;

export type AuthResponseData = {
  token: string;
  user: AuthUser;
};

export type LoginPayload = {
  email: string;
  password: string;
};

export type RegisterPayload = {
  email: string;
  password: string;
  name?: string;
};

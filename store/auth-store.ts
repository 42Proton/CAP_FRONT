import { create } from "zustand";
import * as authApi from "@/lib/auth-api";
import type { AuthUser, LoginPayload, MeUser, RegisterPayload } from "@/types/auth";

type AuthStore = {
	user: MeUser | AuthUser | null;
	isAuthenticated: boolean;
	isLoading: boolean;
	error: string | null;

	registerUser: (payload: RegisterPayload) => Promise<boolean>;
	loginUser: (payload: LoginPayload) => Promise<boolean>;
	fetchMe: () => Promise<void>;
	logoutUser: () => Promise<void>;
	clearError: () => void;
};

export const useAuthStore = create<AuthStore>((set) => ({
	user: null,
	isAuthenticated: false,
	isLoading: false,
	error: null,

	registerUser: async (payload) => {
		set({ isLoading: true, error: null });

		try {
			const response = await authApi.register(payload);

			if (!response.success) {
				set({ error: response.error, isLoading: false });
				return false;
			}

			set({
				user: response.data.user,
				isAuthenticated: true,
				isLoading: false,
				error: null,
			});

			return true;
		} catch {
			set({
				error: "Something went wrong. Please try again.",
				isLoading: false,
			});
			return false;
		}
	},

	loginUser: async (payload) => {
		set({ isLoading: true, error: null });

		try {
			const response = await authApi.login(payload);

			if (!response.success) {
				set({ error: response.error, isLoading: false });
				return false;
			}

			set({
				user: response.data.user,
				isAuthenticated: true,
				isLoading: false,
				error: null,
			});

			return true;
		} catch {
			set({
				error: "Something went wrong. Please try again.",
				isLoading: false,
			});
			return false;
		}
	},

	fetchMe: async () => {
		set({ isLoading: true });

		try {
			const response = await authApi.getMe();

			if (!response.success) {
				set({
					user: null,
					isAuthenticated: false,
					isLoading: false,
				});
				return;
			}

			set({
				user: response.data,
				isAuthenticated: true,
				isLoading: false,
			});
		} catch {
			set({
				user: null,
				isAuthenticated: false,
				isLoading: false,
			});
		}
	},

	logoutUser: async () => {
		set({ isLoading: true });

		try {
			await authApi.logout();
		} finally {
			set({
				user: null,
				isAuthenticated: false,
				isLoading: false,
				error: null,
			});
		}
	},

	clearError: () => set({ error: null }),
}));

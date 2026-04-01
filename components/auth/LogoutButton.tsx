"use client";

import { useRouter } from "next/navigation";
import { useAuthStore } from "@/store/auth-store";

export default function LogoutButton() {
	const router = useRouter();
	const logoutUser = useAuthStore((state) => state.logoutUser);

	async function handleLogout() {
		await logoutUser();
		router.push("/auth/login");
	}

	return (
		<button onClick={handleLogout} className="p-3 bg-black/50 border border-gray-700 rounded-lg text-white font-medium hover:bg-black/70 hover:border-gray-700/50 transition-all">
			Logout
		</button>
	);
}

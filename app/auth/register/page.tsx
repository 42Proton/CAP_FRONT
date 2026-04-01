"use client"
import AuthCard from "@/components/auth/auth-card";
import Divider from "@/components/auth/auth-divider";
import AuthHeader from "@/components/auth/auth-header";
import AuthInput from "@/components/auth/auth-input";
import AuthLogo from "@/components/auth/auth-logo";
import GithubButton from "@/components/auth/GithubButton";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useAuthStore } from "@/store/auth-store";

export default function RegisterPage(){
	const router = useRouter();
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [confirmPassword, setConfirmPassword] = useState('')

	const { registerUser, isLoading, error, clearError } = useAuthStore();

	async function handleSubmit(event : React.FormEvent){
		event.preventDefault();
		clearError();
		if (!email.trim() || !password || !confirmPassword){
			return
		}

		if(password.length < 8){
			return
		}

		if(password !== confirmPassword){
			return
		}


		const success = await registerUser({
			email: email.trim().toLowerCase(),
			password,
		});

		console.log("email", email)
		console.log("password", password)

		if (success) {
			router.push("/dashboard");
		}
	}

	return (
		<AuthCard width="sm:min-w-md">
			<AuthLogo />
			<AuthHeader title="Create An Individual Account" subtitle="Start reviewing code with AI in seconds"/>
			{error && (
				<div className="mt-6 p-3 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400 text-sm">
					{error}
				</div>
			)}
			<form onSubmit={handleSubmit}>
				<AuthInput id="email" type="email" label="Email" placeholder="you@example.com" state={email} setState={setEmail}/>
				<AuthInput id="password" type="password" label="Password" placeholder="Enter your password" state={password} setState={setPassword}/>
				<AuthInput id="confirmPassword" type="password" label="Confirm Password" placeholder="Confirm your password" state={confirmPassword} setState={setConfirmPassword}/>
				<button type="submit" disabled={isLoading} className="w-full mt-10 px-4 py-3 rounded-lg text-black font-bold bg-linear-to-r from-cyan-500 to-teal-500 hover:from-cyan-400 hover:to-teal-400 transition-all shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 disabled:opacity-50">
					{isLoading ? "Creating account..." : "Sign Up"}
				</button>
			</form>
			<Divider />
			<GithubButton/>
			<div className="mt-6 text-center">
				<p className="text-gray-400">
					Already have an account?{' '}
					<Link href="/auth/login" className="text-cyan-400 hover:text-cyan-300 font-semibold transition-colors">
						Login
					</Link>
				</p>
			</div>
		</AuthCard>
	)
}

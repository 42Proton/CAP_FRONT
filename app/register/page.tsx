import AuthCard from "@/components/auth/auth-card";
import AuthLayout from "@/components/auth/auth-layout";
import Image from "next/image";

export default function RegisterPage(){
	return (
		<AuthLayout>
			<AuthCard>
				<div className="flex justify-center mb-6">
					<div className="relative inline-flex items-center justify-center">
						<div className="absolute -inset-4 rounded-full bg-cyan-400/35 blur-2xl" />
						<div className="relative z-10 rounded-2xl border border-cyan-300/30 bg-slate-900/70 p-2 shadow-lg">
							<Image src="/assets/CAPLogo.png" alt="logo" width={200} height={200} className="drop-shadow-[0_0_12px_rgba(34,211,238,0.55)]"/>
						</div>
					</div>
				</div>
				<h1 className="text-3xl text-cyan-500 font-bold text-center">Create Your Account</h1>
				<p className="text-md text-gray-300 mt-4 text-center">Start reviewing code with AI in seconds</p>
				<form className="mt-8">
					<div>
					<label htmlFor="email" className="block text-sm mb-2 text-gray-300">
						Email
					</label>
					<input
						id="email"
						type="email"
						// value={email}
						// onChange={(e) => setEmail(e.target.value)}
						placeholder="you@example.com"
						className="w-full px-4 py-3 bg-black/50 border border-cyan-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20 transition-all"
					/>
				</div>
				<div className="mt-4">
					<label htmlFor="Password" className="block text-sm mb-2 text-gray-300">
						Password
					</label>
					<input
						id="Password"
						type="password"
						// value={Password}
						// onChange={(e) => setPassword(e.target.value)}
						placeholder="Enter your password"
						className="w-full px-4 py-3 bg-black/50 border border-cyan-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20 transition-all"
					/>
				</div>
				<div className="mt-4">
					<label htmlFor="confirmPassword" className="block text-sm mb-2 text-gray-300">
						Confirm Password
					</label>
					<input
						id="confirmPassword"
						type="password"
						// value={confirmPassword}
						// onChange={(e) => setConfirmPassword(e.target.value)}
						placeholder="Confirm your password"
						className="w-full px-4 py-3 bg-black/50 border border-cyan-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20 transition-all"
					/>
				</div>
				<button type="submit" className="w-full mt-10 px-4 py-3 rounded-lg text-black font-bold bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-400 hover:to-teal-400 transition-all shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50">
					Sign Up
				</button>
				</form>
			</AuthCard>
		</AuthLayout>
	)
}

import AuthCard from "@/components/auth/auth-card";
import AuthLayout from "@/components/auth/auth-layout";
import Image from "next/image";

export default function LoginPage(){
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
				<h1 className="text-3xl text-cyan-500 font-bold text-center">Welcome Back</h1>
				<p className="text-md text-gray-300 mt-4 text-center">Sign in to continue to your dashboard</p>
				<form className="mt-8">
				<div>
					<label  htmlFor="email" className="block text-sm mb-2 text-gray-300">
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
					<label htmlFor="password" className="block text-sm mb-2 text-gray-300">
						Password
					</label>
					<input
						id="password"
						type="password"
						// value={Password}
						// onChange={(e) => setPassword(e.target.value)}
						placeholder="Enter your password"
						className="w-full px-4 py-3 bg-black/50 border border-cyan-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20 transition-all"
					/>
				</div>
				<div className="flex justify-end mt-2">
					<a href="#forgot-password" className="text-sm text-cyan-400 hover:text-cyan-200 transition-colors">
						Forgot password?
					</a>
				</div>
				<button type="submit" className="w-full mt-4 px-4 py-3 rounded-lg text-black font-bold bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-400 hover:to-teal-400 transition-all shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50">
					Sign In
				</button>
				</form>
			</AuthCard>
		</AuthLayout>
	)
}

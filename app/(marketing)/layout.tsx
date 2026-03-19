import AuthLogo from "@/components/auth/auth-logo"
import Link from "next/link"

type LayoutProps = {
	children: React.ReactNode
}

export default function MarketingLayout({children}: LayoutProps){
	return (
		<div className="min-h-screen bg-black text-white flex flex-col" >
			<header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/50 backdrop-blur-xl">
				<nav>
					<div className="max-w-7xl flex justify-between">
						<div>
							<AuthLogo/>
						</div>


						<div>

						</div>
					</div>
				</nav>
			</header>
			{children}
			<footer>

			</footer>
		</div>
	)
}

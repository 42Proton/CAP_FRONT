import Features from "@/components/marketing/Features";
import HowItWorks from "@/components/marketing/HowItWorks";
import LandingPageHero from "@/components/marketing/landingPageHero";
import SeeItInAction from "@/components/marketing/SeeItInAction";

export default function Home() {
	return (
		<>
			<LandingPageHero />
			<HowItWorks />
			<Features />
			<SeeItInAction />
		</>
	);
}

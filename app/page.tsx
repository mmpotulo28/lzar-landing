import ForBusiness from "@/components/for-business";
import GetStartedSection from "@/components/get-started";
import HowItWorksSection from "@/components/how-it-works";
import PowerOfLSection from "@/components/power-of-l";
import WhyLzarSection from "@/components/why-lzar";

const Home = () => {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<PowerOfLSection />
			<GetStartedSection />
			<ForBusiness />
			<WhyLzarSection />
			<HowItWorksSection />
		</main>
	);
};

export default Home;

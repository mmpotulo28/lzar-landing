const HowItWorksSection = () => {
	return (
		<section className="my-20 w-full max-w-5xl">
			<h2 className="mb-10 text-3xl font-bold text-center">How It Works</h2>
			<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
				<div className="flex flex-col items-center text-center">
					<div className="mb-4 w-16 h-16 bg-blue-500 text-white rounded-full flex items-center justify-center text-xl font-bold">
						1
					</div>
					<h3 className="text-xl font-semibold mb-2">Sign Up</h3>
					<p>Create an account to get started with our services.</p>
				</div>
				<div className="flex flex-col items-center text-center">
					<div className="mb-4 w-16 h-16 bg-blue-500 text-white rounded-full flex items-center justify-center text-xl font-bold">
						2
					</div>
					<h3 className="text-xl font-semibold mb-2">Choose a Plan</h3>
					<p>Select the plan that best fits your needs and budget.</p>
				</div>
				<div className="flex flex-col items-center text-center">
					<div className="mb-4 w-16 h-16 bg-blue-500 text-white rounded-full flex items-center justify-center text-xl font-bold">
						3
					</div>
					<h3 className="text-xl font-semibold mb-2">Get Started</h3>
					<p>Start using our services and enjoy the benefits.</p>
				</div>
			</div>
		</section>
	);
};

export default HowItWorksSection;

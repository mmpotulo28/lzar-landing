import Lockup from "../common/lockup";
import PowerCard from "./power-card";

const PowerOfLSection = () => {
	return (
		<section className="container grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
			<Lockup title="The Power of 'L' Money your way." />

			{/* card */}
			{[1, 2, 3, 4, 5].map((item) => (
				<PowerCard key={item} />
			))}
		</section>
	);
};
export default PowerOfLSection;

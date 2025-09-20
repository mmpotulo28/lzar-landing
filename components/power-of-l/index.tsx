import { Coins, Crown, ShieldCheck, TicketIcon } from "lucide-react";
import Lockup from "../common/lockup";
import PowerCard, { iPowerCardProps } from "./power-card";
import React from "react";

const powerCardData: iPowerCardProps[] = [
	{
		Icon: Crown,
		title: "Loyalty",
		description:
			"Launch your own loyalty or cashback program in minutes. Use LZAR to issue, track, and settle points or payouts — seamlessly integrated with your app or retail platform.",
	},
	{
		Icon: TicketIcon,
		title: "Lottery",
		description:
			"Earn more with your payments: every week, users are entered into a raffle based on their transaction activity and LZAR balance. Prizes are paid directly in LZAR.",
	},
	{
		Icon: Coins,
		title: "Liquidity",
		description:
			"The LZAR Liquidity Pool allows you to tap  into deep ZAR liquidity for ZAR ↔️ USD or ZAR ↔️ EUR swaps. Get access to tight spreads and low fees.",
		action: { label: "INTEGRATE OUR ECOSYSTEM", href: "#" },
	},
	{
		Icon: ShieldCheck,
		title: "Lending",
		description:
			"Put your LZAR to work while still having access to your funds. Save without locking your money away.",
		action: { label: "EXPLORE THE LEDGER", href: "#" },
	},
];

const PowerOfLSection: React.FC = () => {
	return (
		<section className="container grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
			<div className="pt-12">
				<Lockup title="The Power of 'L' Money your way." />
			</div>

			{/* card */}
			{powerCardData?.map((item, idx) => (
				<PowerCard
					key={`power-card-${idx}`}
					title={item.title}
					description={item.description}
					Icon={item.Icon}
					action={item?.action}
				/>
			))}
		</section>
	);
};
export default PowerOfLSection;

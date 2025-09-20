import { ArrowUpDown } from "lucide-react";
import { Card } from "../ui/card";
import Image from "next/image";
import { SparklesCore } from "../ui/shadcn-io/sparkles";

const CurrencyButton: React.FC<{ src: string; alt: string; label: string }> = ({
	src,
	alt,
	label,
}) => (
	<button className="bg-background text-foreground w-full h-20 rounded-lg flex items-center justify-evenly gap-2 z-2">
		<Image src={src} alt={alt} width={50} height={50} className="object-contain rounded-xl" />
		{label}
	</button>
);

const CurrencyCard: React.FC = () => {
	return (
		<Card
			className="py-0 relative overflow-hidden
  ">
			{/* left currency buttons */}
			<div className="relative flex flex-col items-center justify-between pl-8 pr-4 py-6 space-x-4 h-full w-[55%] z-1 bg-white/2 backdrop-blur-xs">
				<SparklesCore
					background="transparent"
					minSize={0.6}
					maxSize={1.4}
					particleDensity={2000}
					className="absolute inset-0 w-full h-full z-1"
					particleColor="#FFFFFF"
					speed={1}
				/>

				<CurrencyButton src={"/images/us-flag.png"} alt="USD" label="USD" />
				<ArrowUpDown className="mx-auto my-2 text-background" />
				<CurrencyButton src={"/images/lzar.png"} alt="LZAR" label="LZAR" />
				<ArrowUpDown className="mx-auto my-2 text-background" />
				<CurrencyButton src={"/images/sa-flag.png"} alt="ZAR" label="ZAR" />
			</div>

			<Image
				className="absolute inset-0 z-0"
				src={"/images/5a349fab88076aa54de8d751297b8fddd0a92450.jpg"}
				alt="Currency Background"
				layout="fill"
				objectFit="cover"
			/>
		</Card>
	);
};

export default CurrencyCard;

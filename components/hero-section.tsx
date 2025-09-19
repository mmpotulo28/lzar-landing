import React from "react";
import Lockup from "./common/lockup";
import Navbar from "./navbar";
import { SquareChevronDown } from "lucide-react";

const HeroSection: React.FC = () => {
	return (
		<div
			className="min-h-[80vh] flex flex-col justify-between items-center overflow-hidden relative py-10"
			style={{
				background:
					"linear-gradient(152.66deg, #FFFDF6 19.6%, #DCE8F8 64.34%, #ABD8EF 94.87%)",
			}}>
			{/* hero text */}
			<div className="flex items-center justify-center flex-col max-w-lg px-4 mt-10">
				<Lockup title="More Than Money:" />
				<Lockup title="Meet LZAR" />

				<p className="mt-4 text-lg text-muted-foreground max-w-2xl text-center">
					The money designed for South Africa — fast to move, easy to save, and built for
					loyalty and rewards.
				</p>

				<SquareChevronDown className="mt-10 animate-bounce text-muted-foreground" />
			</div>

			{/* hero navbar */}
			<div className="z-1">
				<Navbar />
			</div>

			{/* background lzar letter */}
			<div className="absolute flex items-center justify-center top-[320px] p-0 h-100">
				<h1 className="text-[500px] font-bold text-transparent bg-clip-text bg-gradient-to-tr from-muted to-transparent z-0 ">
					LZAR
				</h1>
			</div>
		</div>
	);
};

export default HeroSection;

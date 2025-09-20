import { Linkedin, Twitter } from "lucide-react";
import Lockup from "./common/lockup";

const Footer: React.FC = () => {
	return (
		<footer className="bg-foreground pt-40 px-20 text-background flex flex-col gap-18">
			<div className="container flex justify-between">
				{/* left section */}
				<div className="flex flex-col gap-6 space-x-4 mb-4 max-w-md">
					<Lockup title="LZAR" />
					<p>
						FiveWest is an authorised financial services provider (FSP No. 51619) and a
						licensed Systems Operator and TPPP with PASA.
					</p>

					{/* social media buttons */}
					<div className="flex space-x-4">
						<a href="#" className="text-sm">
							<Linkedin />
						</a>
						<a href="#" className="text-sm">
							<Twitter />
						</a>
					</div>
				</div>

				{/* right section */}
				<div className="flex flex-col  space-y-4">
					<h3 className="font-bold text-lg text-accent">COMPANY</h3>
					<a href="#" className="text-sm">
						Terms & Conditions
					</a>
					<a href="#" className="text-sm">
						Legal Compliance
					</a>
					<a href="#" className="text-sm">
						Privacy Policy
					</a>
				</div>
			</div>

			<p className="text-sm py-6 border-t border-muted-foreground text-muted-foreground">
				&copy; {new Date().getFullYear()} | Fivewest | All rights reserved.
			</p>
		</footer>
	);
};

export default Footer;

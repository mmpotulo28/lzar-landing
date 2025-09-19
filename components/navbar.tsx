import { SquareChevronRight } from "lucide-react";
import { Button } from "./ui/button";

const Navbar: React.FC = () => {
	return (
		<div className="bg-background px-2 py-2 rounded-xl flex items-center justify-between shadow-md gap-2 h-15">
			<Button variant={"ghost"} size={"sm"} className="rounded-lg">
				ABOUT
			</Button>
			<Button variant={"ghost"} size={"sm"} className="rounded-lg">
				FEATURES
			</Button>
			<Button variant={"ghost"} size={"sm"} className="rounded-lg">
				LOGIN
			</Button>
			<Button variant={"default"} size={"lg"} className="rounded-lg">
				GET STARTED <SquareChevronRight />
			</Button>
		</div>
	);
};

export default Navbar;

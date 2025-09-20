import { Crown } from "lucide-react";
import Lockup from "../common/lockup";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import Link from "next/link";

const PowerCard = () => {
	return (
		<Card className="bg-muted">
			<CardHeader>
				<CardTitle>
					<Crown className="h-6 w-6 mr-2 inline-block" />
				</CardTitle>
			</CardHeader>

			<CardContent>
				<Lockup title="Premium Feature" size="3xl" />

				<CardDescription className="text-[16px] ">
					Unlock exclusive benefits with our premium plan, designed to enhance your
					experience and provide added value.
				</CardDescription>
			</CardContent>

			<CardFooter>
				<Link href="#" className="text-blue-500 hover:underline">
					Learn More
				</Link>
			</CardFooter>
		</Card>
	);
};

export default PowerCard;

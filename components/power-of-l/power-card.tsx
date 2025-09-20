import { Crown, LucideProps } from "lucide-react";
import Lockup from "../common/lockup";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import Link from "next/link";
import { ForwardRefExoticComponent, RefAttributes } from "react";

export interface iPowerCardProps {
	Icon: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>;
	title: string;
	description: string;
	action?: { label: string; href: string };
}

const PowerCard: React.FC<iPowerCardProps> = ({ Icon, title, description, action }) => {
	return (
		<Card className="bg-secondary">
			<CardHeader>
				<CardTitle>
					{Icon && <Icon strokeWidth={0.8} className="h-16 w-16 my-4" />}
				</CardTitle>
			</CardHeader>

			<CardContent className="mt-8">
				<Lockup title={title} size="3xl" />

				<CardDescription className="text-[16px] middle">{description}</CardDescription>
			</CardContent>

			{action && (
				<CardFooter className="pt-6">
					<Link href={action.href} className="underline font-medium hover:bg-accent">
						{action.label}
					</Link>
				</CardFooter>
			)}
		</Card>
	);
};

export default PowerCard;

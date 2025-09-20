export interface iLockupProps {
	title: string;
	size?: "lg" | "2xl" | "3xl" | "5xl";
}

const Lockup: React.FC<iLockupProps> = ({ title, size = "5xl" }) => {
	return <div className={`flex items-center  font-medium text-${size} h-14`}>{title}</div>;
};

export default Lockup;

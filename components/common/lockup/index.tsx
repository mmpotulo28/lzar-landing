export interface iLockupProps {
	title: string;
}

const Lockup: React.FC<iLockupProps> = ({ title }) => {
	return <div className="flex items-center font-medium text-5xl h-14">{title}</div>;
};

export default Lockup;

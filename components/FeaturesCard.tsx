import type { LucideIcon } from 'lucide-react';

type FeaturesCardProps = {
	glowColor: string;
	iconColor: string;
	title: string;
	description: string;
	Icon: LucideIcon;
};

export default function FeaturesCard({glowColor, iconColor, title, description, Icon}: FeaturesCardProps){
	return(
		<div className="relative flex justify-center items-center ">
			<div className={`absolute inset-8 ${glowColor} blur-3xl`}/>
			<div className="relative h-full w-full border border-gray-400/20 rounded-xl bg-black hover:bg-black/10 max-w-3xl p-10">
				<div className={`inline-flex justify-center items-center ${iconColor} rounded-xl w-20 h-20`}>
					<Icon className='w-10 h-10'/>
				</div>
				<p className='font-bold text-2xl my-2'>{title}</p>
				<p className='text-xl text-gray-400 my-2'>{description}</p>
			</div>
		</div>
	)
}

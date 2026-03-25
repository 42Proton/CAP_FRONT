import Image from 'next/image';
import { AlertCircle, CheckCircle2, Code } from 'lucide-react';

export default function SeeItInAction(){
	const codeSnippet =`function getUserData(userId) {
	   const query = "SELECT * FROM users WHERE id=" + userId;
	   return db.execute(query);
}`;
	return (
		<section className="pt-32 flex flex-col items-center">
			<p className="text-7xl font-bold bg-linear-to-r from-white to-gray-400 bg-clip-text text-transparent text-center">
				See It In Action
			</p>
			<p className="max-w-2xl text-lg sm:text-xl text-gray-400 mt-8 text-center">
				Watch how our AI identifies and fixes issues in real-time
			</p>
			<div className="my-16 grid w-full max-w-400 grid-cols-1 gap-8 px-6 md:grid-cols-2">
				<div className='w-full max-w-5xl border border-white/10 rounded-xl bg-black/50 backdrop-blur-xl shadow-2xl shadow-cyan-500/15 overflow-hidden'>
					<div className='flex items-center gap-1.5 py-6 px-6 border-b border-gray-500/20 bg-gray-700/20 '>
						<Code className='h-5 w-5 text-cyan-400'/>
						<p className='ml-4 text-lg text-gray-200'>Code Input</p>
					</div>
					<div className='py-6 px-8'>
						<div className="flex ">
							<div className="text-gray-600 text-right pr-4 select-none">
								<div>1</div>
								<div>2</div>
								<div>3</div>
								<div>4</div>
							</div>
							<pre className="flex-1 overflow-x-auto text-gray-300">
								<code>{codeSnippet}</code>
							</pre>
						</div>
						<div className="relative mt-4 h-18 rounded overflow-hidden">
							<div className="absolute inset-0 rounded-xl bg-red-700" />
							<div className="absolute z-10 left-2 right-0 top-0 bottom-0 rounded-xl bg-red-950" />
							<div className="relative z-10 pl-8 py-4">
								<div className="flex items-start gap-3">
									<AlertCircle className="h-5 w-5 text-red-400 mt-0.5" />
									<div>
										<p className="text-sm font-semibold text-red-300">Line 2: SQL Injection Risk</p>
										<p className="text-xs text-red-400/80 mt-1">String concatenation in SQL query</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>





				<div className='w-full max-w-5xl border border-white/10 rounded-xl bg-black/50 backdrop-blur-xl shadow-2xl shadow-cyan-500/15 overflow-hidden'>
					<div className='flex items-center gap-1.5 py-6 px-6'>
						<div className='bg-red-500 rounded-full h-4 w-4'></div>
						<div className='bg-yellow-500 rounded-full h-4 w-4'></div>
						<div className='bg-green-500 rounded-full h-4 w-4'></div>
						<p className='ml-4 text-sm text-gray-500'>src/components/auth.ts</p>
					</div>
					<div>
						<Image
						src="/assets/Code preview.jpeg"
						width={1080}
						height={720}
						alt="Code preview"
						className="w-full h-72 object-cover rounded-lg opacity-80"/>
					</div>
				</div>
			</div>
		</section>
	)
}

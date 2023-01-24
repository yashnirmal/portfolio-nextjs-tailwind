import Image from 'next/image';
import Resume from "../resume"

export default function Two(){
	return (
		<div className="bg-red-300 min-h-[300px] sm:aspect-auto aspect-[5/6] cont p-4 flex flex-col relative items-center justify-center">
			<div className="flex-1 w-full relative">
				<Image src="/assets/rocket.gif" alt="rocket" fill className="object-center" />
			</div>
			<Resume />
		</div>
	)
}
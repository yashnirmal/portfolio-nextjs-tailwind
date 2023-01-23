import Image from 'next/image'
export default function Five(){
	return (
		<a href="https://github.com/yashnirmal" target="_blank" className="bg-white cont bg-gradient-to-br p-4 from-gray-600 to-gray-800 flex flex-col text-white cont">
			<div className="flex-1 flex justify-center items-center">
				<div className="h-full p-4 aspect-square relative mt-10">
					<Image src="/assets/github.png" alt="github" layout="fill"  />
				</div>
			</div>
			<div className="flex-1 flex flex-col justify-end">
				<p className="text-sm font-light">Check my</p>
				<h1 className="font-semibold text-2xl">Github</h1>
			</div>
		</a>
	)
}
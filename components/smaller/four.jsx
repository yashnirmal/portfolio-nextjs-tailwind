export default function Four(){
	return (
		<div className="grid grid-rows-4 gap-[2px]">
			<div className="flex bg-yellow-400 cont p-4  shadow-lg shadow-black">
				<div className="flex-1 flex items-center">
					<span className="bg-zinc-900 w-4 h-4 rounded-full"></span>
				</div>
				<div className="flex-1 flex items-center cursor-pointer">Recent Projects</div>
			</div>
			<div className="flex bg-teal-600 cont p-4 rotate-12 shadow-lg shadow-black">
				<div className="flex-1 flex items-center ">
					<span className="bg-zinc-900 w-4 h-4 rounded-full"></span>
				</div>
				<div className="flex-1 flex items-center">Recent Projects</div>
			</div>

			<div className="flex p-4 row-start-4 text-2xl font-light text-white cursor-pointer">
				SEE MORE
			</div>
		</div>
	)
}
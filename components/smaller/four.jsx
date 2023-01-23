export default function Four(){
	return (
		<div className="grid grid-rows-4 gap-[2px]">
			<div className="flex bg-yellow-400 cont p-4  shadow-lg shadow-black">
				<div className="flex-1 flex items-center">
					<span className="bg-zinc-900 w-4 h-4 rounded-full"></span>
				</div>
				<a href="https://github.com/yashnirmal/space-shooter" target="_blank" className="flex-1 flex items-center cursor-pointer">Recent Project</a>
			</div>
			<div className="flex bg-teal-600 cont p-4 rotate-12 shadow-lg shadow-black">
				<div className="flex-1 flex items-center ">
					<span className="bg-zinc-900 w-4 h-4 rounded-full"></span>
				</div>
				<a href="https://twitter.com/YashNirmal42" target="_blank" className="flex-1 flex items-center">Recent Posts</a>
			</div>

			<a href="https://linktr.ee/yash_nirmal" target="_blank" className="flex p-4 row-start-4 text-2xl font-light text-white cursor-pointer">
				SEE MORE
			</a>
		</div>
	)
}
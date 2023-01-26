import Image from "next/image";

export default function Project({data}){
	return (
		<div className="bg-white h-fill rounded-2xl overflow-hidden shadow-xl">
			<div className="aspect-video">
				<div className="w-full h-full relative group">
					<Image src={`/assets/projects/${data.image}`} fill /> 
					<div className="opacity-0 group-hover:opacity-100 grayscale z-100 absolute top-0 left-0 bg-black bg-opacity-70 w-full h-full flex items-center justify-center gap-6">
						<a href={data.github} target="_blank" className="relative w-10 h-10">
							<Image src="/assets/github2.png" fill alt="github link" />
						</a>
						<a href={data.weblink} target="_blank" className="relative w-10 h-10">
							<Image src="/assets/web.png" fill alt="website link" />
						</a>
					</div>
				</div>
			</div>
			<div className="p-2 flex flex-col gap-1">
				<h1 className="font-semibold text-2xl">{data.title}</h1>
				<p className="text-xl">{data.description}</p>
				<div className="flex gap-4 flex-wrap">
					{
						data.tags.map(t=>(
							<div className="tag">
								{t}
							</div>
						))
					}
				</div>
			</div>
		</div>
	)
}
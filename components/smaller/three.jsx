export default function Three({setCarousel}){
	return (
		<div className="flex text-white p-6 justify-between">
			<ul className="flex flex-col justify-between">	
				<li className="cursor-pointer" onClick={()=>setCarousel(true)}>
					ABOUT
				</li>
				<li className="cursor-pointer" onClick={()=>setCarousel(true)}>
					PROJECTS
				</li>
				<li className="cursor-pointer" onClick={()=>setCarousel(true)}>
					SKILLS
				</li>
				<li className="cursor-pointer" onClick={()=>setCarousel(true)}>
					EDUCATION
				</li>
				<li className="cursor-pointer" onClick={()=>setCarousel(true)}>
					CONTACT
				</li>
			</ul>
			<div className="bg-yellow-300 w-2 h-2 rounded-full">
				
			</div>
		</div>
	)
}
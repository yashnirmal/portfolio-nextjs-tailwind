export default function Three({setSlideNum,setCarousel}){

	function btnClicked(e){
		console.log(parseInt(e.target.dataset.slideNum))
		setSlideNum(parseInt(e.target.dataset.slideNum))
		setCarousel(true)
	}

	return (
		<div className="min-w-[220px] md:col-span-1 sm:col-span-2 col-span-1 row-start-1 lg:row-span-1 md:row-span-2 md:row-start-1 lg:col-start-4 md:col-start-3 flex text-white p-6 justify-between">
			<ul className="flex md:flex-col flex-row w-full justify-between">	
				<li className="cursor-pointer" data-slideNum="1" onClick={btnClicked}>
					ABOUT
				</li>
				<li className="cursor-pointer" data-slideNum="2" onClick={btnClicked}>
					PROJECTS
				</li>
				<li className="cursor-pointer" data-slideNum="3" onClick={btnClicked}>
					SKILLS
				</li>
				<li className="md:block hidden cursor-pointer" data-slideNum="3" onClick={btnClicked}>
					EDUCATION
				</li>
				<li className="cursor-pointer" data-slideNum="4" onClick={btnClicked}>
					CONTACT
				</li>
			</ul>
		</div>
	)
}
export default function Three({setSlideNum,setCarousel}){

	function btnClicked(e){
		console.log(parseInt(e.target.dataset.slideNum))
		setSlideNum(parseInt(e.target.dataset.slideNum))
		setCarousel(true)
	}

	return (
		<div className="flex text-white p-6 justify-between">
			<ul className="flex flex-col justify-between">	
				<li className="cursor-pointer" data-slideNum="1" onClick={btnClicked}>
					ABOUT
				</li>
				<li className="cursor-pointer" data-slideNum="2" onClick={btnClicked}>
					PROJECTS
				</li>
				<li className="cursor-pointer" data-slideNum="3" onClick={btnClicked}>
					SKILLS
				</li>
				<li className="cursor-pointer" data-slideNum="3" onClick={btnClicked}>
					EDUCATION
				</li>
				<li className="cursor-pointer" data-slideNum="4" onClick={btnClicked}>
					CONTACT
				</li>
			</ul>
		</div>
	)
}
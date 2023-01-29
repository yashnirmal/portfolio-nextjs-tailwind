import {useState,useEffect} from 'react';
import Contact from "./contact";
import About from "./about";
import Projects from "./projects"
import Skills from "./skills";
import Resume from "../resume";

export default function Carousel({slideNum,setCarousel}){

	const [curr,setCurr] = useState(1)

	useEffect(()=>{
		console.log(slideNum)
		// const currSlide = document.querySelector(`[data-index="${curr}"]`)
		// currSlide.dataset.status="inactive"
		// const nextSlide = document.querySelector(`[data-index="${slideNum}"]`)
		// nextSlide.dataset.status="active"
		// setCurr(parseInt(slideNum))
	},[])

	function moveToPrev(){
		let nextIndex = curr-1
		if(nextIndex<1){
			nextIndex=4
		}
		const currSlide = document.querySelector(`[data-index="${curr}"]`)
		const nextSlide = document.querySelector(`[data-index="${nextIndex}"]`)
		currSlide.dataset.status="inactive"
		nextSlide.dataset.status="active"
		console.log(currSlide,nextSlide)
		setCurr(nextIndex)
	}

	function moveToNext(){
		let nextIndex = curr+1
		if(nextIndex>4){
			nextIndex=1
		}
		const currSlide = document.querySelector(`[data-index="${curr}"]`)
		const nextSlide = document.querySelector(`[data-index="${nextIndex}"]`)
		currSlide.dataset.status="inactive"
		nextSlide.dataset.status="active"
		console.log(currSlide,nextSlide)
		setCurr(nextIndex)
	}

	function btnClicked(e){
		const currSlide = document.querySelector(`[data-index="${curr}"]`)
		currSlide.dataset.status="inactive"
		const nextSlide = document.querySelector(`[data-index="${e.target.dataset.slide}"]`)
		nextSlide.dataset.status="active"
		setCurr(parseInt(e.target.dataset.slide))
	}

	return (
		<div className="bg-zinc-900 bg-opacity-95 w-screen h-screen absolute top-0 right-0 m-auto flex flex-col">
			<div className="w-full h-28 flex md:justify-center justify-around md:gap-20 sm:gap-10 gap-2 relative text-white">
		        <button className="cursor-pointer" data-slide="1" onClick={btnClicked} >About</button>
		        <button className="cursor-pointer" data-slide="2" onClick={btnClicked}>Projects</button>
		        <button className="cursor-pointer" data-slide="3" onClick={btnClicked}>Skills</button>
		        <button className="cursor-pointer" data-slide="4" onClick={btnClicked}>Contact</button>
		    	<button className="md:absolute md:top-1/2 md:right-20 md:-translate-y-1/2 font-bold md:text-2xl text-xl z-100 hover:bg-red-500 rounded-full py-4 md:px-6 px-0 transition duration-200"  onClick={()=>setCarousel(false)}>X</button>
		    </div>

			<div id="default-carousel" className="flex-grow relative" data-carousel="static">
			    {/* Carousel wrapper */}
			    <div className="w-full h-full overflow-hidden opacity-100 rounded-lg">
			        <div className="w-full h-full scale-90 bg-blue-200 overflow-hidden cont data-[status=inactive]:hidden data-[status=active]:block" data-index="1" data-status="active">
			        	<About />
			        </div>
			        <div className="w-full h-full scale-90 hidden bg-blue-200 overflow-hidden cont data-[status=inactive]:hidden data-[status=active]:block" data-index="2" data-status="inactive">
						<Projects />	        	
			        </div>
			        <div className="w-full h-full scale-90 hidden bg-blue-200 overflow-hidden cont data-[status=inactive]:hidden data-[status=active]:block" data-index="3" data-status="inactive">
			        	<Skills />
			        </div>
			        <div className="w-full h-full scale-90 hidden bg-blue-200 overflow-hidden opacity-100 cont data-[status=inactive]:hidden data-[status=active]:block" data-index="4" data-status="inactive">
			        	<Contact />
			        </div>

			    </div>
			    <button type="button" className="sm:flex hidden text-white absolute top-0 left-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none" data-carousel-prev onClick={moveToPrev}>
			        <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-zinc-500 group-hover:bg-white/50 dark:group-hover:bg-zinc-400 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 transition duration-200">
			            {'<'}
			        </span>
			    </button>
			    <button type="button" className="sm:flex hidden text-white absolute top-0 right-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none" data-carousel-next onClick={moveToNext}>
			        <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-zinc-500 group-hover:bg-white/50 dark:group-hover:bg-zinc-400 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 transition duration-200">
			            {'>'}
			        </span>
			    </button>
			</div>
		</div>
	)
}

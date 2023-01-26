export default function About(){
	return (
		<div className="bg-white text-zinc-900 w-full h-full flex md:flex-row flex-col lg:text-3xl md:text-2xl sm:text-3xl text-2xl md:py-0 py-10 md:gap-0 gap-24">
			<div className="md:flex-1 flex flex-col items-center justify-center gap-4">
				<p>Hi, I am Yash</p>
				<h1 className="font-gilroy-bold font-extrabold text-center lg:text-6xl text-5xl ">Web Developer</h1>
			</div>
			<div className="md:flex-1 flex flex-col items-center justify-center text-center p-10">
			    <p>I am a <span className="highlight">Full-stack Web Developer</span> with expertise in various languages and frameworks. I love building challenging projects and learning new tachnologies and skills. Always curious on finding inner working a projects that I like.</p>
			</div>
		</div>
	)
}
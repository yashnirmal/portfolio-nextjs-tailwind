export default function Skills(){
	return (
		<div className="bg-blue-200 w-full h-full flex p-6">
			{/*Skills*/}
			{/*Frontend*/}
			<div className="flex-1 flex items-center justify-center">
				<div>
					<h1 className="text-3xl font-bold underline">Frontend Development</h1>
					<ul className="text-2xl">
						<li>NextJS</li>
						<li>React</li>
						<li>Javascript</li>
						<li>Tailwind</li>
						<li>HTML</li>
						<li>CSS</li>
					</ul>
				</div>
			</div>
			{/*Backend*/}
			<div className="flex-1 flex items-center justify-center">
				<div>
					<h1 className="text-3xl font-bold underline">Backend Development</h1>
					<ul className="text-2xl">
						<li>NodeJS</li>
						<li>ExpressJS</li>
						<li>Javascript</li>
						<li>MongoDB</li>
						<li>Firebase</li>
					</ul>
				</div>
			</div>
			
			<div className="flex-1 flex flex-col items-center justify-center gap-14 mr-10">
				{/*Education*/}
				<div>
					<h1 className="text-3xl font-bold underline">Education</h1>
					<div className="text-2xl">
						<p><span className="underline">College : </span>National Institute of Technology, Karnataka (NITK)</p>
						<p>Bachelors of Technology in Information Technology(IT)</p>
					</div>
				</div>

				{/*Qualities*/}
				<div>
					<h1 className="text-3xl font-bold underline">Skills</h1>
					<ul className="text-2xl">
						<li>Curious</li>
						<li>Critical Thinker</li>
						<li>Smart Working</li>
						<li>Excellent in team work</li>
						<li>Don't stop till I found the answer of an encountered problem</li>
					</ul>
				</div>
			</div>
		</div>
	)
}
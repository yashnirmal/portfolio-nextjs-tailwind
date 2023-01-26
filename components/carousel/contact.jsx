import Image from 'next/image';

export default function Contact(){
	return (
		<div className="bg-yellow-300 w-full h-full flex md:flex-row flex-col">
			{/*Connect*/}
			<div className="flex-1 flex items-center justify-center gap-6">
				<div className="w-fit h-fit sm:gap-10 gap-6 grid grid-cols-2 ">				
					<a className="flex items-center justify-center gap-4 px-6 py-4 rounded-full bg-zinc-900 text-white" href="https://www.linkedin.com/in/yash-nirmal-062b68220/" target="_blank">
						<div className="relative w-10 h-10" >
							<Image src="/assets/linkedin.png" alt="" fill />
						</div>
						<p>LinkedIn</p>
					</a>
					<a className="flex items-center justify-center gap-4 px-6 py-4 rounded-full bg-zinc-900 text-white" href="https://github.com/yashnirmal" target="_blank">
						<div className="relative w-10 h-10" >
							<Image src="/assets/github2.png" alt="" fill />
						</div>
						<p>Github</p>
					</a>
					<a className="flex items-center justify-center gap-4 px-6 py-4 rounded-full bg-zinc-900 text-white" href="https://twitter.com/YashNirmal42" target="_blank">
						<div className="relative w-10 h-10" >
							<Image src="/assets/twitter.png" alt="" fill />
						</div>
						<p>Twitter</p>
					</a>
					<a className="flex items-center justify-center gap-4 px-6 py-4 rounded-full bg-zinc-900 text-white" href="mailto:yash15nirmal@gmail.com" target="_blank">
						<div className="relative w-12 h-10" >
							<Image src="/assets/gmail.png" alt="" fill />
						</div>
						<p>Mail</p>
					</a>
				</div>
			</div>

			{/*Character*/}
			<div className="flex-1 flex items-center justify-center">
				<div className="relative w-4/5 aspect-[5/4]">
					<Image className="scale-80" src="/assets/connect.png" fill />
				</div>
			</div>
		</div>
	)
}
import Project from "../project";

const data = [
  {"title":"Space Shooter Game","description":"Its is made in 2 parts. A game website made using VanillaJS and helper website made using react which include data like score,highscores and stripe payments for buying skins for game.","image":"spaceshooter.png","weblink":"https://space-shooter-home.netlify.app","github":"https://github.com/yashnirmal/space-shooter","tags":["VanillaJS","ReactJs","Stripe","NodeJs","ExpressJs","MongoDB","Fetch API"]},
  {"title":"Bloggator","description":"A highly scalable MERN website where people write blogs. You can follow your favorite bloggers, save there blogs and write your blogs as well.MondoDB is used as the NoSql database with security features to protect users password. Writing blog is made easy using markdown style of writing.","image":"bloggator.png","weblink":"https://bloggator.netlify.app/","github":"https://github.com/yashnirmal/mern-blog-website","tags":["ReactJs","MongoDB","NodeJs","ExpressJs","Redux","pure CSS","react-markdown"]},
  {"title":"Raven Hunter Game","description":"Game made using VanillaJS, lets you change difficulty depending on your comfort and stores your score.","image":"raven.png","weblink":"https://raven-hunter.netlify.app/","github":"https://github.com/yashnirmal/raven-hunter-game","tags":["HTML","pure CSS","Javascript","Localstorage"]},
  {"title":"Crypto Tracker and News","description":"This website show the almost all the data related to 200 cryptocurrencies aand shows you news happening around the crypto world","image":"crypto.png","weblink":"https://crypto-news-and-tracker.netlify.app/","github":"https://github.com/yashnirmal/crypto-news-and-tracker","tags":["ReactJs","pure CSS","Fetch API","react-chart-js 2","MaterialUI"]},
];

export default function Projects(){
	return (
		<div className="bg-purple-400 w-full h-full grid grid-cols-4 gap-y-10 gap-x-14 p-6">
			{
				data.map((d)=>(
					<Project data={d} />
				))
			}
			<div className="bg-white rounded-2xl flex items-center justify-center col-span-4" >
				<a href="https://github.com/yashnirmal?tab=repositories">See More on Github &#8599;</a>
			</div>
		</div>
	)
}


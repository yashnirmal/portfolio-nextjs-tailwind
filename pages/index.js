import Head from 'next/head'
import One from '../components/smaller/one'
import Two from '../components/smaller/two'
import Three from '../components/smaller/three'
import Four from '../components/smaller/four'
import Five from '../components/smaller/five'
import Carousel from "../components/carousel/carousel"
import {useState,useEffect} from "react"


export default function Home() {

  const [carousel,setCarousel] = useState(false)
  const [slideNum,setSlideNum] = useState(1)

  // useEffect(()=>{
  //   if(carousel===false){
  //     document.querySelector('#home-elements').style.overflow='hidden'
  //     console.log(document.querySelector('#home-elements'))
  //   }
  //   else{
  //     document.querySelector('#home-elements').style.overflow='scroll'
  //   }
  // },[carousel]) 

  return (
    <>
      <Head>
        <title>Yash Nirmal</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      
      <main className="w-screen min-h-screen h-fit font-gilroy bg-zinc-900 flex items-center justify-center">
        <div id="home-elements" className="bg-zinc-900 max-w-[1400px] md:w-[80%] md:h-[90%] w-[95%] grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-[2px] p-2">
          <One />
          <Two />
          <Three setSlideNum={setSlideNum} setCarousel={setCarousel} />
          <Four />
          <Five />
        </div>

        {carousel && <Carousel slideNum={slideNum} setCarousel={setCarousel} />}
      </main>
    </>
  )
}

import Head from 'next/head'
import One from '../components/smaller/one'
import Two from '../components/smaller/two'
import Three from '../components/smaller/three'
import Four from '../components/smaller/four'
import Five from '../components/smaller/five'
import Carousel from "../components/carousel/carousel"
import {useState} from "react"


export default function Home() {

  const [carousel,setCarousel] = useState(false)
  const [slideNum,setSlideNum] = useState(1)

  return (
    <>
      <Head>
        <title>Yash Nirmal</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      
      <main className="w-screen h-screen font-gilroy overflow-hidden bg-zinc-900 flex items-center justify-center">
        <div className="bg-zinc-900 padding-2 max-w-[1400px] w-[80%] h-[90%] grid grid-cols-4 grid-rows-2 gap-[2px] p-8">
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

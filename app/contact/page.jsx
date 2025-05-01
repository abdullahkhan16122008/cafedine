"use client"
import Header from '../components/Header'
import Footer from '../components/Footer'
import GalleryVideos from '../components/GalleryVideos'
import AOS from 'aos'
import 'aos/dist/aos.css';
import Contact from '../components/Contact'
import Loader from '../components/Loader'
import { useEffect, useState } from 'react'



const page = () => {
    useEffect(() => {
    
            AOS.init();
    
        }, [])


        const [loader, setLoader] = useState(true)
        useEffect(()=>{
          setTimeout(()=>{
            setLoader(false)
          }, 1000)
        },[])
        return (
          <div>
            {loader?<Loader/>:""}
            <head>
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8927620095005859"
     crossOrigin="anonymous"></script>
      </head>

      <Header />
      <div className='h-[60vh] content-center bg-size w-full bg-[url(/kitchen.jpg)]'>
      <div className='h-full w-full backdrop-brightness-40 content-center items-center'>
        <h1 className='text-white text-center text-5xl font-medium font-serif'>Our Gallery</h1>
        </div></div>
        <Contact />
        <Footer />
    </div>
  )
}

export default page

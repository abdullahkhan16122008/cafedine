"use client"
import Header from '../components/Header'
import AboutSec from '../components/AboutSec'
import Chefs from '../components/Chefs'
import Footer from '../components/Footer'
import Between from '../components/Between'
import AboutService from '../components/AboutService'
import Testimonials from '../components/Testimonials'
import FooterSlider from '../components/FooterSlider'
import Menu from '../components/Menu'
import Foods from '../components/Foods'
import Reservation from '../components/Reservation'
import Loader from '../components/Loader'
import { useEffect, useState } from 'react'

const page = () => {
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
        <h1 className='text-white text-center text-5xl font-medium font-serif'>Reservation</h1>
        </div></div>
        <Reservation />

        <Footer />
    </div>
  )
}

export default page

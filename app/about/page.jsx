"use client"
import Header from '../components/Header'
import AboutSec from '../components/AboutSec'
import Chefs from '../components/Chefs'
import Footer from '../components/Footer'
import Between from '../components/Between'
import AboutService from '../components/AboutService'
import Testimonials from '../components/Testimonials'
import FooterSlider from '../components/FooterSlider'
import { useEffect, useState } from 'react'
import Loader from '../components/Loader'

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

      <Header />
      <div className='h-[60vh] content-center bg-size w-full bg-[url(/kitchen.jpg)]'>
      <div className='h-full w-full backdrop-brightness-40 content-center items-center'>
        <h1 className='text-white text-center text-5xl font-medium font-serif'>About Us</h1>
        </div></div>
        <AboutSec />
        <Chefs />
        <Between />
        <AboutService />
        <Testimonials />
        <FooterSlider />
        <Footer />
    </div>
  )
}

export default page

"use client"
import Header from '../components/Header'
import Footer from '../components/Footer'
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
        <h1 className='text-white text-center text-5xl font-medium font-serif'>Checkout</h1>
        </div></div>
        <section className='w-[75%] my-20 justify-self-center text-center'>

            <h1 className='theme-color text-6xl font-serif max-md:text-4xl max-sm:text-2xl'>Thank You</h1>
            <h1 className='text-6xl font-serif capitalize max-md:text-4xl max-sm:text-2xl'>for your reservation</h1>
            <h2 className='my-9 text-gray-500 text-[17px] max-md:text-[14px] max-sm:text-[10px] max-sm:my-4'>Your order hasn’t shipped yet but we will send you an email when it does.</h2>

            <div className=''>
            <button className='bg-black uppercase font-bold text-sm px-[24px] duration-200 py-[14px] text-white cursor-pointer hover:bg-[#e7272d] max-md:text-[10px] max-md:px-[12px] max-md:py-[7px]'>Back to Shop</button>

            <button className='bg-white uppercase font-bold border border-gray-300 text-sm px-[24px] duration-200 py-[14px] text-black cursor-pointer hover:bg-black hover:text-white max-md:text-[10px] max-md:px-[12px] max-md:py-[7px]'>Track Order</button>
            </div>
            

        </section>

        <Footer />
    </div>
  )
}

export default page

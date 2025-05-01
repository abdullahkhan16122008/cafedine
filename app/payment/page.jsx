"use client"
import Header from '../components/Header'
import Footer from '../components/Footer'
import Cart from '../components/Cart'
import ShippingHead from '../components/ShippingHead'
import Shipping from '../components/Shipping'
import PaymentHead from '../components/PaymentHead'
import Payment from '../components/Payment'
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
        <h1 className='text-white text-center text-5xl font-medium font-serif'>Payment</h1>
        </div></div>
        <section className='w-[75%] justify-self-center'>
            <PaymentHead />
            <Payment />
        </section>

        <Footer />
    </div>
  )
}

export default page

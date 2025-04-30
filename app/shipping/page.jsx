"use client"
import Header from '../components/Header'
import Footer from '../components/Footer'
import Cart from '../components/Cart'
import ShippingHead from '../components/ShippingHead'
import Shipping from '../components/Shipping'
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

      <Header />
      <div className='h-[60vh] content-center bg-size w-full bg-[url(/kitchen.jpg)]'>
      <div className='h-full w-full backdrop-brightness-40 content-center items-center'>
        <h1 className='text-white text-center text-5xl font-medium font-serif'>Checkout</h1>
        </div></div>
        <section className='w-[75%] justify-self-center'>

        <ShippingHead />
        <Shipping />

        </section>

        <Footer />
    </div>
  )
}

export default page

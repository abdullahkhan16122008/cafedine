"use client"
import Header from '../components/Header'
import Footer from '../components/Footer'
import Cart from '../components/Cart'
import Loader from '../components/Loader'
import { useState, useEffect } from 'react'
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
        <h1 className='text-white text-center text-5xl font-medium font-serif'>Cart Page</h1>
        </div></div>

        <Cart />
        <Footer />
    </div>
  )
}

export default page

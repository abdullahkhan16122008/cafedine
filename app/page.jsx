"use client"
import Image from "next/image";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Article1 from "./components/Article1";
import About from "./components/About";
import Menu from "./components/Menu";
import Phone from "./components/Phone";
import FooterSlider from "./components/FooterSlider";
import Footer from "./components/Footer";
import { useEffect, useState } from 'react'
import Loader from './components/Loader'
import AdBanner from "./components/AdBanner";

export default function Home() {
    const [loader, setLoader] = useState(true)
    useEffect(()=>{
      setTimeout(()=>{
        setLoader(false)
      }, 2000)
    },[])
    
  return (
    <div className=''>
      {loader?<Loader/>:""}
      <head>
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8927620095005859"
     crossOrigin="anonymous"></script>
      </head>

      <Header />
      <Hero />
      <Article1 />
      <AdBanner />
      <About />
      <Menu theme='theme-color' link1='/' link2='/starter' link3='/launch' link4='/dinner' starter='text-gray-500' display='flex' display2='flex' display3='flex' display4='flex' display5='flex' display6='flex' display7='flex' display8='flex' launch='text-gray-500' dinner='text-gray-500' />
      <Phone />
      <FooterSlider />
      <Footer />

    </div>
  );
}

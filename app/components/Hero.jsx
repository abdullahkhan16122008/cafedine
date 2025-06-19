"use client"
import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from './Header';

const Hero = () => {

    var settings = {
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autuplaySpeed: 3000,
        cssEase: "linear",
        pauseOnHover: false
      };


  return (
    <div className='relative'>
        <section className='overflow-hidden h-[120vh] w-full'>
        <Slider {...settings}>
        <div className='h-[115vh] content-center w-full bg-[url(/slide-1.jpg)]'>

        <section className='content-center px-[128px] max-sm:px-[32px]'>
          <div className='max-sm:text-center'>
            <h2 className='cookie text-[24px] theme-color max-md:text-[18px]'>Welcome to restuarant</h2>
            <h1 className='text-white text-5xl w-[40%] max-xl:w-[80%] max-sm:w-full max-md:text-4xl max-sm:text-3xl max-md:w-full leading-[55px] font-medium font-serif py-[27px] pb-[39px]'>Fresh,Delicious meal to reach your optimum health and fitness</h1>
            <button className='bg-theme-color uppercase text-white font-bold text-sm px-[24px] duration-200 py-[14px]  cursor-pointer theme-btn'>View Menu</button>
          </div>
        </section>

        </div>
        
        <div className='h-[115vh] w-full content-center bg-[url(/slide-2.jpg)] max-md:bg-contain'>

        <section className='content-center px-[128px] max-sm:px-[32px]'>
          <div className='max-sm:text-center'>
            <h2 className='cookie text-[24px] theme-color max-md:text-[18px]'>Welcome to restuarant</h2>
            <h1 className='text-white text-5xl w-[40%] max-xl:w-[80%] max-sm:w-full max-md:text-4xl max-sm:text-3xl max-md:w-full leading-[55px] font-serif font-medium serif py-[27px] pb-[39px]'>Fresh,Delicious meal to reach your optimum health and fitness</h1>
            <button className='bg-theme-color uppercase text-white font-bold text-sm px-[24px] duration-200 py-[14px]  cursor-pointer theme-btn'>View Menu</button>
          </div>
        </section>

        </div>
        
        <div className='h-[115vh] w-full content-center bg-[url(/slide-3.jpg)]'>

        <section className='content-center px-[128px] max-sm:px-[32px]'>
          <div className='max-sm:text-center'>
            <h2 className='cookie text-[24px] theme-color max-md:text-[18px]'>Welcome to restuarant</h2>
            <h1 className='text-white text-5xl w-[40%] max-xl:w-[80%] max-sm:w-full max-md:text-4xl max-sm:text-3xl max-md:w-full leading-[55px] font-serif font-medium serif py-[27px] pb-[39px]'>Fresh,Delicious meal to reach your optimum health and fitness</h1>
            <button className='bg-theme-color uppercase text-white font-bold text-sm px-[24px] duration-200 py-[14px]  cursor-pointer theme-btn'>View Menu</button>
          </div>
        </section>

        </div>
        
    </Slider>
        </section>

        
      
      
    </div>
  )
}

export default Hero;

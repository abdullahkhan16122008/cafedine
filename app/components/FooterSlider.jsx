"use client"
import Link from 'next/link'
import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const FooterSlider = () => {

    var settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autuplaySpeed: 2000,
        cssEase: "linear",
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
            }
          },]
      };

  return (
    <div>
        
        <section className='overflow-hidden h-[300px] w-full'>
        <Link href={'/'} className='absolute z-2 left-[46%] translate-y-[140px]'>
        <button className='bg-theme-color uppercase absolute text-white font-bold text-sm px-[24px] duration-200 py-[14px] cursor-pointer theme-btn'>@Instagram</button>
        </Link>

        <Slider {...settings}>
            <div className='bg-[url(/gallery-1.jpg)] bg-size h-[300px]'></div>
            <div className='bg-[url(/gallery-2.jpg)] bg-size h-[300px]'></div>
            <div className='bg-[url(/gallery-3.jpg)] bg-size h-[300px]'></div>
            <div className='bg-[url(/gallery-4.jpg)] bg-size h-[300px]'></div>
            <div className='bg-[url(/gallery-5.jpg)] bg-size h-[300px]'></div>
            <div className='bg-[url(/gallery-7.jpg)] bg-size h-[300px]'></div>
        </Slider>

        </section>
      
    </div>
  )
} 

export default FooterSlider

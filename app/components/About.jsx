"use client"
import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css';
import Image from 'next/image';

const About = () => {

    useEffect(() => {

        AOS.init();

    }, [])


    return (
        <div className='bg-white translate-y-[-128px]'>

            <section className='my-[180px]'>
                
                <div className='text-center'>
                    <h2 className='cookie text-[24px] theme-color py-[24px]'>About CafeDine</h2>
                    <h1 className='w-[50%] text-5xl max-md:w-[90%] max-xl:text-4xl justify-self-center font-medium font-serif'>We are a modern restaurant in the center of the city</h1>
                </div>

                <section className='w-[80%] justify-self-center flex flex-wrap justify-between my-[77px]'>

                    <div className="item w-[30%] block max-md:w-full max-md:text-center max-md:my-9" data-aos='fade-up'>
                        <Image src={'/img-1.jpg'} width={800} height={800} alt='dish' className='' />
                        <div className='px-[2px]'>
                            <h1 className='py-[16px] font-serif text-2xl max-md:text-3xl'>Quality Food</h1>
                            <h2 className='text-gray-500 text-xl max-xl:text-[17px]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.impedit maiores fugit illo deserunt!</h2>
                        </div>
                    </div>

                    <div className="item w-[30%] block max-md:w-full max-md:text-center max-md:my-9" data-aos='fade-up'>
                        <Image src={'/img-2.jpg'} width={800} height={800} alt='dish' className='' />
                        <div className='px-[2px]'>
                            <h1 className='py-[16px] font-serif text-2xl max-md:text-3xl'>Quality Food</h1>
                            <h2 className='text-gray-500 text-xl max-xl:text-[17px]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.impedit maiores fugit illo deserunt!</h2>
                        </div>
                    </div>

                    <div className="item w-[30%] block max-md:w-full max-md:text-center max-md:my-9" data-aos='fade-up'>
                        <Image src={'/img-3.jpg'} width={800} height={800} alt='dish' className='' />
                        <div className='px-[2px]'>
                            <h1 className='py-[16px] font-serif text-2xl max-md:text-3xl'>Quality Food</h1>
                            <h2 className='text-gray-500 text-xl max-xl:text-[17px]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.impedit maiores fugit illo deserunt!</h2>
                        </div>
                    </div>

                </section>
            </section>


            <section className='bg-[url(/bg-karahi.jpg)] bg-fixed bg-cover text-center'>

                <div className='backdrop-brightness-50 py-[128px]'>

                    <h2 className='cookie text-[20px] text-gray-300 py-[24px]'>Prepare The Best Dishes</h2>
                    <h1 className='w-[50%] text-4xl max-md:w-[80%] justify-self-center font-medium font-serif max-md:text-3xl text-white'>Come & Experience Our Best of World Class Cousine
                    </h1>
                    <button className='bg-white uppercase font-bold text-sm px-[35px] my-5 duration-200 py-[14px] cursor-pointer theme-btn2'>Book Now</button>

                </div>


            </section>

        </div>
    )
}

export default About;

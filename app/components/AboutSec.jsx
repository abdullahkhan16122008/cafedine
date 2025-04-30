"use client"
import Image from 'next/image'
import React from 'react'

const AboutSec = () => {
    return (
        <div>

            <section className='w-[85%] flex flex-wrap px-[64px] justify-self-center my-35'>
                <ul className="leftSide gap-[32px] flex">
                    <li>
                        <Image src={'/about-img.jpg'} width={200} height={600} alt='about' />
                    </li>
                    <li>
                        <Image src={'/about-2.jpg'} width={350} height={600} alt='about' />
                    </li>
                </ul>
                <div className='h-[77px] text-white translate-y-[360px] max-md:mt-5 max-xl:left-0 max-xl:translate-y-0 font-medium px-[24px] py-[8px] relative align-bottom left-[-9%] text-xl w-[220px] bg-theme-color'>
                    Book Now !
                    +34567890
                </div>
                <article className="rightSide w-[34%] max-2xl:w-[80%] max-sm:w-[100%] max-2xl:justify-self-center relative left-[-16%] max-2xl:left-0 max-2xl:my-15 font-medium">
                    <h1 className='text-5xl font-serif'>About Us</h1>
                    <p className='text-gray-400 text-[17px] mt-7'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente necessitatibus id, animi nemo quos eos minus adipisci veritatis quibusdamm.<br /><br />

                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. repudiandae eius doloribus accusamus fugit .
                    </p>
                    <ul className='font-medium text-[18px] capitalize my-[9px] font-serif'>
                        <li className='py-1'>- Clean Environment</li>
                        <li className='py-1'>- Experience chefs</li>
                        <li className='py-1'>- Fresh and creative dishes</li>
                    </ul>
                </article>
            </section>

        </div>
    )
}

export default AboutSec

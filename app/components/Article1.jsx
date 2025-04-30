"use client"
import Image from 'next/image'
import React,{useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css';


const Article1 = () => {
    useEffect(() => {

        AOS.init();

    }, [])
    
  return (
    <div>

        <section className='w-[80%] border-1 border-gray-200 justify-self-center justify-center flex flex-wrap bg-white translate-y-[-128px]'>
            
            <div className='justify-self-center justify-center flex flex-wrap relative left-5'>


            <div className="item block w-[25%] mx-[32px] py-[64px] max-xl:w-[30%] max-md:w-full">

                <Image src={'/soup.png'} width={50} height={50} alt='soup' className='' data-aos='fade-up' />
                <div className='py-[14px] text-gray-800 text-xl font-medium' data-aos='fade-up'>Delicious Food</div>
                <div className='text-gray-500 text-[18px]' data-aos='fade-up'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia animi ipsam obcaecati.</div>

            </div>
            

            <div className="item block bg-gray-50 w-[calc(25%+64px)] px-[64px] max-xl:px-6 mx-[32px] max-md:mx-0 max-md:px-11 max-md:translate-x-[-18px] py-[64px] max-md:w-full max-xl:w-[40%]">

                <Image src={'/order-book.png'} width={50} height={50} alt='soup' className='' data-aos='fade-up' />
                <div className='py-[14px] text-gray-800 text-xl font-medium' data-aos='fade-up'>Delicious Food</div>
                <div className='text-gray-500 text-[18px]' data-aos='fade-up'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia animi ipsam obcaecati.</div>

            </div>

            <div className="item block w-[25%] py-[64px] mx-[32px] max-xl:w-[30%] max-md:w-full">

                <Image src={'/location.png'} width={50} height={50} alt='soup' className='' data-aos='fade-up' />
                <div className='py-[14px] text-gray-800 text-xl font-medium' data-aos='fade-up'>Delicious Food</div>
                <div className='text-gray-500 text-[18px]' data-aos='fade-up'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia animi ipsam obcaecati.</div>

            </div>

            </div>

        </section>
      
    </div>
  )
}

export default Article1

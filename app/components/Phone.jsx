import Image from 'next/image';
import React from 'react'

const Phone = () => {
  return (
    <div>

        <section className='my-25 w-[70%] items-center justify-self-center flex flex-wrap'>

            <div className='border-2 border-gray-500 rounded-2xl'>
            <div className='border-17 overflow-hidden rounded-2xl shadow-2xl'>
                <Image 
                src='/phone.jpg'
                width={300}
                height={700}
                alt='phone'
                className=''
                />
            </div>
                </div>

                <div className=' relative left-[7%]'>
                    <h2 className='cookie text-[24px] theme-color py-[24px]'>About CafeDine</h2>
                    <h1 className='w-[60%] text-5xl font-medium font-serif'>Get the CafeDine App</h1>
                    <div className='my-7 text-gray-500 w-[60%]'>
                    Get instant access to recipes from celebrity Cafedia and world-renowed brands right in your pocker.
                    </div>
                    <button className='bg-black uppercase text-white text-sm px-[55px] text-left my-20 duration-200 py-[12px] cursor-pointer theme-btn2'><div className='block uppercase'>Get it on <div className='font-bold'>Google play</div></div></button>
                    <button className='bg-white uppercase border-2 mx-3 text-black text-sm px-[55px] text-left my-20 duration-200 py-[10px] cursor-pointer theme-btn2'><div className='block uppercase'>Get it on <div className='font-bold'>App Store</div></div></button>
                </div>


        </section>
      
    </div>
  )
}

export default Phone;

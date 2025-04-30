import Image from 'next/image';
import React from 'react'

const Loader = () => {
  return (
    <div>

        <section className='fixed top-[0%] left-[0%] right-[0%] bg-white z-999 bottom-[0%] justify-center justify-items-center content-center items-center'>
            <div className='w-[10%] h-[10%] max-xl:w-[30%] max-xl:h-[30%]'>
            <Image src={'/preloader.gif'} width={900} height={900} alt='preloader' />
            </div>
        </section>
      
    </div>
  )
}

export default Loader;

"use client"

import Image from "next/image"

const Foods = () => {
  return (
    <div>
      <section className="bg-gray-100 py-[128px]">


        <div className='text-center'>
          <h2 className='cookie text-[24px] theme-color py-[24px]'>Main Dishes</h2>
          <h1 className='w-[50%] text-5xl max-xl:text-4xl max-md:text-3xl max-xl:w-[80%] max-sm:text-2xl justify-self-center font-medium font-serif'>We provide quality food.We care about your health</h1>
        </div>

        <section className="foods w-[80%] justify-self-center">
          <ul className="flex flex-wrap relative max-xl:block max-xl:justify-items-center xl:left-15 my-9 gap-[35px]">
            
            
            <li className="w-[28%] block max-xl:my-7 max-xl:w-[50%] max-md:w-full">
              <Image src={'/m-5.jpg'} width={900} height={200} alt="food" />
              <div className="bg-white py-5 px-5">
                <h1 className="text-xl font-serif font-medium">Tuna Roast Source - <span className="theme-color">23$</span></h1>
                <p className="my-4 font-medium text-gray-400">Mushrooms, Ruccola, Pomodoro, Mozzarella, Olives</p>
                <button className='bg-theme-color uppercase text-center text-white font-bold text-sm px-[24px] mt-2 duration-200 py-[14px] cursor-pointer theme-btn'>Add To Cart</button>
              </div>
            </li>
            
            
            <li className="w-[28%] block max-xl:my-7 max-xl:w-[50%] max-md:w-full">
              <Image src={'/m-3.jpg'} width={900} height={200} alt="food" />
              <div className="bg-white py-5 px-5">
                <h1 className="text-xl font-serif font-medium">Tuna Roast Source - <span className="theme-color">23$</span></h1>
                <p className="my-4 font-medium text-gray-400">Mushrooms, Ruccola, Pomodoro, Mozzarella, Olives</p>
                <button className='bg-theme-color uppercase text-center text-white font-bold text-sm px-[24px] mt-2 duration-200 py-[14px] cursor-pointer theme-btn'>Add To Cart</button>
              </div>
            </li>
            
            
            <li className="w-[28%] block max-xl:w-[50%] max-xl:my-7 max-md:w-full">
              <Image src={'/m-4.jpg'} width={900} height={200} alt="food" />
              <div className="bg-white py-5 px-5">
                <h1 className="text-xl font-serif font-medium">Tuna Roast Source - <span className="theme-color">23$</span></h1>
                <p className="my-4 font-medium text-gray-400">Mushrooms, Ruccola, Pomodoro, Mozzarella, Olives</p>
                <button className='bg-theme-color uppercase text-center text-white font-bold text-sm px-[24px] mt-2 duration-200 py-[14px] cursor-pointer theme-btn'>Add To Cart</button>
              </div>
            </li>
            
            
            <li className="w-[28%] block max-xl:w-[50%] max-md:w-full max-xl:my-7">
              <Image src={'/m-5.jpg'} width={900} height={200} alt="food" />
              <div className="bg-white py-5 px-5">
                <h1 className="text-xl font-serif font-medium">Tuna Roast Source - <span className="theme-color">23$</span></h1>
                <p className="my-4 font-medium text-gray-400">Mushrooms, Ruccola, Pomodoro, Mozzarella, Olives</p>
                <button className='bg-theme-color uppercase text-center text-white font-bold text-sm px-[24px] mt-2 duration-200 py-[14px] cursor-pointer theme-btn'>Add To Cart</button>
              </div>
            </li>
            
            
            <li className="w-[28%] block max-xl:w-[50%] max-md:w-full max-xl:my-7">
              <Image src={'/m-4.jpg'} width={900} height={200} alt="food" />
              <div className="bg-white py-5 px-5">
                <h1 className="text-xl font-serif font-medium">Tuna Roast Source - <span className="theme-color">23$</span></h1>
                <p className="my-4 font-medium text-gray-400">Mushrooms, Ruccola, Pomodoro, Mozzarella, Olives</p>
                <button className='bg-theme-color uppercase text-center text-white font-bold text-sm px-[24px] mt-2 duration-200 py-[14px] cursor-pointer theme-btn'>Add To Cart</button>
              </div>
            </li>
            
            
            <li className="w-[28%] block max-xl:w-[50%] max-md:w-full max-xl:my-7">
              <Image src={'/m-5.jpg'} width={900} height={200} alt="food" />
              <div className="bg-white py-5 px-5">
                <h1 className="text-xl font-serif font-medium">Tuna Roast Source - <span className="theme-color">23$</span></h1>
                <p className="my-4 font-medium text-gray-400">Mushrooms, Ruccola, Pomodoro, Mozzarella, Olives</p>
                <button className='bg-theme-color uppercase text-center text-white font-bold text-sm px-[24px] mt-2 duration-200 py-[14px] cursor-pointer theme-btn'>Add To Cart</button>
              </div>
            </li>
            
            


          </ul>
        </section>


      </section>
    </div>
  )
}

export default Foods

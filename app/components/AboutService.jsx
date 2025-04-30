import Image from "next/image";
import React from "react";

const AboutService = () => {
  return (
    <div>
      <section className="my-30">


        <div className="text-center pb-[77px]">
          <h2 className="cookie text-[24px] max-md:text-[18px] theme-color py-[24px] capitalize">
            Our Services
          </h2>
          <h1 className="w-[47%] leading-[55px] max-md:w-[80%] max-md:text-4xl text-5xl justify-self-center font-medium font-serif">
            We provide good services with lots of facilities
          </h1>
        </div>

        <section className="my-9 w-[60%] justify-self-center">
          <ul className="flex gap-[10px] flex-wrap">
            
            
            <li className="block w-[32%] text-center justify-center max-xl:w-[45%] max-md:w-full justify-items-center">
              <Image src={'/glass.png'} width={50} height={100} alt="glass" className="my-5" />
              <h1 className="text-[24px] text-center text-gray-800 font-serif">Fresh Food</h1>
              <p className="my-4 text-[16px] text-gray-500">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
            </li>
            
            
            <li className="block w-[32%] text-center justify-center max-xl:w-[45%] max-md:w-full justify-items-center">
              <Image src={'/cusine.png'} width={50} height={100} alt="glass" className="my-5" />
              <h1 className="text-[24px] text-center text-gray-800 font-serif">Quality Cuisine</h1>
              <p className="my-4 text-[16px] text-gray-500">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
            </li>
            
            
            <li className="block w-[32%] text-center justify-center max-xl:w-[45%] max-md:w-full justify-items-center">
              <Image src={'/cake.png'} width={50} height={100} alt="glass" className="my-5" />
              <h1 className="text-[24px] text-center text-gray-800 font-serif">Bread & Pancake</h1>
              <p className="my-4 text-[16px] text-gray-500">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
            </li>
            
            
            <li className="block w-[32%] text-center justify-center max-xl:w-[45%] max-md:w-full justify-items-center">
              <Image src={'/salaad.png'} width={50} height={100} alt="glass" className="my-5" />
              <h1 className="text-[24px] text-center text-gray-800 font-serif">Fresh Vegies Salad</h1>
              <p className="my-4 text-[16px] text-gray-500">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
            </li>
            
            
            <li className="block w-[32%] text-center justify-center max-xl:w-[45%] max-md:w-full justify-items-center">
              <Image src={'/chair.png'} width={50} height={100} alt="glass" className="my-5" />
              <h1 className="text-[24px] text-center text-gray-800 font-serif">Event Management</h1>
              <p className="my-4 text-[16px] text-gray-500">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
            </li>
            
            
            <li className="block w-[32%] text-center justify-center max-xl:w-[45%] max-md:w-full justify-items-center">
              <Image src={'/ready.png'} width={50} height={100} alt="glass" className="my-5" />
              <h1 className="text-[24px] text-center text-gray-800 font-serif">Reserve Now</h1>
              <p className="my-4 text-[16px] text-gray-500">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
            </li>
          </ul>
        </section>
      </section>
    </div>
  );
};

export default AboutService;

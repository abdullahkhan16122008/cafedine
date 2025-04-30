"use client"
import React from 'react'
import Image from 'next/image';
import Link from 'next/link';




const Menu = (props) => {
    return (
        <div>

            <section className='w-[80%] justify-self-center'>

                <div className='text-center'>
                    <h2 className='cookie text-[24px] theme-color py-[24px]'>About CafeDine</h2>
                    <h1 className='w-[55%] text-5xl justify-self-center font-medium font-serif max-md:w-[95%] max-sm:text-3xl max-xl:w-[80%]'>We provide quality food.We care about your health</h1>
                </div>

                <nav className='justify-center w-[100%] justify-items-center justify-self-center mt-18 mb-9'>
                    <ul className='flex flex-wrap gap-20 uppercase'>

                        <li className={`${props.theme} font-bold cursor-pointer text-[16px]`}>
                            <Link href={`${props.link1}`}>All</Link>
                        </li>

                        <li className={`${props.starter} font-bold cursor-pointer text-[16px]`}>
                            <Link href={`${props.link2}`}>Starter</Link>
                        </li>

                        <li className={`${props.launch} font-bold cursor-pointer text-[16px]`}>
                            <Link href={`${props.link3}`}>Launch</Link>
                        </li>

                        <li className={`${props.dinner} font-bold cursor-pointer text-[16px]`}>
                            <Link href={`${props.link4}`}>Dinner</Link>
                        </li>

                    </ul>
                </nav>

                <section className=''>
                    <ul className='flex flex-wrap justify-between'>

                        <li className={`${props.display} px-[24px] w-[48%] max-xl:w-full my-[12px] py-[16px] border-dashed border-1 border-gray-400 items-center`}>
                            <Image src={'/menu-1.jpg'} width={150} height={50} alt='dish' className='mr-[16px]' />
                            <div className='block'>
                                <div className='font-medium text-xl font-sans'>Vitello Tonato - <span className='theme-color'>23$</span></div>
                                <div className='text-gray-400 mt-1 text-[18px]'>Chinese mustard/Chipotle aiol</div>
                            </div>
                        </li>

                        <li className={`${props.display2} px-[24px] w-[48%]  max-xl:w-full my-[12px] py-[16px] border-dashed border-1 border-gray-400 items-center`}>
                            <Image src={'/menu-2.jpg'} width={150} height={50} alt='dish' className='mr-[16px]' />
                            <div className='block'>
                                <div className='font-medium text-xl font-sans'>Crema di Pomodoro - <span className='theme-color'>34$</span></div>
                                <div className='text-gray-400 mt-1 text-[18px]'>Chinese mustard/Chipotle aiol</div>
                            </div>
                        </li>


                        <li className={`${props.display3} px-[24px] w-[48%] max-xl:w-full my-[12px] py-[16px] border-dashed border-1 border-gray-400 items-center`}>
                            <Image src={'/menu-3.jpg'} width={150} height={50} alt='dish' className='mr-[16px]' />
                            <div className='block'>
                                <div className='font-medium text-xl font-sans'>Oatmeal Cookie - <span className='theme-color'>13$</span></div>
                                <div className='text-gray-400 mt-1 text-[18px]'>Chinese mustard/Chipotle aiol</div>
                            </div>
                        </li>

                        <li className={`${props.display4} px-[24px] w-[48%] max-xl:w-full my-[12px] py-[16px] border-dashed border-1 border-gray-400 items-center`}>
                            <Image src={'/menu-4.jpg'} width={150} height={50} alt='dish' className='mr-[16px]' />
                            <div className='block'>
                                <div className='font-medium text-xl font-sans'>Seasonal Soup - <span className='theme-color'>10$</span></div>
                                <div className='text-gray-400 mt-1 text-[18px]'>Chinese mustard/Chipotle aiol</div>
                            </div>
                        </li>


                        <li className={`${props.display5} px-[24px] w-[48%] max-xl:w-full my-[12px] py-[16px] border-dashed border-1 border-gray-400 items-center`}>
                            <Image src={'/menu-5.jpg'} width={150} height={50} alt='dish' className='mr-[16px]' />
                            <div className='block'>
                                <div className='font-medium text-xl font-sans'>Pizza Pane - <span className='theme-color'>28$</span></div>
                                <div className='text-gray-400 mt-1 text-[18px]'>Chinese mustard/Chipotle aiol</div>
                            </div>
                        </li>

                        <li className={`${props.display6} px-[24px] w-[48%] max-xl:w-full my-[12px] py-[16px] border-dashed border-1 border-gray-400 items-center`}>
                            <Image src={'/menu-6.jpg'} width={150} height={50} alt='dish' className='mr-[16px]' />
                            <div className='block'>
                                <div className='font-medium text-xl font-sans'>Carpacio - <span className='theme-color'>20$</span></div>
                                <div className='text-gray-400 mt-1 text-[18px]'>Chinese mustard/Chipotle aiol</div>
                            </div>
                        </li>


                        <li className={`${props.display7} px-[24px] w-[48%] max-xl:w-full my-[12px] py-[16px] border-dashed border-1 border-gray-400 items-center`}>
                            <Image src={'/menu-7.jpg'} width={150} height={50} alt='dish' className='mr-[16px]' />
                            <div className='block'>
                                <div className='font-medium text-xl font-sans'>Insalata Rucola - <span className='theme-color'>15$</span></div>
                                <div className='text-gray-400 mt-1 text-[18px]'>Chinese mustard/Chipotle aiol</div>
                            </div>
                        </li>

                        <li className={`${props.display8} px-[24px] w-[48%] max-xl:w-full my-[12px] py-[16px] border-dashed border-1 border-gray-400 items-center`}>
                            <Image src={'/menu-8.jpg'} width={150} height={50} alt='dish' className='mr-[16px]' />
                            <div className='block'>
                                <div className='font-medium text-xl font-sans'>Carpacio - <span className='theme-color'>13$</span></div>
                                <div className='text-gray-400 mt-1 text-[18px]'>Chinese mustard/Chipotle aiol</div>
                            </div>
                        </li>

                    </ul>
                    <div className='text-center'>
                        <button className='bg-black uppercase text-center text-white font-bold text-sm px-[24px] my-20 duration-200 py-[14px] cursor-pointer theme-btn2'>View Full Menu</button>
                    </div>



                </section>



            </section>

        </div>
    )
}

export default Menu;

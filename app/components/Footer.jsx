import Image from 'next/image';
import React from 'react'
import Link from 'next/link';

const Footer = () => {
    return (
        <div>

            <footer className="text-gray-400 body-font bg-footer">

                


                <div className="container px-5 max-md:pl-0 max-md:ml-[10px] py-24 w-[80%] justify-self-center mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                    <div className="w-64 max-sm:w-[100%] flex-shrink-0 md:mx-0 mx-auto max-sm:mx-0 text-center md:text-left">
                        <Link href={''} className="flex title-font font-medium items-center md:justify-start justify-center text-white">
                            <span className="font-serif logo text-xl">About</span>
                        </Link>
                        <p className="mt-9 text-[18px] max-md:translate-x-[-45px] w-[350px] max-sm:translate-x-0 max-sm:w-full text-gray-400">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet, nam!
                        </p>

                        <div className='mt-9'>


                        <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                            <Link href={''} className="text-gray-400">
                                <svg
                                    fill="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    className="w-5 h-5"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                                </svg>
                            </Link>
                            <Link href={''} className="ml-3 text-gray-400">
                                <svg
                                    fill="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    className="w-5 h-5"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                                </svg>
                            </Link>
                            <Link href={''} className="ml-3 text-gray-400">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    className="w-5 h-5"
                                    viewBox="0 0 24 24"
                                >
                                    <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
                                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
                                </svg>
                            </Link>
                            <Link href={''} className="ml-3 text-gray-400">
                                <svg
                                    fill="currentColor"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={0}
                                    className="w-5 h-5"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        stroke="none"
                                        d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                                    />
                                    <circle cx={4} cy={4} r={2} stroke="none" />
                                </svg>
                            </Link>
                        </span>

                        </div>
                        
                    </div>

                    <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
                        <div className="lg:w-1/4 mx-[150px] md:w-1/2 max-sm:mx-0 w-full px-4">
                            <h2 className="title-font font-medium text-white tracking-widest text-xl mb-9">
                                Contact Info
                            </h2>
                            <nav className="list-none mb-10">
                                <li className='py-[12px]'>
                                    <Link href={''} className="text-gray-400 hover:text-white">Phone : +1 987 654 3210</Link>
                                </li>
                                <li className='py-[12px]'>
                                    <Link href={''} className="text-gray-400">Mail : mail@support.com</Link>
                                </li>
                                <li className='py-[12px]'>
                                    <Link href={''} className="text-gray-400">Address : 1234 Altschul, New York,NY 10027-0000
                                    </Link>
                                </li>
                                <li className='py-[12px]'>
                                    <Link href={''} className="text-gray-400">Career</Link>
                                </li>
                                <li className='py-[12px]'>
                                    <Link href={''} className="text-gray-400">FAQs</Link>
                                </li>
                            </nav>
                        </div>
                        
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-medium text-white tracking-widest text-xl mb-9">
                                Open Hours
                            </h2>
                            <nav className="list-none mb-10">
                                <li className='py-[12px]'>
                                    <Link href={''} className="text-gray-400">Monday - Thursday</Link>
                                    <div className='font-medium font-serif text-white uppercase'>10:00 am - 11:00 pm </div>
                                </li>
                                <li className='py-[12px]'>
                                    <Link href={''} className="text-gray-400">Friday - Sunday</Link>
                                    <div className='font-medium font-serif text-white uppercase'>12:00 am - 3:00 am </div>
                                </li>
                            </nav>
                        </div>
                    </div>
                </div>



                <div className='text-center'>
                    <h1 className='text-xl py-[16px] font-medium'>Get latest food recipe at your inbox</h1>
                    <div className='inline'>
                    <input type="email" name="email" id="email" placeholder='Enter Email' className='border-1 w-[35%] max-md:w-[50%] px-[12px] py-[9px] border-gray-800' />
                    <div className='relative left-[-2%] max-md:left-[-7%] max-xl:left-[-5%] inline text-xl cursor-pointer'><Link href={'/'}>&#9993;</Link></div>
                    </div>
                </div>



                <div className="bg-footer-2 mt-[24px] px-[128px] max-sm:px-[16px] py-[16px] w-full justify-self-center flex flex-wrap">

                    <div className='text-xl max-xl:text-[16px]'>Copyright © 2019 a theme by <span className='text-white'>themefisher.com</span></div>
                    <div className='relative max-xl:left-[10%] max-sm:left-[0%] max-sm:translate-x-[0px] max-xl:mt-10 left-[30%]'>
                        <ul className='flex font-medium gap-[24px] max-md:gap-[12px]'>
                            <li><Link href='/' className='max-md:text-[14px]'>Home</Link></li>
                            <li><Link href='/' className='max-md:text-[14px]'>About Us</Link></li>
                            <li><Link href='/' className='max-md:text-[14px]'>Gallery</Link></li>
                            <li><Link href='/' className='max-md:text-[14px]'>Privacy Policy</Link></li>
                            <li><Link href='/' className='max-md:text-[14px]'>Use of Terms</Link></li>
                        </ul>
                    </div>
                    
                </div>
            </footer>


        </div>
    )
}

export default Footer;

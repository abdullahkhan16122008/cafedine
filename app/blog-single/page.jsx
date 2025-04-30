"use client"
import Header from '../components/Header'
import Footer from '../components/Footer'
import Image from "next/image";
import { useState, useEffect } from "react";
import Blogs from "../components/Blogs";
import Link from "next/link";
import Loader from '../components/Loader';


const page = () => {
  const [loader, setLoader] = useState(true)
  useEffect(()=>{
    setTimeout(()=>{
      setLoader(false)
    }, 1000)
  },[])
  return (
    <div>
      {loader?<Loader/>:""}

      <Header />
      <div className='h-[60vh] content-center bg-size w-full bg-[url(/kitchen.jpg)]'>
      <div className='h-full w-full backdrop-brightness-40 content-center items-center'>
        <h1 className='text-white text-center text-5xl font-medium font-serif'>Blog Single</h1>
        </div></div>

        <main className="py-[100px]">
        <section className="Bmain flex flex-wrap w-[75%] justify-self-center">
          <section className="leftSide w-[58%]">


            <div>
            
            
                        <div className="blogs my-5">
                          <div className="blog">
                            <Image
                              src={'/img-1.jpg'}
                              height={780}
                              width={750}
                              alt="blog"
                              />
                            <ul className="flex text-gray-400 mt-9 gap-[20px]">
                              <li>COOKING &nbsp; |</li>
                              <li className=""> Oct 16, 2019 &nbsp; |</li>
                              <li className=""> 06 Comment (s)</li>
                            </ul>
                            <h1 className="text-4xl hover:text-[#e7272d] duration-200 font-serif leading-[45px] my-7 font-bold">
                            If you are starting off with a new domain name with no traffic so to speak of you.
                              </h1>
                            <p className="mt-9 mb-4 text-gray-600">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro odio aperiam nostrum sequi mollitia, sapiente eos aspernatur obcaecati molestias cupiditate autem, tempora dicta esse. Reprehenderit unde, maiores at expedita repellendus. <br /><br />But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happinesso one rejects dislikes actual teachings of the great explorer of the truth the master-builder of human <br /><br />Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits. Dramatically visualize customer directed convergence without revolutionary ROI.Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas. Dramatically maintain clicks-and-mortar solutions without functional solutions.
                            </p>
                        <button className='bg-theme-color uppercase text-white font-bold text-sm px-[24px] duration-200 py-[14px]  cursor-pointer theme-btn'>Read More</button>
                          </div>
                        </div>
            
                        
            
                </div>



          </section>



          <section className="rightSide text-center px-[60px] justify-center w-[42%] justify-items-center">
           

            <div className="searchBar flex w-full my-[22px]">
              <input type="search" name="search" id="" className="border-1 w-[100%] border-gray-400 py-[9px] px-[12px]" placeholder="Search.." />
              <button>
              <Image src={'/plane.png'} width={50} height={50} alt="img" className="ml-[-18px] translate-x-[-20px] translate-y-1.5 mb-[12px]" />
              </button>
            </div>

            
            <div className="followUs justify-self-start mt-[64px] my-[32px]">

              <h1 className="uppercase cookie text-start text-2xl">Follow Us</h1>

              <div className="socialLinks flex my-5">
                <ul className="flex items-center gap-[16px]">
                  <li>
                <a href="#" className='font-bold text-2xl text-gray-400 translate-y-[-3px] mr-[20px]'>f</a>
                  </li>
                  <div className="w-[32px] h-[1px] relative left-[-3%] bg-gray-400"></div>
                  <li>
                <a href="#"><img src="/twitter.png" alt="" className='h-[30px] brightness-60 mr-[12px]' /></a>
                  </li>
                  <div className="w-[32px] h-[1px] relative left-[-3%] bg-gray-400"></div>
                  <li>
                <a href="#"><img src="/instagram.png" alt="" className='h-[30px] brightness-60 mr-[12px]' /></a>
                  </li>
                  <div className="w-[32px] h-[1px] relative left-[-3%] bg-gray-400"></div>
                  <li>
                <a href="#"><img src="/linkedin.png" alt="" className='h-[30px] brightness-60' /></a>
                  </li>
                  </ul>
              </div>


            </div>

            
            <div className="categories justify-self-start my-10">
              <h1 className="uppercase aldrich text-[22px] text-left border-b border-gray-300 pb-2">Popular Posts</h1>
              <ul className="my-5 text-start leading-[45px]">


                <li>
                  <Link href='#' className='flex items-center content-center'>
                    <div className="newsLeft">
                      <Image src={'/img-5.jpg'} width={100} height={250} alt="img" className="scale-y-[1.7] scale-x-[1.1]" />
                    </div>
                    <div className="block mx-[16px]">
                    <h1 className="font-bold leading-[24px] mt-1 font-serif">Join Us For a Delicious Event</h1>
                      <div className="text-gray-400 font-bold font-serif">
                        20 DECEMBER 2025
                      </div>
                    </div>
                  </Link>
                </li>

                <li>
                  <Link href='#' className='flex items-center content-center'>
                    <div className="newsLeft">
                      <Image src={'/img-6.jpg'} width={100} height={250} alt="img" className="scale-y-[1.7] scale-x-[1.1]" />
                    </div>
                    <div className="block mx-[16px]">
                      <h1 className="font-bold leading-[24px] mt-1 font-serif">Join Us For a Delicious Event</h1>
                      <div className="text-gray-400 font-bold font-serif">
                        20 DECEMBER 2025
                      </div>
                    </div>
                  </Link>
                </li>

                <li>
                  <Link href='#' className='flex items-center content-center'>
                    <div className="newsLeft">
                      <Image src={'/img-7.jpg'} width={100} height={250} alt="img" className="scale-y-[1.7] scale-x-[1.1]" />
                    </div>
                    <div className="block mx-[16px]">
                      <h1 className="font-bold leading-[24px] mt-1 font-serif">Join Us For a Delicious Event</h1>
                      <div className="text-gray-400 font-bold font-serif">
                        20 DECEMBER 2025
                      </div>
                    </div>
                  </Link>
                </li>


              </ul>
            </div>


            <div className="categories justify-self-start my-10">
              <h1 className="uppercase aldrich text-[22px]">Categories</h1>
              <ul className="my-5 text-start leading-[45px]">
                <li>
                  <Link href='#' className='text-[16px] text-gray-800'>Work Space</Link>
                </li>

                <li>
                  <Link href='#' className='text-[16px] text-gray-800'>Office Building</Link>
                </li>

                <li>
                  <Link href='#' className='text-[16px] text-gray-800'>HomeStay</Link>
                </li>

                <li>
                  <Link href='#' className='text-[16px] text-gray-800'>Making</Link>
                </li>

                <li>
                  <Link href='#' className='text-[16px] text-gray-800'>Process</Link>
                </li>
              </ul>
            </div>





            <div className="categories justify-self-start my-10">
              <h1 className="uppercase aldrich text-start text-[22px]">Tags</h1>
              <ul className="my-5 list-disc relative left-[5%] text-gray-400 flex gap-[25px] leading-[4px] w-[90%] flex-wrap text-start font-bold">


                <li>
                  <Link href='#' className='text-[14px] font-bold text-gray-400'>
                    Branding
                  </Link>
                </li>

                <li>
                  <Link href='#' className='text-[14px] font-bold text-gray-400'>
                    Planning
                  </Link>
                </li>

                <li>
                  <Link href='#' className='text-[14px] font-bold text-gray-400'>
                    Business
                  </Link>
                </li>

                <li>
                  <Link href='#' className='text-[14px] font-bold text-gray-400'>
                    Travel
                  </Link>
                </li>

                <li>
                  <Link href='#' className='text-[14px] font-bold text-gray-400'>
                    Ideas
                  </Link>
                </li>

                <li>
                  <Link href='#' className='text-[14px] font-bold text-gray-400'>
                    Planes
                  </Link>
                </li>

                <li>
                  <Link href='#' className='text-[14px] font-bold text-gray-400'>
                    Designs
                  </Link>
                </li>

                <li>
                  <Link href='#' className='text-[14px] font-bold text-gray-400'>
                    Latest
                  </Link>
                </li>

                <li>
                  <Link href='#' className='text-[14px] font-bold text-gray-400'>
                    New Designs
                  </Link>
                </li>



              </ul>
            </div>



            <div className="newsShelter mt-[16px] w-[100%]">

            <h1 className="uppercase aldrich text-start text-[22px]">Newsshelter</h1>

            <div className="searchBar flex w-[100%] my-[12px]">
              <input type="search" name="search" id="" className="border-b-1 w-[100%] border-gray-400 py-[9px] px-[12px]" placeholder="Search.." />
              <button>
              <Image src={'/plane.png'} width={50} height={50} alt="img" className="ml-[-18px] mb-[12px]" />
              </button>
            </div>
            
            </div>




          </section>




        </section>
      </main>


        <Footer />
    </div>
  )
}

export default page

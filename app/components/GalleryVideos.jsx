import Image from "next/image"
import AOS from 'aos'
import 'aos/dist/aos.css';
import { useEffect } from "react";


const GalleryVideos = () => {
    useEffect(() => {
    
            AOS.init();
    
        }, [])
    return (
        <div>

            <section className="my-20">


                <div className='text-center'>
                    <h2 className='cookie text-[24px] theme-color py-[24px] capitalize'>our gallery</h2>
                    <h1 className='w-[50%] text-5xl max-xl:text-4xl max-md:text-3xl max-xl:w-[80%] max-sm:text-2xl justify-self-center font-medium font-serif'>Awesome place good decoration to spend quality time</h1>
                </div>
                <article className="my-9">
                    <ul className="flex flex-wrap gap-[30px] w-[80%] relative xl:left-20 max-xl:block max-xl:justify-items-center max-xl:w-full justify-self-center">
                        <li className="w-[28%] max-xl:my-5 max-xl:w-[50%] h-[250px] bg-[url(/img-3.jpg)] bg-size" data-aos='fade-up'>
                            <div className="backdrop-brightness-30 w-full h-full justify-items-center content-center items-center text-center">
                                <button className="rounded-full duration-300 px-[12px] py-[12px] border-1 hover:border-[#e7272d] border-white overflow-hidden hover:bg-[#e7272d]">
                                    <Image src={'/play.webp'} width={50} height={50} alt="play" className="rounded-full" />
                                </button>
                            </div>
                        </li>
                        <li className="w-[28%] h-[250px] max-xl:my-5 max-xl:w-[50%] bg-[url(/img-5.jpg)] bg-size" data-aos='fade-up' data-aos-delay='100'>
                            <div className="backdrop-brightness-30 w-full h-full justify-items-center content-center items-center text-center">
                                <button className="rounded-full duration-300 px-[12px] py-[12px] border-1 hover:border-[#e7272d] border-white overflow-hidden hover:bg-[#e7272d]">
                                    <Image src={'/play.webp'} width={50} height={50} alt="play" className="rounded-full" />
                                </button>
                            </div>
                        </li>
                        <li className="w-[28%] h-[250px] max-xl:w-[50%] max-xl:my-5 bg-[url(/img-7.jpg)] bg-size" data-aos='fade-up' data-aos-delay='200'>
                            <div className="backdrop-brightness-30 w-full h-full justify-items-center content-center items-center text-center">
                                <button className="rounded-full duration-300 px-[12px] py-[12px] border-1 hover:border-[#e7272d] border-white overflow-hidden hover:bg-[#e7272d]">
                                    <Image src={'/play.webp'} width={50} height={50} alt="play" className="rounded-full" />
                                </button>
                            </div>
                        </li>
                    </ul>
                </article>

                <hr className="h-[1px] bg-gray-300 w-full border-none my-30" />
                <section className="flex flex-wrap w-[80%] justify-self-center">
                    <h1 className="font-serif text-center mx-[16px] text-5xl max-xl:w-[100%] max-xl:my-5 max-md:text-4xl w-[30%]">Lets check out some more</h1>
                    <h3 className="text-gray-500 text-[18px] w-[65%] max-xl:w-full max-xl:text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae veritatis in facere a cupiditate quibusdam sapiente rerum architecto facilis ab tempore accusantium laboriosam at porro, aut suscipit rem voluptate neque.</h3>
                </section>

            </section>

            <section className="w-[80%] my-20 justify-self-center">
                <ul className="flex relative xl:left-22 flex-wrap max-xl:justify-items-center max-xl:block gap-[25px]">
                    <li className="w-[27%] max-xl:mt-[25px] max-xl:w-[80%]"><Image src={'/img-3.jpg'} width={1000} height={1000} alt="gallery" data-aos='fade-up' /></li>
                    <li className="w-[27%] max-xl:w-[80%] max-xl:mt-[25px]"><Image src={'/img-4.jpg'} width={1000} height={1000} alt="gallery" data-aos='fade-up' data-aos-delay='100' /></li>
                    <li className="w-[27%] max-xl:w-[80%]  max-xl:mt-[25px]"><Image src={'/img-5.jpg'} width={1000} height={1000} alt="gallery" data-aos='fade-up' data-aos-delay='200'/></li>
                    <li className="w-[27%] max-xl:w-[80%]  max-xl:mt-[25px]"><Image src={'/img-6.jpg'} width={1000} height={1000} alt="gallery" data-aos='fade-up' /></li>
                    <li className="w-[27%] max-xl:w-[80%]  max-xl:mt-[25px]"><Image src={'/img-7.jpg'} width={1000} height={1000} alt="gallery" data-aos='fade-up' data-aos-delay='100' /></li>
                    <li className="w-[27%] max-xl:w-[80%]  max-xl:mt-[25px]"><Image src={'/img-8.jpg'} width={1000} height={1000} alt="gallery" data-aos='fade-up' data-aos-delay='200' /></li>
                    <li className="w-[27%] max-xl:w-[80%]  max-xl:mt-[25px]"><Image src={'/img-9.jpg'} width={1000} height={1000} alt="gallery" data-aos='fade-up' /></li>
                    <li className="w-[27%] max-xl:w-[80%]  max-xl:mt-[25px]"><Image src={'/img-10.jpg'} width={1000} height={1000} alt="gallery" data-aos='fade-up' data-aos-delay='100' /></li>
                    <li className="w-[27%] max-xl:w-[80%]  max-xl:mt-[25px]"><Image src={'/img-12.jpg'} width={1000} height={1000} alt="gallery" data-aos='fade-up' data-aos-delay='200' /></li>

                </ul>
            </section>

        </div>
    )
}

export default GalleryVideos

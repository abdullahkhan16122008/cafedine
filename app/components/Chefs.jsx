import Image from "next/image";
import Link from "next/link";
import React from "react";

const Chefs = () => {
    return (
        <div>
            <section className="my-20">

                <div className="text-center pb-[77px]">
                    <h2 className="cookie text-[24px] max-sm:text-[18px] theme-color py-[24px] capitalize">
                        Meet the chefs
                    </h2>
                    <h1 className="w-[50%] text-5xl max-md:w-[90%] max-sm:text-3xl justify-self-center font-medium font-serif">
                        We have experienced and creative chefs to start
                    </h1>
                </div>

                <article className="flex flex-wrap w-[80%] my-[9] justify-self-center">
                    <ul className="flex gap-[30px] flex-wrap relative left-[5%]">

                        <li className="block w-[28%] max-xl:w-[40%] max-md:w-[90%]">
                            <Image src={'/chef_1.jpg'} width={1000} height={400} alt="chef" />
                            <h1 className="pt-5 pb-1 text-[22px] font-medium font-serif">Daniel Graham</h1>
                            <h2 className="text-gray-500 pb-5 font-bold">Master Chef</h2>
                            <p className="text-gray-500 text-[17px]">Far from the countries Vokalia and Consonantia, there live the blind texts. They live in Bookmarksgrove.</p>


                            <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 pt-7 justify-center sm:justify-start">

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

                            </span>


                        </li>
                        

                        <li className="block w-[28%] max-xl:w-[40%] max-md:w-[90%]">
                            <Image src={'/chef_2.jpg'} width={1000} height={400} alt="chef" />
                            <h1 className="pt-5 pb-1 text-[22px] font-medium font-serif">Nick Browning</h1>
                            <h2 className="text-gray-500 pb-5 font-bold">Master Chef</h2>
                            <p className="text-gray-500 text-[17px]">Far from the countries Vokalia and Consonantia, there live the blind texts. They live in Bookmarksgrove.</p>


                            <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 pt-7 justify-center sm:justify-start">

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

                            </span>


                        </li>

                        <li className="block w-[28%] max-xl:w-[40%] max-md:w-[90%]">
                            <Image src={'/chef_3.jpg'} width={1000} height={400} alt="chef" />
                            <h1 className="pt-5 pb-1 text-[22px] font-medium font-serif">Willium Jack</h1>
                            <h2 className="text-gray-500 pb-5 font-bold">Master Chef</h2>
                            <p className="text-gray-500 text-[17px]">Far from the countries Vokalia and Consonantia, there live the blind texts. They live in Bookmarksgrove.</p>


                            <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 pt-7 justify-center sm:justify-start">

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

                            </span>


                        </li>

                    </ul>
                </article>
            </section>
        </div>
    );
};

export default Chefs;

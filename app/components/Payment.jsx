"use client"

import Image from "next/image";

const Payment = () => {
    return (
        <div>

            <section className="w-[90%] flex flex-wrap">

                <article className="mb-40 mr-1 w-[65%] max-xl:w-full">

                    <div className='pb-5'>
                        <h1 className='text-xl max-sm:text-2xl font-medium font-serif'>Your Details</h1>
                    </div>

                    <hr className="h-[1px] w-[100%] bg-gray-300 border-0" />

                    <ul className="my-9 gap-6 max-xl:flex-col flex flex-wrap w-full">

                        <li className="flex flex-wrap w-full justify-between items-center">
                            <h1 className="text-gray-800 text-[18px] mt-1">Name of the Card</h1>
                            <input type="text" name="name" id="name" placeholder="Full Name" className="text-gray-700 border-1 mt-2 mb-1 border-gray-300 outline-0 hover:border-[#e7272d] focus:border-[#e7272d] px-[12px] w-[60%] py-[12px] duration-200" />
                        </li>


                        <li className="flex flex-wrap w-full justify-between items-center">
                            <h1 className="text-gray-800 text-[18px] mt-1">Card Name</h1>
                            <input type="text" name="name" id="name" placeholder="Name of Card" className="text-gray-700 border-1 mt-2 mb-1 border-gray-300 outline-0 hover:border-[#e7272d] focus:border-[#e7272d] px-[12px] w-[60%] py-[12px] duration-200" />
                        </li>

                        <li className="flex flex-wrap w-full justify-between items-center">
                            <h1 className="text-gray-800 text-[18px] mt-1">Card Number</h1>
                            <input type="text" name="name" id="name" placeholder="2737-2723734-55654" className="text-gray-700 border-1 mt-2 mb-1 border-gray-300 outline-0 hover:border-[#e7272d] focus:border-[#e7272d] px-[12px] w-[60%] py-[12px] duration-200" />
                        </li>

                        <li className="flex flex-wrap w-full justify-between items-center">
                            <h1 className="text-gray-800 text-[18px] mt-1">Expiration Date</h1>
                            <div className="w-[60%] justify-between">
                                <ul className="gap-[26px] flex">

                                <li className="w-[47%]">
                            <select type="number" name="person" id="name" className="text-gray-700 border-1 mt-2 mb-5 border-gray-300 outline-0 hover:border-[#e7272d] focus:border-[#e7272d] px-[12px] w-full py-[12px] duration-200" >
                                <option value="1">Month</option>
                                <option value="2">January</option>
                                <option value="3">February</option>
                                <option value="4">March</option>
                                <option value="5">April</option>
                                <option value="6">May</option>
                                <option value="7">June</option>
                                <option value="8">July</option>
                                <option value="9">August</option>
                                <option value="10">September</option>
                                <option value="11">Octuber</option>
                                <option value="12">November</option>
                                <option value="13">December</option>
                            </select>
                                </li>

                                <li className="w-[47%]">

                            <select type="number" name="person" id="name" className="text-gray-700 border-1 mt-2 mb-5 border-gray-300 outline-0 hover:border-[#e7272d] focus:border-[#e7272d] px-[12px] w-full py-[12px] duration-200" >
                                <option value="1">Year</option>
                                <option value="2">2025</option>
                                <option value="3">2026</option>
                                <option value="4">2027</option>
                                <option value="5">2028</option>
                                <option value="6">2029</option>
                            </select>
                                </li>
                                </ul>

                            </div>
                        </li>

                        <li className="flex flex-wrap w-full justify-between items-center">
                            <h1 className="text-gray-800 text-[18px] mt-1">Security Code</h1>
                            <input type="text" name="name" id="name" placeholder="*******" className="text-gray-700 border-1 mt-2 mb-1 border-gray-300 outline-0 hover:border-[#e7272d] focus:border-[#e7272d] px-[12px] w-[60%] py-[12px] duration-200" />
                        </li>

                        <li className="flex flex-wrap w-full justify-between items-center">
                            <h1 className="text-gray-800 text-[18px] mt-1">or pay via:</h1>
                            <Image src={'/card6.png'} width={500} height={500} alt="paypal" className="text-gray-700 mt-2 mb-1 outline-0 px-[12px] w-[40%] py-[12px] duration-200 mr-37.5" />
                        </li>
                    

                    </ul>
                    <div className="content-center border h-[77px] border-gray-300 px-[9px] py-[9px]">
                        <input type="checkbox" name="check" id="check" className="mt-3" /><label htmlFor="check" className="ml-3 mt-2">I have read and accept the terms and conditions.</label>
                    <input type="submit" className='bg-theme-color relative right-2 uppercase float-right text-center text-white font-bold text-sm px-[24px] duration-200 py-[14px] cursor-pointer theme-btn' value={'Confirm'} />
                    </div>


                </article>


                <article className="w-[315px] h-[440px] px-[26px] my-40  py-[20px] bg-gray-100">
                    <div className="">
                        <div className="text-xl pb-5 mb-5 border-b border-gray-300 font-serif font-medium">Order Summery</div>
                    </div>
                    <div className="text-gray-500 text-[17px]">Excepteur sint occaecat cupidat non proident sunt officia.</div>

                    <div className="border-b my-5 border-gray-300">
                        <div className="inline-block text-gray-500 my-3 text-[16px]">Subtotal</div>
                        <div className="inline-block float-right my-3 text-[17px]">
                            $237.00</div>
                    </div>
                    <div className="border-b my-5 border-gray-300">
                        <div className="inline-block my-3 text-[16px] text-gray-500">Shipping & Handling
                        </div>
                        <div className="inline-block float-right my-3 text-[17px]">
                            $0</div>
                    </div>
                    <div className="border-b my-5 border-gray-300">
                        <div className="inline-block my-3 text-[16px] text-gray-500">Estimated Tax
                        </div>
                        <div className="inline-block float-right my-3 text-[17px]">
                            $0</div>
                    </div>
                    <div className="my-5">
                        <div className="inline-block my-3 text-[16px] text-gray-500">Grand Total
                        </div>
                        <div className="inline-block float-right my-3 text-[17px]">
                            USD $237.00</div>
                    </div>


                </article>


            </section>

        </div>
    )
}

export default Payment;

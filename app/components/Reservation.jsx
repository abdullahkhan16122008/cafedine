"use client"

const Reservation = () => {
    return (
        <div>

            <section className="my-30 w-[72%] max-xl:block flex flex-wrap justify-self-center justify-between items-center">

                <article className="my-20 w-[68%] max-xl:w-full">

                    <div className=''>
                        <h2 className='cookie text-[24px] theme-color py-[24px] capitalize'>Reservation</h2>
                        <h1 className='text-5xl max-xl:text-4xl max-md:text-3xl max-xl:w-[80%] max-sm:text-2xl font-medium font-serif'>Reserve your seat for betterment</h1>
                    </div>

                    <ul className="my-9 gap-8 max-xl:flex-col flex flex-wrap w-full">

                        <li className="w-[30%] max-xl:w-[80%] max-md:w-[100%]">
                        <h1 className="text-gray-500 text-[18px] mt-1">Name</h1>
                        <input type="text" name="name" id="name" placeholder="Full Name" className="text-gray-700 border-1 mt-2 mb-1 border-gray-300 outline-0 hover:border-[#e7272d] focus:border-[#e7272d] px-[12px] w-full py-[12px] duration-200" />
                        </li>

                        <li className="w-[30%] max-xl:w-[80%] max-md:w-[100%]">
                        <h1 className="text-gray-500 text-[18px] mt-1">Email</h1>
                        <input type="email" name="name" id="name" placeholder="Email Address" className="text-gray-700 border-1 mt-2 mb-1 border-gray-300 outline-0 hover:border-[#e7272d] focus:border-[#e7272d] px-[12px] w-full py-[12px] duration-200" />
                        </li>

                        <li className="w-[30%] max-xl:w-[80%] max-md:w-[100%]">
                        <h1 className="text-gray-500 text-[18px] mt-1">Phone</h1>
                        <input type="number" name="name" id="name" placeholder="Phone Number" className="text-gray-700 border-1 mt-2 mb-1 border-gray-300 outline-0 hover:border-[#e7272d] focus:border-[#e7272d] px-[12px] w-full py-[12px] duration-200" />
                        </li>

                        <li className="w-[30%] max-xl:w-[80%] max-md:w-[100%]">
                        <h1 className="text-gray-500 text-[18px] mt-1">Phone</h1>
                        <select type="number" name="person" id="name" className="text-gray-700 border-1 mt-2 mb-5 border-gray-300 outline-0 hover:border-[#e7272d] focus:border-[#e7272d] px-[12px] w-full py-[12px] duration-200" >
                            <option value="1">Person 1</option>
                            <option value="2">Person 2</option>
                            <option value="3">Person 3</option>
                            <option value="4">Person 4</option>
                            <option value="5">Person 5+</option>
                        </select>
                        </li>
                        
                        <li className="w-[30%] max-xl:w-[80%] max-md:w-[100%]">
                        <h1 className="text-gray-500 text-[18px] mt-1">Date</h1>
                        <input type="date" name="name" id="name" placeholder="Select Your Date" className="text-gray-700 border-1 mt-2 mb-5 border-gray-300 outline-0 hover:border-[#e7272d] focus:border-[#e7272d] px-[12px] w-full py-[12px] duration-200" />
                        </li>

                        <li className="w-[30%] max-xl:w-[80%]  max-md:w-[100%]">
                        <h1 className="text-gray-500 text-[18px] mt-1">Time</h1>
                        <input type="time" name="name" id="name" placeholder="Time" className="text-gray-700 border-1 mt-2 mb-5 border-gray-300 outline-0 hover:border-[#e7272d] focus:border-[#e7272d] px-[12px] w-full py-[12px] duration-200" />
                        </li>

                    </ul>

                    <input type="submit" className='bg-theme-color uppercase text-center text-white font-bold text-sm px-[24px] duration-200 py-[14px] cursor-pointer theme-btn' value={'Reserve Now'} />

                </article>

                <article className="w-[30%] max-xl:w-[60%] max-md:w-[100%] max-xl:justify-self-center text-center border-dashed border-2 bg-pink-50 h-[520px] px-[16px] items-center content-center text-xl">
                    <h2 className="my-2 text-[#e7272d] cookie">Check availabilty</h2>
                    <h2 className="my-2 text-5xl font-serif">Open Times</h2>
                    <h2 className="my-1 mt-9 text-[17px] font-serif">Monday - Thursday</h2>
                    <h2 className="text-[15px] text-gray-400">9.00-12.00</h2>
                    <h2 className="my-1 mt-9 text-[17px] font-serif">Friday - Sunday</h2>
                    <h2 className="text-[15px] text-gray-400">2.00-8.00</h2>
                    <h2 className="my-1 mt-9 text-3xl text-[#e7272d] cookie">Call us for</h2>
                    <h2 className="my-2 text-4xl font-medium">02 34597879</h2>

                </article>

            </section>

        </div>
    )
}

export default Reservation

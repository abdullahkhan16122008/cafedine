"use client"

const Shipping = () => {
  return (
    <div>

        <section className="w-[90%] flex flex-wrap">
            
        <article className="my-40 w-[70%] max-xl:w-full">

<div className='pb-5'>
    <h1 className='text-xl max-sm:text-2xl font-medium font-serif'>Your Details</h1>
</div>

<hr className="h-[1px] w-[95%] bg-gray-300 border-0" />

<ul className="my-9 gap-6 max-xl:flex-col flex flex-wrap w-full">

    <li className="w-[46%] max-xl:w-[80%] max-md:w-[100%]">
    <h1 className="text-gray-500 text-[18px] mt-1">First Name</h1>
    <input type="text" name="name" id="name" placeholder="Full Name" className="text-gray-700 border-1 mt-2 mb-1 border-gray-300 outline-0 hover:border-[#e7272d] focus:border-[#e7272d] px-[12px] w-full py-[12px] duration-200" />
    </li>

    <li className="w-[46%] max-xl:w-[80%] max-md:w-[100%]">
    <h1 className="text-gray-500 text-[18px] mt-1">Last Name</h1>
    <input type="text" name="name" id="name" placeholder="Email Address" className="text-gray-700 border-1 mt-2 mb-1 border-gray-300 outline-0 hover:border-[#e7272d] focus:border-[#e7272d] px-[12px] w-full py-[12px] duration-200" />
    </li>

    <li className="w-[46%] max-xl:w-[80%] max-md:w-[100%]">
    <h1 className="text-gray-500 text-[18px] mt-1">Address</h1>
    <input type="text" name="address" id="address" placeholder="Address 1" className="text-gray-700 border-1 mt-2 mb-1 border-gray-300 outline-0 hover:border-[#e7272d] focus:border-[#e7272d] px-[12px] w-full py-[12px] duration-200" />
    </li>

    <li className="w-[46%] max-xl:w-[80%] max-md:w-[100%]">
    <h1 className="text-gray-500 text-[18px] mt-1">Country</h1>
    <select type="number" name="person" id="name" className="text-gray-700 border-1 mt-2 mb-5 border-gray-300 outline-0 hover:border-[#e7272d] focus:border-[#e7272d] px-[12px] w-full py-[12px] duration-200" >
        <option value="1">Select Country</option>
        <option value="2">UK</option>
        <option value="3">London</option>
        <option value="4">Australia</option>
        <option value="5">Italy</option>
        <option value="6">Pakistan</option>
    </select>
    </li>

    <li className="w-[46%] max-xl:w-[80%] max-md:w-[100%]">
    <h1 className="text-gray-500 text-[18px] mt-1">City</h1>
    <input type="text" name="name" id="name" placeholder="City" className="text-gray-700 border-1 mt-2 mb-1 border-gray-300 outline-0 hover:border-[#e7272d] focus:border-[#e7272d] px-[12px] w-full py-[12px] duration-200" />
    </li>

    <li className="w-[46%] max-xl:w-[80%] max-md:w-[100%]">
    <h1 className="text-gray-500 text-[18px] mt-1">Zip Code</h1>
    <input type="text" name="name" id="name" placeholder="Zip Code" className="text-gray-700 border-1 mt-2 mb-1 border-gray-300 outline-0 hover:border-[#e7272d] focus:border-[#e7272d] px-[12px] w-full py-[12px] duration-200" />
    </li>

    <li className="w-[46%] max-xl:w-[80%] max-md:w-[100%]">
    <h1 className="text-gray-500 text-[18px] mt-1">Email Address</h1>
    <input type="text" name="name" id="name" placeholder="E-mail" className="text-gray-700 border-1 mt-2 mb-1 border-gray-300 outline-0 hover:border-[#e7272d] focus:border-[#e7272d] px-[12px] w-full py-[12px] duration-200" />
    </li>

    <li className="w-[46%] max-xl:w-[80%] max-md:w-[100%]">
    <h1 className="text-gray-500 text-[18px] mt-1">Phone Number</h1>
    <input type="text" name="name" id="name" placeholder="Phone no" className="text-gray-700 border-1 mt-2 mb-1 border-gray-300 outline-0 hover:border-[#e7272d] focus:border-[#e7272d] px-[12px] w-full py-[12px] duration-200" />
    </li>

    <li className="w-[95.2%] max-xl:w-[80%] max-md:w-[100%]">
    <h1 className="text-gray-500 text-[18px] mt-1"></h1>
    <textarea type="text" name="message" id="message" placeholder="Special Requirements" className="text-gray-700 border-1 h-[130px] mt-2 mb-1 border-gray-300 outline-0 hover:border-[#e7272d] resize-none focus:border-[#e7272d] px-[12px] w-full py-[12px] duration-200" ></textarea>
    </li>


</ul>

<input type="submit" className='bg-theme-color relative right-11 uppercase float-right text-center text-white font-bold text-sm px-[24px] duration-200 py-[14px] cursor-pointer theme-btn' value={'Continue to payment'} />

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

export default Shipping

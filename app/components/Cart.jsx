"use client"

import Image from "next/image"
import { useState } from "react"


const Cart = () => {
  const [value, setValue] = useState(1)
  const increment = () => {
    setValue(prev => prev + 1);
  };

  const decrement = () => {
    setValue(prev => Math.max(0, prev - 1)); // prevent going below 0
  };

  const handleChange = (e) => {
    const newValue = parseInt(e.target.value, 10);
    if (!isNaN(newValue)) {
      setValue(newValue);
    }
  };
  return (
    <div>

      <section className="my-30 w-[75%] overflow-hidden max-xl:w-[90%] justify-self-center">
        <article className="flex flex-col">

          <div className="w-full border-y-1 border-gray-300 py-[16px]">

            <div className="w-[800px] max-xl:w-[90%] overflow-auto justify-self-center flex">
              <div className="text-left ml-1 w-[300px] font-medium text-[17px]">Product Name</div>
              <div className="text-center w-[120px] ml-43 font-medium text-[17px]">Price</div>
              <div className="text-center w-[120px] ml-27 font-medium text-[17px]">Quantity</div>
              <div className="text-center w-[120px] ml-27 font-medium text-[17px]">Subtotal</div>
            </div>

          </div>

          <div className="flex flex-col">

            <div className="cartItem items-center flex py-5">
              <div className="items-center flex w-[40%]">
                <Image src={'/menu-1.jpg'} width={100} height={50} alt="item" className="h-[90px]" />
                <h1 className="font-medium text-gray-800 px-[16px]">Lemon Rosemary Chicken</h1>
              </div>
              <div className="w-[20%] justify-items-center">
                <h2 className="text-center">$79.00</h2>
              </div>
              <div>

                <div className="flex">
                  <button
                    className="bg-theme-color uppercase text-white font-bold text-sm px-[12px] duration-200 py-[5px] cursor-pointer theme-btn"
                    onClick={decrement}
                  >
                    -
                  </button>
                  <input
                    type="text"
                    value={value}
                    onChange={handleChange}
                    className="w-[64px] max-md:w-[100%] hover:border-1 hover:border-[#e7272d] bg-gray-100 px-[18px] text-center"
                  />
                  <button
                    className="bg-theme-color uppercase text-white font-bold text-sm px-[12px] duration-200 py-[5px] cursor-pointer theme-btn"
                    onClick={increment}
                  >
                    +
                  </button>
                </div>
              </div>
                <div className="w-[20%] justify-items-center">
                <h2 className="text-center">$79.00</h2>
              </div>
            </div>
            

            <div className="cartItem items-center border-y-1 border-gray-300 flex py-5">
              <div className="items-center flex w-[40%]">
                <Image src={'/menu-1.jpg'} width={100} height={50} alt="item" className="h-[90px]" />
                <h1 className="font-medium text-gray-800 px-[16px]">Lemon Rosemary Chicken</h1>
              </div>
              <div className="w-[20%] justify-items-center">
                <h2 className="text-center">$79.00</h2>
              </div>
              <div>

                <div className="flex">
                  <button
                    className="bg-theme-color uppercase text-white font-bold text-sm px-[12px] duration-200 py-[5px] cursor-pointer theme-btn"
                    onClick={decrement}
                  >
                    -
                  </button>
                  <input
                    type="text"
                    value={value}
                    onChange={handleChange}
                    className="w-[64px] max-md:w-[100%] hover:border-1 hover:border-[#e7272d] bg-gray-100 px-[18px] text-center"
                  />
                  <button
                    className="bg-theme-color uppercase text-white font-bold text-sm px-[12px] duration-200 py-[5px] cursor-pointer theme-btn"
                    onClick={increment}
                  >
                    +
                  </button>
                </div>
              </div>
                <div className="w-[20%] justify-items-center">
                <h2 className="text-center">$79.00</h2>
              </div>
            </div>

            <div className="cartItem items-center border-b-1 border-gray-300 flex py-5">
              <div className="items-center flex w-[40%]">
                <Image src={'/menu-1.jpg'} width={100} height={50} alt="item" className="h-[90px]" />
                <h1 className="font-medium text-gray-800 px-[16px]">Lemon Rosemary Chicken</h1>
              </div>
              <div className="w-[20%] justify-items-center">
                <h2 className="text-center">$79.00</h2>
              </div>
              <div>

                <div className="flex">
                  <button
                    className="bg-theme-color uppercase text-white font-bold text-sm px-[12px] duration-200 py-[5px] cursor-pointer theme-btn"
                    onClick={decrement}
                  >
                    -
                  </button>
                  <input
                    type="text"
                    value={value}
                    onChange={handleChange}
                    className="w-[64px] max-md:w-[100%] hover:border-1 hover:border-[#e7272d] bg-gray-100 px-[18px] text-center"
                  />
                  <button
                    className="bg-theme-color uppercase text-white font-bold text-sm px-[12px] duration-200 py-[5px] cursor-pointer theme-btn"
                    onClick={increment}
                  >
                    +
                  </button>
                </div>
              </div>
                <div className="w-[20%] justify-items-center">
                <h2 className="text-center">$79.00</h2>
              </div>
            </div>

            <div className="py-5 border-b border-gray-300">

              <div className="inline-flex">
              <input type="text" name="name" id="name" placeholder="Enter your coupon" className="text-gray-700 border-1 border-gray-300 outline-0 hover:border-[#e7272d] focus:border-[#e7272d] px-[12px] w-[250px] py-[12px] duration-200" />
              <input type="submit" className='bg-white ml-4 uppercase text-center text-black border border-gray-300 text-sm px-[24px] duration-200 cursor-pointer hover:text-white hover:bg-black' value={'Apply Coupon'} />
              </div>

              <input type="submit" className='bg-white ml-4 uppercase float-right text-center text-black border border-[#e7272d] font-bold text-sm px-[24px] py-[12px] duration-200 cursor-pointer hover:text-white hover:bg-[#e7272d]' value={'Ubdate Cart'} />
            </div>

          </div>
        </article>
      </section>

      <section className="w-[75%] my-30 mb-40 justify-items-end justify-self-center">

        <article className="w-[500px] max-md:w-[90%]">
          <div className="">
          <div className="text-xl pb-5 mb-5 border-b border-gray-300 font-serif font-medium">Order Summery</div>
          </div>
          <div className="text-gray-500 text-[17px]">Excepteur sint occaecat cupidat non proident sunt officia.</div>

          <div className="border-b my-5 border-gray-300">
            <div className="inline-block my-3 text-[17px]">Subtotal</div>
            <div className="inline-block float-right my-3 text-[17px]">
            $237.00</div>
          </div>
          <div className="border-b my-5 border-gray-300">
            <div className="inline-block my-3 text-[17px]">Shipping & Handling
            </div>
            <div className="inline-block float-right my-3 text-[17px]">
            $0</div>
          </div>
          <div className="border-b my-5 border-gray-300">
            <div className="inline-block my-3 text-[17px]">Estimated Tax
            </div>
            <div className="inline-block float-right my-3 text-[17px]">
            $0</div>
          </div>
          <div className="my-5">
            <div className="inline-block my-3 text-[17px]">Grand Total
            </div>
            <div className="inline-block float-right my-3 text-[17px]">
            USD $237.00</div>
          </div>
          <input type="submit" className='bg-theme-color ml-4 uppercase float-right text-center text-white font-bold text-sm w-full py-[12px] duration-200 cursor-pointer theme-btn' value={'Proceed to checkout'} />


        </article>
      </section>

    </div>
  )
}

export default Cart

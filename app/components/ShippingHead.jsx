"use client"


const ShippingHead = () => {
  return (
    <div className="border-b border-gray-300 my-20">

        <section>
            <ul className="flex flex-wrap gap-[42px] max-md:gap-[32px] max-md:flex-col">

            <li className="flex change items-center">
            <div className="w-[60px] text-white text-center py-[12px] cookie text-3xl bg-theme-color mb-5">01.</div>
            <span className="font-bold ml-5 change-t mb-4 duration-300 text-[17px]">Shipping</span>
            </li>
            

            <li className="flex items-center change duration-300 hover:text-[#e7272d]">
            <div className="w-[60px] border border-gray-300 text-center py-[12px] cookie text-3xl mb-5">02.</div>
            <span className="font-bold change-t duration-300 ml-5 mb-4 text-[17px] text-gray-800">Payment</span>
            </li>
            

            <li className="flex items-center change duration-300 hover:text-[#e7272d]">
            <div className="w-[60px] border border-gray-300 text-center py-[12px] cookie text-3xl mb-5">03.</div>
            <span className="font-bold change-t ml-5 mb-4 duration-300 text-gray-800 text-[17px]">Confirm Pay</span>
            </li>

            </ul>
        </section>
      
    </div>
  )
}

export default ShippingHead

import Image from 'next/image';
import Link from 'next/link';
import { useRef, useEffect } from 'react'

const Header = () => {

  const ref = useRef(null);

  useEffect(() => {
    // If you need to do something on mount, you can do it here
    // But currently, this effect does nothing
  }, []);

  const handleBurger = () => {
    if (ref.current && ref.current.style.height == '77px') {
      ref.current.style.height = '500px';
    }
    else if(ref.current.style.height = '500px'){
      ref.current.style.height = '77px'
    }
  };






  return (
    <div className='bg-transparent'>

        <header className='absolute top-[0%] left-0 right-[0%] z-777 max-xl:bg-black'>
          <div className='flex w-[80vw] flex-wrap justify-self-center py-[16px] justify-between'>
          <Image src={'/logo.png'} width={160} height={70} alt='logo' className='relative h-[67px] left-[5%]' />

            <div className='w-[40px] border absolute bg-white top-[30px] py-0.5 cursor-pointer right-[10%] xl:hidden px-[7px]' onClick={handleBurger}>
              <div className='w-full h-[2px] my-1.5 bg-black'></div>
              <div className='w-full h-[2px] my-1.5 bg-black'></div>
              <div className='w-full h-[2px] my-1.5 bg-black'></div>
            </div>
          <div ref={ref} className="navLinks relative translate-y-3 max-xl:h-[77px] duration-300 overflow-hidden max-xl:top-[77px] max-xl:right-[30%] max-md:right-[25%]">
            <ul className='flex max-xl:flex-col text-white max-xl:text-center max-xl:justify-items-center text-xl font-bold gap-[32px]'>

              <li>
                <Link href={'/'} className='link block' >
                <div className='w-[50px] duration-200 absolute max-xl:relative max-xl:top-6.5 top-3 hover-it z-[-1] max-xl:translate-x-[105px] h-[0px] bg-[#e7272d]'></div>
                <div className='z-20 text-[16px]'>HOME</div>
                </Link>
              </li>

              <li>
                <Link href={'/about'} className='link block' >
                <div className='w-[57px] duration-200 absolute top-3 max-xl:relative max-xl:top-6.5 max-xl:translate-x-[102px] hover-it z-[-1] h-[0px] bg-[#e7272d]'></div>
                <div className='z-20 text-[16px]'>ABOUT</div>
                </Link>
              </li>

              <li>
                <Link href={'/recipes'} className='link block' >
                <div className='w-[62px] duration-200 absolute max-xl:relative max-xl:top-6.5 max-xl:translate-x-[100px] top-3 hover-it z-[-1] h-[0px] bg-[#e7272d]'></div>
                <div className='z-20 text-[16px]'>RECIPES</div>
                </Link>
              </li>

              <li className='mr-[-28px] max-xl:translate-x-[-13px]'>
                <Link href={'/gallery'} className='link block' >
                <div className='w-[67px] duration-200 absolute top-3 max-xl:relative max-xl:top-6.5 max-xl:translate-x-[110px] hover-it z-[-1] h-[0px] bg-[#e7272d]'></div>
                <div className='z-20 text-[16px]'>GALLERY</div>
                </Link>
              </li>


              <li className='mr-[-56px] max-xl:mr-[0px] z-30 max-xl:translate-x-[-60px]'>

                <div className='link justify-items-center hover-seen block max-xl:translate-x-[64px]' >
                <div className='w-[120px] duration-200 absolute max-xl:relative max-xl:top-6.5 translate-x-10 max-xl:translate-x-0 top-3 hover-it z-[-1] h-[0px] bg-[#e7272d]'></div>
                <Link href={''} className='link hover-seen justify-items-center block z-20 text-[16px]'>RESERVATION &darr;</Link>
                <div className='bg-white seen w-[200px] h-[0px] duration-300 border-t-2 border-[#e7272d] relative max-xl:absolute max-xl:top-[50px] max-xl:left-[50px] top-[10px]'>
                  <ul className='uppercase text-black font-light text-[12px] z-50 font-serif'>
                      <Link href={'/reservation'}>
                    <li className='w-full px-[12px] py-[16px] hover:bg-[#e7272d] z-30 hover:text-white duration-300 justify-self-center'>
                      RESERVATION
                      </li>
                      </Link>
                      <Link href={'/cart'}>
                    <li className='w-full px-[12px] py-[16px] hover:bg-[#e7272d] z-30 hover:text-white duration-300 justify-self-center'>
                      Cart
                      </li>
                      </Link>
                      <Link href={'/shipping'}>
                    <li className='w-full px-[12px] py-[16px] hover:bg-[#e7272d] hover:text-white duration-300 justify-self-center'>
                      Shipping
                      </li>
                      </Link>
                      <Link href={'/payment'}>
                    <li className='w-full px-[12px] py-[16px] hover:bg-[#e7272d] hover:text-white duration-300 justify-self-center'>
                      Payment
                      </li>
                      </Link>
                      <Link href={'/confirmation'}>
                    <li className='w-full px-[12px] py-[16px] hover:bg-[#e7272d] hover:text-white duration-300 justify-self-center'>
                      Confirmation
                      </li>
                      </Link>
                  </ul>
                </div>
                </div>

              </li>


              <li className='ml-[-56px] max-xl:mr-[0px] max-xl:w-[300px] max-xl:ml-0 max-xl:translate-x-[-0px]'>
              <div className='link justify-items-center hover-seen block' >
                <div className='w-[50px] duration-200 absolute translate-x-18.5 top-3 max-xl:relative max-xl:top-6.5 max-xl:translate-x-0 hover-it z-[-5] h-[0px] bg-[#e7272d]'></div>
                <Link href={''} className='link hover-seen justify-items-center block z-[-1] text-[16px]'>Blog &darr;</Link>
                <div className='bg-white seen1 w-[200px] h-[0px] duration-300 border-t-2 border-[#e7272d] relative max-xl:absolute max-xl:top-[50px] max-xl:left-[50px] top-[10px]'>
                  <ul className='uppercase text-black font-light text-[12px] font-serif'>
                      <Link href={'/blog'}>
                    <li className='w-full px-[12px] py-[16px] hover:bg-[#e7272d] hover:text-white duration-300 justify-self-center'>
                      Blog
                      </li>
                      </Link>
                      <Link href={'/blog-single'}>
                    <li className='w-full px-[12px] py-[16px] hover:bg-[#e7272d] hover:text-white duration-300 justify-self-center'>
                      Blog Single
                      </li>
                      </Link>
                  </ul>
                </div>
                </div>
              </li>


              <li>
                <Link href={'/contact'} className='link block ml-[-56px] max-xl:ml-0' >
                <div className='w-[75px] duration-200 absolute max-xl:relative max-xl:top-6.5 max-xl:translate-x-[93px] top-3 hover-it z-[-1] h-[0px] bg-[#e7272d]'></div>
                <div className='z-20 text-[16px]'>CONTACT</div>
                </Link>
              </li>


            </ul>
          </div>

          
          </div>
          
        </header>
      
    </div>
  )
}

export default Header;

import Image from "next/image";
import React from "react";
import "./style.css";

const Blogs = (props) => {
  return (
    <div>


            <div className="blogs my-5">
              <div className="blog">
                <Image
                  src={`${props.imgUrl}`}
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
                  {props.blogsTitle1}
                  </h1>
                <p className="mt-9 mb-4 text-gray-600">
                The little rotter spiffing good time lemon squeezy smashing excuse my French old, cheesed off give us a bell happy days brown bread, blow off Harry barney bobby. Cup of char gormless hors.!
                </p>
            <button className='bg-theme-color uppercase text-white font-bold text-sm px-[24px] duration-200 py-[14px]  cursor-pointer theme-btn'>Read More</button>
              </div>
            </div>

            

    </div>
  );
};

export default Blogs;

import React from "react";

const Between = () => {
  return (
    <div>

      <section className="bg-[url(/bg-karahi.jpg)] bg-cover max-md:text-center">
        <div className="backdrop-brightness-50 px-[150px] max-md:px-[32px] py-[128px]">
          <h2 className="cookie text-[25px] text-gray-300 py-[24px]">
            Prepare The Best Dishes
          </h2>
          <h1 className="w-[50%] max-xl:w-full max-xl:text-5xl pb-5 text-6xl capitalize font-medium font-serif text-white">
          Are you looking for a quite place?
          </h1>
          <button className="bg-white uppercase font-bold text-sm px-[35px] my-5 duration-200 py-[14px] cursor-pointer theme-btn2">
            Book Now
          </button>
        </div>
      </section>

    </div>
  );
};

export default Between;

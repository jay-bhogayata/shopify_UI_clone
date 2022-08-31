import React from "react";

export const Section7 = () => {
  return (
    <div className="bg-white lg:px-24 px-5">
      <div className="py-16  flex flex-col  ">
        <h3 className=" text-3xl   font-[490] mx-auto">
          Start your business journey with Shopify
        </h3>
        <p className="mx-auto text-lg  mt-5 text-gray-500">
          Try Shopify for free, and explore all the tools and services you need
          to start, run, and grow your business.
        </p>
        <button className="bg-myGreen w-36 mx-auto mt-10 text-white font-semibold px-5 py-2.5 rounded-md">
          Try for free
        </button>
        <div className="mt-10 lg:text-right text-center ">
          <a className="lg:mt-0 mt-5  text-lg text-myDarkgreen font-semibold cursor-pointer" href="#hero">
            Back to top
            <i class="fa-solid fa-arrow-up ml-4"></i>
          </a>
          
        </div>
      </div>
    </div>
  );
};

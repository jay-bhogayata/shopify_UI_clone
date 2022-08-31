import React from "react";

const Section4 = () => {
  return (
    <div className="bg-[#F3FCF4] lg:px-24 p-5 py-20">
      <h3 className="pt-16 text-3xl text-myDarkgreen2  font-normal">
        Explore more from Shopify in India
      </h3>
      <div className="w-full lg:flex-row flex-col-reverse flex mt-16 bg-white">
        <div className="lg:w-1/2 w-full p-10">
          <span className="font-bold">START</span>
         
            <p className="pt-16 text-2xl  font-normal">
              Launch your store with the help of a Shopify Expert
            </p>
            <p className="py-10 text-lg text-gray-500  leading-5">
              Find hundreds of experts from India ready to help you get your
              store up and running, from choosing a theme to building a fully
              customized site.
            </p>
            <a className=" text-lg text-myDarkgreen font-semibold cursor-pointer">
              Explore ways to sell
              <i class="fa-solid fa-arrow-right-long ml-2"></i>
            </a>
         
        </div>
        <div className="lg:w-1/2 w-full bg-pink-500">
          <img
            src="https://cdn.shopify.com/shopifycloud/brochure/assets/home/card-collection/india-experts-small-432c16e7cd8ec09f3ae3aca42c58775001d5dc511e70608476ed7ee0e2d2e2c5.jpg"
            alt=""
            className="h-full w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Section4;

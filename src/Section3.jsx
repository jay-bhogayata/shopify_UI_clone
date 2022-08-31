import React from "react";
import feature3 from "./assets/feature3.png";

const Section3 = () => {
  return (
    <div className="bg-white lg:px-24 px-5 py-20 ">
      <h3 className="text-center text-3xl lg:text-4xl  font-normal">
        With you wherever you’re going
      </h3>
      <p className="mt-5 text-center text-xl w-full text-gray-500  font-normal">
        One platform with all the ecommerce and point of sale features you need
        to start, run, and grow your business.
      </p>
      <div className=" space-y-10 lg:space-y-0">
        <div className="lg:space-y-0 space-y-5 w-full mt-16 flex lg:flex-row flex-col lg:p-24 space-x-5">
          <div className="w-full lg:w-1/2">
            <video
              src="https://cdn.shopify.com/shopifycloud/brochure/assets/home/sell-animation-desktop-1b186d853b04bce6dbc12bb63bd5bc4bc1ff60cd1a06fd12f85261c8acc66d0a.webm"
              loop
              autoPlay
              muted
              className=""
            ></video>
          </div>
          <div className=" lg:w-1/2 w-full lg:p-24 justify-center flex flex-col space-y-8 ">
            <h3 className="text-3xl   font-normal">Sell everywhere</h3>
            <p className="mt-5  text-xl w-full text-gray-500  font-normal">
              Use one platform to sell products to anyone, anywhere—in person
              with Point of Sale and online through your website, social media,
              and online marketplaces.
            </p>
            <a className="lg:mt-0 mt-5 text-lg text-myDarkgreen font-semibold cursor-pointer">
              Explore ways to sell
              <i class="fa-solid fa-arrow-right-long ml-2"></i>
            </a>
          </div>
        </div>
        <div className="lg:space-y-0 space-y-5 w-full  p-5 flex lg:flex-row flex-col lg:p-24 space-x-5">
          <div className=" lg:w-1/2 w-full lg:p-24 justify-center flex flex-col space-y-8 ">
            <h3 className="text-3xl   font-normal">Market your business</h3>
            <p className="mt-5  text-xl w-full text-gray-500  font-normal">
              Take the guesswork out of marketing with built-in tools that help
              you create, execute, and analyze digital marketing campaigns.
            </p>
            <a className="lg:mt-0 mt-5 text-lg text-myDarkgreen font-semibold cursor-pointer">
              Explore how to market your business
              <i class="fa-solid fa-arrow-right-long ml-2"></i>
            </a>
          </div>
          <div className="w-full lg:w-1/2">
            <img
              src="https://cdn.shopify.com/shopifycloud/brochure/assets/home/market-small-084eab2d72b510555838c446501d27dd7380585450efcaaa97453289b2b69c79.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="w-full mt-16 flex lg:flex-row flex-col lg:p-24 space-x-5 lg:space-y-0 space-y-5">
          <div className="w-full lg:w-1/2">
            <img src={feature3} className=""></img>
          </div>
          <div className=" lg:w-1/2 w-full lg:p-24 justify-center flex flex-col space-y-8 ">
            <h3 className="text-3xl   font-normal">Sell everywhere</h3>
            <p className="mt-5  text-xl w-full text-gray-500  font-normal">
              Use one platform to sell products to anyone, anywhere—in person
              with Point of Sale and online through your website, social media,
              and online marketplaces.
            </p>
            <a className="lg:mt-0 mt-5 text-lg text-myDarkgreen font-semibold cursor-pointer">
              Explore ways to sell
              <i class="fa-solid fa-arrow-right-long ml-2"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;

import React from "react";

const Hero = () => {
  return (
    <div className="bg-myLight py-20 justify-between flex lg:flex-row flex-col items-center lg:px-24 px-5 ">
      <div className="w-full lg:w-1/2 lg:pr-10 space-y-10 ">
        <h1 className="text-myDarkgreen lg:text-5xl text-3xl font-bold leading-tight">
          The easiest way to sell online in India
        </h1>
        <p className="text-myDark text-xl ">
          Try one of the most powerful platforms on the market for free. No
          technical knowledge needed.
        </p>
        <div className="w-full flex lg:flex-row lg:space-y-0 space-y-4 flex-col justify-between">
        <input type="text" className="lg:w-2/3 p-3 outline-myGreen placeholder:text-myDark rounded-md " placeholder="Enter your email address"/>
        <button className="bg-myGreen text-white font-semibold px-5 py-2.5 rounded-md">
            Try for free
          </button>
        </div>
        <p className="text-myFont text-sm">
        Try Shopify free for 14 days, no credit card required. By entering your email, you agree to receive marketing emails from Shopify.
        </p>
      </div>
      <div className="w-full lg:w-1/2">
        <video
          src="https://cdn.shopify.com/shopifycloud/brochure/assets/home/inbrochurebannerv2-firstsale-7285dab321cc85c3b6ac858bce1a2b0a2db3504db0937e1883dc96d195524da5.webm"
          loop
          autoPlay
          muted
        ></video>
      </div>
    </div>
  );
};

export default Hero;

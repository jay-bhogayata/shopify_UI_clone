import React from "react";

const Section6 = () => {
  return (
    <div className=" flex lg:flex-row flex-col-reverse ">
      <div className="lg:w-1/2 lg:pl-24 p-5 w-full">
        <h3 className="py-16 text-4xl  lg:leading-snug  font-normal">
          Get the help you need, every step of the way
        </h3>
        <div className="flex flex-wrap  gap-y-12">
          <div className="lg:w-1/2  space-y-4">
            <p className="text-lg font-medium">Shopify support</p>
            <p className="pb-5">
              Contact support 24/7, whether you’re troubleshooting issues or
              looking for business advice.
            </p>
            <a className="lg:mt-0 mt-5 text-lg text-myDarkgreen font-semibold cursor-pointer">
              Contact support
              <i class="fa-solid fa-arrow-right-long ml-2"></i>
            </a>
          </div>
          <div className="lg:w-1/2 space-y-4">
            <p className="text-lg font-medium">Shopify App Store</p>
            <p className="pb-5">
              Add features and functionality to your business with 6,000+ apps
              that integrate directly with Shopify.
            </p>
            <a className="lg:mt-0 mt-5 text-lg text-myDarkgreen font-semibold cursor-pointer">
              Visit the Shopify App Store
              <i class="fa-solid fa-arrow-right-long ml-2"></i>
            </a>
          </div>
          <div className="lg:w-7/12 space-y-4">
            <p className="text-lg font-medium">Shopify Experts Marketplace</p>
            <p className="pb-5">
              Hire a Shopify expert to help you with everything from store setup
              to SEO.
            </p>
            <a className="lg:mt-0 mt-5 text-lg text-myDarkgreen font-semibold cursor-pointer">
              Explore the Shopify Experts Marketplace
              <i class="fa-solid fa-arrow-right-long ml-2"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="lg:w-1/2 w-full">
        <img
          src="https://cdn.shopify.com/shopifycloud/brochure/assets/home/help@desktop-2x-2929e8d420327b708cb9452bf940e92a426145bd07f88ad410db628513e571d4.jpg"
          alt=""
          className="h-full w-full"
        />
      </div>
    </div>
  );
};

export default Section6;

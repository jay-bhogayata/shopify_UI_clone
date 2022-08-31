import React from "react";
import svg1 from "./assets/svg1.svg";
import svg2 from "./assets/svg2.svg";
import svg3 from "./assets/svg3.svg";
import svg4 from "./assets/svg4.svg";

const Section2 = () => {
  return (
    <div className="bg-myDarkgreen py-20 lg:px-24 px-5 text-white  ">
      <h3 className="pt-10  font-normal text-4xl">
        Bring your business online
      </h3>
      <div className="mt-5 flex justify-between lg:flex-row flex-col">
        <p>
          Create an ecommerce website backed by powerful tools that help you
          find customers, drive sales, and manage your day-to-day.
        </p>
        <a className="lg:mt-0 mt-5 font-semibold cursor-pointer">
          Explore more examples <i class="fa-solid fa-arrow-right-long"></i>
        </a>
      </div>

      <div className="my-20 grid md:grid-cols-4  lg:grid-cols-5 gap-x-5 grid-cols-2 gap-y-5">
        <div className="">
          <img
            src="https://cdn.shopify.com/shopifycloud/brochure/assets/merchants/blue-tokai/home-example-small-4144844351e226a9896cffee4bebdaeecb17897116c33a753bfd086b8b621e74.jpg"
            alt=""
            className="mb-2"
          />
          <a className=" font-semibold cursor-pointer hover:underline">
            FOOD & DRINK
          </a>
          <br />
          <a className=" font-semibold cursor-pointer ">Blue Tokai</a>
        </div>
        <div className="">
          <img
            src="https://cdn.shopify.com/shopifycloud/brochure/assets/merchants/quirksmith/home-example-small-8b1c6b138414b76150e6e00f5143c4301a07b708aa6113dd7096f4340ddfecad.jpg"
            alt=""
            className="mb-2"
          />
          <a className=" font-semibold cursor-pointer hover:underline">
            FOOD & DRINK
          </a>
          <br />
          <a className=" font-semibold cursor-pointer ">Blue Tokai</a>
        </div>
        <div className="">
          <img
            src="https://cdn.shopify.com/shopifycloud/brochure/assets/merchants/crossbeats/home-example-small-099933088cbe804543fbb1b0963a5d0a16365e73e6000949b5b0ab2bf4b21503.jpg"
            alt=""
            className="mb-2"
          />
          <a className=" font-semibold cursor-pointer hover:underline">
            FOOD & DRINK
          </a>
          <br />
          <a className=" font-semibold cursor-pointer ">Blue Tokai</a>
        </div>
        <div className="">
          <img
            src="https://cdn.shopify.com/shopifycloud/brochure/assets/merchants/mcaffeine/home-example-small-26afc247af7a3a7b1c9c585a645ccdff26e76156e98be7d9ff0fe9ecd4d3b675.jpg"
            alt=""
            className="mb-2"
          />
          <a className=" font-semibold cursor-pointer hover:underline">
            FOOD & DRINK
          </a>
          <br />
          <a className=" font-semibold cursor-pointer ">Blue Tokai</a>
        </div>
        <div className="hidden lg:block">
          <img
            src="https://cdn.shopify.com/shopifycloud/brochure/assets/merchants/bunaai/home-example-small-4575b175c798e22af5531bae02621396add507433f771db37b1515e9941f8a45.jpg"
            alt=""
            className="mb-2"
          />
          <a className=" font-semibold cursor-pointer hover:underline">
            FOOD & DRINK
          </a>
          <br />
          <a className=" font-semibold cursor-pointer ">Blue Tokai</a>
        </div>
      </div>
      <h3 className="pt-10  font-normal text-4xl">
        Take the best path forward
      </h3>
      <div className="mt-10 grid lg:grid-cols-4 gap-x-10  md:grid-cols-2 grid-cols-1 gap-y-10">
        <div className="space-y-5">
          <img src={svg1} alt="" />
          <h3 className="  font-semibold text-lg">Start an online business</h3>
          <p className="leading-5 text-md">
            Create a business, whether you’ve got a fresh idea or are looking
            for a new way to make money.
          </p>
        </div>
        <div className="space-y-5">
          <img src={svg2} alt="" />
          <h3 className="  font-semibold text-lg">Move your business online</h3>
          <p className="leading-5 text-md">
            Turn your retail store into an online store and keep serving
            customers without missing a beat.
          </p>
        </div>
        <div className="space-y-5">
          <img src={svg3} alt="" />
          <h3 className="  font-semibold text-lg">Switch to Shopify</h3>
          <p className="leading-5 text-md">
            Bring your business to Shopify, no matter which ecommerce platform
            you’re currently using.
          </p>
        </div>
        <div className="space-y-5">
          <img src={svg4} alt="" />
          <h3 className="  font-semibold text-lg">Hire a Shopify expert</h3>
          <p className="leading-5 text-md">
            Get set up with the help of a trusted freelancer or agency from the
            Shopify Experts Marketplace.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section2;

import React from "react";
import globe from "./assets/globe.png";

const Section5 = () => {
  return (
    <div className="bg-white lg:px-24 px-5 py-20">
      <div className="lg:w-1/2">
        <h3 className="pt-16 text-3xl   font-normal">
          Empowering independent business owners everywhere
        </h3>
        <p className="py-10 text-2xl   font-normal">
          Millions of businesses in 175 countries around the world have made
          over $496 billion USD in sales using Shopify.
        </p>
        <a className=" text-lg text-myDarkgreen font-semibold cursor-pointer">
          Learn more about Shopify
          <i class="fa-solid fa-arrow-right-long ml-2"></i>
        </a>
      </div>
      <img src={globe} alt="" />
      <div className="bg-myDarkgreen2 flex lg:flex-row flex-col">
        <div className="lg:w-1/2 w-full">
          <img
            src="https://cdn.shopify.com/shopifycloud/brochure/assets/merchants/alicia-souza/alicia-souza-testimonial@desktop-d947199e09069edaf78e332d87ba932b45805e3c91d032ba8a083a6f67ad04b5.jpg"
            alt=""
            className="h-full w-full"
          />
        </div>
        <div
          className="lg:w-1/2 w-full items-center flex flex-col p-15 lg:px-24
        p-10 justify-around space-y-5"
        >
          <p className="text-white font-semibold lg:text-2xl  leading-relaxed">
            “Shopify was my knight in shining armor when I exhausted every other
            possibility of getting my online store up and running. It was
            stunningly easy to use, with more features and plug-ins that I
            didn’t even know I wanted.”
          </p>
          <img
            src="https://cdn.shopify.com/shopifycloud/brochure/assets/home/testimonials/logo-alicia-souza-small-4ac1bd956b9bf4d8fd78b6597f24ba9379714861042d3a199065b704a11657e6.png"
            alt=""
          />
          <p className="text-white font-semibold text-xl  ">
            Alicia | Alicia Souza
          </p>
        </div>
      </div>
      <div className="flex justify-between mt-10 flex-wrap ">
        <img
          src="https://cdn.shopify.com/shopifycloud/brochure/assets/logo-soup/bajaao-small-6ca0459c2a2fc6a57654d85cd1f053828d7fee97ecf7ff6dd8a1c460d0a5d344.png"
          alt=""
          className="p-3"
        />
        <img
          src="https://cdn.shopify.com/shopifycloud/brochure/assets/logo-soup/johnjacobs-small-79aa379de8a1c0d6df1c33af8c63a677871164315ccbc495423aeaead650d53a.png"
          alt=""
          className="p-3"

        />
        <img
          src="https://cdn.shopify.com/shopifycloud/brochure/assets/logo-soup/kylie-small-4e25b192755f809e9795d9f3722f3fa6b46da1fdc2a48b3ec8b6311f50f83ac7.png"
          alt=""
          className="p-3"

        />
        <img
          src="https://cdn.shopify.com/shopifycloud/brochure/assets/logo-soup/nush-small-04d75ec8d5b3e20b6e227006c23759c8b65efd482808aff0fc17140c5efb36cc.png"
          alt=""
          className="p-3"

        />
        <img
          src="https://cdn.shopify.com/shopifycloud/brochure/assets/logo-soup/yogabar-small-a41c8bbe605289256552b537eb1bbf993845442c3af43ff4f8f1ed932a7b3609.png"
          alt=""
          className="p-3"

        />
        <img
          src="https://cdn.shopify.com/shopifycloud/brochure/assets/logo-soup/starstruck-small-6d49ff528f3ef3217015f906a1ece473e2559688669d00e2b88e7be4f65ce3bf.png"
          alt=""
          className="p-3"

        />
        <img
          src="https://cdn.shopify.com/shopifycloud/brochure/assets/logo-soup/mcaffeine-small-0c55170838a60e6a490dac7732d44f988f754de89d790de26b0d8e50a01029b4.png"
          alt=""
          className="p-3"

        />
      </div>
    </div>
  );
};

export default Section5;

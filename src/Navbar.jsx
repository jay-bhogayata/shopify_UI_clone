import React from "react";

const Navbar = () => {
  return (
    <div className="sticky top-0">
      <header className="bg-myLight justify-between flex items-center lg:px-24 px-5 py-5 ">
        <div className="hidden lg:flex items-center space-x-6">
          <a href="#" className="items-center">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Shopify_Logo.png"
              alt=""
              className="w-32 "
            />
          </a>
          <a
            href="#"
            className="font-medium text-regulerFont hover:text-hoverFont"
          >
            Start
            <i className="fa-solid fa-angle-down ml-2"></i>
          </a>
          <a
            href="#"
            className="font-medium text-regulerFont hover:text-hoverFont"
          >
            Sell
            <i className="fa-solid fa-angle-down ml-2"></i>
          </a>
          <a
            href="#"
            className="font-medium text-regulerFont hover:text-hoverFont"
          >
            Market
            <i className="fa-solid fa-angle-down ml-2"></i>
          </a>
          <a
            href="#"
            className="font-medium text-regulerFont hover:text-hoverFont"
          >
            Manage
            <i className="fa-solid fa-angle-down ml-2"></i>
          </a>
        </div>
        <div className="hidden lg:flex ml-8 items-center space-x-6">
          <a
            href="#"
            className="font-medium text-regulerFont hover:text-hoverFont"
          >
            Pricing
          </a>
          <a
            href="#"
            className="font-medium text-regulerFont hover:text-hoverFont"
          >
            Learn
            <i className="fa-solid fa-angle-down ml-2"></i>
          </a>
          <a
            href="#"
            className="font-medium text-regulerFont hover:text-hoverFont"
          >
            Login
          </a>
          <button className="bg-myGreen text-white font-semibold px-5 py-2.5 rounded-md">
            Try for free
          </button>
        </div>
        <div className="lg:hidden flex items-center  w-full justify-between">
          <a href="#" className="items-center">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Shopify_Logo.png"
              alt=""
              className="w-32 "
            />
          </a>
          <div className="space-x-8">
            <a
              href="#"
              className="font-medium text-lg text-regulerFont hover:text-hoverFont"
            >
              Login
            </a>
            <a href="">
              <i class="fa-solid fa-bars"></i>
            </a>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;

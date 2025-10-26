import React from "react";
import Marquee from "react-fast-marquee";
import image from "../assets/Modern living room with sofa_ _ Premium AI-generated image.jpeg";
import logo from "../assets/WhatsApp Image 2025-10-26 at 16.11.14_7f5d8b2b.jpg";
import Categories from "../component/card/Categories";

const Header = () => {
  return (
    <div>
      <section>
        <Marquee className="bg-amber-400 p-4 rounded-xl  ">
          <h1 className="font-semibold text-lg mx-10">
            OFFER ! OFFER ! OFFER ! SPLASH OFFER
          </h1>
          <h1 className="font-semibold text-lg">
            OFFER ! OFFER ! OFFER ! SPLASH OFFER
          </h1>
        </Marquee>
      </section>
      <section className="rounded-xl  my-2 bg-gray-800 text-white ">
        <div className="flex items-center mx-2 justify-between">
          <h1>All</h1>
          <h1>Home</h1>
          <h1>kitchen</h1>
          <img className="w-18" src={logo} alt="" />
          <h1>Living Room</h1>
          <h1>dining Room</h1>
        </div>
      </section>
      <section>
        <img src={image} alt="" />
      </section>
    </div>
  );
};

export default Header;

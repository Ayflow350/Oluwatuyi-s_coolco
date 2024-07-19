import React from "react";

import heroImage from "../assets/hero-img.svg";

import Image from "next/image";

const Hero = () => {
  return (
    <div className="  ">
      <div className="container mx-auto px-4">
        <div className="flex  gap-y-[56px] flex-col  items-center lg:flex-row">
          {/* text */}
          <div className="flex-1">
            <h1 className="font-bold font-source-serif text-[40px] max-w-[326px] lg:max-w-[450px] lg:text-[64px] leading-[50px] lg:leading-[79px] mb-6 lg:mb-[33px]">
              Unlock Your Staffing Firm’s Full Potential
            </h1>
            <p className="font-poppins max-w-[317px] lg:max-w-[450px] font-medium leading-normal text-xl mb-6 lg:mb-[42px]">
              Elevate your staffing firm's presence on Cool Co. Claim your
              profile and connect with a wider network of potential clients
              today.
            </p>
            <button className="btn">Claim my profile</button>
          </div>
          {/*image*/}
          <div className="flex-1">
            <Image className="" src={heroImage} alt="hero-image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

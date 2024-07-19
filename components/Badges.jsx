import React from "react";
import Img from "../public/top-rated 1.svg";
import Image from "next/image";

const Badges = () => {
  return (
    <div className="bg-[#F8F7F4] py-[35px] lg:py-[64px]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between">
          <div className=" order-2 lg:order-1  flex flex-col justify-center  max-w-[526px] mb-[49px]  lg:mb-0">
            <Image src={Img} alt="reviews" />
          </div>
          <div className="text-darkblue order-1 lg:order-2  max-w-[516px]  justify-center  flex flex-col text-left ">
            <h1 className="font-source-serif font-semibold   lg:text-5xl text-4xl leading-[46px] lg:leading-[58px]  mb-3 ">
              Recognize & reward success
            </h1>
            <div className=" space-y-3 mb-8 font-poppins text-base font-normal max-w-[356px] leading-normal">
              <p>
                When you recognize and reward your team for their successes, you
                build a culture and experience that keeps star recruiters &
                staff at your organization. Then when you promote your best
                reviews, you give others the chance to recognize and reward your
                agency.
              </p>
            </div>

            <button className="btn mb-11 self-center lg:self-start ">
              Claim my profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Badges;

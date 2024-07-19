import React from "react";
import Img from "../public/Email.svg";
import Image from "next/image";

const Automate = () => {
  return (
    <div className="bg-[#FFFF] py-[35px] lg:py-[64px]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between">
          <div className=" order-2 lg:order-1  flex flex-col justify-center  mb-[49px]  lg:mb-0">
            <Image src={Img} alt="reviews" />
          </div>
          <div className="text-darkblue order-1 lg:order-2  max-w-[516px]  justify-center  flex flex-col text-left ">
            <h1 className="font-source-serif font-semibold  lg:text-5xl text-4xl leading-[46px] lg:leading-[58px]  mb-3 ">
              Automate instant action
            </h1>
            <div className=" space-y-3 mb-8 font-poppins text-base font-normal leading-normal">
              <p>
                If you’re going to put in the effort to capture reviews, you
                need to actually do something with them. Otherwise, it’s just a
                waste of resources. This involves not only automating real-time
                review capture, but automating action.
              </p>
            </div>
            <div className=" space-y-2 font-poppins  font-normal text-sm leading-normal mb-9">
              <div className="flex flex-row gap-x-2">
                <h1>👉</h1>
                <p>
                  Set up a system that automatically asks for reviews at key
                  points in the candidate or client journey
                </p>
              </div>
              <div className="flex flex-row gap-x-2">
                <h1>👉</h1>
                <p>
                  Make sure both the recruiter, manager, & other stakeholders
                  receive real-time review notifications
                </p>
              </div>
              <div className="flex flex-row gap-x-2">
                <h1>👉</h1>
                <p>
                  Create internal follow-up workflows to ensure nothing falls
                  through the gaps
                </p>
              </div>
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

export default Automate;

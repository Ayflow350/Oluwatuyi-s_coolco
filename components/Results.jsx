import React from "react";
import Img from "../public/resultsimages.svg";
import Image from "next/image";

const Results = () => {
  return (
    <div className="bg-[#F8F7F4] py-[35px] lg:py-[64px]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between">
          <div className=" order-2 lg:order-1  flex flex-col justify-center  mb-[49px]  lg:mb-0">
            <Image src={Img} alt="reviews" />
          </div>
          <div className="text-darkblue order-1 lg:order-2  max-w-[516px]  justify-center  flex flex-col text-left ">
            <h1 className="font-source-serif font-semibold  lg:text-5xl text-4xl leading-[46px] lg:leading-[58px]  mb-3 ">
              Measure results
            </h1>
            <div className=" space-y-3 mb-8 font-poppins text-base font-normal leading-normal">
              <p>
                You can’t manage what you don’t measure. If you want to make
                improvements to your internal processes & provide candidates,
                clients, and placed talent with a better experience, then you
                need to turn the feedback you receive into measurable insights.
              </p>
            </div>
            <div className=" space-y-3 max-w-[355px] font-poppins  font-normal text-sm leading-normal mb-9">
              <div className="flex  flex-row gap-x-2">
                <h1>👉</h1>
                <p>
                  Capture both testimonial feedback and multiple-choice poll
                  questions
                </p>
              </div>
              <div className="flex flex-row gap-x-2">
                <h1>👉</h1>
                <p>
                  Aggregate data from the poll questions to track trends across
                  your agency
                </p>
              </div>
              <div className="flex flex-row gap-x-2">
                <h1>👉</h1>
                <p>
                  Measure long-term performance for both individual recruiters
                  and the agency as a whole
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Results;

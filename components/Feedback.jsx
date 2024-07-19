import React from "react";
import Img from "../public/feedback-image.svg";
import Image from "next/image";

const Feedback = () => {
  return (
    <div className="bg-[#F8F7F4] py-10 lg:py-[70px]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between">
          <div className="text-darkblue  max-w-[516px]  justify-center  flex flex-col text-left ">
            <h1 className="font-source-serif font-semibold   lg:text-5xl text-4xl leading-[46px] lg:leading-[58px]  mb-3 ">
              Capture real-time feedback
            </h1>
            <div className=" space-y-3 mb-8 font-poppins text-base font-normal leading-normal">
              <p>
                If you wait until the end of the year to receive feedback, it’s
                too late to do anything about it. You can’t fix problems or
                celebrate wins. The closer the feedback is to the action, the
                more meaningful it is.
              </p>
            </div>
            <div className=" space-y-2 font-poppins  font-normal text-sm leading-normal mb-9">
              <div className="flex flex-row gap-x-2">
                <h1>👉</h1>
                <p>Don’t wait until the end of the year to ask for reviews</p>
              </div>
              <div className="flex flex-row gap-x-2">
                <h1>👉</h1>
                <p>
                  Measure more than overall sentiment—ask detailed questions
                  about experiences
                </p>
              </div>
              <div className="flex flex-row gap-x-2">
                <h1>👉</h1>
                <p>
                  Ask for reviews at key points of the candidate or client
                  journey
                </p>
              </div>
              <div className="flex flex-row gap-x-2">
                <h1>👉</h1>
                <p>
                  Eliminate points of failure—build a system that automates
                  review capture
                </p>
              </div>
            </div>

            <button className="btn mb-11 self-center lg:self-start ">
              Claim my profile
            </button>
          </div>
          <div className=" mb-[49px] h-full lg:mb-0">
            <Image src={Img} alt="reviews" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;

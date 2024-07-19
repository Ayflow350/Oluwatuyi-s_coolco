import React from "react";
import Img from "../public/reviews-image.svg";
import Image from "next/image";

const Reviews = () => {
  return (
    <div className="bg-[#405D98] py-16 lg:py-0">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between">
          <div className="order-2 lg:order-1 mb-[49px] h-full lg:mb-0">
            <Image src={Img} alt="reviews" />
          </div>
          <div className="text-white order-1 max-w-[452px]  justify-center lg:order-2 flex flex-col text-left  mb-5">
            <h1 className="font-source-serif font-bold  lg:text-5xl text-4xl leading-[46px] lg:leading-[58px]  mb-3 lg:mb-[39px]">
              We live in a reviews economy
            </h1>
            <div className=" space-y-3 font-poppins text-base font-normal leading-normal">
              <p>
                Before you engage with a candidate, you can bet they’ve looked
                you up online. The question is: What do they see when they
                Google you?
              </p>
              <p>
                More than that: Does your online reputation match the internal
                experiences people have with your agency?
              </p>
              <p>
                But here’s the problem: so many recruiting agencies attack their
                external, online reputation first. They work to increase their
                Google Reviews and profiles on third-party review sites without
                addressing problems in their business processes and culture.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;

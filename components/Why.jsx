import React from "react";
import Grid from "./Grid";

const Why = () => {
  return (
    <div className="bg-[#F8F7F4] py-[33px] lg:py-[30px]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col text-center items-center">
          <div>
            <h2 className="font-source-serif font-bold text-4xl leading-10   max-w-[336px]  lg:max-w-[772px] text-center mb-[18px] ">
              Take control! Claim your profile.
            </h2>
            <p className="font-poppins text-xl font-medium italic text-center  max-w-[310px] lg:max-w-[557px] leading-6 mb">
              Crafted by experts in staffing for staffing professionals.
            </p>
          </div>
          <div>
            <Grid />
          </div>
          <div className="flex flex-col items-center mb-16">
            <h2 className="font-poppins font-medium text-xl leading-normal max-w-[338px] lg:max-w-[887px] mb-[22px] ">
              Traditional review sites fall short, often leaving you exhausted
              and struggling for engagement. We're here to change that.
            </h2>
            <button className="btn self-center ">Claim my profile</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Why;

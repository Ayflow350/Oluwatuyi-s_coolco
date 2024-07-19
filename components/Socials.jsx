import React from "react";
import Img from "../public/social-proof-1.svg";
import Img2 from "../public/social-proof-2.svg";
import Image from "next/image";

const Socials = () => {
  return (
    <div className="bg-[#Ffff] py-10 lg:py-[70px]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between">
          <div className="text-darkblue  max-w-[516px] mb-5  justify-center  flex flex-col text-left ">
            <h1 className="font-source-serif font-semibold   lg:text-5xl text-4xl leading-[46px] lg:leading-[58px]  mb-3 ">
              Promote & build social proof
            </h1>
            <div className=" space-y-3 mb-8 font-poppins text-base font-normal leading-normal">
              <p>
                If you aren’t actively driving your online reputation, your
                competition will do it for you—and they’re not going to say nice
                things. Instead of copying and pasting the same canned marketing
                language onto your website, use the reviews you capture to let
                your candidates and clients sing your praises.
              </p>
            </div>
            <div className=" space-y-2 max-w-[355px] font-poppins  font-normal text-sm leading-normal mb-9">
              <div className="flex flex-row gap-x-2">
                <h1>👉</h1>
                <p>
                  Use reviews as social media posts alongside your high quality
                  content
                </p>
              </div>
              <div className="flex flex-row gap-x-2">
                <h1>👉</h1>
                <p>
                  Embed reviews into your website—especially high-traffic pages
                </p>
              </div>
              <div className="flex flex-row gap-x-2">
                <h1>👉</h1>
                <p>Engage customers & prospects on social media</p>
              </div>
              <div className="flex flex-row gap-x-2">
                <h1>👉</h1>
                <p>
                  Ensure all your online assets—including third-party review
                  sites—reflect your brand values
                </p>
              </div>
            </div>
          </div>
          <div className="lg:mb-0 relative flex flex-col   self-center">
            <Image
              src={Img2}
              alt="reviews"
              className="w-[200px] h-[209px] lg:w-[364px] lg:h-[367px]"
            />
            <Image
              src={Img}
              alt="reviews"
              className="absolute bottom-[40px] w-[200px] lg:bottom-[100px] lg:w-[364px] lg:h-[367px]  h-[209px] right-1/2 "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Socials;

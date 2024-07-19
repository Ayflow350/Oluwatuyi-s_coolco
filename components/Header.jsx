import Link from "next/link";
import Image from "next/image";
import React from "react";
import Img from "../public/cool.svg";

const Header = () => {
  return (
    <div className="py-[44px] lg:py-[57px]">
      <div className="container mx-auto px-4">
        <div className="flex flex-row justify-between">
          <div>
            <Image className="h-[38px]" src={Img} alt="header" />
          </div>
          <div className="hidden lg:flex lg:flex-row items-center gap-x-7 ">
            <Link href="/" className="font-poppins text-base">
              Get a free assessment
            </Link>
            <button className="btn">Claim my profile</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

import React from "react";
import Img from "../public/cool.svg";
import Image from "next/image";
import Link from "next/link";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";

export const Header = [
  {
    name: "Benefits",
  },
  {
    name: "Partners",
  },
  {
    name: "caseStudies",
  },
  {
    name: "Resources",
  },
];

export const Benefits = [
  {
    name: "Experience Management",
    href: "#",
  },
  {
    name: "Reputation Performance",
    href: "#",
  },
  {
    name: "Improved Performance",
    href: "#",
  },
  {
    name: "Brand Assertation",
    href: "#",
  },
];

export const Partners = [
  {
    name: "Bullhorn",
    href: "#",
  },
  {
    name: "Staffing Referrals",
    href: "#",
  },

  {
    name: "Herefish",
    href: "#",
  },
  {
    name: "Features",
    href: "#",
  },
];

export const caseStudies = [
  {
    name: "Efficiency ",
    href: "#",
  },
  {
    name: "Increased Reviews",
    href: "#",
  },
  {
    name: "Performance",
    href: "#",
  },
  {
    name: "Increased Referrals",
    href: "#",
  },
  {
    name: "More Case Studies",
    href: "#",
  },
];

export const Resources = [
  {
    name: "Hire Talent ",
    href: "#",
  },
  {
    name: "Join ",
    href: "#",
  },
  {
    name: "Blog",
    href: "#",
  },
  {
    name: "About Us",
    href: "#",
  },
  {
    name: "Contact",
    href: "#",
  },
];

const Footer = () => {
  return (
    <div className="bg-[#ffff] lg:[py-16] py-[49.5px] ">
      <div className="container mx-auto  px-4 lg:px-2">
        <div className="flex flex-col lg:flex-row justify-between">
          <div className="flex flex-col  max-w-[320px] ">
            <Image className="mb-6 lg:mb-[77px]" src={Img} alt="footer-logo" />
            <p className="font-poppins  text-darkgray mb-[49px] text-base leading-6">
              Discover the greatest staffing firms to help you hire the right
              team.
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 max-w-[832px] ">
            <div className="font-poppins space-y-4 max-w-[155.5px] lg:max-w-[184px] mb-8">
              <h2 className="text-sm font-semibold mb-4 text-darkgray">
                Benefits
              </h2>
              <ul className="space-y-4">
                {Benefits.map((item, index) => (
                  <li key={index}>
                    <Link href={item.href}>{item.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-sm font-semibold mb-4 text-darkgray">
                Partners
              </h2>
              <ul className="font-poppins space-y-4">
                {Partners.map((item, index) => (
                  <li key={index}>
                    <Link href={item.href}>{item.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-sm font-semibold mb-4 text-darkgray">
                Case Studies
              </h2>
              <ul className="font-poppins space-y-4">
                {caseStudies.map((item, index) => (
                  <li key={index}>
                    <Link href={item.href}>{item.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-sm font-semibold mb-4 text-darkgray">
                Resources
              </h2>
              <ul className="font-poppins space-y-4">
                {Resources.map((item, index) => (
                  <li key={index}>
                    <Link href={item.href}>{item.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-[#E7B66B] mt-16"></div>
        <div className="py-8 flex  flex-row justify-between">
          <div className=" text-[#A3A3A3] font-poppins">
            © 2024 Cool Co Ventures
          </div>
          <div className="flex flex-row gap-x-2  text-[#A3A3A3] text-xl ">
            <FaXTwitter />
            <FaLinkedin />
            <FaFacebook />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

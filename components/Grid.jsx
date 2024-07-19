"use client";
import React from "react";
import {
  AiFillStar,
  AiFillSafetyCertificate,
  AiOutlineLineChart,
} from "react-icons/ai";
import { FiZap, FiTarget } from "react-icons/fi";
import { FaUsers } from "react-icons/fa";

export const why = [
  {
    icon: <AiFillStar />,
    name: "Showcase Your Expertise",
    description:
      "Stand out in a crowded market. Claiming your profile allows you to highlight your specialties, share your success stories.",
  },
  {
    icon: <AiFillSafetyCertificate />,
    name: "Build Trust with Transparency",
    description:
      "In the digital age, reviews and feedback are gold. By claiming your profile, you enhance your firm’s credibility and build trust with potential clients.",
  },
  {
    icon: <FiZap />,
    name: "Receive Valuable Insights",
    description:
      "Client reviews offer invaluable insights and areas for improvement. Use this feedback to refine your offerings and stay ahead of the competition.",
  },
  {
    icon: <AiOutlineLineChart />,
    name: "Increase Your Client Base",
    description:
      "A claimed and well-managed profile can significantly increase your visibility and attractiveness to potential clients, driving more business your way.",
  },
  {
    icon: <FaUsers />,
    name: "Join a Community of Excellence",
    description:
      "You’ll be joining a community of top-rated staffing firms. It’s a statement of quality and reliability in the staffing industry.",
  },
  {
    icon: <FiTarget />,
    name: "Leverage Targeted Marketing Opportunities",
    description:
      "Increase your firm's exposure to the right audience, enhancing your ability to attract and engage with potential clients.",
  },
];

const Grid = () => {
  return (
    <div className="container mx-auto px-4 py-8 ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {why.map((item, index) => (
          <div
            key={index}
            className="p-3 bg-white shadow-sm  max-w-[380px] max-h-[172px] rounded-lg flex flex-row text-center items-start gap-x-4 justify-between "
          >
            <div className="text-xl flex w-10 h-10 rounded-full justify-center items-center bg-[#405D98] bg-opacity-30 text-[#405D98] p-3 mb-4 ">
              {item.icon}
            </div>
            <div className=" flex flex-col text-left">
              <h2 className=" font-poppins  font-semibold  text-base mb-1">
                {item.name}
              </h2>
              <p className="text-darkgray leading-5 text-balance font-normal text-sm font-poppins max-w-[292px]">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Grid;

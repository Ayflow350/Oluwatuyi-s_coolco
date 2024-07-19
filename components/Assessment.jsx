import React from "react";

const Assessment = () => {
  return (
    <div className="bg-[#F3E9D9] lg:py-[73px] py-[45px]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col text-center items-center space-y-[18px]">
          <h2 className="font-source-serif  font-semibold text-4xl lg:text-6xl ">
            Get a free self assessment
          </h2>
          <p className="font-poppins text-base max-w-[321px] lg:max-w-[632px] ">
            The questions in this assessment are based on data and stories from
            the top staffing agencies in the industry. By the time you finish,
            you’ll see where you stand against the best of the best—and what you
            need to do to improve.
          </p>

          <button className="btn self-center">Take the assessment</button>

          <h3 className="font-poppins italic text-base">
            It only takes 4 minutes
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Assessment;

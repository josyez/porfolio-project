import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full  bg-[#f2d8a8] border border-black border-solid p-4 py-10">
      <div className="flex flex-col justify-center items-center w-full h-full border-black border ">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8 border-black border">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 text-[#7695fd] border-[#755BB4] border-black border">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4 border-black border">
          <div className="sm:text-right text-4xl font-bold">
            <p>Hi. Nice to meet you. Feel free to click around.</p>
          </div>
          <div className="text-xl">
            <p>about me section</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

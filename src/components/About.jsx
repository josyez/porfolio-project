import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full  bg-[#f2d8a8] border-solid p-4 py-40">
      <div className="flex flex-col justify-center items-center w-full h-full ">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8 ">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 text-[#7695fd] border-[#755BB4] ">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>Hi! Nice to meet you. Feel free to click around.</p>
          </div>
          <div className="text-xl">
          <p className="text-[#000000] max-w[700px] text-xl">
          I’m currently a fellow at the Knowledge house learning Web
          Development. Im learning various programming languages such as
          JavaScript, React, NextJs. At the end of the program I will be AWS
          certified and will be on the hunt for a job as a full-stack engineer.
        </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

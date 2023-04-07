import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const Home = () => {
  return (
    <div
      name="home"
      className="w-full h-screen bg-[#f2d8a8] border-black border solid "
    >
      {/*container*/}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className=" text-xl text-[#755BB4]">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#7695fd]">
          Joselyn Cuzco
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#755BB4]">
          I'm a Full Stack Developer.
        </h2>
        <p className="text-[#000000] py-4 max-w[700px]">
          I’m currently a fellow at the Knowledge house learning Web
          Development. Im learning various programming languages such as
          JavaScript, React, NextJs. At the end of the program I will be AWS
          certified and will be on the hunt for a job as a full-stack engineer.
        </p>
        <div>
          <button className="text-black group border-black border-2 px-6 py-3 my-2 flex items-center hover:bg-[#755BB4] hover:border-[#755BB4]">
            View Work
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3 " />
            </span>
          </button>
 
          {/* <span class=" border-black border flex flex-col justify-center items-center rounded-full w-40 h-30 p-4 animate-bounce bg-[#755BB4] text-white text-sm">
            Keep looking
            <svg class="w-6 h-6 mx-auto" fill="none" stroke="currentColor">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 13l-7 7-7-7m14-8l-7 7-7-7"
              />
            </svg>
          </span> */}

          <div class="flex justify-center items-center w-30 h-40 border-black border ">
            <div class="flex flex-col items-center border-black border">
              <div class="flex bg-[#755BB4] rounded-full w-40 h-30 p-4 animate-bounce text-white text-sm border-black border">
                Keep looking
                <svg class="w-6 h-6 mx-auto" fill="none" stroke="currentColor">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 13l-7 7-7-7m14-8l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

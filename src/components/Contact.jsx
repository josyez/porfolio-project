import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Contact = () => {
  return (
    <div name="contact" className="w-full py-40 bg-[#f2d8a8] ">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 text-[#7695fd] border-[#755BB4] ">
            Contact
          </p>
          <p className="py-4 text-xl">Lets connect.</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-2 gap-4 text-center py-8 ">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 p-3 bg-[#4954f6]">
            <a
              className="flex flex-col items-center justify-center w-full mx-auto"
              href="https://www.linkedin.com/in/cuzco/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={80} />
              <span className="text-lg font-semibold">LinkedIn</span>
            </a>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-[#989595]">
            <a
              className="flex flex-col items-center justify-center w-full mx-auto"
              href="https://github.com/josyez"
              target="_blank"
              rel="noopener noreferrer"
            >
                <FaGithub size={80} />
                <span className="text-lg font-bold">GitHub </span>
            </a>
          </div>

          {/* placeholder */}
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-[#55a292] ">
            <a className="flex flex-col items-center justify-center w-full mx-auto" href="" target="_blank" rel="noopener noreferrer">
              <HiOutlineMail size={80} />
              <span className="text-lg font-bold">Email </span>
            </a>
          </div>

          {/* placeholder */}
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500  bg-[#5282b5] ">
            <a className="flex flex-col items-center justify-center w-full mx-auto" href="" target="_blank" rel="noopener noreferrer">
              <BsFillPersonLinesFill size={80} />
              <span className="text-lg font-bold">GitHub </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

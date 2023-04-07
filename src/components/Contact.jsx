import React from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import {HiOutlineMail} from 'react-icons/hi';
import {BsFillPersonLinesFill} from 'react-icons/bs';

const Contact = () => {
  return (
    <div name='contact' className='w-full bg-[#f2d8a8] py-10'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 text-[#7695fd] border-[#755BB4] '>Contact</p>
                <p className='py-4 text-xl'>Lets connect.</p>
            </div>
  
            <div className='w-full grid grid-cols-2 sm:grid-cols-2 gap-4 text-center py-8'>
               
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500  bg-[#4954f6]'>
                    <div className="w-20 h-50 mx-auto"
                        href=" https://www.linkedin.com/in/cuzco/">
                        Linkedin <FaLinkedin size={80} />
                    </div> 
                </div>

                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-[#989595]'>
                <div className="w-20 h-50 mx-auto"
                        href=" https://github.com/josyez">
                        GitHub <FaGithub size={80} />
                    </div>
                </div>

                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-[#55a292]' >
                <div className="w-20 h-50 mx-auto"
                        href="">
                        Email <HiOutlineMail size={80} />
                    </div>
                </div>
                
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500  bg-[#5282b5]'>
                <div className="w-20 h-50 mx-auto"
                        href="">
                        Resume <BsFillPersonLinesFill size={80} />
                    </div>
                    
                </div>

                
            </div>
        </div>
      </div>
  )
}

export default Contact;
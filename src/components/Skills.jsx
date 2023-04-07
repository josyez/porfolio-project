import React from 'react';
import JavaScript from '../assests/javascript.png';
import ReactImg from '../assests/react.png';
import Node from '../assests/node.png';
import GitHub from '../assests/github.png';

const Skills = () => {
    return (
      <div name='skills' className='w-full h- bg-[#f2d8a8] '>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 text-[#7695fd] border-[#755BB4] '>Skills</p>
                <p className='py-4 text-xl'>These are the technologies I've worked with.</p>
            </div>
  
            <div className='w-full grid grid-cols-2 sm:grid-cols-2 gap-4 text-center py-8'>
               
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={JavaScript} alt="HTML icon" />
                    <p className='my-4'>JAVASCRIPT</p>
                </div>

                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={ReactImg} alt="HTML icon" />
                    <p className='my-4'>REACT</p>
                </div>

                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Node} alt="HTML icon" />
                    <p className='my-4'>NODE JS</p>
                </div>
                
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={GitHub} alt="HTML icon" />
                    <p className='my-4'>GITHUB</p>
                </div>

                
            </div>
        </div>
      </div>
    );
  };

export default Skills
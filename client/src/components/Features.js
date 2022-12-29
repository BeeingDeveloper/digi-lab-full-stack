import React from 'react'
import '../utils/style.css'
import CURSOR from '../assets/images/cursor.png';
import ROCKET from '../assets/images/rocket.png';
import {motion} from 'framer-motion';

const Features = () => {
  return (
    <div className='w-[90%] lg:w-[75%] h-auto m-auto flex flex-col lg:flex-row '>
        {/* ====LEFT===== */}
        <div className='w-[50%]'>
            <div className='h-[4rem] w-[4rem] bg-slate-100' >
            </div>
            <h2 className='text-[2rem] font-extrabold'>Make your site<br/> better with Opus</h2>
            <div className='flex flex-col gap-10 ml-12'>
                <h4 className='w-[15rem] lg:w-[31rem] '>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Cras eget consectetur eros. Aliquam erat volutpat. Praesent pulvinar 
                arcu non lectus dapibus, a pulvinar mauris aliquam.
                </h4>

                <motion.button whileHover={{scale: 0.9}} className='btn-color p-2 px-10 text-white w-[12rem] '>Learn More</motion.button>
            </div>
        </div>


        {/* ====RIGHT==== */}
        <div className='w-[50%] '>
            <div className='flex'>
                <div className='w-[20%] h-full bg-white'></div>
                <div className='w-[140%] lg:w-[80%] h-fit pb-10 ml-20 bg-slate-200 flex flex-col gap-10'>
                    <div className='h-[8rem] w-[25rem] bg-white relative  left-[-5rem] p-2'>
                        <img src={CURSOR} alt='cursor' className='h-5 w-3 ml-5' />
                        <h3 className='w-[15rem] pt-2 text-2xl font-bold' >Build or Customize a Website in Minutes</h3>
                    </div> 

                    <div className='h-[8rem] w-[25rem] bg-white relative left-[-5rem] p-2'>
                        <img src={ROCKET} alt='cursor' className='h-5 w-5 ml-5' />
                        <h3 className='w-[15rem] pt-2 text-2xl font-bold' >Build or Customize a Website in Minutes</h3>
                    </div> 
                </div>
            </div>
            <div className='h-[6rem] w-[6rem] ml-0 lg:ml-24 bg-slate-200'>

            </div>
        </div>
    </div>
  )
}

export default Features
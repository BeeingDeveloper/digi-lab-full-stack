import React from 'react'
import '../utils/style.css'
import VIDEO from '../assets/images/video-img.png'
import {BsFillPlayFill} from 'react-icons/bs'
import {motion} from 'framer-motion';

const VideoSection = () => {
  return (
    <div className='w-[90%] lg:w-[75%] h-auto m-auto flex flex-col gap-10'>
        <div className='flex'>
            <div className='w-16 h-16 box-gray'>
            </div>
            <h2 className='my-auto relative left-[-2rem] text-gray-c font-bold'>VIDEO TITLE</h2>
        </div>
        
        <h2 className='text-[2rem] font-extrabold'>Inform users with video sections</h2>
        {/* bottom-[6.5rem] lg:bottom-[28rem] */}
        <div className=''>
            <img src={VIDEO} alt='thumnail' className='w-full' /> 
            <motion.div whileHover={{scale: 0.9}} className=' h-14 lg:h-24 w-14 lg:w-24 cursor-pointer bg-white play-btn relative rounded-full flex justify-center items-center text-3xl'>
              <BsFillPlayFill />
            </motion.div>

            <div className='vdo-before-box h-[4rem] w-[4rem] relative left-[-4rem] bottom-[3.5rem] lg:bottom-[6rem]'>
            </div>

            <h5 className=' w-[21rem] lg:w-[32.5rem] h-[7rem] relative bottom-[8rem] left-0 lg:left-[47%]'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget consectetur eros. Aliquam erat volutpat. Praesent pulvinar arcu non lectus dapibus, a pulvinar mauris aliquam.

            </h5>
        </div>

    </div>
  )
}

export default VideoSection
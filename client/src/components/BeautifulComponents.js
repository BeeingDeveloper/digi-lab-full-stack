import React from 'react'
import PAPER_ROCKET from '../assets/images/paper-rocket.png'
import IMG_ICON from '../assets/images/img-icon.png'
import TICK from '../assets/images/tick-mark.png';
import WOMEN from '../assets/images/women.png';
import WOMEN2 from '../assets/images/women2.png';
import WOMEN3 from '../assets/images/women3.png';
import STAMPS_ICON from '../assets/images/stamps-icon.png'
import STAMPS_CENTER from '../assets/images/stamps-center.png'
import {AiOutlineArrowRight} from 'react-icons/ai'
import {AiOutlineArrowLeft} from 'react-icons/ai'
import {motion} from 'framer-motion'



const BeautifulComponents = () => {
  return (
    <div className='h-auto w-screen'>
        <section className='w-[90%] lg:w-[75%] flex gap-32 h-full m-auto pt-44 pb-20 flex-col lg:flex-row'>
            <div className='w-full lg:w-[50%] h-full flex flex-col gap-14'>
                <div  className='w-full h-fit flex gap-10'>
                    <img src={PAPER_ROCKET} alt='paperrocket' className='w-[4rem] h-[4rem]' />
                    <div>
                        <h2 className='text-2xl font-extrabold'>Choose <br/> your sections</h2>
                        <h5 className='font-semibold'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
                        </h5>
                    </div>
                </div>

                <div  className='w-full h-full  flex gap-10'>
                    <img src={IMG_ICON} alt='paperrocket' className='w-[4rem] h-[4rem]' />
                    <div>
                        <h2 className='text-2xl font-extrabold'>Choose <br/> your sections</h2>
                        <h5 className='font-semibold'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
                        </h5>
                    </div>
                </div>
            </div>

            <div className=' w-full lg:w-[50%] h-full'>
                <h2 className='text-[2rem] font-extrabold'>Add the images<br/> and text you need</h2>
                <h5 className='ml-10'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.</h5>
                <motion.button whileHover={{scale: 0.9}} className='bg-slate-200 p-2 px-4 ml-10 mt-10'>Learn More</motion.button>
            </div>
        </section>


        <section className='w-[90%] lg:w-[75%] h-full m-auto pt-44 pb-10 flex flex-col lg:flex-row gap-20 lg:gap-0 justify-between'>
            <div>
                <div className='flex h-fit'>
                    <div className='h-[4rem] w-[4rem] bg-slate-200'>
                    </div>
                    <h2 className='relative left-[-2rem] my-auto font-bold text-gray-c'>FEATURES</h2>
                </div>

                <h2 className='text-[2.5rem] font-extrabold pt-5 w-[20rem] lg:w-[30rem]'>You're not just doing business. You're doing life.</h2>
                <ul className='pt-14'>
                    <li className='flex h-12 gap-3'>
                        <span><img src={TICK} alt='tick' /> </span>
                        <h4 className='py-2'>Responsive Components</h4>
                    </li>

                    <li className='flex h-12 gap-3'>
                        <span><img src={TICK} tick='tick' /> </span>
                        <h4 className='py-2'>Over 50 Sections</h4>
                    </li>

                    <li className='flex h-12 gap-3'>
                        <span><img src={TICK} alt='tick' /> </span>
                        <h4 className='py-2'>Handcrafted Pages</h4>
                    </li>
                </ul>
            </div>
            <div className=' h-[30rem] lg:h-[614px] w-[25rem] lg:w-[502px]'>
                <img src={WOMEN} className='h-[30rem] lg:min-h-[614px] w-[25rem] lg:min-w-[502px] relative bottom-20' />
            </div>
        </section>


        <section className='w-[90%] lg:w-[75%] h-full m-auto pt-44 pb-20 flex justify-evenly lg:gap-64 flex-col lg:flex-row'>
            <div className='flex'>
                <div className='w-[25rem] h-[35rem] img-shadow'>
                        <div className='flex'>
                            <img src={WOMEN2} alt='women2' className='relative top-14 left-14' />
                            <div className='w-[4.5rem] h-[4.5rem] img-style-box2  pl-[4.5rem] relative top-[26.5rem] left-14'>
                            </div>
                        </div>
                </div>
                <div className='w-[2rem] h-[2rem] img-style-box relative bottom-[2rem]'></div>
            </div>

            <div>
                <div className='flex h-fit'>
                    <div className='w-[4rem] h-[4rem] bg-slate-200'></div>
                    <h4 className='relative left-[-2rem] my-auto font-bold text-gray-c' >OUR KNOWLEDGE</h4>                    
                </div>
                <h2 className='text-[2.5rem] font-extrabold'>An Ui Kit that's<br/> Modern & Elegant</h2>
                <h4 className='text-light-gray w-[20rem] lg:w-[25rem] pt-14'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget consectetur eros. Aliquam erat volutpat.</h4>
            </div>
        </section>


        <section className='w-[90%] lg:w-[75%] h-full m-auto pt-44 pb-20 flex justify-evenly lg:gap-64 flex-col lg:flex-row'>
            <div className=' lg:w-[38rem] text-center flex relative left-5 '>


                <div className='w-fit'>
                    <div className='flex gap-2 h-20 w-fit m-auto  cursor-pointer'>
                        <div>
                            <img src={STAMPS_ICON} alt='wetransfer' className=' lg:h-8 lg:w-9 ' />
                            <img src={STAMPS_CENTER} alt='wetransfer' className='relative bottom-[16px] left-[9px] lg:bottom-[18px] lg:left-[12px]' />
                        </div>
                        <h2 className='font-semibold stamps font-stamps text-2xl lg:text-3xl'>Stamps</h2>
                    </div>

                    <h2 className=' text-[1.3rem] lg:text-[2.5rem] font-extrabold w-[120%] lg:w-[110%]'>The Opus UI Kit lets you showcase your work in style. It's helped take our business online</h2>
                    <h2 className=' text-xl lg:text-2xl font-extrabold pt-14 w-fit m-auto relative left-8 lg:left-0'>ALEXA F.</h2>
                    <h2 className=' text-lg lg:text-xl text-gray-c font-extrabold pt-4  relative left-8 lg:left-0'>DESIGNER <a href='#'>@ STAMPS</a></h2>
                    
                    <div className='flex w-40 m-auto justify-between pt-14  relative left-8 lg:left-0'>
                        <motion.div whileHover={{scale: 0.9}} className='bg-slate-200 p-5 transition-all ease-in-out duration-100'>
                            <AiOutlineArrowLeft />
                        </motion.div>
                        
                        <motion.div whileHover={{scale: 0.9}} className='bg-slate-200 p-5 transition-all ease-in-out duration-100'>
                            <AiOutlineArrowRight />
                        </motion.div>
                    </div>
                </div>


                <div className='flex relative left-10'>
                    <div className='h-8 w-8 img-style-box'></div>
                    <div className='h-16 w-16 style-box-blue relative bottom-16'></div>
                </div>
            </div>

            <div>
                <img src={WOMEN3} alt='women3' />
            </div>
        </section>

    </div>
  )
}

export default BeautifulComponents
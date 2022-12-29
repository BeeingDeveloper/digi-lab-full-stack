import React, { useContext, useEffect, useState } from 'react';
import '../utils/style.css';
import {BsArrowRight} from 'react-icons/bs';
import MANIMG from '../assets/images/man.png';
import DOT from '../assets/images/dots.png';
import _L from '../assets/images/l-logo.png';
import {motion} from 'framer-motion'
import COMMA from '../assets/images/commas.png'
import {RiMouseLine} from 'react-icons/ri'
import Partners from './Partners';
import VideoSection from './VideoSection';
import Features from './Features';
import Work from './Work';
import BeautifulComponents from './BeautifulComponents';
import Resources from './Resources';
import Footer from './Footer';
import { StateContext } from '../context/StateProvider';
import { fetchHeading, fetchUiData } from '../api/api';
import { actionType } from '../context/reducer';

const Home = () => {

    const fields= [];
    for (let i = 1; i <= 42; i++) {
      fields.push(<div className=' h-2 w-10 mr-20 mb-10 ' key={i}>
        <img src={DOT} alt="dot" />
      </div>);
    }

    const {state, dispatch} = useContext(StateContext);
    
    const { uiData, emails} = state;

    useEffect(()=>{
        fetchUiData().then((res)=>{
            dispatch({type: actionType.SET_UI_DATA, uiData: res.data})
        });
    },[])

  return (
    <>
    
    <div>
        <div className='h-16 w-screen'>
            <div className='flex w-full lg:w-[75%] relative m-auto justify-between'>
                <div className='h-16 w-16 small-box'> </div>
                <div className='hidden lg:block w-[529.19px] h-[660px] bg-white relative left-[15rem]'>
                    <div className='h-[80%] w-full small-box pt-16'>
                        <div className='grid grid-cols-7 w-[55%]'>
                            {fields}
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className='w-full m-auto bg-blue h-auto flex'>
            <div className='flex flex-col lg:flex-row w-[80%] m-auto'>
                {/* =================LEFT=============== */}
                <div className='flex'>
                    <div className='hidden lg:flex flex-col pt-20 '>
                        <div className='h-64 w-64 grid grid-cols-7'>
                            {fields}
                        </div>
                        <div className='h-20 w-20 bg-dark-blue-box'></div> 
                    </div>

                    <div className='relative lg:left-[-9rem]'>
                        <div className='h-8 w-8 style-box-blue '></div>
                        <div className='text-white text-center lg:text-left flex'>
                            <div className=' h-fit'>
                                <h2  className='text-[2.5rem] lg:text-[4.5rem] font-extrabold lg:leading-[5rem] w-fit h-fit'>
                                    {uiData? uiData[0].heading : "Built for enterprise business"}
                                </h2>
                                <h4 className=' text-slate-200 text-sm lg:text-lg pt-5 leading-6 w-[20rem] lg:w-[25rem]'>Opus includes everything you need to build a beautiful website for your business. Built to perform and look good doing so.</h4>
                            </div>

                            <div className='h-full w-[5rem]   my-auto'>
                                <img src={_L} alt='l' className='hidden lg:block h-6 w-4 lg:h-16 lg:w-12 relative bottom-12 right-20 my-auto' /> 
                            </div>


                        </div>

                        <div className='flex text-white mt-6 gap-10'>
                            <motion.button whileHover={{scale: 0.9}} className='flex btn-color p-2 px-4 gap-2 font-semibold'>
                                <h4>Learn More</h4>
                                <BsArrowRight className='my-auto' />
                            </motion.button>
                            <div className='flex my-auto'>Explore Pages</div>
                        </div>
                    </div>
                </div>
                    
                
                {/* =====================RIGHT============== */}
                <div className=' flex'>
                    <div className='flex'>
                        <img src={uiData? uiData[0].imageURL : MANIMG} alt='man' className='relative lg:top-20  pt-20 lg:pt-0 man-img min-w-[470px] h-[587px]' />
                        <div className='w-12 h-12  bg-blue-800 relative left-[49.5%] box-blue-64 bottom-[-2rem]'></div>
                    </div>
                    <div className='hidden lg:block w-[21rem] h-[18rem] dublin-box bg-white relative  top-[24rem] p-12'>
                        <h4 className='font-bold text-slate-600'>I felt like I couldn’t grow until I moved to Opus. Now I am encouraged to sell more with them.</h4>
                        <div className='text-2xl font-extrabold flex flex-col lg:flex-row mt-10'>
                            <div className=''>
                                <h2 className='w-44'>Frank Dublin </h2>
                                <span className='text-lg text-slate-400 font-semibold'>CEO <a href='#'>@ STAMPS</a> </span> 
                            </div>
                            <img src={COMMA} alt='comma' className='h-8 w-10 ml-4' />
                            <div className='relative min-w-[25rem] min-h-[10rem] bg-white left-[2rem] bottom-10'></div>
                       </div>
                    </div>  
                </div>
            </div>
        </div>
        <div className='hidden lg:flex w-screen h-32'>
            <div className='w-[75%] flex m-auto h-full bg-slate-200'>
                <div className='flex w-[40%]  h-full justify-center items-center'>
                    <RiMouseLine className='h-6 w-6 text-slate-400' />
                    <h3 className='font-bold text-slate-500'>SCROLL FOR MORE</h3>
                </div>
                <div className='btn-color h-full w-[60%]'>

                </div>
            </div>
        </div>
    </div>

    <Partners />
    <VideoSection />
    <Features />
    <Work />
    <BeautifulComponents />
    <Resources />
    <Footer />
    </>
  )
}

export default Home



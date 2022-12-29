import React, { useContext, useState } from 'react'
import { StateContext } from '../context/StateProvider'
import {GoSmiley} from 'react-icons/go'
import {BsEmojiFrownFill} from 'react-icons/bs'
import '../utils/style.css'

const CustomAlert = () => {


    const {activeAlert, setActiveAlert, isPositive, alertData} = useContext(StateContext);
    return (
    <div className='flex  overflow-visible h-20 absolute lg:left-[42%] bottom-20 w-full lg:w-[25rem]'>
        <div className={`flex transition-all ease-in duration-150 ${activeAlert? "h-20" : 'h-0'} justify-center w-full h-full m-auto items-center  rounded-lg mt-3 overflow-hidden z-50`}>
            <div className={`flex h-12 w-[90%] lg:w-full my-auto   rounded-lg shadow-lg bg-white`}>
                <div className={`w-2 h-full ${isPositive? 'bg-green-500':'bg-red-500'} rounded-l-md `}></div>
                <div className='flex lg:text-xl gap-5 h-fit mt-2 mx-auto'>
                    {isPositive? (<GoSmiley className='h-fit my-auto text-green-600' />) : (<BsEmojiFrownFill className='h-fit my-auto text-red-600' />)}
                    <h2 className={`font-extrabold mt-1 ${isPositive ? 'text-green-600': 'text-red-600'}`}>{alertData}</h2>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CustomAlert
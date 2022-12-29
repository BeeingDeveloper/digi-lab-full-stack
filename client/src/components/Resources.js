import React from 'react'
import '../utils/style.css'
import RESOURCE1 from '../assets/images/resource1.png';
import RESOURCE2 from '../assets/images/resource2.png';
import RESOURCE3 from '../assets/images/resource3.png';
import {motion} from 'framer-motion'


const Resources = () => {

    const resourceItems = [
        {
            img: RESOURCE1,
            heading: 'A high-converting, high-performing template',
            lorem: "Turpis senectus amet tortor in sodates odio tettus. Pretium id amet, euismod sceteriscue vetit."
        },
        {
            img: RESOURCE2,
            heading: 'With a clean, minimal and professional look',
            lorem: "Turpis senectus amet tortor in sodates odio tettus. Pretium id amet, euismod sceteriscue vetit."
        },
        {
            img: RESOURCE3,
            heading: 'Opus made our journey possible',
            lorem: "Turpis senectus amet tortor in sodates odio tettus. Pretium id amet, euismod sceteriscue vetit."
        },
    ]


  return (
    <div className='w-[90%] lg:w-[75%] m-auto'>
        <div className='w-[80%] m-auto flex flex-col lg:flex-row gap-5 lg:gap-0 justify-between pb-20'>
            <h2 className='text-2xl lg:text-[2.5rem] font-extrabold'>Resources</h2>
            <motion.button  whileHover={{scale: 0.9}} className='btn-color w-fit p-2 px-4 text-white'>Get Started</motion.button>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-3'>
            {
                resourceItems.map((elm, i)=>{
                    return(
                            <div className='w-[19rem] m-auto pb-14' key={i}>
                                <img src={elm.img} alt={elm.heading} />
                                <h2 className='text-3xl font-bold h-32'>{elm.heading}</h2>
                                <h4 className='text-light-gray'>{elm.lorem}</h4>
                                <motion.button whileHover={{scale: 0.9}} className='bg-slate-200 p-3 px-4 mt-5'>Read Article</motion.button>
                            </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Resources
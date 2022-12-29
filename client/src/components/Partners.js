import React from 'react'
import '../utils/style.css'
import WETRANSFER from '../assets/images/wetransfer.png'
import STAMPS_ICON from '../assets/images/stamps-icon.png'
import STAMPS_CENTER from '../assets/images/stamps-center.png'
import SUGERCANE from '../assets/images/Sugercane.png'


const Partners = () => {
  return (
    <div className='w-[90%] lg:w-[75%] m-auto h-auto text-center pb-10 lg:pb-32 pt-10'>
        <h2 className=' font-extrabold text-3xl'>Trusted and loved by the world's best teams</h2>
        
        <div className='grid grid-cols-1 lg:grid-cols-4 text-slate-700 w-[75%] m-auto pt-24 '>
            <div className='m-auto cursor-pointer hover:scale-75 h-44 transition-all ease-in-out duration-200'>
                <img src={WETRANSFER} alt='wetransfer' />
            </div>

            <div className='flex gap-2 m-auto  h-44  cursor-pointer hover:scale-75 transition-all ease-in-out duration-200'>
                <div>
                    <img src={STAMPS_ICON} alt='wetransfer' />
                    <img src={STAMPS_CENTER} alt='wetransfer' className='relative bottom-4 left-[9px]' />
                </div>
                <h2 className='font-semibold stamps font-stamps text-2xl'>Stamps</h2>
            </div>

            <div className='m-auto h-44 cursor-pointer hover:scale-75 transition-all ease-in-out duration-200'>
                <h2 className='font-900 stamps font-manter text-2xl'>manter.</h2>
            </div>

            <div className='m-auto h-44  cursor-pointer hover:scale-75 transition-all ease-in-out duration-200'>
                <img src={SUGERCANE} alt='sugercane' />
            </div>

            {/*  */}
        </div>
        <div className='grid lg:grid-cols-4 w-[75%] m-auto justify-evenly gap-12 pt-24 pb-44'>
            <div className=' h-44 flex flex-col gap-3 '>
                <h2 className='text-3xl font-extrabold font-default'>99.95%</h2>
                <h4 className='font-bold'>Accuracy rate</h4>
                <h5>in fulfilling orders</h5>
            </div>

            <div>
                <div className=' flex flex-col gap-3 '>
                    <h2 className='text-3xl font-extrabold font-default'>5,000+</h2>
                    <h4 className='font-bold'>Ecommerce buisness</h4>
                    <h5>partner with Opus</h5>
                </div>
            </div>

            <div>
                <div className='flex flex-col gap-3 '>
                    <h2 className='text-3xl font-extrabold font-default'>96.96%</h2>
                    <h4 className='font-bold'>Of orders ship on time</h4>
                    <h5>pwithin SLA</h5>
                </div>
            </div>

            <div>
                <div className=' flex flex-col gap-3 '>
                    <h2 className='text-3xl font-extrabold font-default'><span className='text-slate-300'>#</span>1</h2>
                    <h4 className='font-bold'>Ecommerce buisness</h4>
                    <h5>partner with Opus</h5>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Partners
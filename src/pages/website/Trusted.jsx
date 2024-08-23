import React from 'react'
import { m7, m6, m5, m4, m3, m2, m1, setting, clientcircle } from '../../assets'
import Marquee from 'react-fast-marquee'


const Trusted = () => {
  return (
    <div>
      <div className='pt-[80px] pb-[120px] Truste'>
        <div className=' '>
          <h2 className='text-[50px] text-[#FFFFFF] mb-[30px] font-poppins tr'>Trusted by</h2>
          <div className='relative THID'>
            <img src={clientcircle} className='absolute top-[-253px] right-0' alt="" />
            <img src={setting} className='absolute top-[-179px] right-[122px]' alt="" />
          </div>

          <div className="w-full ">
            <div className="w-[100%] flex flex-col">
              <Marquee autoFill pauseOnHover>
                <div className=' m-1 rounded-xl  space-x-5 cursor-pointer text-sky-400'>
                  <img className='w-[180px] h-[100px] mx-[25px]' src={m1} alt="" />
                </div>
                <div className=' m-1 rounded-xl  space-x-5 cursor-pointer text-sky-400'>
                  <img className='w-[180px] h-[100px] mx-[25px]' src={m2} alt="" />

                </div>
                <div className=' m-1 rounded-xl  space-x-5 cursor-pointer text-sky-400'>
                  <img className='w-[180px] h-[100px] mx-[25px]' src={m3} alt="" />

                </div>
                <div className=' m-1 rounded-xl  space-x-5 cursor-pointer text-sky-400'>
                  <img className='w-[180px] h-[100px] mx-[25px]' src={m4} alt="" />

                </div>
                <div className=' m-1 rounded-xl  space-x-5 cursor-pointer text-sky-400'>
                  <img className='w-[180px] h-[100px] mx-[25px]' src={m5} alt="" />

                </div>
                <div className=' m-1 rounded-xl  space-x-5 cursor-pointer text-sky-400'>
                  <img className='w-[180px] h-[100px] mx-[25px]' src={m6} alt="" />

                </div>
                <div className=' m-1 rounded-xl  space-x-5 cursor-pointer text-sky-400'>
                  <img className='w-[180px] h-[100px] mx-[25px]' src={m7} alt="" />

                </div>

              </Marquee>
              <Marquee autoFill pauseOnHover direction='right'>
                <div className=' m-1 rounded-xl  space-x-5 cursor-pointer text-sky-400'>
                  <img className='w-[180px] h-[100px] mx-[25px]' src={m1} alt="" />
                </div>
                <div className=' m-1 rounded-xl  space-x-5 cursor-pointer text-sky-400'>
                  <img className='w-[180px] h-[100px] mx-[25px]' src={m2} alt="" />

                </div>
                <div className=' m-1 rounded-xl  space-x-5 cursor-pointer text-sky-400'>
                  <img className='w-[180px] h-[100px] mx-[25px]' src={m3} alt="" />

                </div>
                <div className=' m-1 rounded-xl  space-x-5 cursor-pointer text-sky-400'>
                  <img className='w-[180px] h-[100px] mx-[25px]' src={m4} alt="" />

                </div>
                <div className=' m-1 rounded-xl  space-x-5 cursor-pointer text-sky-400'>
                  <img className='w-[180px] h-[100px] mx-[25px]' src={m5} alt="" />

                </div>
                <div className=' m-1 rounded-xl  space-x-5 cursor-pointer text-sky-400'>
                  <img className='w-[180px] h-[100px] mx-[25px]' src={m6} alt="" />

                </div>
                <div className=' m-1 rounded-xl  space-x-5 cursor-pointer text-sky-400'>
                  <img className='w-[180px] h-[100px] mx-[25px]' src={m7} alt="" />

                </div>
              </Marquee>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Trusted

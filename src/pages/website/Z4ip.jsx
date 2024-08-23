



import React from 'react'
import { back, Downlogo, int, ratingbox, star, supplier, trro, ui_ux, vesbanner, z4bottom, z4icon } from '../../assets'
import { Link } from 'react-router-dom'
import { TiArrowRight } from "react-icons/ti";
import { PiCircleFill } from "react-icons/pi";
import { FaCircle } from "react-icons/fa";
import Container2 from '../../components/Container2';
import Container4 from '../../components/Container4';
import AutoPlay from './Autoplay';
import Container7 from '../../components/Container7';
import Autonewplay from './Autonewplay';


export default function Z4ip() {
  return (
    <div>


      <div className="lg:mt-[80px] md:mt-[110px] mt-[110px]">
        <div className="xl:mx-[118px] md:mx-[45px] mx-[15px] mb-[48px]">
          <h2>
            <span className="md:text-[30px] sm:text-[24px] text-[16px] font-poppins" data-aos="slide-down" data-aos-duration="2000">
              <span className="md:text-[30px] sm:text-[24px] text-[16px] text-[#00b0ab] font-poppins font-semibold">
                z4ip
              </span>
              — Cognitive Learning & Activity Tracker
            </span>

            <div className="md:mt-[10px] mt-[5px]" data-aos="slide-down" data-aos-duration="1000" >
              <span className="xl:text-[48px] md:text-[40px] sm:text-[30px] text-[24px] text-[#000000] font-poppins font-semibold" >
                An app to check user's cognitive performance along with daily activity tracking.
              </span>
            </div>
          </h2>
        </div>
        <div className="w-full h-full md:px-0 px-[14px]">
          <img className="w-full h-full" src={vesbanner} alt="" />
        </div>
      </div>


      <div className="pt-20">
        <Container4>
          <div className="grid md:grid-cols-5 grid-cols-1 xl:px-0 lg:px-5 px-7">
            <div className="md:col-span-3 col-span-1 lg:pr-12 pr-5" data-aos="slide-right" data-aos-duration="1000">
              <h2 className="lg:text-5xl text-3xl text-black font-poppins mb-4">Overview</h2>
              <p className="font-poppins sm:text-lg text-sm mt-6 text-gray-600">
                A mobile app to keep track of the user’s cognitive performance as users go about their day, helping them identify when they are at their peak performance and when they need that little extra boost.
              </p>
            </div>
            <div className="md:col-span-2 col-span-1 lg:pt-0 sm:pt-20 pt-12" data-aos="slide-left" data-aos-duration="1000">
              <div className="mb-9">
                <p className="text-lg font-poppins text-gray-800 mb-2">Client</p>
                <p className="text-2xl text-gray-800 font-semibold">Duke NUS Medical School</p>
              </div>
              <div className="flex flex-wrap mb-9">
                <div>
                  <p className="text-lg font-poppins mb-2 text-gray-800">Period</p>
                  <p className="text-2xl font-poppins font-semibold text-gray-800">2019</p>
                </div>
                <div className="ml-11">
                  <p className="text-lg font-poppins mb-2 text-gray-800">Geography</p>
                  <p className="text-2xl font-poppins font-semibold text-gray-800">Singapore</p>
                </div>
              </div>
              <div className="mb-9">
                <p className="text-lg text-gray-800 mb-2 font-poppins">Work Done</p>
                <div className="flex flex-wrap">
                  <li className="list-none mb-5 px-2 w-28">
                    <Link to={''}>
                      <img className="w-12 h-12 mx-6" src={int} alt="" />
                    </Link>
                    <li className="text-center text-gray-800 font-semibold">
                      <Link to={''}>Website</Link>
                    </li>
                  </li>
                  <li className="list-none mb-5 px-2 w-28">
                    <Link to={''}>
                      <img className="w-12 h-12 mx-6" src={int} alt="" />
                    </Link>
                    <li className="text-center text-gray-800 font-semibold">
                      <Link to={''}>Website</Link>
                    </li>
                  </li>
                  <li className="list-none mb-5 px-2 w-28">
                    <Link to={''}>
                      <img className="w-12 h-12 mx-6" src={int} alt="" />
                    </Link>
                    <li className="text-center text-gray-800 font-semibold">
                      <Link to={''}>Website</Link>
                    </li>
                  </li>
                  <li className="list-none mb-5 px-2 w-28">
                    <Link to={''}>
                      <img className="w-12 h-12 mx-6" src={ui_ux} alt="" />
                    </Link>
                    <li className="text-center text-gray-800 font-semibold">
                      <Link to={''}>UI/UX</Link>
                    </li>
                  </li>
                </div>
              </div>
            </div>
          </div>
        </Container4>
      </div>
      <div className="py-20">
        <div className="lg:mx-48 md:mx-24 mx-8">
          <h2 className="mb-4 text-5xl font-poppins text-black">Services</h2>
          <ul className="flex flex-wrap">
            <li className="bg-teal-100 duration-1000 hover:bg-teal-500 mb-5 mr-2 py-4 px-8 w-72 rounded-full">
              <Link className="text-lg font-poppins hover:text-white duration-1000 text-gray-800" to={''}>Mobile App Development</Link>
            </li>
            <li className="bg-teal-100 duration-1000 hover:bg-teal-500 mb-5 mr-2 py-4 px-8 w-64 rounded-full">
              <Link className="text-lg font-poppins hover:text-white duration-1000 text-gray-800" to={''}>Web Development</Link>
            </li>
            <li className="bg-teal-100 duration-1000 hover:bg-teal-500 mb-5 mr-2 py-4 px-8 w-28 rounded-full">
              <Link className="text-lg font-poppins hover:text-white duration-1000 text-gray-800" to={''}>UI/UX</Link>
            </li>
            <li className="bg-teal-100 duration-1000 hover:bg-teal-500 mb-5 mr-2 py-4 px-8 w-52 rounded-full">
              <Link className="text-lg font-poppins hover:text-white duration-1000 text-gray-800" to={''}>Product Design</Link>
            </li>
          </ul>
        </div>
      </div>
      <Container4>
        <div className="w-full p-10 Coconat rounded-xl bg-indigo-100">
          <div className="dukenus"></div>
        </div>
      </Container4>
      <Container7>
        <div className="mt-20 grid md:grid-cols-2 grid-cols-1 gap-4 md:mx-0 mx-4">
          <div className="my-auto font-poppins" data-aos="slide-right" data-aos-duration="1000">
            <h2 className="text-3xl text-black">🚀 Games</h2>
            <p className="text-gray-600 text-xl mt-5 font-poppins">
              Through 5-minute game sessions spread across the day, Z4ip will assess your processing speed, spatial working memory, and reaction time.
            </p>
            <ul className="list-disc py-7 text-gray-600 font-poppins text-xl px-5">
              <li><strong>Symbol Search Game:</strong> Find the pair below that matches one of the pairs on top</li>
              <li><strong>Dot Memory Game:</strong> Remember where the dots were while trying to find the ‘F’s</li>
              <li><strong>Reaction Time Game:</strong> Respond as fast as you can when the timer starts</li>
            </ul>
          </div>
          <div className="my-5">
            <div className="games"></div>
          </div>
        </div>
      </Container7>
      <Container7>
        <div className="mt-20 grid md:grid-cols-2 grid-cols-1 gap-4">
          <div className="my-5">
            <div className="tracking"></div>
          </div>
          <div className="my-auto font-poppins md:pl-12 md:ml-5 md:mx-0 mx-4" data-aos="slide-left" data-aos-duration="1000">
            <div className="flex">
              <img className="w-9 mr-2 h-9" src={z4icon} alt="" />
              <h2 className="text-2xl text-black">Performance Tracking Features</h2>
            </div>
            <p className="text-gray-600 text-xl mt-5 font-poppins">
              You can easily keep track of how you are performing with a summary display of your past game scores. Learn more about how your performance fluctuates with your lifestyle choices (e.g., being sleep-deprived). Reward points will be given along the way as you play.
            </p>
            <ul className="list-disc py-7 text-gray-600 font-poppins text-xl px-5">
              <li>Summary display of past game scores</li>
              <li>Receive notifications for game sessions</li>
              <li>Set timings to indicate when you may be too busy to play</li>
              <li>Earn reward points</li>
            </ul>
          </div>
        </div>
      </Container7>
















      {/* <div className="lg:mt-[80px] md:mt-[50px] mt-[30px]">
        <div className="xl:mx-[118px] md:mx-[45px] mx-[15px] mb-[48px]">
          <h2>
            <span className="md:text-[30px] sm:text-[24px] text-[16px] font-poppins" data-aos="slide-down" data-aos-duration="2000">
              <span className="md:text-[30px] sm:text-[24px] text-[16px] text-[#00b0ab] font-poppins font-semibold">
                z4ip
              </span>
              — Cognitive Learning & Activity Tracker
            </span>

            <div className="md:mt-[10px] mt-[5px]" data-aos="slide-down" data-aos-duration="1000" >
              <span className="xl:text-[48px] md:text-[40px] sm:text-[30px] text-[24px] text-[#000000] font-poppins font-semibold" >
                An app to check user's cognitive performance along with daily activity tracking.
              </span>
            </div>
          </h2>
        </div>
        <div className="w-full h-full md:px-0 px-[14px]">
          <img className="w-full h-full" src={vesbanner} alt="" />
        </div>
      </div>
      <div className="pt-[80px]">
        <Container4>
          <div className="grid md:grid-cols-5 grid-cols-1 xl:px-0 lg:px-[20px] px-[30px]">
            <div className="md:col-span-3 col-span-1 lg:pr-[50px] pr-[20px]" data-aos="slide-right" data-aos-duration="1000">
              <h2 className="lg:text-[50px] text-[35px] text-[#000000] font-poppins mb-[15px]">Overview</h2>
              <p className="font-poppins sm:text-[20px] text-[16px] mt-[25px] text-[#606e6e]">
                A mobile app to keep track of the user’s cognitive performance as users go about their day, helping them identify when they are at their peak performance and when they need that little extra boost.
              </p>

            </div>
            <div className="md:col-span-2 col-span-1 lg:pt-0 sm:pt-[80px] pt-[45px]" data-aos="slide-left" data-aos-duration="1000">
              <div className="mb-[35px]">
                <p className="text-[18px] font-poppins text-[#001817] mb-[10px]">Client</p>
                <p className="text-[24px] text-[#001817] font-semibold">Duke NUS Medical School</p>
              </div>
              <div className="flex flex-wrap mb-[35px]">
                <div>
                  <p className="text-[18px] font-poppins mb-[10px] text-[#001817]">Period</p>
                  <p className="text-[24px] font-poppins font-semibold text-[#001817]">2019</p>
                </div>
                <div className="ml-[45px]">
                  <p className="text-[18px] font-poppins mb-[10px] text-[#001817]">Geography</p>
                  <p className="text-[24px] font-poppins font-semibold text-[#001817]">Singapore</p>
                </div>
              </div>
              <div className="mb-[35px]">
                <p className="text-[18px] text-[#001817] mb-[10px] font-poppins">Work Done</p>
                <div className="flex flex-wrap">
                  <li className="list-none mb-[20px] px-[9px] w-[114px]">
                    <Link to={''}>
                      <img className="w-[50px] h-[50px] mx-[22px]" src={int} alt="" />
                    </Link>
                    <li className="text-center text-[#001817] font-semibold">
                      <Link to={''}>Website</Link>
                    </li>
                  </li>
                  <li className="list-none mb-[20px] px-[9px] w-[114px]">
                    <Link to={''}>
                      <img className="w-[50px] h-[50px] mx-[22px]" src={int} alt="" />
                    </Link>
                    <li className="text-center text-[#001817] font-semibold">
                      <Link to={''}>Website</Link>
                    </li>
                  </li>
                  <li className="list-none mb-[20px] px-[9px] w-[114px]">
                    <Link to={''}>
                      <img className="w-[50px] h-[50px] mx-[22px]" src={int} alt="" />
                    </Link>
                    <li className="text-center text-[#001817] font-semibold">
                      <Link to={''}>Website</Link>
                    </li>
                  </li>
                  <li className="list-none mb-[20px] px-[9px] w-[114px]">
                    <Link to={''}>
                      <img className="w-[50px] h-[50px] mx-[22px]" src={ui_ux} alt="" />
                    </Link>
                    <li className="text-center text-[#001817] font-semibold">
                      <Link to={''}>UI/UX</Link>
                    </li>
                  </li>
                </div>
              </div>
            </div>
          </div>
        </Container4>
      </div>
      <div className="py-[80px]">
        <div className="lg:mx-[198px] md:mx-[100px] mx-[30px]">
          <h2 className="mb-[15px] text-[50px] font-poppins text-[#000000]">Services</h2>
          <ul className="flex flex-wrap">

            <li className="bg-[#ccefee] duration-1000 hover:bg-[#73dedb] mb-[20px] mr-[10px] py-[18px] px-[32px] w-[294px] rounded-full">
              <Link className="text-[18px] font-poppins hover:text-[#FFFFFF] duration-1000 text-[#001817]" to={''}>Mobile App Development</Link>
            </li>

            <li className="bg-[#ccefee] duration-1000 hover:bg-[#73dedb] mb-[20px] mr-[10px] py-[18px] px-[32px] w-[254px] rounded-full">
              <Link className="text-[18px] font-poppins hover:text-[#FFFFFF] duration-1000 text-[#001817]" to={''}>web Development</Link>
            </li>
            <li className="bg-[#ccefee] duration-1000 hover:bg-[#73dedb] mb-[20px] mr-[10px] py-[18px] px-[32px] w-[114px] rounded-full">
              <Link className="text-[18px] font-poppins hover:text-[#FFFFFF] duration-1000 text-[#001817]" to={''}>UI/UX</Link>
            </li>
            <li className="bg-[#ccefee] duration-1000 hover:bg-[#73dedb] mb-[20px] mr-[10px] py-[18px] px-[32px] w-[210px] rounded-full">
              <Link className="text-[18px] font-poppins hover:text-[#FFFFFF] duration-1000 text-[#001817]" to={''}>Product Design</Link>
            </li>
          </ul>
        </div>
      </div>

      <Container4>
        <div className="w-full p-[40px] Coconat rounded-xl bg-[#e1e5ff]">
          <div className="dukenus"></div>
        </div>
      </Container4>


      <Container7>
        <div className="mt-[80px] grid md:grid-cols-2 grid-cols-1 gap-4 md:mx-[0px] mx-[15px]">
          <div className=" my-auto font-poppins " data-aos="slide-right" data-aos-duration="1000">
            <h2 className="text-[32px] text-[#000000]">🚀 Games</h2>
            <p className='text-[#666666] text-[20px] mt-[20px] font-poppins'>Through 5-minute game sessions spread across the day, Z4ip will assess your processing speed, spatial working memory, and reaction time. </p>
            <ul className="list-disc py-[30px] text-[#666666] font-poppins text-[20px] px-[20px]">
              <li><strong>Symbol Search Game:</strong>  Find the pair below that matches one of the pairs on top</li>
              <li><strong>Dot Memory Game: </strong> Remember where the dots were while trying to find the ‘F’s</li>
              <li><strong>Reaction Time Game: </strong> Respond as fast as you can when the timer starts</li>
            </ul>
          </div>
          <div className=" my-[20px]">
            <div className=" games"></div>
          </div>
        </div>
      </Container7>
      <Container7>
        <div className="mt-[80px] grid md:grid-cols-2 grid-cols-1 gap-4">
          <div className=" my-[20px]">
            <div className="traking"></div>
          </div>
          <div className=" my-auto font-poppins md:pl-[48px] md:ml-[20px] md:mx-[0px] mx-[15px]" data-aos="slide-left" data-aos-duration="1000">
            <div className="flex ">
              <img className='w-[38px] mr-[10px] h-[38px]' src={z4icon} alt="" />
              <h2 className="text-[28px] text-[#000000]"> Performance Tracking Features </h2>
            </div>
            <p className='text-[#666666] text-[20px] mt-[20px] font-poppins'>You can easily keep track of how you are performing with a summary display of your past game scores. Learn more about how your performance fluctuates with your lifestyle choices (e.g., being sleep-deprived). Reward points will be given along the way as you play. </p>
            <ul className="list-disc py-[30px] text-[#666666] font-poppins text-[20px] px-[20px]">
              <li>Summary display of past game scores</li>
              <li>Receive notifications for game sessions</li>
              <li>Set timings to indicate when you may be too busy to play</li>
              <li>Earn reward points</li>
            </ul>
          </div>
        </div>
      </Container7> */}











      <div className="h-[34px]"></div>
      <div className="w-full z4bottom">
        <img src={z4bottom} alt="" />
      </div>






      <div className='py-[80px] '>
        <div className=" relative b-black max-w-[377px] max-h-[513px] pt-[50px] pl-[50px] pb-[50px] rounded-[30px] mx-auto">
          <p className='text-[20px] text-[#FFFFFF] font-poppins'>
            Success Metrics
          </p>
          <h3 className='text-[42px] my-[5px] font-poppins text-[#FFFFFF]'>Impact</h3>
          <div className='mt-[96px]'>
            <img src={Downlogo} className='w-[62px] h-[61px]' alt="" />
            <h3 className='text-[#ffffff] text-[42px] font-poppins'>11000+</h3>
            <p className='text-[#ffffff] text-[20px] font-poppins'>Downloads</p>
          </div>
          <div className=''>
            <div className="absolute top-[161px] right-[-168px] lamap">
              <img className='max-w-[304px] max-h-[313px]' src={ratingbox} alt="" />
              <h3 className='font-semibold text-[42px] absolute top-[80px] right-[120px] text-[#FFFFFF] font-poppins'>4.6</h3>
              <p className=' text-[20px] absolute top-[135px] right-[96px] text-[#FFFFFF] font-poppins'>Star rating</p>
            </div>
            <div className=' absolute lamps top-[181px] right-[25px]'>
              <img className='max-w-[80px] max-h-[156px]' src={star} alt="" />
            </div>
          </div>
        </div>
      </div>








      <div className="py-[80px]">
        <div className=" lg:mx-[198px] md:mx-[80px] mx-[30px] ">
          <div>
            <h2 className='text-center text-[42px] text-[#000000] font-poppins '>
              <Link className='bbn' to={''}>Next Case Study</Link>
            </h2>
            <div className="py-[50px] text-center">
              <div className='text-[24px] font-poppins text-[#001817] mb-[15px]'>
                <Link to={''}>VES - QR Code Smart Kiosk Check-In & Instant Badge Printing With VESolution</Link>
              </div>
              <h3 className='font-semibold text-[32px] max-w-[500px] mx-auto text-center leading-[42px] text-[#001817] font-poppins'>
                <Link className='mb-[12px]' to={''}>Discovering Seamless Event Registration and Management.</Link>
              </h3>
            </div>

          </div>
        </div>
      </div>

    </div>
  )
}





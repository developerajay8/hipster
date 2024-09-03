

import React, { useEffect, useState } from 'react'
import Container4 from '../../components/Container4'
import { Focus, Fx, Mirror, warning, Ajay, bomb, Nimble, Sx, groups, invalidname, notched, pencil3, two, rep, edt, ast, atn, SS, gm, kt, wtcl, sstf, olm, f, s, t, fo, fi, si, ps, ladai, chor, light, pana, Lion, lg, blackstaurn } from '../../assets'
import { TiArrowRight } from "react-icons/ti";
import { FaShare } from "react-icons/fa";
import { IoIosArrowRoundForward } from "react-icons/io";


import { Link } from 'react-router-dom'
import Container2 from '../../components/Container2'
import SimpleSliders from './SimpleSliders';
// import Counter2 from './counter2';
// import Counter from './counter';


export default function Career() {

  // const accordElems = Data.map(
  //   (d, i) => {
  //     // console.log(d,i);
  //     return <Accord key={i} title={d.title} body={d.body} seo={d.seo} sep={d.sep} seps={d.seps} />

  //   }
  // )

  // last comment const [clients, setClient] = useState(1);


  // const [client,setClie] = useState(1);
  // const [clien,setCli] = useState(1);

  // useEffect(() => {
  //   const clientInterval = setInterval(() => {
  //     setClient((prev) => {
  //       if (prev < 50) {
  //         return prev + 1;
  //       } else {
  //         clearInterval(clientInterval);
  //         return prev;
  //       }
  //     });
  //   }, 50);
  // }, []);

  return (
    <div>
      <Container4>
        <div className=" pt-[100px] sm:pb-[80px] pb-[50px] xl:px-0 lg:px-[30px] md:px-[40px] sm:px-[20px] px-[20px]">
          <div className="">
            <h1 className='lg:text-[56px] md:text-[42px] sm:text-[35px] text-[35px]  font-poppins text-[#000000]' data-aos="slide-right" data-aos-duration="500">
              Career
             
            </h1>
            <h2 className='max-w-[885px] font-semibold text-[#001817] xl:text-[32px] lg:text-[28px] sm:text-[24px]
           text-[22px] font-poppins lg:mt-[60px]  md:mt-[30px] sm:mt-[18px] mt-[16px] mb-[15px] md:leading-[40px] leading-[30px]' data-aos="slide-left" data-aos-duration="500" >Embark on an adventure to create a world where user-centric technology solutions are available to all.</h2>
          </div>
        </div>
      </Container4>
      {/* <div className="nit lg:min-h-[800px] md:min-h-[500px] min-h-[300px]">
      </div> */}

      <div className=" toy lg:min-h-[550px] md:min-h-[400px] sm:min-h-[340px] min-h-[240px]">
      </div>

      <div className="">
        <Container4>
          <div className="md:h-[80px] h-[28px]"></div>
          <div className=" md:px-[0px] px-[20px]">
            <h2 className='md:text-[44px] text-[34px] sm:text-center font-poppins text-[#000000] mb-[24px]'>
              Great tech takes great people.</h2>
            <p className='max-w-[575px] sm:text-center mx-auto mb-[24px] text-[20px] font-poppins '>We aspire to create websites and applications for all ages, whether ten or a hundred years old. Technology should make our lives better, safer, and not harder.</p>
            <p className=' flex text-center font-bold text-[#38b1ac] items-center mt-[15px] text-[20px] font-poppins leading-[40px]'>
              {/* <Link className='sm:mx-auto' to={""}>Read Hipster’s full story </Link> */}
              {/* <IoIosArrowRoundForward className='text-3xl mx-auto' /> */}
            </p>
          </div>
          <div className="md:h-[80px] h-[28px]"></div>
        </Container4>
      </div>

      <form className='max-w-[1240px] mx-auto sm:py-[40px] py-[20px]' action="">
                <div className="mb-[40px]">
                  <input
                    type="text"
                    placeholder="Your name*"
                    className="border-none w-[100%] p-[8px] text-[20px] md:text-[24px] font-poppins text-[#252424]"
                  />
                  <div className="border"></div>
                </div>
                <div className="mb-[40px]">
                  <input
                    type="email"
                    placeholder="Your email*"
                    className="border-none w-[100%] p-[8px] text-[20px] md:text-[24px] font-poppins text-[#252424]"
                  />
                  <div className="border"></div>
                </div>
                <div className="mb-[40px]">
                  <input
                    type="number"
                    placeholder="Contact number"
                    className="border-none w-[100%] p-[8px] text-[20px] md:text-[24px] font-poppins text-[#252424]"
                  />
                  <div className="border"></div>
                </div>
                <div className="mb-[40px]">
                  <textarea
                    className="border-none w-[100%] p-[8px] text-[20px] md:text-[24px] font-poppins text-[#252424]"
                    placeholder="Tell us about Your project"
                  ></textarea>
                  <div className="border"></div>
                </div>
                <div className="">
                  <button
                    type="submit"
                    className="text-[14px] label px-[20px] hover:bg-black hover:text-white py-[14px] rounded-full"
                  >
                    Send request
                  </button>
                </div>
              </form>


{/* Counter ++ */}
      {/* <div className="w-full relative">
        <img src={blackstaurn} className="w-full inset-1  flex  items-center justify-center" alt="" />
        <Container4>
        <div className="font-[poppins] xl:my-[120px]  lg:my-[80px] md:my-[10px] absolute inset-0 max-w-[1140px] mx-auto  px-[15px] lg:py-[100px] sm:py-[50px] py-[18px]">
          <div className="grid grid-cols-3  lg:py-[100px] sm:py-[50px] py-[18px] border rounded-3xl text-[white]">
            <div className=" flex justify-center">
              <div className="">
                <h2 className="text-[20px] gap-3 sm:text-[32px] md:text-[48px] lg:text-[66px] font-semibold">
                  {clients}
                  <span>+</span>
                </h2>
                <p className=" text-[16px] md:leading-[32px] leading-[28px] md:text-[20px]">
                  Happy clients
                </p>
              </div>
            </div>

            <div className=" flex justify-center">
              <div>
                <h2 className="text-[20px] sm:text-[32px] md:text-[48px] lg:text-[66px] gap-3 font-semibold flex">
                <Counter />
                  <span>+</span>
                </h2>
                <p className=" text-[16px] md:leading-[32px] leading-[28px] md:text-[20px]">
                Completed Projects
                </p>
              </div>
            </div>

            <div className=" flex justify-center">
              <div>
                <h2 className="text-[20px] sm:text-[32px] md:text-[48px] lg:text-[66px] flex gap-3 font-semibold">
                <Counter2 />
                  <span>+</span>
                </h2>
                <p className=" text-[16px] md:leading-[32px] leading-[28px] md:text-[20px]">
                Skilled Experts
                </p>
              </div>
            </div>

            
          </div>
        </div>
      </Container4>
      </div> */}

      {/* <div className="md:py-[80px] sm:py-[65px] py-[28px]">
        <Container4>
          <div className="lg:h-[80px] md:h-[50px]"></div>
          <div className="grid grid-cols-1 md:px-[0px] px-[18px]">
            <h2 className='sm:text-center  text-[50px] text-[#000000] font-poppins mb-[14px] md:mb-[30px] lg:mb-[48px]'>What we stand for</h2>
            <p className='text-[20px] font-poppins max-w-[770px] mx-auto text-justify sm:text-center'>We are a digital agency that advocates for technological advancement across industries. Working with our clients to create impactful digital transformation, we have developed end-to-end solutions. Behind great technology is great people! Over the years, we have developed core values that guide our actions, inform decision making and align the team.</p>
          </div>
          <div className="lg:h-[80px] md:h-[50px]"></div>

          <div className="grid md:grid-cols-2 grid-cols-1 gap-6 lg:px-[0px] md:px-[60px] sm:px-[100px] px-[10px]">
            <div className="col-span-1 lg:pr-[60px] pr-[12px] pt-[48px] pl-[12px]" data-aos="slide-right" data-aos-duration="500">
              <img src={ladai} alt="" />
              <h3 className='lg:text-[28px] text-[22px] font-poppins my-[16px] text-[#000000] font-semibold'>Growth mindset</h3>
              <p className='lg:text-[20px] text-[16px] text-[#596868] font-poppins '>We’re driven by curiosity, continuous learning and believe that every person can grow. That’s why we ignore the age-old advice to hire based on backgrounds. We work with lifelong learners and inspire each other to make a positive impact!</p>
            </div>
            <div className="col-span-1 lg:pl-[60px] pl-[12px] pt-[48px] pr-[12px]" data-aos="slide-left" data-aos-duration="500">
              <img src={chor} alt="" />
              <h3 className='lg:text-[28px] text-[22px] font-poppins my-[16px] text-[#000000] font-semibold'>Tenacious</h3>
              <p className='lg:text-[20px] text-[16px] text-[#596868] font-poppins '>We roll up our sleeves, drink our favorite coffee or tea, and get things done. Sometimes we experiment, we fall, we adapt, and we learn. We are scrappy, resourceful, and don’t wait to be told what to do.</p>
            </div>
          </div>


          <div className="grid md:grid-cols-2 grid-cols-1 gap-6 lg:px-[0px] md:px-[60px] sm:px-[100px] px-[10px]">
            <div className="col-span-1 lg:pr-[60px] pr-[12px] pt-[48px] pl-[12px]" data-aos="slide-right" data-aos-duration="500">
              <img src={light} alt="" />
              <h3 className='lg:text-[28px] text-[22px] font-poppins my-[16px] text-[#000000] font-semibold'>Progressive</h3>
              <p className='lg:text-[20px] text-[16px] text-[#596868] font-poppins '>Masters of teamwork, we challenge assumptions, push boundaries, and turn possibilities into realities. Energized by new ideas, we are open-minded and never assume there’s only one solution to a problem. We encourage information sharing because when teams collaborate effectively, they can drive most change and innovation.</p>
            </div>
            <div className="col-span-1 lg:pl-[60px] pl-[12px] pt-[48px] pr-[12px]" data-aos="slide-left" data-aos-duration="500">
              <img src={pana} alt="" />
              <h3 className='lg:text-[28px] text-[22px] font-poppins my-[16px] text-[#000000] font-semibold'>Pragmatic and entreprenuerial</h3>
              <p className='lg:text-[20px] text-[16px] text-[#596868] font-poppins '>Started by serial entrepreneurs who developed their products before helping others build theirs, we look for pragmatic and cost-effective solutions to a problem. Nothing is more satisfying than creating a cool product and seeing it take off.</p>
            </div>
          </div>
        </Container4>
      </div> */}

      {/* <div className="">
        <div className='lg:h-[80px] md:h-[50px] '></div>
        <h2 className='text-[50px] text-[#000000] font-poppins text-center'>Our locations</h2>
        <div className='lg:h-[80px] md:h-[50px] h-[40px]'></div>

        <div className="grid grid-cols-2 ">
          <div className=" lg:col-span-1 col-span-2">
            <img src={Lion} data-aos="slide-right" data-aos-duration="500" alt="" />
          </div>
          <div className="lg:col-span-1 col-span-2  my-auto mx-auto" data-aos="slide-left" data-aos-duration="500">
            <div className="">
              <div className="px-[15px]  max-w-[600px] ">
                <div className="h-[33px]"></div>
                <h4 className='text-[24px] font-poppins text-[#000000]'>Singapore</h4>
                <p className='mt-[15px] font-normal text-[20px] text-[#000000] font-poppins'>
                  <strong className='font-normal'>Address : </strong>
                  60 Kaki Bukit Place #08-13 Eunos Techpark Singapore 415979
                </p>
                <p className='mt-[15px] text-[20px] font-poppins leading-[4 0px]'>
                  <strong className='font-normal'>Open Vacancies:</strong>
                  <img src={lg} className='w-[90px]' alt="" />
                </p>
                <p className='flex items-center mt-[15px] text-[20px] font-poppins leading-[4 0px]'>
                  <strong className='font-normal'>Mail Us : </strong> <Link className='ml-[3px]' to={""}>  hello@hipster-inc.com</Link> <FaShare className='ml-[10px]' />
                </p>

                <p className='flex flex-wrap font-bold text-[#38b1ac] items-center mt-[15px] text-[20px] font-poppins leading-[40px]'>
                  <Link className='' to={""}>Get Directions </Link> <IoIosArrowRoundForward className='text-3xl' />
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 ">
          <div className="lg:col-span-1 col-span-2  my-auto mx-auto " data-aos="slide-right" data-aos-duration="500">
            <div className="">
              <div className="px-[15px]  max-w-[600px] ">
                <div className="h-[33px]"></div>
                <h4 className='text-[24px] font-poppins text-[#000000]'>India</h4>
                <p className='mt-[15px] font-normal text-[20px] text-[#000000] font-poppins'>
                  <strong className='font-normal'>Address : </strong>
                  3rd & 4th Floor, AROMA SQUARE, CP-102, Viraj Khand, Gomti Nagar, Lucknow, 226010
                </p>
                <p className='mt-[15px] text-[20px] font-poppins leading-[4 0px]'>
                  <strong className='font-normal'>Open Vacancies:</strong>
                  <img src={lg} className='w-[90px]' alt="" />
                </p>
                <p className='flex items-center mt-[15px] text-[20px] font-poppins leading-[4 0px]'>
                  <strong className='font-normal'>Mail Us : </strong> <Link className='ml-[3px]' to={""}>  hello@hipster-inc.com</Link> <FaShare className='ml-[10px]' />
                </p>

                <p className='flex font-bold flex-wrap text-[#38b1ac] items-center mt-[15px] text-[20px] font-poppins leading-[40px]'>
                  <Link className='' to={""}>Get Directions </Link> <IoIosArrowRoundForward className='text-3xl' />
                </p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-1 col-span-2 " data-aos="slide-left" data-aos-duration="500">
            <img src={Lion} alt="" />
          </div>
        </div>
      </div> */}

      <div>
        {/* <SimpleSliders/> */}
      </div>
    </div>
  )
}


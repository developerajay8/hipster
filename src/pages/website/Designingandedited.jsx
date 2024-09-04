

import React from 'react'
import Container4 from '../../components/Container4'
import { Focus, Fx, Mirror, warning, Ajay, bomb, Nimble, Sx, groups, invalidname, notched, pencil3, two, rep, edt, ast, atn, SS, gm ,m7, m6, m5, m4, m3, m2, m1, setting, clientcircle} from '../../assets'
import { TiArrowRight } from "react-icons/ti";


import Data from './data'
import Accord from './Accord'
import { Link } from 'react-router-dom'
import Container2 from '../../components/Container2'
import SimpleSlider from './SimpleSlider';
import Trusted from './Trusted';
import Marquee from 'react-fast-marquee';



export default function Designingandedited() {
 
  return (
    <div>
      <Container4>
        <div className=" pt-[100px] sm:pb-[80px] pb-[50px] xl:px-0 lg:px-[30px] md:px-[40px] sm:px-[30px] px-[26px]">
          <div className="">
            <h1 className='lg:text-[56px] md:text-[42px] sm:text-[35px] text-[35px]  font-poppins text-[#000000]' data-aos="slide-right" data-aos-duration="500">
Designing and Editing

            </h1>
            <h2 className=' font-semibold text-[#001817] xl:text-[32px] lg:text-[28px] sm:text-[24px]
           text-[22px] font-poppins lg:mt-[60px] md:mt-[30px] sm:mt-[18px] mt-[16px] mb-[15px] sm:leading-[40px] leading-[27px]' data-aos="slide-left" data-aos-duration="500">Elevate your visual presence with captivating design and precision editing. Our talented team brings your creative vision to life through impactful imagery, graphics, and visual storytelling.
</h2>
          </div>
        </div>
      </Container4>
      <div className="topst lg:min-h-[800px] md:min-h-[540px] sm:min-h-[340px] min-h-[240px]">
      </div>

      <div className="py-[80px]">
        <Container4>
          <div className="grid grid-cols-1 xl:px-[0px] lg:px-[10px] md:px-[30px] px-[20px] ">
            <h2 className='lg:text-[46px] text-[35px] font-poppins font-semibold mb-[15px] text-[#000000]'>Our approach
            </h2>
          </div>


          <div className="grid md:grid-cols-2 grid-cols-1 gap-6 lg:px-[0px] md:px-[60px] sm:px-[100px] px-[10px]">
            <div className="col-span-1 lg:pr-[60px] pr-[12px] pt-[48px] pl-[12px]" data-aos="slide-right" data-aos-duration="500">
              <img src={Nimble} alt="" />
              <h3 className='lg:text-[28px] text-[22px] font-poppins mb-[16px] text-[#000000] font-semibold'>High-Quality Graphic Design: </h3>
              <p className='lg:text-[20px] text-[16px] text-[#596868] font-poppins '>Business10X produces high-quality graphics for websites, social media, email campaigns, and print materials. Engaging visuals capture attention, communicate messages effectively, and drive higher engagement rates.
              </p>
            </div>
            <div className="col-span-1 lg:pl-[60px] pl-[12px] pt-[48px] pr-[12px]" data-aos="slide-left" data-aos-duration="500">
              <img src={notched} alt="" />
              <h3 className='lg:text-[28px] text-[22px] font-poppins mb-[16px] text-[#000000] font-semibold'>Video and Motion Graphics:</h3>
              <p className='lg:text-[20px] text-[16px] text-[#596868] font-poppins '>Business10X creates engaging video content, including promotional videos, explainer videos, and social media clips. Video is a powerful medium for storytelling and can significantly boost audience engagement and brand recall.
              </p>
            </div>
          </div>


          <div className="grid md:grid-cols-2 grid-cols-1 gap-6 lg:px-[0px] md:px-[60px] sm:px-[100px] px-[10px]">
            <div className="col-span-1 lg:pr-[60px] pr-[12px] pt-[48px] pl-[12px]" data-aos="slide-right" data-aos-duration="500">
              <img src={Focus} alt="" />
              <h3 className='lg:text-[28px] text-[22px] font-poppins mb-[16px] text-[#000000] font-semibold'>Editing and Post-Production:</h3>
              <p className='lg:text-[20px] text-[16px] text-[#596868] font-poppins '>Business10X’s editing services refine visual and video content to ensure it meets the highest standards of quality. From color correction to sound editing, the agency enhances the final product to ensure it resonates with the audience and reflects the brand’s professionalism.
              </p>
            </div>
            <div className="col-span-1 lg:pl-[60px] pl-[12px] pt-[48px] pr-[12px]" data-aos="slide-left" data-aos-duration="500">
              <img src={Mirror} alt="" />
              <h3 className='lg:text-[28px] text-[22px] font-poppins mb-[16px] text-[#000000] font-semibold'>Infographics and Data Visualization:</h3>
              <p className='lg:text-[20px] text-[16px] text-[#596868] font-poppins '>Business10X creates infographics and data visualizations that simplify complex information, making it easy for the audience to understand and engage with. This is particularly useful for clients in industries where conveying data and insights is crucial to their messaging.</p>
            </div>
          </div>
        </Container4>
      </div>



      {/* <div className="py-[80px]">
        <Container4>
          <div className="grid grid-cols-1 xl:px-[0px] lg:px-[10px] md:px-[70px] sm:px-[40px] px-[12px]">
            <h2 className=' lg:text-[46px] md:text-[38px] text-[34px]  font-poppins text-[#000000] font-semibold'>Our work</h2>
            <h3 className='lg:text-[32px] md:text-[24px] text-[22px] max-w-[700px] lg:leading-[45px] md:leading-[30px] md:mt-[25px] mt-[15px] font-poppins text-[#000000]'>Explore websites created for our clients all around the world and across industries</h3>
          </div>

          <div className="pt-[60px]">
            <div className="grid md:grid-cols-2 grid-cols-1 gap-[80px] xl:px-[0px] lg:px-[14px] md:px-[20px] sm:px-[100px] px-[20px]" data-aos="slide-up" data-aos-duration="500">
              <div className="col-span-1 ">
                <Link to={"/tueetoredutech"}>
                <img src={edt} alt="" />
                <div className="py-[25px]">
                  <h4 className='mb-[12px] text-[24px] font-poppins text-[#001817]'>Tueetor — Edutech</h4>
                  <h3 className='lg:text-[32px] text-[24px] font-poppins font-bold text-[#001817]'>Online platform for finding digital tutors</h3>
                  <ul classNameclassName='mt-[20px]'>
                    <li className='text-[14px] font-poppins text-[#000000]'>Match Making Platform, Education Tech</li>
                  </ul>
                </div>
                </Link>
              </div>
              <div className="col-span-1  mb-[17px]">
                <Link to={'/mintutor'}>
                <div className='lg:pt-[92px] md:pt-[72px]'>
                  <img src={Sx} alt="" />
                  <div className="py-[25px]">
                    <h4 className='mb-[12px] text-[24px] font-poppins text-[#001817]'>10-min Tutor — Edutech</h4>
                    <h3 className='lg:text-[32px] text-[24px] font-semibold font-poppins text-[#001817]'>On-demand tutor app with video-telephony & marketplace functionalities</h3>
                    <ul className='mt-[20px]'>
                      <li className='text-[14px] font-poppins text-[#000000]'>On-Demand Video Solutions, Education Tech</li>
                    </ul>
                  </div>
                </div>
                </Link>
              </div>
            </div>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-[80px] xl:px-[0px] lg:px-[14px] md:px-[20px] sm:px-[100px] px-[20px]" data-aos="slide-up" data-aos-duration="500">
              <div className="col-span-1 ">
              <Link to={"/physicleteam"}>
                <img src={SS} alt="" />
                <div className="py-[25px]">
                  <h4 className='mb-[12px] text-[24px] font-poppins text-[#001817]'>Tbit — Team Engagement</h4>
                  <h3 className='lg:text-[32px] text-[24px] font-poppins font-bold text-[#001817]'>A physical team-building app: say no to boring activities!</h3>
                  <ul classNameclassName='mt-[20px]'>
                    <li className='text-[14px] font-poppins text-[#000000]'>Gamification in Tech, Event Management</li>
                  </ul>
                </div>
                </Link>
              </div>
              <div className="col-span-1  mb-[17px]">
                <Link to={'/wsg'}>
                <div className='lg:pt-[92px] md:pt-[72px]'>
                  <img src={gm} alt="" />
                  <div className="py-[25px]">
                    <h4 className='mb-[12px] text-[24px] font-poppins text-[#001817]'>WSG — Workforce Singapore — Career Guidance</h4>
                    <h3 className='lg:text-[32px] text-[24px] font-semibold font-poppins text-[#001817]'>Pilot of Mobile Kiosks.</h3>
                    <ul className='mt-[20px]'>
                      <li className='text-[14px] font-poppins text-[#000000]'>On-Demand Video Solutions, Mobile Apps, Web App, Admin Panel / Dashboard, UI/UX Design</li>
                    </ul>
                  </div>
                </div>
                </Link>
              </div>
            </div>
          </div>

        </Container4>
      </div> */}

      <div className="">
        <div className="grid md:grid-cols-5 grid-cols-1">
          <div className="md:col-span-3 col-span-1 p-[20px] grdnt ">
            <div className="max-w-[535px] my-auto mx-auto">
              <div className="my-[100px]">
                <h2 className='text-[50px] font-poppins mb-[15px] text-[#FFFFFF] '>By offering these comprehensive designing and editing services</h2>
                <p className='text-[20px] font-poppins text-[#FFFFFF]'> Business10X helps clients create a strong, cohesive visual presence that enhances their brand image, engages their audience, and ultimately drives business growth.</p>
              </div>
            </div>
          </div>
          <div className="md:col-span-2 col-span-1 p-[20px] backgrou">
            <div className="max-w-[310px] my-auto mx-auto ">
              <div className="my-[160px]">
                <h2 className='text-[50px] font-poppins mb-[15px] leading-[60px] text-[#FFFFFF] '>Brand's visual presence</h2>
              </div>
            </div>
          </div>
        </div>
      </div>


      

      

  
    <div className="pt-[80px] sm:px-[100px] px-[20px] pb-[120px] Truste">
      <div className=" max-w-[1416px] mx-auto">
        <h2 className="text-[50px] text-[#FFFFFF] mb-[30px] font-poppins tr">
          Trusted by
        </h2>
        <div className="relative sm:block hidden THID">
          <img
            src={clientcircle}
            className="absolute top-[-253px] right-0"
            alt=""
          />
          <img
            src={setting}
            className="absolute top-[-179px] right-[122px]"
            alt=""
          />
        </div>

        <div className="w-full ">
          <div className="w-[100%] flex flex-col">
            <Marquee autoFill pauseOnHover>
              <div className=" m-1 rounded-xl  sm:space-x-5 space-x-3 cursor-pointer text-sky-400">
                <img
                  className="lg:w-[180px] md:w-[140px] sm:w-[100px] w-[80px] lg:h-[100px] md:h-[70px] sm:h-[50px] h-[35px] mx-[25px]"
                  src={m1}
                  alt=""
                />
              </div>
              <div className=" m-1 rounded-xl  sm:space-x-5 space-x-3 cursor-pointer text-sky-400">
                <img
                  className="lg:w-[180px] md:w-[140px] sm:w-[100px] w-[80px] lg:h-[100px] md:h-[70px] sm:h-[50px] h-[35px] mx-[25px]"
                  src={m2}
                  alt=""
                />
              </div>
              <div className=" m-1 rounded-xl  sm:space-x-5 space-x-3 cursor-pointer text-sky-400">
                <img
                  className="lg:w-[180px] md:w-[140px] sm:w-[100px] w-[80px] lg:h-[100px] md:h-[70px] sm:h-[50px] h-[35px] mx-[25px]"
                  src={m3}
                  alt=""
                />
              </div>
              <div className=" m-1 rounded-xl  sm:space-x-5 space-x-3 cursor-pointer text-sky-400">
                <img
                  className="lg:w-[180px] md:w-[140px] sm:w-[100px] w-[80px] lg:h-[100px] md:h-[70px] sm:h-[50px] h-[35px] mx-[25px]"
                  src={m4}
                  alt=""
                />
              </div>
              <div className=" m-1 rounded-xl  sm:space-x-5 space-x-3 cursor-pointer text-sky-400">
                <img
                  className="lg:w-[180px] md:w-[140px] sm:w-[100px] w-[80px] lg:h-[100px] md:h-[70px] sm:h-[50px] h-[35px] mx-[25px]"
                  src={m5}
                  alt=""
                />
              </div>
              <div className=" m-1 rounded-xl  sm:space-x-5 space-x-3 cursor-pointer text-sky-400">
                <img
                  className="lg:w-[180px] md:w-[140px] sm:w-[100px] w-[80px] lg:h-[100px] md:h-[70px] sm:h-[50px] h-[35px] mx-[25px]"
                  src={m6}
                  alt=""
                />
              </div>
              <div className=" m-1 rounded-xl  sm:space-x-5 space-x-3 cursor-pointer text-sky-400">
                <img
                  className="lg:w-[180px] md:w-[140px] sm:w-[100px] w-[80px] lg:h-[100px] md:h-[70px] sm:h-[50px] h-[35px] mx-[25px]"
                  src={m7}
                  alt=""
                />
              </div>
            </Marquee>
            <Marquee autoFill pauseOnHover direction="right">
              <div className=" m-1 rounded-xl  sm:space-x-5 space-x-3 cursor-pointer text-sky-400">
                <img
                  className="lg:w-[180px] md:w-[140px] sm:w-[100px] w-[80px] lg:h-[100px] md:h-[70px] sm:h-[50px] h-[35px] mx-[25px]"
                  src={m1}
                  alt=""
                />
              </div>
              <div className=" m-1 rounded-xl  sm:space-x-5 space-x-3 cursor-pointer text-sky-400">
                <img
                  className="lg:w-[180px] md:w-[140px] sm:w-[100px] w-[80px] lg:h-[100px] md:h-[70px] sm:h-[50px] h-[35px] mx-[25px]"
                  src={m2}
                  alt=""
                />
              </div>
              <div className=" m-1 rounded-xl  sm:space-x-5 space-x-3 cursor-pointer text-sky-400">
                <img
                  className="lg:w-[180px] md:w-[140px] sm:w-[100px] w-[80px] lg:h-[100px] md:h-[70px] sm:h-[50px] h-[35px] mx-[25px]"
                  src={m3}
                  alt=""
                />
              </div>
              <div className=" m-1 rounded-xl  sm:space-x-5 space-x-3 cursor-pointer text-sky-400">
                <img
                  className="lg:w-[180px] md:w-[140px] sm:w-[100px] w-[80px] lg:h-[100px] md:h-[70px] sm:h-[50px] h-[35px] mx-[25px]"
                  src={m4}
                  alt=""
                />
              </div>
              <div className=" m-1 rounded-xl  sm:space-x-5 space-x-3 cursor-pointer text-sky-400">
                <img
                  className="lg:w-[180px] md:w-[140px] sm:w-[100px] w-[80px] lg:h-[100px] md:h-[70px] sm:h-[50px] h-[35px] mx-[25px]"
                  src={m5}
                  alt=""
                />
              </div>
              <div className=" m-1 rounded-xl  sm:space-x-5 space-x-3 cursor-pointer text-sky-400">
                <img
                  className="lg:w-[180px] md:w-[140px] sm:w-[100px] w-[80px] lg:h-[100px] md:h-[70px] sm:h-[50px] h-[35px] mx-[25px]"
                  src={m6}
                  alt=""
                />
              </div>
              <div className=" m-1 rounded-xl  sm:space-x-5 space-x-3 cursor-pointer text-sky-400">
                <img
                  className="lg:w-[180px] md:w-[140px] sm:w-[100px] w-[80px] lg:h-[100px] md:h-[70px] sm:h-[50px] h-[35px] mx-[25px]"
                  src={m7}
                  alt=""
                />
              </div>
            </Marquee>
          </div>
        </div>
      </div>
    </div>



      

      <div className="client md:py-[100px] sm:py-[70px]  py-[30px] xl:px-[20px] md:px-[20px] sm:px-[15px] px-[15px]">
      <Container2>
        <div className=" grid grid-cols-2">
          <div className="relative lg:col-span-1 md:col-span-2 sm:col-span-2 col-span-2 pr-[80px]">
            <h2 className="text-[50px] text-[#FFFFFF] font-poppins mb-[15px]">
              What Our <br className="xl:block hidden" />
              Clients say
            </h2>
            <div>
              <div className="">
                <img
                  src={invalidname}
                  data-aos="slide-down"
                  data-aos-duration="2000"
                  alt=""
                  className="absolute top-[160px] left-[70px]"
                />
              </div>
              <div className="h-[300px] w-[100%]">
                <img
                  src={groups}
                  alt=""
                  className="absolute top-[210px] left-[50px]"
                />
                <img
                  src={groups}
                  alt=""
                  className="absolute top-[270px] left-[0px]"
                />
                <img
                  src={groups}
                  alt=""
                  className="absolute top-[180px] left-[120px]"
                />
                <img
                  src={groups}
                  alt=""
                  className="absolute xl:block hidden top-[213px] right-[214px]"
                />
                <img
                  src={groups}
                  alt=""
                  className="absolute xl:block hidden top-[270px] right-[160px]"
                />
              </div>
            </div>
          </div>

          <div className="relative lg:col-span-1 md:col-span-2 sm:col-span-2 col-span-2 lg:pr-[80px] lg:px-[0px] md:px-[50px] sm:px-[20px] px-[12px]">
            <SimpleSlider />
          </div>
        </div>
      </Container2>
    </div>

    </div>
  )
}







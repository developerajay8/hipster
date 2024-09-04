

import React from 'react'
import Container4 from '../../components/Container4'
import { Focus, Fx, Mirror, warning, Ajay, bomb, Nimble, Sx, groups, invalidname, notched, pencil3, two, rep, edt, ast, atn, SS, gm, kt, wtcl, sstf, olm } from '../../assets'
import { TiArrowRight } from "react-icons/ti";


import Data from './data'
import Accord from './Accord'
import { Link } from 'react-router-dom'
import Container2 from '../../components/Container2'
import SimpleSlider from './SimpleSlider';


export default function Mediaproduction() {
  const accordElems = Data.map(
    (d, i) => {
      // console.log(d,i);
      return <Accord key={i} title={d.title} body={d.body} seo={d.seo} sep={d.sep} seps={d.seps} />

    }
  )
  return (
    <div>
      <Container4>
        <div className=" pt-[100px] sm:pb-[80px] pb-[50px] xl:px-0 lg:px-[30px] md:px-[40px] sm:px-[20px] px-[20px]">
          <div className="">
            <h1 className='lg:text-[56px] md:text-[42px] sm:text-[35px] text-[35px]  font-poppins text-[#000000]'data-aos="slide-right" data-aos-duration="500">
            Media Production
              
            </h1>
            <h2 className=' font-semibold text-[#001817] xl:text-[32px] lg:text-[28px] sm:text-[24px]
           text-[22px] font-poppins lg:mt-[60px] md:mt-[30px] sm:mt-[18px] mt-[16px] mb-[15px] sm:leading-[40px] leading-[27px]' data-aos="slide-left" data-aos-duration="500">From concept to execution, our media production services encompass video, audio, and multimedia content creation, ensuring compelling storytelling that captivates your audience.</h2>
          </div>
        </div>
      </Container4>
      <div className="topstk lg:min-h-[800px] md:min-h-[540px] sm:min-h-[340px] min-h-[240px]">
      </div>

      <div className="py-[80px]">
        <Container4>
          <div className="grid grid-cols-1 xl:px-[0px] lg:px-[10px] md:px-[30px] px-[20px] ">
            <h2 className='lg:text-[46px] text-[35px] font-poppins font-semibold mb-[15px] text-[#000000]'>How we operate:
            </h2>
          </div>


          <div className="grid md:grid-cols-2 grid-cols-1 gap-6 lg:px-[0px] md:px-[60px] sm:px-[100px] px-[10px]">
            <div className="col-span-1 lg:pr-[60px] pr-[12px] pt-[48px] pl-[12px]"data-aos="slide-right" data-aos-duration="500">
              <img src={Nimble} alt="" />
              <h3 className='lg:text-[28px] text-[22px] font-poppins mb-[16px] text-[#000000] font-semibold'>High-Quality Video Production</h3>
              <p className='lg:text-[20px] text-[16px] text-[#596868] font-poppins '>Business10X excels in crafting compelling stories that resonate with the target audience. Through well-produced videos, clients can convey their brand’s narrative, values, and unique selling points, fostering deeper connections with their audience.
              </p>
            </div>
            <div className="col-span-1 lg:pl-[60px] pl-[12px] pt-[48px] pr-[12px]"data-aos="slide-left" data-aos-duration="500">
              <img src={notched} alt="" />
              <h3 className='lg:text-[28px] text-[22px] font-poppins mb-[16px] text-[#000000] font-semibold'>Social Media Content Production:</h3>
              <p className='lg:text-[20px] text-[16px] text-[#596868] font-poppins '>Business10X creates content tailored to different social media platforms, ensuring optimal performance and engagement. Whether it's short-form videos for Instagram and TikTok or longer content for YouTube, the agency produces media that is perfectly suited to each platform's audience.
              </p>
            </div>
          </div>


          <div className="grid md:grid-cols-2 grid-cols-1 gap-6 lg:px-[0px] md:px-[60px] sm:px-[100px] px-[10px]">
            <div className="col-span-1 lg:pr-[60px] pr-[12px] pt-[48px] pl-[12px]"data-aos="slide-right" data-aos-duration="500">
              <img src={Focus} alt="" />
              <h3 className='lg:text-[28px] text-[22px] font-poppins mb-[16px] text-[#000000] font-semibold'>Animation and Motion Graphics</h3>
              <p className='lg:text-[20px] text-[16px] text-[#596868] font-poppins '>Business10X creates animated videos and motion graphics that bring ideas to life. These dynamic visuals are particularly effective for explaining complex concepts, demonstrating product features, or adding a creative touch to marketing campaigns.</p>
            </div>
            <div className="col-span-1 lg:pl-[60px] pl-[12px] pt-[48px] pr-[12px]" data-aos="slide-left" data-aos-duration="500">
              <img src={Nimble} alt="" />
              <h3 className='lg:text-[28px] text-[22px] font-poppins mb-[16px] text-[#000000] font-semibold'>Branded Content Creation:</h3>
              <p className='lg:text-[20px] text-[16px] text-[#596868] font-poppins '>Business10X specializes in creating branded content that aligns with the client’s messaging and objectives. This content is designed to resonate with the target audience, building brand affinity and encouraging customer loyalty.</p>
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
                <div className='lg:pt-[92px] md:pt-[72px]'>
                  <Link to={'/lhommes'}> 
                  <img src={olm} alt="" />
                  <div className="py-[25px]">
                    <h4 className='mb-[12px] text-[24px] font-poppins text-[#001817]'>L’Hommes — Fashion E-commerce</h4>
                    <h3 className='lg:text-[32px] text-[24px] font-semibold font-poppins text-[#001817]'>Custom suits e-commerce platform with fit visualization</h3>
                    <ul className='mt-[20px]'>
                      <li className='text-[14px] font-poppins text-[#000000]'>Personalized Fashion</li>
                    </ul>
                  </div>
                  </Link>
                </div>
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
                <h2 className='text-[50px] font-poppins mb-[15px] text-[#FFFFFF] '>By offering these comprehensive media production services</h2>
                <p className='text-[20px] font-poppins text-[#FFFFFF]'>Business10X helps clients create impactful content that elevates their brand, engages their audience, and drives business growth.</p>
              </div>
            </div>
          </div>
          <div className="md:col-span-2 col-span-1 p-[20px] backgrou">
            <div className="max-w-[310px] my-auto mx-auto ">
              <div className="my-[160px]">
                <h2 className='text-[50px] font-poppins mb-[15px] leading-[60px] text-[#FFFFFF] '>Elevating brand through media production</h2>
              </div>
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

      <div className="">
        <Container4>
          <div className="grid md:grid-cols-2 grid-cols-1 md:gap-8 w-full md:h-[600px] h-[300px] xl:px-[0px] md:px-[60px] sm:px-[50px] px-[20px]">
            <div className="col-span-1  my-auto">
              <div className='px-[15px]'>
                <h2 className='lg:text-[46px] text-[34px] text-[#000000] font-poppins' data-aos="slide-right" data-aos-duration="500">Check out our
                 <br className='md:block hidden'/> other services</h2>
              </div>
            </div>
            <div className="col-span-1  my-auto">
              <div className='px-[15px]' data-aos="slide-left"data-aos-duration="500">
                <h3 className=' lg:text-[32px] text-[22px] lg:leading-[60px] leading-[40px] TU text-[#000000] font-poppins'>
                  <Link to={'/erps'}>ERP</Link>
                </h3>
                <h3 className=' lg:text-[32px] text-[22px] lg:leading-[60px] leading-[40px] TU text-[#000000] font-poppins'>
                  <Link to={'/performancemarketing'}>Performance Marketing</Link>
                </h3>
                <h3 className=' lg:text-[32px] text-[22px] lg:leading-[60px] leading-[40px] TU text-[#000000] font-poppins'>
                  <Link to={'/creativeproduction'}>Creative Production</Link>
                </h3>
              </div>
            </div>
          </div>
        </Container4>
      </div>
      
    </div>
  )
}



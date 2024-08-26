import React from 'react'
import { Ajay, Downlogo, applanding, apple, aws, bomb, int, nearapp, nearbanner, payment, pencil3, ratingbox, sharebanner, shareend, star, sunstart, tab, two, ui_ux, userdashboard, warning } from '../../assets'
import { Link } from 'react-router-dom'
import { TiArrowRight } from "react-icons/ti";
import { PiCircleFill } from "react-icons/pi";
import Container2 from '../../components/Container2';
import Container4 from '../../components/Container4';


export default function ShareApp() {
  return (
    <div>
      <div className='lg:mt-[80px] md:mt-[110px] mt-[110px]'>
        <div className="max-w-[1300px] mx-auto xl:px-[0px] px-[20px] mb-[48px]">
          <h2>
            <span className='md:text-[30px] sm:text-[24px] text-[16px] font-poppins'>
              <span className='md:text-[30px] sm:text-[24px] text-[16px] text-[#00b0ab] font-poppins font-semibold'>Share App</span>
              — Mental Health
            </span>

            <div className='md:mt-[10px]'>
              <span className='xl:text-[48px] md:text-[40px] sm:text-[30px] text-[24px] text-[#000000] font-poppins font-semibold'>On-demand therapy app that allows one to find a therapist instantly.</span>
            </div>
          </h2>
        </div>
        <div className='w-[100%] h-[100%] md:px-[0px] px-[14px]'>
          <img className='w-[100%] h-[100%]' src={sharebanner} alt="" />
        </div>
      </div>

      <div className='pt-[80px]'>
        <Container4>
          <div className="grid md:grid-cols-5 grid-cols-1 xl:px-[0px] px-[20px]">
            <div className="md:col-span-3 col-span-1  lg:pr-[50px] pr-[20px]">
              <h2 className='lg:text-[50px] text-[35px] text-[#000000] font-poppins mb-[15px]'>Overview</h2>
              <p className='font-poppins sm:text-[20px] text-[16px] mt-[25px] text-[#606e6e]'>Share is an on-demand therapy app that allows one to find a therapist instantly, affordably and anonymously. Features that are integrated include: a digital whiteboard, chat, video call, instant-matching and notification, do not disturb by the hour and day.</p>
            </div>
            <div className="md:col-span-2 col-span-1 lg:pt-0 sm:pt-[80px] pt-[45px]">
              <div className="mb-[35px]">
                <p className='text-[18px] font-poppins text-[#001817] mb-[10px]'>Client</p>
                <p className='text-[24px] text-[#001817] font-semibold'>TheShareCo</p>
              </div>
              <div className="flex mb-[35px]">
                <div className=''>
                  <p className='text-[18px] font-poppins mb-[10px] text-[#001817]'>Period</p>
                  <p className='text-[24px] font-poppins font-semibold text-[#001817]'>2022</p>
                </div>
                <div className='ml-[45px]'>
                  <p className='text-[18px] font-poppins mb-[10px] text-[#001817]'>Geography</p>
                  <p className='text-[24px] font-poppins font-semibold text-[#001817]'>Singapore</p>
                </div>
                <div className=''></div>
              </div>
              <div className='mb-[35px]'>
                <p className='text-[18px] text-[#001817] mb-[10px] font-poppins'>Work Done</p>
                <div className="flex-wrap flex">
                  <li className='list-none mb-[20px] px-[9px] w-[114px]'>
                    <Link to={''}>
                      <img className='w-[50px] h-[50px] mx-[22px]' src={int} alt="" />
                    </Link>
                    <li className='text-center  text-[#001817] font-semibold'>
                      <Link to={''}>
                        Website
                      </Link>
                    </li>
                  </li>
                  <li className='list-none mb-[20px] px-[9px] w-[114px]'>
                    <Link to={''}>
                      <img className='w-[50px] h-[50px] mx-[22px]' src={apple} alt="" />
                    </Link>
                    <li className='text-center  text-[#001817] font-semibold'>
                      <Link to={''}>
                        Native iOS App
                      </Link>
                    </li>
                  </li>
                </div>
              </div>
            </div>
          </div>
        </Container4>
      </div>

      <div className="sm:py-[80px] py-[12px] xl:px-[0px] px-[20px]">
        <Container4>
        <div className=''>
          <h2 className='mb-[15px] text-[50px] font-poppins text-[#000000]'>Services</h2>
          <ul className='flex flex-wrap'>
            <li className='bg-[#ccefee] mb-[20px] duration-1000  hover:bg-[#73dedb] mr-[10px] py-[18px] px-[32px] w-[294px] rounded-full'>
              <Link className='text-[18px] font-poppins hover:text-[#FFFFFF] duration-1000 text-[#001817]' to={'/mobileappdevelopment'}>Mobile App Development</Link>
            </li>
            <li className='bg-[#ccefee] duration-1000  hover:bg-[#73dedb] mb-[20px] mr-[10px] py-[18px] px-[32px] w-[234px] rounded-full'>
              <Link className='text-[18px] font-poppins hover:text-[#FFFFFF] duration-1000 text-[#001817]' to={'/webdevelopment'}>Web Development</Link>
            </li>
          </ul>
        </div>
        </Container4>
      </div>

      <div className="bg-[#FFFFFF] xl:px-[0px] px-[20px]">
        <Container4>
        <div className=' sm:py-[80px] py-[10px]'>
          <div className="grid md:grid-cols-5 grid-cols-1">
            <div className="md:col-span-2 col-span-1 max-w-[100%] max-h-[100%]">
              <img className='w-[100%] h-[100%]' src={shareend} alt="" />
            </div>
            <div className="md:col-span-3 col-span-1 md:pt-0 pt-[60px] lg:pl-[86px] md:pl-[10px]">
              <h2 className='lg:text-[50px] md:text-[35px] sm:text-[31px] text-[24px] fon-poppins text-[#001817] xl:leading-[70px] lg:leading-[50px] md:leading-[40px] sm:leading-[30px] leading-[30px] font-semibold mb-[15px]'>Multiple integrations</h2>

              <p className='text-[20px] text-[#657676] font-poppins mb-[23px]'>
                The project started in midst of the pandemic and is aimed at restoring mental health and saving lives. Within the tight timeline, the team managed to complete multiple challenging technical integrations.
              </p>
              <div className="md:ml-[42px] sm:ml-[10px] ml-[5px] mb-[21px] md:pl-[30px] sm:pl-[10px] pl-[5px]">
                  <ul>
                    <li className='text-[20px] font-poppins text-[#666666]'>1. Seamless video integration for virtual counselling sessions</li>
                    <li className='text-[20px] font-poppins text-[#666666]'>2. Smart payment integration with pay-per-use pricing models</li>
                    <li className='text-[20px] font-poppins text-[#666666]'>3. Integration of whiteboard and screen sharing tools</li>
                    <li className='text-[20px] font-poppins text-[#666666]'>4. Scalable infrastructure to support business growth </li>
                    <li className='text-[20px] font-poppins text-[#666666]'>5. Compatibility with smart devices via an app</li>
                    <li className='text-[20px] font-poppins text-[#666666]'>6. Smart matching between counsellors and users for a personalised experience.</li>
                  </ul>
              </div>
            </div>
          </div>
        </div>
        </Container4>
      </div>


      <div className="md:h-[120px] h-[30px]"></div>
      <div className="xl:block hidden">
        <div className="max-w-[1200px] Shares sm:ml-auto">
          <div className="grid md:grid-cols-5 py-[80px] mx-[100px]">
            <div className="col-span-2"></div>
            <div className="col-span-3">
              <p className='text-[20px] font-poppins text-[#FFFFFF] font-semibold'>Share is designed to solve the pain points associated with individuals not seeking help for mental health related issues. It is also really simple for administrators to manage.</p>
              <ul className='ml-[40px] pt-[20px]'>
                <div className='flex gap-10 items-center pr-[100px] '>
                  <span className=' text-transparent items-center'></span>
                  <li className='text-[32px] font-poppins text-[#FFFFFF] font-semibold'>Fully automated platform</li>
                </div>
                <div className='flex gap-10 items-center pr-[100px] pt-[10px] leading-[45px]'>
                  <PiCircleFill className=' text-[#FFFFFF] items-center' />
                  <li className='text-[32px] font-poppins text-[#FFFFFF] font-semibold'>Centralized backend admin panel that can be used to manage content and access transaction analytics</li>
                </div>
              </ul>
            </div>
          </div>
        </div>
        <div className="relative">
          <img src={payment} className=' w-[281px] h-[570px] absolute top-[-790px] left-[150px]' alt="" />
        </div>
        <div className="relative">
          <img src={sunstart} className=' w-[281px] h-[570px] absolute top-[-520px] left-[490px]' alt="" />
        </div>
      </div>


      <div className='md:pt-[80px]'></div>
      <div className=" md:pr-[4px] pr-[12px] bg-[#5787ca]">
        <div className="grid md:grid-cols-2 max-w-[1440px] mx-auto xl:px-0 px-[20px] grid-cols-1 gap-9">
          <div className='md:col-span-1 col-span-1 md:my-auto md:pt-[0px] pt-[30px]'>
            <div>
              <h2 className='mb-[30px] text-[48px] font-poppins text-[#FFFFFF] lg:leading-[70px] leading-[55px]'>App landing page</h2>
              <p className='mb-[28px] text-[20px] font-poppins text-[#FFFFFF]'>After building an app, companies often create landing pages to promote their app to prospective customers. Our team of experts can design a tailored landing page to drive conversions and boost your online presence. Contact us to learn more about how we can help you create a landing page that delivers results.</p>
            </div>
          </div>
          <div className='md:col-span-1 col-span-1'>
            <img src={applanding} className='w-[100%] h-[100%]' alt="" />
          </div>
        </div>
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
      <div className="sm:py-[80px]">
        <div className=" lg:mx-[198px] md:mx-[80px] mx-[30px] ">
        <div className="">
  <h2 className="text-center text-[28px] md:text-[36px] lg:text-[42px] text-[#000000] font-poppins">
    <Link className="bbn" to={"/commonsuits"}>
      Next Case Study
    </Link>
  </h2>
  <div className="py-[30px] md:py-[40px] lg:py-[50px] text-center">
    <div className="text-[18px] md:text-[20px] lg:text-[24px] font-poppins text-[#001817] mb-[10px] md:mb-[12px] lg:mb-[15px]">
      <Link to={"/commonsuits"}>Common Suits — Fashion E-commerce</Link>
    </div>
    <h3 className="font-semibold text-[24px] md:text-[28px] lg:text-[32px] max-w-[100%] md:max-w-[600px] lg:max-w-[500px] mx-auto text-center leading-[30px] md:leading-[36px] lg:leading-[42px] text-[#001817] font-poppins">
      <Link className="mb-[8px] md:mb-[10px] lg:mb-[12px]" to={""}>
      Visualisation technology to improve the online and offline retail experience
      </Link>
    </h3>
  </div>
</div>

        </div>
      </div>
    </div>
  )
}


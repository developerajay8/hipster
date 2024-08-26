import React from 'react'
import { Ajay, Downlogo, applanding, apple, aws, bcircle, bluesuits, bomb, btn1, btn2, btn4, cna, commonbanner, curve, exit, int, map, mblue, mobile, nearapp, nearbanner, payment, pencil3, personalisation, ratingbox, sharebanner, shareend, star, sunstart, tab, two, ui_ux, userdashboard, warning } from '../../assets'
import { Link } from 'react-router-dom'
import { TiArrowRight } from "react-icons/ti";
import { PiCircleFill } from "react-icons/pi";
import Container2 from '../../components/Container2';
import Container4 from '../../components/Container4';


export default function CommonSuits() {
  return (
    <div>
      <div className='lg:mt-[80px] md:mt-[110px] mt-[110px]'>
        <div className="max-w-[1300px] mx-auto xl:px-0 px-[20px] mb-[48px] ">
          <h2>
            <span className='md:text-[30px] sm:text-[24px] text-[16px] font-poppins'>
              <span className='md:text-[30px] sm:text-[24px] text-[16px] text-[#00b0ab] font-poppins font-semibold'>Common Suits</span>
              — Fashion E-commerce
            </span>

            <div className='md:mt-[10px]'>
              <span className='xl:text-[48px] md:text-[40px] sm:text-[30px] text-[24px] text-[#000000] font-poppins font-semibold'>Visualisation technology to improve the online and offline retail experience</span>
            </div>
          </h2>
        </div>
        <div className='w-[100%] h-[100%] '>
          <img className='w-[100%] h-[100%]' src={commonbanner} alt="" />
        </div>
      </div>

      <div className='pt-[80px]'>
        <Container4>
          <div className="grid md:grid-cols-5 grid-cols-1 xl:px-[0px]  px-[20px]">
            <div className="md:col-span-3 col-span-1  lg:pr-[50px] pr-[20px]">
              <h2 className='lg:text-[50px] text-[35px] text-[#000000] font-poppins mb-[15px]'>Overview</h2>
              <p className='font-poppins sm:text-[20px] text-[16px] mt-[25px] text-[#606e6e]'>Common Suits is a premium bespoke clothier. Hipster built a website with 2D modelling to allow for photorealistic suit rendering. The imaging technology enables customers to make changes to the suit to meet their taste even before production.</p>
            </div>
            <div className="md:col-span-2 col-span-1 lg:pt-0 sm:pt-[80px] pt-[45px]">
              <div className="mb-[35px]">
                <p className='text-[18px] font-poppins text-[#001817] mb-[10px]'>Client</p>
                <p className='text-[24px] text-[#001817] font-semibold'>Common Suits</p>
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
                      <img className='w-[50px] h-[50px] mx-[22px]' src={ui_ux} alt="" />
                    </Link>
                    <li className='text-center  text-[#001817] font-semibold'>
                      <Link to={''}>
                        UI/UX
                      </Link>
                    </li>
                  </li>
                  <li className='list-none mb-[20px] px-[9px] w-[114px]'>
                    <Link to={''}>
                      <img className='w-[50px] h-[50px] mx-[22px]' src={userdashboard} alt="" />
                    </Link>
                    <li className='text-center text-[#001817] font-semibold'>
                      <Link to={''}>
                        Multi-user Dashboard & CMS
                      </Link>
                    </li>
                  </li>
                </div>
              </div>
            </div>
          </div>
        </Container4>
      </div>

     <div className="md:py-[80px] sm:py-[50px] mx-auto max-w-[1140px] xl:px-[0px] px-[20px]  py-[34px] ">
        <div className="">
          <h2 className="mb-[15px] text-[50px] font-poppins text-[#000000]">
            Services
          </h2>
          <ul className="flex flex-wrap">
            <li className='bg-[#ccefee] mb-[20px] duration-1000  hover:bg-[#73dedb] mr-[10px] py-[18px] px-[32px] w-[204px] rounded-full'>
              <Link className='text-[18px] font-poppins hover:text-[#FFFFFF] duration-1000 text-[#001817]' to={'/shareapp'}>Product Design</Link>
            </li>
            <li className='bg-[#ccefee] duration-1000  hover:bg-[#73dedb] mb-[20px] mr-[10px] py-[18px] px-[32px] w-[234px] rounded-full'>
              <Link className='text-[18px] font-poppins hover:text-[#FFFFFF] duration-1000 text-[#001817]' to={'/webdevelopment'}>Web Development</Link>
            </li>
            <li className='bg-[#ccefee] duration-1000  hover:bg-[#73dedb] mb-[20px] mr-[10px] py-[18px] px-[32px] w-[114px] rounded-full'>
              <Link className='text-[18px] font-poppins hover:text-[#FFFFFF] duration-1000 text-[#001817]' to={'/uiuxdesign'}>UI/UX</Link>
            </li>
            
          </ul>
        </div>
      </div>

      
      <div className="bg-[#FFFFFF] ">
        <div className='max-w-[1140px] mx-auto xl:px-0 px-[20px] sm:py-[80px] py-[10px]'>
          <div className="grid md:grid-cols-5 grid-cols-1">
            <div className="md:col-span-2 col-span-1 max-w-[100%] max-h-[100%]">
              <img className='w-[100%] h-[100%] Common' src={personalisation} alt="" />
            </div>
            <div className="md:col-span-3 col-span-1 md:pt-0 pt-[60px] lg:pl-[86px] md:pl-[10px] my-auto">
              <h2 className='lg:text-[50px] md:text-[35px] sm:text-[31px] text-[24px] fon-poppins text-[#001817] xl:leading-[70px] lg:leading-[50px] md:leading-[40px] sm:leading-[30px] leading-[30px] font-semibold mb-[15px]'>Personalized
                <span className='text-[#00b0ab]'> fashion</span></h2>

              <p className='sm:text-[20px] text-[16px] text-[#657676] font-poppins mb-[23px] sm:text-justify'>
                The hallmark of a good rendering is photorealism. Today customers want to see and sense the product before purchasing. Apparel rendering allows the customer to make and see every change in real time, capturing all visual aspects of the garments. There are hundreds of 2D models and permutations allowing for visualisation in fabric, the garments. There are hundreds of 2D models and permutations allowing for visualisation in fabric, pocket style, collar style, sleeve style, buttons and more.
              </p>

            </div>
          </div>
        </div>
      </div>

      <div className="mt-[50px] mb-[70px] sm:mx-[198px]">
        <div className="grid grid-cols-1">
          <div className="col-span-1 text-center sm:mx-auto">
          <h5 className='text-[24px] sm:text-[36px] md:text-[48px] font-poppins text-[#000000]'>
  Improved online-to-offline
  <span className='text-[24px] sm:text-[36px] md:text-[48px] font-poppins text-[#00b0ab]'>
    retail experience
  </span>
</h5>

            <p className='mt-[20px] sm:max-w-[684px] sm:mx-auto sm:text-[20px] text-[16px] font-poppins text-[#606e6e]'>The Common Suits website now provides a variety of products, prices, and customization options, along with order tracking for online customers. Those who prefer physical stores can easily schedule appointments after viewing the online catalog.</p>

            
            {/* <div className='mt-[50px] bg-[#ccefee] w-[100%] h-[1166px] rounded-[20px]'> */}

              {/* <div className=' Exit'>
                <img src={exit} className='' alt="" /> 
              </div> */}

            {/* </div> */}
          </div>
        </div>
      </div>

      {/* <div className="md:h-[120px] h-[30px]"></div> */}
      {/* <div className="xl:block hidden">
        <div className="max-w-[1200px] Share ml-auto">
          <div className="grid grid-cols-5 py-[80px] mx-[100px]">
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
      </div> */}

      <div className='my-[80px] xl:px-0 px-[20px] lg:ml-[160px] '>
        <div className="grid md:grid-cols-2">
          <div className="col-span-1 my-auto">
          <h5 className='text-[24px] md:text-[48px] text-[#000000] font-poppins leading-[32px] md:leading-[60px]'>
  How technology
  <span className='text-[#00b0ba]'> will make fashion more sustainable</span>
</h5>
<p className='text-[16px] sm:text-[20px] font-poppins mt-[8px] md:mt-[10px] text-[#606e6e] '>
  The fashion industry is notorious for emitting more greenhouse gases than aviation and shipping combined. As sustainability becomes a key concern for ecologically sensitive buyers, customised become more prized over mass-produced pieces. At the same time, retailers avoid overstocking, overproducing and having unsold supplies thrown away in landfills.
</p>

          </div>
          <div className="col-span-1">
            <img className='w-[100%] h-[100%]' src={cna} alt="" />
          </div>
        </div>
      </div>

      {/* <div className='py-[50px] px-[168px]'>
        <div className="">
          <h5 className='text-[48px] text-[#000000] font-poppins leading-[60px] mb-[80px]'>
            Other benefits
            <span className='text-[#00b0ba]'> of investing in tech</span>
          </h5>
          <div className='grid grid-cols-2'>
            <div>
              <div className="col-span-1  bg-[#DDF1FF]  bb">
                <div className=''>
                  <img className='w-[100%] h-[100%]' src={curve} alt="" />
                </div>
                <div className='relative w-[100%] h-[100%]'>
                  <img className='absolute top-[-760px] right-[120px] ' src={mobile} alt="" />
                </div>
              </div>
              <div className='relative bt1 '>
                <img className='absolute top-[-600px] right-[40px]' src={btn4} alt="" />
              </div>
              <div className="">
                <p className='text-[#6b7d7c] text-[20px] font-poppins mt-[16px] text-center'>Greater convenience as customers can either purchase online or book an in-store appointment</p>
              </div>
            </div>


            <div className="col-span-1  my-auto">
              <div className="bg-[#fffcdf] max-w-[558px] h-[600px] ml-[28px] rounded-xl">
                <div className=" relative">
                  <div className='w-[100%] h-[100%]'>
                    <img src={map} className='  absolute top-[62px] right-0' alt="" />
                    <img src={bluesuits} className='  absolute top-[310px] right-[320px]' alt="" />
                  </div>
                </div>
              </div>
              <p className='text-[#6b7d7c] text-[20px] font-poppins mt-[16px] text-center'>Scalability and ability to reach global audience.</p>
            </div>
          </div>

          <div className='grid grid-cols-2'>
            <div className="col-span-1  my-auto">
              <div className="bg-[#fffcdf] max-w-[558px] h-[600px] mr-[28px] rounded-xl">
                <h6 className='pt-[68px] pr-[32px] pb-[30px] text-[32px] font-poppins text-[#001817]'></h6>
                <div className='bs ml-[207px] mb-[16px] pt-[22px] pb-[16px] px-[21px] bg-[#FFFFFF]'>
                  <p className='text-[14px] text-[#000000] font-poppins mb-[16px]'>Your measurement is successfully updated</p>
                  <div className='flex gap-10'>
                    <p className='text-[14px] text-[#000000] font-poppins'>Date : <span className='text-[14px] font-poppins text-[#717171]'>15 Oct,2023</span></p>
                    <p className='text-[14px] text-[#000000] font-poppins'>Time : <span className='text-[14px] font-poppins text-[#717171]'>09:45 AM</span></p>
                  </div>
                </div>

                <div className='bs ml-[264px] mb-[16px] pt-[22px] pb-[16px] px-[21px] bg-[#FFFFFF]'>
                  <p className='text-[14px] text-[#000000] font-poppins mb-[16px]'>Your order is submitted.</p>
                  <div className='flex gap-6'>
                    <p className='text-[14px] text-[#000000] font-poppins'>Date : <span className='text-[14px] font-poppins text-[#717171]'>15 Oct,2023</span></p>
                    <p className='text-[14px] text-[#000000] font-poppins'>Time : <span className='text-[14px] font-poppins text-[#717171]'>09:45 AM</span></p>
                  </div>
                </div>

                <div className='bs ml-[122px] mb-[16px] pt-[22px] pb-[16px] px-[21px] bg-[#FFFFFF]'>
                  <p className='text-[14px] text-[#000000] font-poppins mb-[16px]'>We are processing your order.</p>
                  <div className='flex gap-[70px]'>
                    <p className='text-[14px] text-[#000000] font-poppins'>Date : <span className='text-[14px] font-poppins text-[#717171]'>15 Oct,2023</span></p>
                    <p className='text-[14px] text-[#000000] font-poppins'>Time : <span className='text-[14px] font-poppins text-[#717171]'>09:45 AM</span></p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="col-span-1  bg-[#DDF1FF] py-[102px]  bb">
                <div className='relative'>
                  <img className='w-[400px] h-[400px] mx-auto' src={bcircle} alt="" />
                  <img className='absolute top-[71px] right-[137px] mx-auto max-w-[400px] max-h-[330px]' src={mblue} alt="" />
                </div>
                <div>
                  <h6 className='mt-[56px] font-poppins text-[32px] text-[#001817] text-center'>
                    Key in
                  </h6>
                  <span className='font-poppins text-[32px] text-[#001817] text-center block'> preferences and buy!</span>
                  <p className='text-[20px] text-[#6b7d7c] mt-[16px] font-poppins text-center'>Buy, and track the progress of your orders</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div> */}


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


      


      <div className="md:py-[80px] sm:py-[50px]  py-[34px]">
        <div className=" lg:mx-[198px] md:mx-[80px] mx-[30px] ">
          <div>
            <h2 className="text-center text-[28px] md:text-[36px] lg:text-[42px] text-[#000000] font-poppins">
              <Link className="bbn" to={"/kwsh"}>
                Next Case Study
              </Link>
            </h2>
            <div className="py-[30px] md:py-[40px] lg:py-[50px] text-center">
              <div className="text-[18px] md:text-[20px] lg:text-[24px] font-poppins text-[#001817] mb-[10px] md:mb-[12px] lg:mb-[15px]">
                <Link to={"/kwsh"}>Abroadly - Travel</Link>
              </div>
              <h3 className="font-semibold text-[24px] md:text-[28px] lg:text-[32px] max-w-[100%] md:max-w-[600px] lg:max-w-[500px] mx-auto text-center leading-[30px] md:leading-[36px] lg:leading-[42px] text-[#001817] font-poppins">
                <Link className="mb-[8px] md:mb-[10px] lg:mb-[12px]" to={""}>
                An interactive "Home away from Home" community for backpackers, travellers and hosts
                </Link>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}



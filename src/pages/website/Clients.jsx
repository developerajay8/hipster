import React from 'react'
import Container4 from '../../components/Container4'
import Container6 from '../../components/Container6'
import { Ajay, bagicon, bomb, cl1, cl10, cl11, cl12, cl13, cl14, cl15, cl16, cl17, cl18, cl19, cl2, cl20, cl21, cl22, cl23, cl24, cl25, cl26, cl27, cl28, cl29, cl3, cl30, cl31, cl32, cl33, cl34, cl35, cl4, cl5, cl6, cl7, cl8, cl9, descriptionlogo, groups, invalidname, pencil, pencil2, pencil3, polygonball, two, warning, watch2 } from '../../assets'
import Container2 from '../../components/Container2'
import SimpleSlider from './SimpleSlider'
import { TiArrowRight } from "react-icons/ti";
import { Link } from 'react-router-dom'

export default function Clients() {
    // const Clients = [
    //     {
    //         image: "bettr_logo.svg"
    //     },
    //     {
    //         image: "assets/cl1"
    //     },
    //     {
    //         image: "assets/cl1"
    //     },
    //     {
    //         image: "assets/cl1"
    //     },
    //     {
    //         image: "assets/cl1"
    //     },
    //     {
    //         image: "assets/cl1"
    //     }
    // ]
    return (
        <>
            <div className='pt-[100px]  pb-[80px]  xl:mx-[0px] lg:mx-[60px] md:mx-[40px] sm:mx-[30px] mx-[20px]'>
                <Container4>
                    <div className="">
                        <h1 className='lg:text-[56px] md:text-[42px] sm:text-[36px] text-[36px] font-poppins text-[#000000] 'data-aos="fade" data-aos-duration="500">Our Valuable Clients</h1>
                        <h3 className='text-[28px] font-poppins mt-[8px] mb-[24px] text-[#000000] fst'>Working on real-world problems together</h3>
                    </div>
                </Container4>

                <Container6>
                    <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
                        <div className="col-span-1 m-[19px]  border_C relative   overflow-hidden hover:shadow-left transition-shadow duration-300">
                            <div className="px-[20px] py-[10px] my-auto ">
                                <img src={cl1} className='max-w-[90%] h-[98px] mx-auto sdd' alt="" />
                            </div>
                        </div>


                        <div className="col-span-1 m-[19px] border_C">
                            <div className="px-[20px] py-[10px] my-auto ">
                                <img src={cl2} className='max-w-[90%] h-[98px] mx-auto sdd' alt="" />
                            </div>
                        </div>
                        <div className="col-span-1 m-[19px] border_C">
                            <div className="px-[20px] py-[10px] my-auto ">
                                <img src={cl3} className='max-w-[90%] h-[98px] mx-auto sdd' alt="" />
                            </div>
                        </div>
                        <div className="col-span-1 m-[19px] border_C">
                            <div className="px-[20px] py-[10px] my-auto ">
                                <img src={cl4} className='max-w-[90%] h-[98px] mx-auto sdd' alt="" />
                            </div>
                        </div>
                        <div className="col-span-1 m-[19px] border_C">
                            <div className="px-[20px] py-[10px] my-auto ">
                                <img src={cl5} className='max-w-[90%] h-[98px] mx-auto sdd' alt="" />
                            </div>
                        </div>
                        <div className="col-span-1 m-[19px] border_C">
                            <div className="px-[20px] py-[10px] my-auto ">
                                <img src={cl6} className='max-w-[90%] h-[98px] mx-auto sdd' alt="" />
                            </div>
                        </div>
                        <div className="col-span-1 m-[19px] border_C">
                            <div className="px-[20px] py-[10px] my-auto ">
                                <img src={cl7} className='max-w-[90%] h-[98px] mx-auto sdd' alt="" />
                            </div>
                        </div>
                        <div className="col-span-1 m-[19px] border_C">
                            <div className="px-[20px] py-[10px] my-auto ">
                                <img src={cl8} className='max-w-[90%] h-[98px] mx-auto sdd' alt="" />
                            </div>
                        </div>
                        <div className="col-span-1 m-[19px] border_C">
                            <div className="px-[20px] py-[10px] my-auto ">
                                <img src={cl9} className='max-w-[90%] h-[98px] mx-auto sdd' alt="" />
                            </div>
                        </div>
                        <div className="col-span-1 m-[19px] border_C">
                            <div className="px-[20px] py-[10px] my-auto ">
                                <img src={cl10} className='max-w-[90%] h-[98px] mx-auto sdd' alt="" />
                            </div>
                        </div>
                        <div className="col-span-1 m-[19px] border_C">
                            <div className="px-[20px] py-[10px] my-auto ">
                                <img src={cl11} className='max-w-[90%] h-[98px] mx-auto sdd' alt="" />
                            </div>
                        </div>
                        <div className="col-span-1 m-[19px] border_C">
                            <div className="px-[20px] py-[10px] my-auto ">
                                <img src={cl12} className='max-w-[90%] h-[98px] mx-auto sdd' alt="" />
                            </div>
                        </div>
                        <div className="col-span-1 m-[19px] border_C">
                            <div className="px-[20px] py-[10px] my-auto ">
                                <img src={cl13} className='max-w-[90%] h-[98px] mx-auto sdd' alt="" />
                            </div>
                        </div>
                        <div className="col-span-1 m-[19px] border_C">
                            <div className="px-[20px] py-[10px] my-auto ">
                                <img src={cl14} className='max-w-[90%] h-[98px] mx-auto sdd' alt="" />
                            </div>
                        </div>
                        <div className="col-span-1 m-[19px] border_C">
                            <div className="px-[20px] py-[10px] my-auto ">
                                <img src={cl15} className='max-w-[90%] h-[98px] mx-auto sdd' alt="" />
                            </div>
                        </div>
                        <div className="col-span-1 m-[19px] border_C">
                            <div className="px-[20px] py-[10px] my-auto ">
                                <img src={cl16} className='max-w-[90%] h-[98px] mx-auto sdd' alt="" />
                            </div>
                        </div>
                        <div className="col-span-1 m-[19px] border_C">
                            <div className="px-[20px] py-[10px] my-auto ">
                                <img src={cl17} className='max-w-[90%] h-[98px] mx-auto sdd' alt="" />
                            </div>
                        </div>
                        <div className="col-span-1 m-[19px] border_C">
                            <div className="px-[20px] py-[10px] my-auto ">
                                <img src={cl18} className='max-w-[90%] h-[98px] mx-auto sdd' alt="" />
                            </div>
                        </div>
                        <div className="col-span-1 m-[19px] border_C">
                            <div className="px-[20px] py-[10px] my-auto ">
                                <img src={cl19} className='max-w-[90%] h-[98px] mx-auto sdd' alt="" />
                            </div>
                        </div>
                        <div className="col-span-1 m-[19px] border_C">
                            <div className="px-[20px] py-[10px] my-auto ">
                                <img src={cl20} className='max-w-[90%] h-[98px] mx-auto sdd' alt="" />
                            </div>
                        </div>
                        <div className="col-span-1 m-[19px] border_C">
                            <div className="px-[20px] py-[10px] my-auto ">
                                <img src={cl21} className='max-w-[90%] h-[98px] mx-auto sdd' alt="" />
                            </div>
                        </div>
                        <div className="col-span-1 m-[19px] border_C">
                            <div className="px-[20px] py-[10px] my-auto ">
                                <img src={cl22} className='max-w-[90%] h-[98px] mx-auto sdd' alt="" />
                            </div>
                        </div>
                        <div className="col-span-1 m-[19px] border_C">
                            <div className="px-[20px] py-[10px] my-auto ">
                                <img src={cl23} className='max-w-[90%] h-[98px] mx-auto sdd' alt="" />
                            </div>
                        </div>
                        <div className="col-span-1 m-[19px] border_C">
                            <div className="px-[20px] py-[10px] my-auto ">
                                <img src={cl24} className='max-w-[90%] h-[98px] mx-auto sdd' alt="" />
                            </div>
                        </div>
                        <div className="col-span-1 m-[19px] border_C">
                            <div className="px-[20px] py-[10px] my-auto ">
                                <img src={cl25} className='max-w-[90%] h-[98px] mx-auto sdd' alt="" />
                            </div>
                        </div>
                        <div className="col-span-1 m-[19px] border_C">
                            <div className="px-[20px] py-[10px] my-auto ">
                                <img src={cl26} className='max-w-[90%] h-[98px] mx-auto sdd' alt="" />
                            </div>
                        </div>
                        <div className="col-span-1 m-[19px] border_C">
                            <div className="px-[20px] py-[10px] my-auto ">
                                <img src={cl27} className='max-w-[90%] h-[98px] mx-auto sdd' alt="" />
                            </div>
                        </div>
                        <div className="col-span-1 m-[19px] border_C">
                            <div className="px-[20px] py-[10px] my-auto ">
                                <img src={cl28} className='max-w-[90%] h-[98px] mx-auto sdd' alt="" />
                            </div>
                        </div>
                        <div className="col-span-1 m-[19px] border_C">
                            <div className="px-[20px] py-[10px] my-auto ">
                                <img src={cl29} className='max-w-[90%] h-[98px] mx-auto sdd' alt="" />
                            </div>
                        </div>
                        <div className="col-span-1 m-[19px] border_C">
                            <div className="px-[20px] py-[10px] my-auto ">
                                <img src={cl30} className='max-w-[90%] h-[98px] mx-auto sdd' alt="" />
                            </div>
                        </div>
                        <div className="col-span-1 m-[19px] border_C">
                            <div className="px-[20px] py-[10px] my-auto ">
                                <img src={cl31} className='max-w-[90%] h-[98px] mx-auto sdd' alt="" />
                            </div>
                        </div>
                        <div className="col-span-1 m-[19px] border_C">
                            <div className="px-[20px] py-[10px] my-auto ">
                                <img src={cl32} className='max-w-[90%] h-[98px] mx-auto sdd' alt="" />
                            </div>
                        </div>
                        <div className="col-span-1 m-[19px] border_C">
                            <div className="px-[20px] py-[10px] my-auto ">
                                <img src={cl33} className='max-w-[90%] h-[98px] mx-auto sdd' alt="" />
                            </div>
                        </div>
                        <div className="col-span-1 m-[19px] border_C">
                            <div className="px-[20px] py-[10px] my-auto ">
                                <img src={cl34} className='max-w-[90%] h-[98px] mx-auto sdd' alt="" />
                            </div>
                        </div>
                        <div className="col-span-1 m-[19px] border_C">
                            <div className="px-[20px] py-[10px] my-auto ">
                                <img src={cl35} className='max-w-[90%] h-[98px] mx-auto sdd' alt="" />
                            </div>
                        </div>

                    </div>
                </Container6>
            </div>
            <div className='client pt-[100px] sm:pb-[100px] pb-[0px] xl:px-[20px] md:px-[20px] sm:px-[15px] px-[15px]'>
                <Container2>
                    <div className=" grid grid-cols-2">
                        <div className="relative lg:col-span-1 md:col-span-2 sm:col-span-2 col-span-2 pr-[80px]">
                            <h2 className='text-[50px] text-[#FFFFFF] font-poppins mb-[15px]'>What Our <br className='xl:block hidden' />Clients say</h2>
                            <div className=''>
                                <img src={invalidname} alt="" className='absolute top-[160px] left-[70px]' />
                            </div>
                            <div className='h-[300px] w-[100%]'>
                                <img src={groups} alt="" className='absolute top-[210px] left-[50px]' />
                                <img src={groups} alt="" className='absolute top-[270px] left-[0px]' />
                                <img src={groups} alt="" className='absolute top-[180px] left-[120px]' />
                                <img src={groups} alt="" className='absolute xl:block hidden top-[213px] right-[214px]' />
                                <img src={groups} alt="" className='absolute xl:block hidden top-[270px] right-[160px]' />
                            </div>
                        </div>

                        <div className="relative lg:col-span-1 md:col-span-2 sm:col-span-2 col-span-2 lg:pr-[80px] lg:px-[0px] md:px-[50px] sm:px-[20px] px-[12px]">
                            <SimpleSlider />
                        </div>
                    </div>
                </Container2>
            </div>

            {/* <div className='pt-[150px] pb-[100px] Makes relative'>
                <Container2>
                    <div className="grid grid-cols-1  ">
                        <div className='lg:px-[20px] md:px-[25px] sm:px-[30px] px-[30px]'>
                            <h2 className='text-[50px] mb-[15px] text-[#000000] font-poppins'>What makes
                                <br className='md:block hidden' /> Hipster hip?</h2>
                            <p className='text-[16px] font-poppins text-[#706b6b] mb-[30px] leading-[26px] xl:max-w-[60%]'>Hipster was founded in 2016 by Nikhil and Bok after a dinner discussion in a hawker center. Back then, they did most of the work out of a HDB flat. As a pragmatic entrepreneur, Nikhil believes that technology only makes sense when it is commercially viable. We might not always tell you what you want to hear,  but we definitely problem-solve with you.</p>
                            <p className='text-[16px] font-poppins text-[#706b6b] mb-[30px] xl:max-w-[60%]'>Today, we have two main offices, Singapore and India. We don't follow corporate conventions such as a work dress code, but we take our work seriously.</p>
                            <div className='flex justify-between'>
                                <Link to={""} className='border py-[13px] font-poppins font-semibold px-[45px] rounded-full' >Let's Talk</Link>
                                <img src={descriptionlogo} className='max-w-[191px] max-h-[62px]' alt="" />
                            </div>
                        </div>


                        <div className='relative MATAKA sm:block hidden'>
                            <img src={pencil} className='absolute top-[-460px] right-[-72px]' alt="" />
                            <img src={pencil2} className='absolute top-[-430px] right-[0px] our' alt="" />
                        </div>
                        <div className='relative sm:block hidden'>
                            <img src={pencil3} className='absolute top-[-440px] right-[-20px] NERW' alt="" />
                        </div>



                        <div className='PENCIL'>
                            <img src={polygonball} className='absolute top-[-100px] left-[30px]' alt="" />
                            <img src={watch2} className='absolute top-[-143px] left-[60px]' alt="" />
                            <img src={bagicon} className='absolute top-[-37px] left-[122px]' alt="" />
                        </div>
                    </div>
                </Container2>
            </div> */}

            <Makeshipster/>

            
            
        </>

    )
}


function Makeshipster() {
    return (
      <div className="md:pt-[150px] sm:pt-[90px] pt-[40px] md:pb-[100px] sm:pb-[80px] pb-[40px] Makes relative">
        <Container2>
          <div className="grid grid-cols-1  ">
            <div className="lg:px-[20px] md:px-[25px] sm:px-[30px] px-[20px]">
              <h2 className="text-[50px] mb-[15px] text-[#000000] font-poppins">
              What Makes Business
                <br className="md:block hidden" /> 10X Different?
              </h2>
              <p className="text-[16px] font-poppins text-[#706b6b] mb-[30px] leading-[26px] xl:max-w-[60%]">
                At Business10X, we’re not just another digital agency—we’re your growth partners, your digital strategy gurus, and your secret weapon in the race to the top. So, what sets us apart from the crowd? Let’s break it down:
              </p>
              <p className="text-[16px] font-poppins text-[#706b6b] mb-[30px] xl:max-w-[60%]">
              Okay, not literally, but it might as well be! The digital landscape is ever-changing, and we stay ahead of the curve. We’re constantly exploring new tools, trends, and technologies to keep your business at the forefront of the industry.
              </p>
              <div className="flex justify-between">
                
  
                <button className="relative overflow-hidden px-10 py-[13px] bg-transparent text-gray-800 font-medium border border-gray-800 rounded-full group">
                  <span className="absolute inset-0 w-full h-full bg-blue-500 transition-transform transform -translate-x-full group-hover:translate-x-0"></span>
                  <span className="relative text-gray-800 font-poppins font-semibold group-hover:text-white">
                    <Link to={"/contact"}>Let's Talk</Link>
                  </span>
                </button>
                <img
                  src={descriptionlogo}
                  // src={business}
                  className="max-w-[191px] max-h-[62px] sm:block hidden"
                  alt=""
                />
              </div>
            </div>
  
            <div className="relative MATAKA sm:block hidden">
              <img
                src={pencil}
                className="absolute top-[-460px] right-[-72px]"
                alt=""
              />
              <img
                src={pencil2}
                className="absolute top-[-430px] right-[0px] our"
                alt=""
              />
            </div>
            <div className="relative sm:block hidden">
              <img
                src={pencil3}
                className="absolute top-[-440px] right-[-20px] NERW"
                alt=""
              />
            </div>
  
            <div className="PENCIL md:block hidden">
              <img
                src={polygonball}
                className="absolute top-[-100px] left-[30px]"
                alt=""
              />
              <img
                src={watch2}
                className="absolute top-[-143px] left-[60px]"
                alt=""
              />
              <img
                src={bagicon}
                className="absolute top-[-37px] left-[122px]"
                alt=""
              />
            </div>
          </div>
        </Container2>
      </div>
    );
  }


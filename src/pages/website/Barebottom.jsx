



import React from 'react'
import { back, barebisness, discover, discoverbarepack, dishres, Downlogo, int, ratingbox, star, supplier, trro, ui_ux, vesbanner, z4bottom, z4icon } from '../../assets'
import { Link } from 'react-router-dom'
import { TiArrowRight } from "react-icons/ti";
import { PiCircleFill } from "react-icons/pi";
import { FaCircle } from "react-icons/fa";
import Container2 from '../../components/Container2';
import Container4 from '../../components/Container4';
import AutoPlay from './Autoplay';
import Container7 from '../../components/Container7';
import Autonewplay from './Autonewplay';


export default function Barebottom() {
  return (
    <div>


      <div className="lg:mt-[80px] md:mt-[110px] mt-[110px]">
        <div className="max-w-[1240px] mx-auto xl:px-[0px] px-[20px] mb-[48px]">
          <h2>
            <span className="md:text-[30px] sm:text-[24px] text-[16px] font-poppins" data-aos="slide-down" data-aos-duration="2000">
              <span className="md:text-[30px] sm:text-[24px] text-[16px] text-[#00b0ab] font-poppins font-semibold">
                barePack
              </span>
              — Sustainability Solution
            </span>

            <div className="md:mt-[10px] mt-[5px]" data-aos="slide-down" data-aos-duration="1000" >
              <span className="xl:text-[48px] md:text-[40px] sm:text-[30px] text-[24px] text-[#000000] font-poppins font-semibold" >
                Reducing plastic waste and promoting reusable packaging through tech
              </span>
            </div>
          </h2>
        </div>
        <div className="w-full h-full md:px-0 px-[14px]">
          <img className="w-full h-full" src={discover} alt="" />
        </div>
      </div>


      <div className="pt-20">
        <Container4>
          <div className="grid md:grid-cols-5 grid-cols-1 xl:px-0 lg:px-5 px-[20px]">
            <div className="md:col-span-3 col-span-1 lg:pr-12 pr-5" data-aos="slide-right" data-aos-duration="1000">
              <h2 className="lg:text-5xl text-3xl text-black font-poppins mb-4">Overview</h2>
              <p className="font-poppins sm:text-lg text-sm mt-6 text-gray-600">
                Sustainability startup, barePack has built a returnable container ecosystem to replace disposables used in food takeaway and delivery. Consumers can choose reusable containers for their food purchases and return them at any of the 150+ drop-off points in Singapore.
              </p>
              <p className="font-poppins sm:text-lg text-sm mt-6 text-gray-600">
                Hipster team took over from previous developers, After enahncements and fixes to the current app, We helped to launch the current app in France as well with multi-language and multi-country database and backend.
              </p>
            </div>
            <div className="md:col-span-2 col-span-1 lg:pt-0 sm:pt-20 pt-12" data-aos="slide-left" data-aos-duration="1000">
              <div className="mb-9">
                <p className="text-lg font-poppins text-gray-800 mb-2">Client</p>
                <p className="text-2xl text-gray-800 font-semibold">BAREPACK PTE. LTD.</p>
              </div>
              <div className="flex flex-wrap mb-9">
                <div>
                  <p className="text-lg font-poppins mb-2 text-gray-800">Period</p>
                  <p className="text-2xl font-poppins font-semibold text-gray-800">2020-21</p>
                </div>
                <div className="ml-11">
                  <p className="text-lg font-poppins mb-2 text-gray-800">Geography</p>
                  <p className="text-2xl font-poppins font-semibold text-gray-800">France, Singapore</p>
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
                      <Link to={''}>ios app</Link>
                    </li>
                  </li>
                  <li className="list-none mb-5 px-2 w-28">
                    <Link to={''}>
                      <img className="w-12 h-12 mx-6" src={int} alt="" />
                    </Link>
                    <li className="text-center text-gray-800 font-semibold">
                      <Link to={''}>Stripe payments</Link>
                    </li>
                  </li>
                  <li className="list-none mb-5 px-2 w-28">
                    <Link to={''}>
                      <img className="w-12 h-12 mx-6" src={int} alt="" />
                    </Link>
                    <li className="text-center text-gray-800 font-semibold">
                      <Link to={''}>Google firebase serverless architecture</Link>
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
            

            <li className="bg-[#ccefee] duration-500  hover:bg-[#00fff7] mb-[20px] mr-[10px] py-[18px] px-[32px]  rounded-full hover:text-[#FFFFFF]  text-[#001817]">
              <Link
                className="  text-[18px] font-poppins hover:text-[#FFFFFF] duration-1000 text-[#001817]"
                to={"/mobileappdevelopment"}
              >
                Mobile App Development
              </Link>
            </li>

            <li className="bg-[#ccefee] duration-500  hover:bg-[#00fff7] mb-[20px] mr-[10px] py-[18px] px-[32px]  rounded-full hover:text-[#FFFFFF]  text-[#001817]">
              <Link
                className="  text-[18px] font-poppins hover:text-[#FFFFFF] duration-1000 text-[#001817]"
                to={"/uiuxdesign"}
              >
                UI/UX
              </Link>
            </li>

            <li className="bg-[#ccefee] duration-1000  hover:bg-[#73dedb] mb-[20px] mr-[10px] py-[18px] px-[32px] rounded-full">
              <Link
                className="text-[18px] font-poppins hover:text-[#FFFFFF] duration-1000 text-[#001817]"
                to={"/softwaredevelopment"}
              >
                Cloud Infrastructure
              </Link>
            </li>
          </ul>
        </div>
      </div>





      




      <Container7>
        <div className="mt-20 grid grid-cols-1 md:grid-cols-5 gap-4 xl:px-[0px] px-[20px]">
          <div className="col-span-2 my-5 wooshi px-[20px] rounded-[20px]">
            <div className="barebottom1"></div>
          </div>
          <div className="my-auto col-span-3 font-poppins md:pl-12 md:ml-5" data-aos="slide-left" data-aos-duration="1000">
            <div>
              <h2 className="text-[30px] sm:text-[40px] md:text-[50px] text-black">
                Scaling your tech to meet business growth
              </h2>
            </div>
            <p className="text-gray-600 text-base sm:text-lg md:text-xl mt-5 font-poppins">
              BarePack’s first bootstrapped app was a good starting point when the company just began its operations. As the user pool grew, it became increasingly clear that the app had scalability issues. The app slowed down as more users and food outlets came onboard.
            </p>
          </div>
        </div>
      </Container7>

      <Container7>
        <div className="mt-20 grid grid-cols-1 md:grid-cols-5 gap-4 xl:px-[0px] px-[20px]">
          <div className="my-auto col-span-3 font-poppins md:pl-0" data-aos="slide-right" data-aos-duration="1000">
            <h2 className="text-2xl sm:text-3xl md:text-4xl text-black">
              Meeting business and users needs
            </h2>
            <p className="text-gray-600 text-base sm:text-lg md:text-xl md:mt-5 mt-2 font-poppins">
              When Hipster undertook the design work for the app, the team focused on barePack’s business and users’ needs. The following improvements were made with our technical expertise:
            </p>
            <ul className="list-disc py-7 text-gray-600 font-poppins text-base sm:text-lg md:text-xl leading-[30px] px-5">
              <li>Integration with restaurants and delivery providers.</li>
              <li>Map view for users to quickly identify nearby participating partners.</li>
              <li>The payment and promotions process is improved. Previously, staff needed to manually program the discount code if they would like to run a promotion. Now, any staff can easily create a discount code on the backend without any programming.</li>
            </ul>
          </div>
          <div className="col-span-2 my-5 wooshi px-[20px] rounded-[20px]">
            <div className="barebottom1"></div>
          </div>
        </div>
      </Container7>







      <Container7>
        <div className="mt-20 grid grid-cols-1 md:grid-cols-5 gap-4 xl:px-[0px] px-[20px]">
          <div className="col-span-2 my-5 wooshi px-[20px] rounded-[20px]">
            <div className="barebottom1"></div>
          </div>
          <div className="my-auto col-span-3 font-poppins md:pl-12 md:ml-5" data-aos="slide-left" data-aos-duration="1000">
            <div>
              <h2 className="text-[30px] sm:text-[40px] md:text-[50px] text-black">
              Data Analytics
              </h2>
            </div>
            <p className="text-gray-600 text-base sm:text-lg md:text-xl mt-5 font-poppins">
            The app captures granular transaction data for analytics. These data include the number of containers picked up and dropped off at a specific location and the number of containers a user holds. These information can help stakeholders make informed business decisions backed by data.
            </p>

            <p className="text-gray-600 text-base sm:text-lg md:text-xl mt-5 font-poppins">
            As the database grew, we faced challenges in terms of app speed and scalability, We changed from Google Firebase to Google Firestore proactively to tackle these issues, and made the app robust and scalable. The migration was seamlessly done without any downtime.
            </p>
          </div>
        </div>
      </Container7>






      <div className="bg-[#ddf3ff] py-[80px] sm:py-[40px] xl:px-[0px] px-[20px]">
        <div className="max-w-[1220px] mx-auto  gap-[8px] grid grid-cols-1 md:grid-cols-5">
          <div className="col-span-3 md:pr-[73px] my-auto md:text-left">
            <h2 className="text-[40px] sm:text-[30px] md:text-[50px] text-[#000000] font-poppins mb-[15px]">
              Flutter App as V2
            </h2>
            <p className="mb-[25px] text-[#000000] text-[16px] sm:text-[18px] md:text-[20px] font-poppins">
              Instead of running two separate apps (Android and IOS), Hipster advised barePack to create a cross-platform mobile app, a Flutter app. Flutter works for both Android and iOS, halves development time and cost. Additionally, updates are published on both platforms simultaneously.
            </p>
          </div>
          <div className="col-span-2">
            <img src={dishres} alt="" className="w-full h-auto" />
          </div>
        </div>
      </div>








      <div className="py-[80px]">
        <div className=" lg:mx-[198px] md:mx-[80px] mx-[30px] ">
          

<div className="">
  <h2 className="text-center text-[28px] md:text-[36px] lg:text-[42px] text-[#000000] font-poppins">
    <Link className="bbn" to={"/shareapp"}>
      Next Case Study
    </Link>
  </h2>
  <div className="py-[30px] md:py-[40px] lg:py-[50px] text-center">
    <div className="text-[18px] md:text-[20px] lg:text-[24px] font-poppins text-[#001817] mb-[10px] md:mb-[12px] lg:mb-[15px]">
      <Link to={""}>Imavox - Event Technology, Multimedia, Event Management</Link>
    </div>
    <h3 className="font-semibold text-[24px] md:text-[28px] lg:text-[32px] max-w-[100%] md:max-w-[600px] lg:max-w-[500px] mx-auto text-center leading-[30px] md:leading-[36px] lg:leading-[42px] text-[#001817] font-poppins">
      <Link className="mb-[8px] md:mb-[10px] lg:mb-[12px]" to={""}>
      A multimedia and technical event solutions company that covers medium to large events in Europe, Africa and Asia.
      </Link>
    </h3>
  </div>
</div>

        </div>
      </div>

    </div>
  )
}





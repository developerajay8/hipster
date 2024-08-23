



import React from 'react'
import { back,  int, supplier, trro, ui_ux, vesbanner } from '../../assets'
import { Link } from 'react-router-dom'
import { TiArrowRight } from "react-icons/ti";
import { PiCircleFill } from "react-icons/pi";
import { FaCircle } from "react-icons/fa";
import Container2 from '../../components/Container2';
import Container4 from '../../components/Container4';
import AutoPlay from './Autoplay';
import Container7 from '../../components/Container7';
import Autonewplay from './Autonewplay';


export default function Vesqr() {
  return (
    <div>





      <div className="lg:mt-[80px] md:mt-[110px] mt-[110px]">
        <div className="xl:mx-[118px] md:mx-[45px] mx-[15px] mb-[48px]">
          <h2>
            <span className="md:text-[30px] sm:text-[24px] text-[16px] font-poppins" data-aos="slide-down" data-aos-duration="2000">
              <span className="md:text-[30px] sm:text-[24px] text-[16px] text-[#00b0ab] font-poppins font-semibold">
                VES
              </span>
              — QR Code Smart Kiosk Check-In & Instant Badge Printing With VESolution
            </span>

            <div className="md:mt-[10px] mt-[5px]" data-aos="slide-down" data-aos-duration="1000" >
              <span className="xl:text-[48px] md:text-[40px] sm:text-[30px] text-[24px] text-[#000000] font-poppins font-semibold" >
                Discovering Seamless Event Registration and Management.
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
                VESolution simplifies and quickens the event registration processes using QR Codes, microsites and specialized tablet kioks.
              </p>
              <p className="font-poppins sm:text-[20px] text-[16px] mt-[25px] text-[#606e6e]">
                Guest simply need to scan their check-in QR, and a personalised name badge would be printing in less than 3 seconds.
              </p>
            </div>
            <div className="md:col-span-2 col-span-1 lg:pt-0 sm:pt-[80px] pt-[45px]" data-aos="slide-left" data-aos-duration="1000">
              <div className="mb-[35px]">
                <p className="text-[18px] font-poppins text-[#001817] mb-[10px]">Client</p>
                <p className="text-[24px] text-[#001817] font-semibold">VES</p>
              </div>
              <div className="flex flex-wrap mb-[35px]">
                <div>
                  <p className="text-[18px] font-poppins mb-[10px] text-[#001817]">Period</p>
                  <p className="text-[24px] font-poppins font-semibold text-[#001817]">2021-Present</p>
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
              <Link className="text-[18px] font-poppins hover:text-[#FFFFFF] duration-1000 text-[#001817]" to={''}>Other technoliges</Link>
            </li>
          </ul>
        </div>
      </div>


      <div className="">
        <Container4>
          <div className="border mt-[50px] mb-[70px] grid grid-cols-2">
            <div className="col-span-1">
              <video autoPlay muted loop className="w-full h-[416px]">
                <source src={"https://hipster-inc.com/wp-content/uploads/2023/08/ves-video.mp4"} type="video/mp4" />
              </video>
            </div>
            <div className="col-span-1 pl-[50px] my-[auto]">
              <h2 className='text-[32px] font-poppins font-[500] text-[#000000]'>
              Pre-event registration
              </h2>
              <ul className='list-disc px-[20px] py-[30px] text-[20px] text-[#666666]  font-poppins'>
                  <li>Easily change and edit form fields to suit your event’s needs.</li>
                  <li>Upon successful registration, a confirmation email containing a QR Code e-Ticket will be sent to guests.</li>
              </ul>
            </div>
          </div>
        </Container4>
      </div>

      <div className="">
        <Container4>
          <div className="border mt-[50px] mb-[70px] grid grid-cols-1">
            <h5 className='text-[48px] font-poppins text-center text-[#000000]'>Event Check-in</h5>
            <p className='text-[20px] max-w-[684px] text-center font-poppins text-[#606e6e] mt-[20px] mx-auto'>Guests simply need to scan the QR code at the event and collect their name badges.</p>
            <div className="mt-[100px] border max-w-[584px] mx-auto ">
              <Autonewplay />
            </div>

            {/* <div className="absolute w-[full] h-[260px] bg-[#008dff] mt ">

            </div> */}
          </div>
        </Container4>
      </div>

      <div className="">
        <Container4>
          <div className="border mt-[50px] gap-[20px] mb-[70px] grid grid-cols-5">
            <div className="border relative bg-[#eeeef1]">
              <img src={back} alt="" />
              <div className="w-[70px] h-[70px] rounded-[50px]  top-[45px] right-[35%] absolute bg-[#fff] vesshadow ">
                
              </div>
              <div className="py-[10px] px-[12px] border mt-[30px] text-center">
                <h6 className="mt-[8px] font-[500] max-w-[184px] leading-[22px] text-[#001817] text-[18px] ">Disseminate QR Code e-Tickets via Email</h6>
                <p className='max-w-[184px] text-[14px] text-[#6b7d7c] mt-[12px] '>Automatically send out customized registration confirmation emails with QR Code e-Tickets to guests</p>
              </div>
            </div>

            <div className="border relative bg-[#eeeef1]">
              <img src={back} alt="" />
              <div className="w-[70px] h-[70px] rounded-[50px]  top-[45px] right-[35%] absolute bg-[#fff] vesshadow ">
                
              </div>
              <div className="py-[10px] px-[12px] border mt-[30px] text-center">
                <h6 className="mt-[8px] font-[500] max-w-[184px] leading-[22px] text-[#001817] text-[18px] ">Disseminate QR Code e-Tickets via Email</h6>
                <p className='max-w-[184px] text-[14px] text-[#6b7d7c] mt-[12px] '>Automatically send out customized registration confirmation emails with QR Code e-Tickets to guests</p>
              </div>
            </div>

            <div className="border relative bg-[#eeeef1]">
              <img src={back} alt="" />
              <div className="w-[70px] h-[70px] rounded-[50px]  top-[45px] right-[35%] absolute bg-[#fff] vesshadow ">
                
              </div>
              <div className="py-[10px] px-[12px] border mt-[30px] text-center">
                <h6 className="mt-[8px] font-[500] max-w-[184px] leading-[22px] text-[#001817] text-[18px] ">Disseminate QR Code e-Tickets via Email</h6>
                <p className='max-w-[184px] text-[14px] text-[#6b7d7c] mt-[12px] '>Automatically send out customized registration confirmation emails with QR Code e-Tickets to guests</p>
              </div>
            </div>

            <div className="border relative bg-[#eeeef1]">
              <img src={back} alt="" />
              <div className="w-[70px] h-[70px] rounded-[50px]  top-[45px] right-[35%] absolute bg-[#fff] vesshadow ">
                
              </div>
              <div className="py-[10px] px-[12px] border mt-[30px] text-center">
                <h6 className="mt-[8px] font-[500] max-w-[184px] leading-[22px] text-[#001817] text-[18px] ">Disseminate QR Code e-Tickets via Email</h6>
                <p className='max-w-[184px] text-[14px] text-[#6b7d7c] mt-[12px] '>Automatically send out customized registration confirmation emails with QR Code e-Tickets to guests</p>
              </div>
            </div>

            <div className="border relative bg-[#eeeef1]">
              <img src={back} alt="" />
              <div className="w-[70px] h-[70px] rounded-[50px]  top-[45px] right-[35%] absolute bg-[#fff] vesshadow ">
                
              </div>
              <div className="py-[10px] px-[12px] border mt-[30px] text-center">
                <h6 className="mt-[8px] font-[500] max-w-[184px] leading-[22px] text-[#001817] text-[18px] ">Disseminate QR Code e-Tickets via Email</h6>
                <p className='max-w-[184px] text-[14px] text-[#6b7d7c] mt-[12px] '>Automatically send out customized registration confirmation emails with QR Code e-Tickets to guests</p>
              </div>
            </div>

            <div className="border relative bg-[#eeeef1]">
              <img src={back} alt="" />
              <div className="w-[70px] h-[70px] rounded-[50px]  top-[45px] right-[35%] absolute bg-[#fff] vesshadow ">
                
              </div>
              <div className="py-[10px] px-[12px] border mt-[30px] text-center">
                <h6 className="mt-[8px] font-[500] max-w-[184px] leading-[22px] text-[#001817] text-[18px] ">Disseminate QR Code e-Tickets via Email</h6>
                <p className='max-w-[184px] text-[14px] text-[#6b7d7c] mt-[12px] '>Automatically send out customized registration confirmation emails with QR Code e-Tickets to guests</p>
              </div>
            </div>

            <div className="border relative bg-[#eeeef1]">
              <img src={back} alt="" />
              <div className="w-[70px] h-[70px] rounded-[50px]  top-[45px] right-[35%] absolute bg-[#fff] vesshadow ">
                
              </div>
              <div className="py-[10px] px-[12px] border mt-[30px] text-center">
                <h6 className="mt-[8px] font-[500] max-w-[184px] leading-[22px] text-[#001817] text-[18px] ">Disseminate QR Code e-Tickets via Email</h6>
                <p className='max-w-[184px] text-[14px] text-[#6b7d7c] mt-[12px] '>Automatically send out customized registration confirmation emails with QR Code e-Tickets to guests</p>
              </div>
            </div>

            <div className="border relative bg-[#eeeef1]">
              <img src={back} alt="" />
              <div className="w-[70px] h-[70px] rounded-[50px]  top-[45px] right-[35%] absolute bg-[#fff] vesshadow ">
                
              </div>
              <div className="py-[10px] px-[12px] border mt-[30px] text-center">
                <h6 className="mt-[8px] font-[500] max-w-[184px] leading-[22px] text-[#001817] text-[18px] ">Disseminate QR Code e-Tickets via Email</h6>
                <p className='max-w-[184px] text-[14px] text-[#6b7d7c] mt-[12px] '>Automatically send out customized registration confirmation emails with QR Code e-Tickets to guests</p>
              </div>
            </div>

            <div className="border relative bg-[#eeeef1]">
              <img src={back} alt="" />
              <div className="w-[70px] h-[70px] rounded-[50px]  top-[45px] right-[35%] absolute bg-[#fff] vesshadow ">
                
              </div>
              <div className="py-[10px] px-[12px] border mt-[30px] text-center">
                <h6 className="mt-[8px] font-[500] max-w-[184px] leading-[22px] text-[#001817] text-[18px] ">Disseminate QR Code e-Tickets via Email</h6>
                <p className='max-w-[184px] text-[14px] text-[#6b7d7c] mt-[12px] '>Automatically send out customized registration confirmation emails with QR Code e-Tickets to guests</p>
              </div>
            </div>

            <div className="border relative bg-[#eeeef1]">
              <img src={back} alt="" />
              <div className="w-[70px] h-[70px] rounded-[50px]  top-[45px] right-[35%] absolute bg-[#fff] vesshadow ">
                
              </div>
              <div className="py-[10px] px-[12px] border mt-[30px] text-center">
                <h6 className="mt-[8px] font-[500] max-w-[184px] leading-[22px] text-[#001817] text-[18px] ">Disseminate QR Code e-Tickets via Email</h6>
                <p className='max-w-[184px] text-[14px] text-[#6b7d7c] mt-[12px] '>Automatically send out customized registration confirmation emails with QR Code e-Tickets to guests</p>
              </div>
            </div>
            
          </div>
        </Container4>
      </div>



      




      <div className="py-[80px]">
        <div className=" lg:mx-[198px] md:mx-[80px] mx-[30px] ">
          <div>
            <h2 className='text-center text-[42px] text-[#000000] font-poppins '>
              <Link className='bbn' to={''}>Next Case Study</Link>
            </h2>
            <div className="py-[50px] text-center">
              <div className='text-[24px] font-poppins text-[#001817] mb-[15px]'>
                <Link to={''}>Bettr Coffee - Food and Beverage (F&B)</Link>
              </div>
              <h3 className='font-semibold text-[32px] max-w-[500px] mx-auto text-center leading-[42px] text-[#001817] font-poppins'>
                <Link className='mb-[12px]' to={''}>A socially conscious and environmentally friendly coffee subscription service.</Link>
              </h3>
            </div>

          </div>
        </div>
      </div>

    </div>
  )
}









import React from "react";
import Container6 from "../../components/Container6";
import { ios14, makemobile, responsive, tableate, trdpi, twater } from "../../assets";
import { FaRegCalendar } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Portfolio from "./Portfolio";

const Blockchain = () => {
  return (
    <div className="md:my-[80px] my-[20px] ">
      <Container6>

        <div className="">
          <li className="list-none text-center ">
            <Link to={''} className="rounded-3xl text-[18px] mr-[10px] font-poppins bg-[#00b1ac33] py-[10px] px-[26px]">Technologies</Link>
            <Link to={''} className="rounded-3xl text-[18px] font-poppins bg-[#00b1ac33] py-[10px] px-[26px]">Success Story</Link>
          </li>

        </div>
        <div className="font-[poppins] mb-[24px] px-[15px] xl:mx-[0px] lg:mx-[40px] md:mx-[40px] sm:mx-[20px] mx-[0px]">
          <h1 className="text-[30px] md:text-[48px] pt-[20px] md:pt-[80px] leading-[1.2] text-center font-[400] ">
            How can you use Blockchain Technology in your tech business?
          </h1>
          <div className="flex items-center justify-center gap-3 mt-[25px] md:mt-[30px] pb-[24px]">
            <FaRegCalendar className=" md:text-[25px] text-[20px]" />
            <span className="md:text-[16px]  text-[14px]"> February 22, 2019</span>
          </div>

          <div className=" md:pt-[20px] pt-[20px]">
            <img
              className="w-full mt-[20px] mb-[30px]"
              src={twater}
              alt=""
            />
          </div>


          <div className="mt-[40px]">
            {/* <h3 className="sm:text-[28px] text-[22px] mt-[40px] mb-[30px] font-bold">All you need to know about iOS 14- Features, Compatibility, Release Date, and Reviews</h3> */}
            <p className=" md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">
              Blockchain Technology has really busted the myth about having a decentralized system by providing the tools to an organization. Let’s start by answering what is blockchain, Blockchain is a tool that allows storing a vast amount of data in real time which can be accessed by anyone around the globe if they have an internet connection and access to the blockchain server. But that’s not what blockchain is all about, with the help of blockchain any number of people can see the same document or file in real time with all the changes that have been made to the file by a different individual. Blockchain offers any business or organization with the ability to store their data and make it readily available for any of their concerned employees in order to work efficiently with real-time updated data. This removes the whole equation of sending back and forth emails to update a file, document or a contract. What actually started the blockchain technology was the introduction of bitcoin in the year 2009, but no one realized the true potential of blockchain until the year 2013. Now it is being used widely by various entities in order to streamline their work and increase the efficiency of the projects they carry out.
            </p>
            <h3 className="sm:text-[28px] text-[22px] mt-[40px] mb-[30px] font-bold"><strong>Who we are cannot be separated from where we are</strong></h3>


            <p className=" md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">
              Here we list some of the major uses any business can take advantage of from using blockchain:
            </p>


            <ul className="list-disc wow slideInLeft sm:ml-[70px] ml-[30px] leading-[27px] mt-[20px] sm:text-[20px] 
            text-[16px] text-[#222222] font-poppins">
              <li className="mb-[14px]">The very first and major use of this technology is the real-time sharing of data between multiple entities which allows easy access with real-time updated data available to each of them. Any update in the document from one end is automatically updated in the store file which can be accessed anywhere in the world with the access to the cloud storage. This has actually made life easy for a number of companies who hire third parties to carry out their work and this enables them to track the progress properly with updated files and data regarding the project which ensures that everyone party which is involved has the same version of the file or contract.</li>
              <li className="mb-[14px]">Blockchain increases the transparency between different parties as the work can be tracked from the point of initiation to its current progress with each and every change and important updates recorded with date and time stamps. This allows businesses to streamline their supply chain and even manage their logistics in a more efficient manner with proper inventory data which is updated every time apart or something is either removed or placed in the inventory.</li>
              <li className="mb-[14px]">Another major use of this technology that is being used by organizations is for background checks of potential employees to track their record and work statistics with the previous employer and evaluate whether the employee should be approached for an interview. This also allows HR to make sure whether there is any record of misconduct or any other issue in the workplace.</li>
              <li className="mb-[14px]">Blockchain has also opened a new platform of sending payments through cryptocurrency like the Bitcoin from across countries. This has made it easier for the businesses to pay salaries to their remote of contract employees who are in a different city or country without any delays as it is found in traditional bank transfers. This also diminishes the cost that is incurred for outward remittance of foreign or domestic currency which is charged by the banks for making payment.</li>


            </ul>

            <p className=" md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">
              <Link to={'/blackchain'} className="text-[#006a83] hover:text-[#000000]">What is Blockchain Technology</Link>
            </p>


















          </div>




        </div>


        <div>
          <Portfolio />
        </div>
      </Container6>
    </div>
  );
};

export default Blockchain;

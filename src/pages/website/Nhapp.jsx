


import React from "react";
import Container6 from "../../components/Container6";
import { gi, ios14, makemobile, responsive, tableate, trdpi, twater } from "../../assets";
import { FaRegCalendar } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Portfolio from "./Portfolio";

const Nhapp = () => {
  return (
    <div className="md:my-[80px] my-[20px] ">
      <Container6>

        <div className="">
          <li className="list-none text-center ">
            <Link to={''} className="rounded-3xl text-[18px] font-poppins bg-[#00b1ac33] py-[10px] px-[26px]">Native vs hybrid app</Link>
          </li>

        </div>
        <div className="font-[poppins] mb-[24px] px-[15px] xl:mx-[0px] lg:mx-[40px] md:mx-[40px] sm:mx-[20px] mx-[0px]">
          <h1 className="text-[30px] md:text-[48px] pt-[20px] md:pt-[80px] leading-[1.2] text-center font-[400] ">
            Native App vs Hybrid App
          </h1>
          <div className="flex items-center justify-center gap-3 mt-[25px] md:mt-[30px] pb-[24px]">
            <FaRegCalendar className=" md:text-[25px] text-[20px]" />
            <span className="md:text-[16px]  text-[14px]">  February 22, 2019</span>
          </div>

          <div className=" md:pt-[20px] pt-[20px]">
            <img
              className="w-full mt-[20px] mb-[30px]"
              src={gi}
              alt=""
            />
          </div>


          <div className="mt-[40px]">
            {/* <h3 className="sm:text-[28px] text-[22px] mt-[40px] mb-[30px] font-bold">All you need to know about iOS 14- Features, Compatibility, Release Date, and Reviews</h3> */}
            <p className=" md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">
              The use of the phone showcase has expanded a great deal as of late and native app vs hybrid app development is additionally the most discussed theme for application engineers right now.</p>



            <p className=" md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">
              With the increased use of mobile phones which accounts for almost 53 percent of internet traffic, the focus of the developers is shifting towards enhancing the user experience by creating high-performance applications for the user. Well, no surprise there, we can see people all around including ourselves glued to our phones throughout the day and with user focus shifting from conventional applications towards utility and ease of use, developers are working overtime in order to elevate the consumer experience by providing faster processing speed and improved UI. Now the main question that is faced by Tech companies and developers is which way to go- Either use a hybrid app approach or go with the native app development.</p>

              <h3 className="sm:text-[28px] font-poppins text-[22px] mt-[40px] mb-[30px] font-bold">Lets us understand first what the main difference between native and hybrid app:</h3>

            <p className=" md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">
              A hybrid application is the combination of native apps and web apps that can be launched on multiple platforms like IOS, Android, Windows, etc. This type of application appears to be a native app but is actually run using the company or organization website which links all the data and content to the app for users to utilize. The main advantage any hybrid app offers to the developers is the time of development as it required less customization, this also decreases the cost of development. Since these apps are connected or linked to the website, the maintenance cost also drops as the maintenance of the website ensures a smoother application experience for the users.

            </p>

            <p className=" md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">
              <Link to={'/nhapp'} className="text-[#006a83] hover:text-[#000000]">Native App vs Hybrid App</Link>
            </p>

            <p className=" md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">
              Now, its time to understand what a native application is. A native application is designed and developed for a particular platform be it IOS, Android or Windows. The platform defines the type of coding language to be used as each platform has different graphics and user interface and visuals. The main advantage of such applications is their smooth performance, high application speed, and elevated user experience. But all this comes at a price, in this case, a high time of development and cost as these apps require big teams and personal hours.
            </p>

            <p className=" md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">
              Well, we did our best to shed light on the <strong>difference between native and hybrid app</strong>, now it all depends on your business or interests before deciding what type of application will fulfill your business requirements properly. We hope reading this post gave you all really helpful insights, do share it with your friends and peers who might also benefit from this knowledge.

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

export default Nhapp;

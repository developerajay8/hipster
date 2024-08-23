


import React from "react";
import Container6 from "../../components/Container6";
import { ios14, makemobile, md, pwa, trdpi } from "../../assets";
import { FaRegCalendar } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Portfolio from "./Portfolio";

const PWA = () => {
  return (
    <div className="md:my-[80px] my-[20px] ">
      <Container6>

        <div className="">
          <li className="list-none text-center ">
            <Link to={''} className="rounded-3xl text-[18px] font-poppins bg-[#00b1ac33] py-[10px] px-[26px]">App Development</Link>
          </li>

        </div>
        <div className="font-[poppins] mb-[24px] px-[15px] xl:mx-[0px] lg:mx-[40px] md:mx-[40px] sm:mx-[20px] mx-[0px]">
          <h1 className="text-[30px] md:text-[48px] pt-[20px] md:pt-[80px] leading-[1.2] text-center font-[400] ">
          What is a Progressive Web App Development? Progressive Web App (PWA)
          </h1>
          <div className="flex items-center justify-center gap-3 mt-[25px] md:mt-[30px] pb-[24px]">
            <FaRegCalendar className=" md:text-[25px] text-[20px]" />
            <span className="md:text-[16px]  text-[14px]">  September 4, 2019</span>
          </div>

          <div className=" md:pt-[20px] pt-[20px]">
            <img
              className="w-full mt-[20px] mb-[30px]"
              src={pwa}
              alt=""
            />
          </div>


          <div className="mt-[40px]">
            {/* <h3 className="sm:text-[28px] text-[22px] mt-[40px] mb-[30px] font-bold">All you need to know about iOS 14- Features, Compatibility, Release Date, and Reviews</h3> */}
            <p className=" md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">
               <b> <Link to={'/'} className="text-[#006a83] hover:text-[#000000]">What is a Progressive web app</Link> </b>or PWA as it is commonly known as? A progressive web application is one that can be accessed through a browser and users don’t have to download an app or log in to a platform to access the information. PWA allows a user to access the web application no matter what device they are using. And it is this particular feature that leads to businesses using progressive web design for their websites.
            </p>

            <p className=" md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">
            A progressive web application uses a modern interface to deliver users app-like experience and performance. PWA eliminates the need for downloading the application on the device through the app store which makes using it much easier and hassle-free. PWA is very easy to use and if they deliver the user with increases experience and reliability the browser even offers to bookmark or add to home screen option for the web application.
            </p>

            <h3 className="sm:text-[28px] text-[22px] mt-[40px] mb-[30px] font-bold">How Progressive Application is developed:</h3> 

            <p className=" md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">
            A <b>progressive web app development</b> is developed using web development technologies such as HTML, CSS, JavaScript, etc. These applications are developed to work on all internet/web browsers. So that a user does not need to install a dedicated application on different devices to access them. These applications can work on any standard internet browser such as Google Chrome, Mozilla Firefox, Internet Explorer, etc.
            </p>

            <p className=" md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">
            The app-like appearance and performance of the progressive web page depend on the nature of the browser and its capabilities. PWA allows push notifications, offline access to a certain amount of information based on the browser a user is using to open the web application.
            </p>

            <p className=" md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">
            PWA allows businesses and organization to develop a website which gives the user an elevated experience over traditional websites. A user can log in using their web browser on these applications, save information for offline access and even add it to their home screen for faster access. Progressive web applications load faster than traditional websites although they have less loading speed and performance when compared to dedicated applications.
            </p>






            <div className=" md:pt-[20px] pt-[20px]">
            <img
              className="w-full mt-[20px] mb-[30px]"
              src={md}
              alt=""
            />
          </div>







            <h3 className="sm:text-[28px] text-[22px] mt-[40px] mb-[30px] font-bold">Need for Progressive Web App:</h3> 
            <p className=" md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">
            A progressive web application performs better than any other traditional website and offers a better user interface as well as experience. The need for shifting to PWA for businesses has increased over time as new devices have come into the market which offers internet access to the users.
            </p>

            <p className=" md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">
            Providing users with faster loading and better graphics at the same time has been a challenge for the corporate for a long time. Choosing between a traditional website or a progressive website has now become easier for those businesses who are in the habit of serving their customers better.
            </p>

            <p className=" md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">
            As the progressive web apps offer better usability and experience as they can use different devices and still get a better scrolling and browsing ability through the website or the web page. Having a website that self optimizes the content as well as the browsing facility for users on different devices definitely helps to enhance their experience.
            </p>

            <h3 className="sm:text-[28px] text-[22px] mt-[40px] mb-[30px] font-bold">Advantages of PWA:</h3> 
            <p className=" md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">
            Some of the major advantages of having a progressive web application rather than a traditional one can be listed as:
            </p>

            <ul className="list-disc sm:ml-[70px] ml-[30px] leading-[27px] mt-[20px] text-[20px] text-[#222222] font-poppins">
              <li className="mb-[14px]">They offer the option where a user can use a different device for accessing the information on the website.</li>
              <li className="mb-[14px]">Progressive web applications require less time and money to develop as compared to native applications.</li>
              <li className="mb-[14px]">A progressive website self-optimizes web features to deliver the user great speed and experience.</li>
              <li className="mb-[14px]">PWA does not require using complex tools or programming languages. And PWA can be developed by developers using HTML, CSS, JavaScript which are known to most programmers.</li>
            </ul>

            <h3 className="sm:text-[28px] text-[22px] mt-[40px] mb-[30px] font-bold">Why use a Progressive Web application:</h3> 

            <p className=" md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">
            <b>PWA development</b> is taking over the internet as more and more businesses are opting for them. While a responsive web design allows businesses to launch websites. That is responsive on both mobile as well as a computer system. But they don’t offer the same experience and speed as progressive web applications.            </p>

            <p className=" md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">
            Although, a PWA and a responsive website perform almost similar to each other PWA’s offer a much better user experience. The progressive web application requires less time for development and deployment as compared to native applications. This allows businesses to invest fewer resources in terms of both human and capital for the development which directly reduces the cost of development.           </p>

            <p className=" md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">
            Progressive web applications are more reliable, faster, efficient, easy to modify and still offer elevated user interface as well as experience.          </p>

            <p className=" md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">
            Don’t believe this? Well, look at how almost all net-banking sites, knowledge portals, etc. are nothing other than a <b>progressive web app development</b> . If most of the banks can use this approach for their business. Then we believe they must be better after all.         </p>




            <p className=" md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">
            <Link to={'/pwa'} className="text-[#006a83] hover:text-[#000000]">Software Development Agency</Link>
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

export default PWA;

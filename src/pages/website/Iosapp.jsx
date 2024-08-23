



import React from "react";
import Container6 from "../../components/Container6";
import { aad, barePack, hc, iosad, kata } from "../../assets";
import { FaRegCalendar } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Portfolio from "./Portfolio";

const Iosapp = () => {
  return (
    <div className="md:my-[80px] my-[20px] ">
      <Container6>
        <div className="">
          <li className="list-none text-center items-center">
            <Link className=" text-[18px] px-[22px] py-[10px] bg-[#00b1ac33] rounded-full">App Development</Link>
          </li>
        </div>

        <div className="font-[poppins] mb-[24px] px-[15px]">
          <h1 className="text-[30px] md:text-[48px] pt-[20px] md:pt-[80px] leading-[1.2] text-center font-[400] ">
            iOS App Development Singapore
          </h1>
          <div className="flex items-center justify-center gap-3 mt-[25px] md:mt-[30px] pb-[24px]">
            <FaRegCalendar className=" md:text-[25px] text-[20px]" />
            <span className="md:text-[16px]  text-[14px]">   September 19, 2020</span>
          </div>
          <div className=" md:pt-[60px] pt-[30px]">
            <img
              className="w-full mt-[20px] mb-[30px]"
              src={iosad}
              alt=""
            />
          </div>

          <div>
            {/* <h2 className=" text-[28px] md:text-[32px] font-[600] mt-[40px] mb-[10px] md:mb-[20px] leading-[1.2]">
              The barePack origin story:
            </h2> */}
            <p className=" md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">
              Looking for a business-ready iOS application that gives you an edge in the competitive market? Search no further. Hipster, one of the leading agencies for <Link className="text-[#006a83]
              hover:text-[#000000] duration-700 ">iOS app development Singapore</Link> which creates iOS applications that are engaging, stylish, and simple to use. Our design, development, and support services are highly tailored and efficient. The needs of clients, at Hipster, are given prime importance, and the products delivered fit their demand. Hipster has more than thirty clients, and it has delivered 50+ projects for them.
            </p>
          </div>

          <div className="font-poppins">
            {/* <h2 className="text-[28px] md:text-[32px] font-[600] mt-[40px] mb-[10px] md:mb-[20px] leading-[1.2]">
              Enter & Repeat: the big break:
            </h2> */}

            <h4 className="text-[#000000] font-semibold mt-[40px] mb-[30px] text-[24px] ">Hipster, the best iOS App Development Service Provider in Singapore</h4>
            <p className=" md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">
              The creation of a great iOS app requires a well-structured concept and involves determinants like target audience, the purpose of the app, and more. The iOS app developers at Hipster invest in the preliminary stages of app development and provide a profound build for subsequent processes.
            </p>

            <p className=" md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">
              Some of the factors that make Hipster the best <b>iOS app development Singapore</b> are listed below:
            </p>

            <ul className="list-disc sm:ml-[70px] ml-[30px] mb-[30px] leading-[27px] mt-[20px] sm:text-[20px] text-[16px] text-[#222222] font-poppins">
              <li className="mb-[14px]">Entrepreneurial Background</li>
              <li className="mb-[14px]">Complete Product Research Before Development</li>
              <li className="mb-[14px]">Quality Control System</li>
              <li className="mb-[14px]">End to End Solution</li>
              <li className="mb-[14px]">Highly Professional Staff</li>
              <li className="mb-[14px]">Value for Money</li>

            </ul>


          </div>

          <div className="font-poppins">
            <h4 className="text-[#000000] font-semibold mt-[40px] mb-[30px] text-[24px] ">Types of iOS App Development by Hipster</h4>
            <p className=" md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">
              iOS app development is a process by which iOS applications are developed for mobile devices.
            </p>

            <ul className="list-disc sm:ml-[70px] ml-[30px] mb-[30px] leading-[27px] mt-[20px] sm:text-[20px] text-[16px] text-[#222222] font-poppins">
              <li className="mb-[14px]">The iPhone app developers at Hipster, design, develop, build, and maintain award-winning mobile applications.</li>
              <li className="mb-[14px]">The iOS applications developed are dynamic and polished, and both native and hybrid mobile apps are used to build the applications.</li>
              <li className="mb-[14px]">There are several types of applications. While some are specifically designed for smartphones, some are designed to work on computer systems.</li>


            </ul>
          </div>

          <div className="font-poppins">
            {/* <h4 className="text-[#000000] font-semibold mt-[40px] mb-[30px] text-[24px] ">Types of Android App Development by Hipster</h4> */}
            <p className=" md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">
              Kinds of iOS applications developed:
            </p>

            <ul className="list-decimal sm:ml-[70px] ml-[30px] mb-[30px] leading-[27px] mt-[20px] sm:text-[20px] text-[16px] text-[#222222] font-poppins">
              <li className="mb-[14px]"><b>Native Applications-</b> frameworks like Objective C or Swift are used. It is used for projects that put User Experience as the first priority.</li>
              <li className="mb-[14px]"><b>Hybrid Applications-</b> frameworks like Google Flutter, IONIC, React Native are used. Hybrid applications are preferred when an application is to be launched on both android and iOS platforms, and any changes made reflect on both the platforms.</li>


            </ul>
          </div>

          <div className=" md:pt-[0px] pt-[30px]">
            <img
              className="w-full mt-[20px] mb-[30px]"
              src={hc}
              alt=""
            />
          </div>





          <div>
            <h3 className=" text-[26px] md:text-[28px] font-[600] mt-[40px] mb-[10px] md:mb-[20px] leading-[1.2]">
              iOS App Developers in Singapore
            </h3>

            <ul className="list-disc sm:ml-[70px] ml-[30px] mb-[30px] leading-[27px] mt-[20px] text-[16px] sm:text-[20px] text-[#222222] font-poppins">
              <li className="mb-[14px]">The iOS app developers in Singapore are full of talent and they possess the ability to work across multiple projects simultaneously, from customers for a variety of industries.</li>
              <li className="mb-[14px]">The iOS app developers are engineering managers, who build, maintain, and test mobile SDKs in iOS.
              </li>

              <li className="mb-[14px]">The app developers are practiced engineers, who are self-directed and know how to effectively manage the needs of stakeholders.</li>


            </ul>




          </div>

          <div className="font-poppins">
            <h4 className="text-[#000000] font-semibold mt-[40px] mb-[30px] text-[24px] ">Skills Required to be an <Link className="text-[#006a83] hover:text-[#000000] duration-700">Android App Developer</Link></h4>
            <p className=" md:text-[20px] taxt-[16px] leading-[28px] pb-[10px] md:leading-[32px] text-[#222] mt-[20px]">
              To be an iPhone app developer, the following skills are required:
            </p>
            <ul className="list-disc font-poppins text-[16px] md:text-[20px] ml-[20px] md:ml-[40px] mb-[50px] pl-[20px] md:pl-[0px]">
              <li className="pb-[10px]">
                Strong technical background, with excellent knowledge of Xcode and Cocoa frameworks, like Core Data and Core Animation.
              </li>
              <li className="pb-[10px]">
                Effective command over Swift and Objective C.
              </li>
              <li className="pb-[10px]">
                Knowledge of Storyboard and Playground
              </li>
              <li className="pb-[10px]">
                Great command over Web APIs and Social media integration.
              </li>

            </ul>
          </div>

          <div className="font-poppins">
            <h4 className="text-[#000000] font-semibold mt-[40px] mb-[20px] text-[24px] ">Responsibilities of an Application Developer in Singapore</h4>
            <p className=" md:text-[20px] taxt-[16px] leading-[28px] pb-[10px] md:leading-[32px] text-[#222] mt-[20px]">
              An <b>iPhone app developer</b> in Singapore is supposed to discharge the following duties:
            </p>
            <ul className="list-disc font-poppins text-[16px] md:text-[20px] ml-[20px] md:ml-[40px] mb-[50px] pl-[20px] md:pl-[0px]">
              <li className="pb-[10px]">
                Design and build advanced applications for the iOS platform
              </li>
              <li className="pb-[10px]">
                Generate wire frames
              </li>
              <li className="pb-[10px]">
                Client interaction
              </li>
              <li className="pb-[10px]">
                Collaborate with cross-functional teams to define, design, and ship new features.
              </li>
              <li className="pb-[10px]">
                Design, develop, test, and implement an iOS application
              </li>
              <li className="pb-[10px]">
                Ensure that new versions of the iOS applications are produced without any hindrance.
              </li>
              <li className="pb-[10px]">
                Work on bug fixing and improving the performance of iOS applications.
              </li>
              <li className="pb-[10px]">
                Unit-test code for robustness, including edge cases, usability, and general reliability.
              </li>

            </ul>


          </div>

          <div className=" md:pt-[0px] pt-[30px]">
            <img
              className="w-full mt-[20px] mb-[30px]"
              src={kata}
              alt=""
            />
          </div>

          <div className="font-poppins">
            <h4 className="text-[#000000] font-semibold mt-[40px] mb-[30px] text-[24px] ">How does an iPhone Application Developer at Hipster provide iOS App Development Services to Clients?</h4>
            <p className=" md:text-[20px] taxt-[16px] leading-[28px] pb-[10px] md:leading-[32px] text-[#222] ">
              The iOS app developers at Hipster work as a team and work relentlessly to launch the application. An iOS application is developed through a five-step process, which is described below:
            </p>

            <ul className="list-decimal font-poppins text-[16px] md:text-[20px] ml-[20px] md:ml-[70px] mb-[50px] pl-[20px] md:pl-[0px]">
              <li className="pb-[10px]">
                <b>Meet and Discuss:</b> The iPhone app developers start the project by holding meetings in which short-term and long-term goals are discussed.
              </li>
              <li className="pb-[10px]">
                <b>Ideas and Concepts:</b> The scope of work is defined and every minor detail is taken into account, such that the right product is given to the market audience.
              </li>
              <li className="pb-[10px]">
                <b>UI/UX and Branding: </b>The iPhone app developers get their clients a glimpse of the final product, and help them in making the right decisions for marketing.
              </li>
              <li className="pb-[10px]">
                <b>Build and Develop: </b>The requirements of the clients are considered and the iOS app development process begins, with the usage of the right technologies.
              </li>
              <li className="pb-[10px]"><b>Test and Deploy:</b> To ensure that the iOS app developed is of the finest quality, developers put efforts to test and deploy the iOS application.</li>

            </ul>
          </div>


          <div className="font-poppins">
            <h3 className="text-[#000000] font-semibold mt-[40px] mb-[30px] text-[28px] "><b>App Developments by Hipster </b></h3>
            <p className=" md:text-[20px] taxt-[16px] leading-[28px] pb-[10px] md:leading-[32px] text-[#222] ">
            Some of the apps developed by Hipster are:
            </p>
              
            <ul className="list-disc font-poppins text-[16px] md:text-[20px] ml-[20px] md:ml-[40px] mb-[50px] pl-[20px] md:pl-[0px]">
              <li className="pb-[10px]">
              <b>Sip:</b> It is a local guide to the coolest cafes around Singapore, which enables people to find cafes anywhere and everywhere.
              </li>
              <li className="pb-[10px]">
              <b>Swiss Event Rentals:</b> It is a rental company for furniture, professional technical equipment, and decoration.
              </li>
              <li className="pb-[10px]">
              <b>AIO Event App:</b> It is used to optimize any event, with their registration tool and event app.
              </li>
              <li className="pb-[10px]">
              <b>RepRap:</b> It is a platform that provides multiple touchpoints to its customers and enables them to collect feedback.
              </li>
              <li className="pb-[10px]"><b>Employee Attendance App:</b> It is a speedy and effective way to track the attendance of employees and get payroll analytics.</li>

            </ul>

          </div>




        </div>


        <div>
          <Portfolio />
        </div>
      </Container6>
    </div>
  );
};

export default Iosapp;

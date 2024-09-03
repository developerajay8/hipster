import React from "react";
import {
  bd,
  int,
  ms,
  ui_ux,
  userdashboard,
  tp1,
  tp2,
  Improvements,
  Improsecond,
  Smart16,
  ratingbox,
  star,
  watch1,
  han,
} from "../../assets";
import { Link } from "react-router-dom";

import Container4 from "../../components/Container4";

export default function Tueetoredutech() {
  return (
    <div>
      <div className="lg:mt-[80px] md:mt-[110px] mt-[110px]">
        <div className=" mb-[48px] xl:px-0 px-[20px] max-w-[1300px] mx-auto ">
          <h2>
            <span className="md:text-[30px] sm:text-[24px] text-[16px] font-poppins">
              <span className="md:text-[30px] sm:text-[24px] text-[16px] text-[#00b0ab] font-poppins font-semibold">
              Web 
              {" "}
              </span>
              — Application
            </span>

            <div className="md:mt-[10px] mt-[5px]">
            <span className="text-[22px] sm:text-[27px] md:text-[32px] lg:text-[34px] text-[#000000] font-poppins font-semibold">
            Streamline your business operations with custom web applications tailored to your specific needs. Our solutions enhance efficiency, productivity, and user experience.  
              </span>
            </div>
          </h2>
        </div>
        <div className="w-[100%] h-[100%] md:px-[0px] px-[14px]">
          <img className="w-[100%] h-[100%]" src={Smart16} alt="" />
        </div>
      </div>

      <div className="md:py-[80px] sm:py-[50px]  py-[34px]">
        <Container4>
          <div className="grid md:grid-cols-5 grid-cols-1 xl:px-[0px]  px-[20px]">
            <div
              data-aos="slide-right"
              className="md:col-span-3 col-span-1  lg:pr-[50px] pr-[20px]"
            >
              <h2 className="lg:text-[50px] text-[35px] text-[#000000] font-poppins mb-[15px]">
                Overview
              </h2>
              <p className="font-poppins sm:text-[20px] text-[16px] mt-[25px] text-[#606e6e]">
                Tueetor is a self-serve, automated, location-based online
                platform for tuition tutors and trainers. Nikhil, Hipster’s CEO,
                chanced upon the old version of the Tueetor app while searching
                for a swimming tutor. He likes the business concept and saw the
                potential to propel the platform further. Nikhil then emailed
                Mr. Han Sing, Tueetor’s CEO, with his experience:
              </p>
              <ul className="list-disc pl-[20px]">
                <li className="  font-poppins sm:text-[20px] text-[16px] mt-[25px] text-[#606e6e]">
                  The app was showing all its registered tutors, even those that
                  are not near a user. This resulted in long loading time and
                  the app crashing.
                </li>
              </ul>
            </div>
            <div
              data-aos="slide-left"
              className="md:col-span-2 col-span-1 lg:pt-0 sm:pt-[80px] pt-[45px]"
            >
              <div className="mb-[35px]">
                <p className="text-[18px] font-poppins text-[#001817] mb-[10px]">
                  Client
                </p>
                <p className="text-[24px] text-[#001817] font-semibold">
                  Tueetor
                </p>
              </div>
              <div className="flex mb-[35px]">
                <div className="">
                  <p className="text-[18px] font-poppins mb-[10px] text-[#001817]">
                    Period
                  </p>
                  <p className="text-[24px] font-poppins font-semibold text-[#001817]">
                    2017
                  </p>
                </div>
                <div className="ml-[45px]">
                  <p className="text-[18px] font-poppins mb-[10px] text-[#001817]">
                    Geography
                  </p>
                  <p className="text-[24px] font-poppins font-semibold text-[#001817]">
                    Singapore
                  </p>
                </div>
                <div className=""></div>
              </div>
              <div className="mb-[35px]">
                <p className="text-[18px] text-[#001817] mb-[10px] font-poppins">
                  Work Done
                </p>
                <div className="flex-wrap flex">
                  <li className="list-none mb-[20px] px-[9px] w-[114px]">
                    <Link to={""}>
                      <img
                        className="w-[50px] h-[50px] mx-[22px]"
                        src={int}
                        alt=""
                      />
                    </Link>
                    <li className="text-center  text-[#001817] font-semibold">
                      <Link to={""}>Web App</Link>
                    </li>
                  </li>
                  <li className="list-none mb-[20px] px-[9px] w-[114px]">
                    <Link to={""}>
                      <img
                        className="w-[50px] h-[50px] mx-[22px]"
                        src={ui_ux}
                        alt=""
                      />
                    </Link>
                    <li className="text-center  text-[#001817] font-semibold">
                      <Link to={""}>Mobile App </Link>
                    </li>
                  </li>
                  <li className="list-none mb-[20px] px-[9px] w-[114px]">
                    <Link to={""}>
                      <img
                        className="w-[50px] h-[50px] mx-[22px]"
                        src={userdashboard}
                        alt=""
                      />
                    </Link>
                    <li className="text-center text-[#001817] font-semibold">
                      <Link to={""}>CMS</Link>
                    </li>
                  </li>
                  <li className="list-none mb-[20px] px-[9px] w-[114px]">
                    <Link to={""}>
                      <img
                        className="w-[50px] h-[50px] mx-[22px]"
                        src={ms}
                        alt=""
                      />
                    </Link>
                    <li className="text-center text-[#001817] font-semibold">
                      <Link to={""}>SAAS</Link>
                    </li>
                  </li>
                  <li className="list-none mb-[20px] px-[9px] w-[114px]">
                    <Link to={""}>
                      <img
                        className="w-[50px] h-[50px] mx-[22px]"
                        src={bd}
                        alt=""
                      />
                    </Link>
                    <li className="text-center text-[#001817] font-semibold">
                      <Link to={""}>Infrastructure</Link>
                    </li>
                  </li>
                  <li className="list-none mb-[20px] px-[9px] w-[114px]">
                    <Link to={""}>
                      <img
                        className="w-[50px] h-[50px] mx-[22px]"
                        src={userdashboard}
                        alt=""
                      />
                    </Link>
                    <li className="text-center text-[#001817] font-semibold">
                      <Link to={""}>CMS</Link>
                    </li>
                  </li>
                  <li className="list-none mb-[20px] px-[9px] w-[114px]">
                    <Link to={""}>
                      <img
                        className="w-[50px] h-[50px] mx-[22px]"
                        src={ms}
                        alt=""
                      />
                    </Link>
                    <li className="text-center text-[#001817] font-semibold">
                      <Link to={""}>SAAS</Link>
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
                Graphic Design Services
              </Link>
            </li>

            <li className="bg-[#ccefee] duration-500  hover:bg-[#00fff7] mb-[20px] mr-[10px] py-[18px] px-[32px]  rounded-full hover:text-[#FFFFFF]  text-[#001817]">
              <Link
                className="  text-[18px] font-poppins hover:text-[#FFFFFF] duration-1000 text-[#001817]"
                to={"/shareapp"}
              >
                Product Design
              </Link>
            </li>

            <li className="bg-[#ccefee] duration-1000  hover:bg-[#73dedb] mb-[20px] mr-[10px] py-[18px] px-[32px] rounded-full">
              <Link
                className="text-[18px] font-poppins hover:text-[#FFFFFF] duration-1000 text-[#001817]"
                to={"/webdevelopment"}
              >
                Web Development
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="">
        <Container4>
          <div className="xl:px-[0px] px-[20px] min-h-[690px] md:py-[80px] sm:py-[50px]  py-[34px] grid md:grid-cols-2 grid-cols-1  gap-3">
            <div className="col-span-1  tueeterport1">
              <img src={tp1} className=" px-[20px]" alt="" />
            </div>
            <div className="col-span-1  my-[auto] lg:pl-[68px] md:pl-[38px] pl-[4px]">
              <h2 className="lg:text-[50px] md:text-[40px] sm:text-[30px] text-[26px] text-[#001817] font-poppins mb-[15px]">
                An app that crashes hurts business
              </h2>
              <p className="text-[20px] text-[#657676] mb-[20px]">
                Nothing spells a bad user experience more than a mobile app
                crashing. In fact, in today’s competitive mobile app landscape,
                users have opportunities to switch product easily. Some might
                even avoid downloading an app if they read complaints about bugs
                before they actually try it. Needless to say, this breaks the
                business – lowering customer acquisition, retention and revenue.
              </p>
            </div>
          </div>
        </Container4>

        <Container4>
          <div className="xl:px-[0px] px-[20px]  min-h-[600px] md:py-[80px] sm:py-[50px]  py-[34px] grid lg:grid-cols-2 grid-cols-1 gap-4">
            <div className="col-span-1   sm:pr-[68px] pr-[0px]">
              <h2 className="lg:text-[50px] md:text-[40px] sm:text-[30px] text-[26px] text-[#001817] font-poppins mb-[15px]">
                How then, to stop the crashing?
              </h2>
              <p
                className="
              sm:text-[20px] text-[16px] text-[#657676] mb-[20px]"
              >
                Hipster’s developers quickly realised that they had to rebuild
                the app in order to eradicate the problem. They then proceeded
                to:
              </p>
              <ul className="list-disc font-poppins sm:text-[20px] text-[16px] text-[#666666] sm:ml-[40px] ml-[16px]">
                <li className="sm:pl-[20px] pl-[2px]">
                  Not displaying the full listing of tutors to a user at any one
                  time. Rather, the technology optimizes the results based on
                  one’s location and input. The user can then send messages to
                  up to 10 tutors and trainers nearby.
                </li>
                <li className=" sm:pl-[20px] pl-[2px]">
                  After five months of hard work, our developers shifted to the
                  then latest version of the PHP framework, Laravel, and
                  improved the coding. They also successfully integrated user
                  data from the old system in this process.
                </li>
              </ul>
            </div>
            <div className="col-span-1  tueeterport2 md:mx-0 mx-auto">
              <img src={tp2} className=" px-[20px]" alt="" />
            </div>
          </div>
        </Container4>
      </div>

      <div className="md:py-[80px] sm:py-[50px]  py-[34px]">
        <Container4>
          <div className="xl:px-[0px] px-[20px] grid md:grid-cols-2 grid-cols-1 gap-4">
            <div className="col-span-1 sm:p-[30px] ">
              <img src={Improvements} className="rounded-[4px]" alt="" />
            </div>
            <div className="col-span-1 lg:pl-[68px] md:pl-[34px] sm:pl-[16px]  my-[auto] font-poppins ">
              <h2 className="lg:text-[50px] md:text-[34px] sm:text-[28px] text-[22px] text-[#001817] font-poppins mb-[15px]">
                Improvements & outcome
              </h2>
              <p className="sm:text-[20px] text-[16px] text-[#657676] mb-[20px]">
                Besides overhauling the app’s user interface design, Hipster
                also built a new website. The new design was well-received. The
                app even won the Certificate of Merit (Public Service
                Distinction) at the Asia Smart App Award in 2019. Tueetor has
                also successfully launched its services in three other countries
                – Malaysia, Thailand and Indonesia.
              </p>
              <p className="sm:text-[20px] text-[16px] text-[#657676] mb-[20px]">
                After the first successful partnership, we continued to work
                with Tueetor, developing a Coursesaver module, their website,
                and their second app, 10MT. Hipster is proud of Tueetor’s
                successes and happy to work together for the past five years.
                (to the next five years and more ahead)
              </p>
            </div>
          </div>
        </Container4>
      </div>

      <div className="w-[100%] h-[100%] md:px-[0px] px-[14px]">
        <img className="w-[100%] h-[100%]" src={Improsecond} alt="" />
      </div>

      <Container4>
        <div className="py-[80px] grid md:grid-cols-2 grid-cols-1 xl:px-[0px] px-[20px]">
          <div className=" col-span-1 relative b-black max-w-[357px] max-h-[513px]  pt-[50px] pl-[50px] pb-[50px] rounded-[30px] ">
            <p className="text-[20px] text-[#FFFFFF] font-poppins">
              Success Metrics
            </p>
            <h3 className="text-[42px] my-[5px] font-poppins text-[#FFFFFF]">
              Impact
            </h3>
            <div className="mt-[96px]">
              <img src={watch1} className="w-[62px] h-[61px]" alt="" />
              <h3 className="text-[#ffffff]  text-[42px] font-poppins">5</h3>
              <p className="text-[#ffffff]  text-[20px] font-poppins">
                Years of wark <br /> relationship
              </p>
            </div>
            <div className="">
              <div className="absolute top-[161px] right-[-168px] lamap">
                <img
                  className="max-w-[304px] max-h-[313px]"
                  src={ratingbox}
                  alt=""
                />
                <h3 className="font-semibold text-[42px] absolute top-[80px] right-[140px] text-[#FFFFFF] font-poppins">
                  1
                </h3>
                <p className=" text-[20px] absolute top-[135px] right-[116px] text-[#FFFFFF] font-poppins">
                  Award
                </p>
              </div>
              <div className=" absolute lamps top-[181px] right-[25px]">
                <img className="max-w-[80px] max-h-[156px]" src={star} alt="" />
              </div>
            </div>
          </div>
          <div className="col-span-1 sm:pt-[0px] pt-[20px]">
            <div className="mb-[15px]">
              <img src={han} alt="" />
            </div>
            <p className="text-[24px] font-poppins text-[#001817]">
              Han Sing Tan
            </p>
            <p className="text-[16px] font-poppins text-[#606e6e]">
              Tueetor's Founder & CEO
            </p>
            <p className="sm:text-[20px] text-[16px] sm:mt-[28px] mt-[14px] font-poppins text-[#606e6e]">
              My first project with Hipster was in 2017, when we were looking
              into ways to better our Tueetor app, it was a tall order, as the
              app was already gaining some popularity in the community back
              then, and we did not want to "reinvent the wheel" too much, for
              fear of losing it. It turned out to be one of the best decisions
              we have ever made. Not only did Nikhil and his team create a more
              intuitive and scaleable version, in a nutshell, they made it
              elegant. So complete, the Tueetor app went on to bag the Smart App
              Award for 2019. Hipster has also been instrumental in many
              groundbreaking features we see later on the app, winning us even
              more users and accolades. Convinced that the team would continue
              to shine, I invited them back in 2020 to assist in the development
              of 10-Minute Tutor - an on demand tutor app that combines both
              video-telephony and marketplace core functionalities into one.
              Hipster rose to the challenge. In addition to mobile applications,
              Nikhil, alongside his talented and committed team members, also
              advise and develop some of Tueetor's web stacks. So proficient,
              responsive and yet affordable in every way, we strongly recommend
              Hipster to organisations that seek not just a reliable technology
              provider, but a trustworthy partner.
            </p>
          </div>
        </div>
      </Container4>

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
                <Link to={"/kwsh"}>KWSH — Agile Project Management</Link>
              </div>
              <h3 className="font-semibold text-[24px] md:text-[28px] lg:text-[32px] max-w-[100%] md:max-w-[600px] lg:max-w-[500px] mx-auto text-center leading-[30px] md:leading-[36px] lg:leading-[42px] text-[#001817] font-poppins">
                <Link className="mb-[8px] md:mb-[10px] lg:mb-[12px]" to={""}>
                  Change the way you do survey, get rid of the old ways of doing
                  hardcopies survey and digitalise this process.
                </Link>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

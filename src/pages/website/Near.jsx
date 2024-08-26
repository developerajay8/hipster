import React from "react";
import {
  Ajay,
  Downlogo,
  aws,
  bomb,
  int,
  nearapp,
  nearbanner,
  pencil3,
  ratingbox,
  star,
  tab,
  two,
  ui_ux,
  userdashboard,
  warning,
} from "../../assets";
import { Link } from "react-router-dom";
import { TiArrowRight } from "react-icons/ti";
import Container2 from "../../components/Container2";
import Container4 from "../../components/Container4";

export default function Near() {
  return (
    <div>
      <div className="lg:mt-[80px] md:mt-[110px] mt-[110px]">
        <div className="max-w-[1300px] mx-auto xl:px-0 px-[20px] mb-[48px]">
          <h2 data-aos="slide-down" data-aos-duration="500">
            <span className="md:text-[30px] sm:text-[24px] text-[16px] font-poppins">
              <span className="md:text-[30px] sm:text-[24px] text-[16px] text-[#00b0ab] font-poppins font-semibold">
                NEAR
              </span>
              — Lifestyle
            </span>

            <div
              className="md:mt-[10px]"
              data-aos="slide-down"
              data-aos-duration="500"
            >
              <span className="xl:text-[48px] md:text-[40px] sm:text-[30px] text-[24px] text-[#000000] font-poppins font-semibold">
                Augmented Reality (AR) enabled mobile app for an interactive
                walking experience
              </span>
            </div>
          </h2>
        </div>
        <div className="w-full h-full">
          <img className=" w-full h-full" src={nearbanner} alt="" />
        </div>
      </div>
      <div className="pt-[80px]">
        <Container4>
          <div className="grid md:grid-cols-5 grid-cols-1 xl:px-[0px] px-[20px]">
            <div
              className="md:col-span-3 col-span-1  lg:pr-[50px] pr-[20px]"
              data-aos="slide-right"
              data-aos-duration="1000"
            >
              <h2 className="lg:text-[50px] text-[35px] text-[#000000] font-poppins mb-[15px]">
                Overview
              </h2>
              <p className="font-poppins sm:text-[20px] text-[16px] mt-[25px] text-[#606e6e]">
                The NParks Explore A Route (NEAR) app is NParks’ first
                AR-enabled mobile application launched in 2019. The app
                complements the Park Connector Network (PCN) for an interactive
                walking experience.
              </p>
              <p className="font-poppins sm:text-[20px] text-[16px] mt-[25px] text-[#606e6e]">
                Create your trails with our self-mapping feature, “Phyll My
                Trail”, while getting active. Additionally, share your exciting
                sights along the way with the community!
              </p>
            </div>
            <div
              className="md:col-span-2 col-span-1 lg:pt-0 sm:pt-[80px] pt-[45px]"
              data-aos="slide-left"
              data-aos-duration="1000"
            >
              <div className="mb-[35px]">
                <p className="text-[18px] font-poppins text-[#001817] mb-[10px]">
                  Client
                </p>
                <p className="text-[24px] text-[#001817] font-semibold">
                  NParks
                </p>
              </div>
              <div className="flex mb-[35px]">
                <div className="">
                  <p className="text-[18px] font-poppins mb-[10px] text-[#001817]">
                    Period
                  </p>
                  <p className="text-[24px] font-poppins font-semibold text-[#001817]">
                    2022 - Presents
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
                      <Link to={""}>Website</Link>
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
                      <Link to={""}>UI/UX</Link>
                    </li>
                  </li>
                  <li className="list-none mb-[20px] px-[9px] w-[114px]">
                    <Link to={""}>
                      <img
                        className="w-[50px] h-[50px] mx-[22px]"
                        src={tab}
                        alt=""
                      />
                    </Link>
                    <li className="text-center  text-[#001817] font-semibold">
                      <Link to={""}>Mobile App</Link>
                    </li>
                  </li>
                  <li className="list-none mb-[20px] px-[9px] w-[104px]">
                    <Link to={""}>
                      <img
                        className="w-[50px] h-[50px] mx-[22px]"
                        src={aws}
                        alt=""
                      />
                    </Link>
                    <li className="text-center text-[#001817] font-semibold">
                      <Link to={""}>AWS server infrastructure</Link>
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
                      <Link to={""}>
                        Back-end with data analysis and reports
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

      <div className="bg-[#FFFFFF] max-w-[1140px] mx-auto xl:px-0 px-[20px] ">
        <div className=" py-[80px]">
          <div className="grid md:grid-cols-5 grid-cols-1">
            <div className="md:col-span-2 col-span-1 max-w-[100%] max-h-[100%]">
              <img className="w-[100%] h-[100%]" src={nearapp} alt="" />
            </div>
            <div
              className="md:col-span-3 col-span-1 md:pt-0 pt-[60px] lg:pl-[86px] sm:pl-[10px] my-auto"
              data-aos="slide-up"
              data-aos-duration="1000"
            >
              <h2
                className="lg:text-[50px] md:text-[35px] sm:text-[31px] text-[24px] fon-poppins text-[#001817] xl:leading-[70px] lg:leading-[50px] md:leading-[40px] sm:leading-[30px]
                            leading-[30px] font-semibold mb-[15px]"
              >
                Participate in events and explore nature
              </h2>

              <p className="text-[20px] text-[#657676] font-poppins mb-[23px]">
                The app features several events annually to encourage the public
                to explore and gain awareness of the green spaces around them.
                Elements of gamification, such as a leaderboard, earning points
                and badges, are built into the app to increase interactivity.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#FFFFFF] max-w-[1140px] mx-auto xl:px-0 px-[20px] ">
        <div className=" md:pt-[80px] pt-[20px] pb-[80px]">
          <div className=" max-w-[645px] sm:pr-[68px] pr-[0px]">
            <h2
              className="lg:text-[50px] md:text-[35px] text-[28px] text-[#001817] font-poppins mb-[15px] lg:leading-[60px]  
                        md:leading-[50px] leading-[40px]"
            >
              Explore PCNs and trails across Singapore
            </h2>
            <p className="text-[20px] text-[#657676] font-poppins mb-[23px]">
              Information of attractions, services, facilities, heritage trees
              and trails are now at your finger tips. The app also allows you to
              navigate to a checkpoint, attraction or service provider.
            </p>
          </div>
        </div>
      </div>
      <div className="sm:px-0 px-[10px] sm:block hidden Near_Back"></div>
      <div className="py-[80px] ">
        <div className=" relative b-black max-w-[377px] max-h-[513px] pt-[50px] pl-[50px] pb-[50px] rounded-[30px] mx-auto">
          <p className="text-[20px] text-[#FFFFFF] font-poppins">
            Success Metrics
          </p>
          <h3 className="text-[42px] my-[5px] font-poppins text-[#FFFFFF]">
            Impact
          </h3>
          <div className="mt-[96px]">
            <img src={Downlogo} className="w-[62px] h-[61px]" alt="" />
            <h3 className="text-[#ffffff] text-[42px] font-poppins">11000+</h3>
            <p className="text-[#ffffff] text-[20px] font-poppins">Downloads</p>
          </div>
          <div className="">
            <div className="absolute top-[161px] right-[-168px] lamap">
              <img
                className="max-w-[304px] max-h-[313px]"
                src={ratingbox}
                alt=""
              />
              <h3 className="font-semibold text-[42px] absolute top-[80px] right-[120px] text-[#FFFFFF] font-poppins">
                4.6
              </h3>
              <p className=" text-[20px] absolute top-[135px] right-[96px] text-[#FFFFFF] font-poppins">
                Star rating
              </p>
            </div>
            <div className=" absolute lamps top-[181px] right-[25px]">
              <img className="max-w-[80px] max-h-[156px]" src={star} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="sm:py-[80px]">
        <div className=" lg:mx-[198px] md:mx-[80px] mx-[30px] ">
          <div className="">
            <h2 className="text-center text-[28px] md:text-[36px] lg:text-[42px] text-[#000000] font-poppins">
              <Link className="bbn" to={"/shareapp"}>
                Next Case Study
              </Link>
            </h2>
            <div className="py-[30px] md:py-[40px] lg:py-[50px] text-center">
              <div className="text-[18px] md:text-[20px] lg:text-[24px] font-poppins text-[#001817] mb-[10px] md:mb-[12px] lg:mb-[15px]">
                <Link to={"/shareapp"}>Share App - Mental Health</Link>
              </div>
              <h3 className="font-semibold text-[24px] md:text-[28px] lg:text-[32px] max-w-[100%] md:max-w-[600px] lg:max-w-[500px] mx-auto text-center leading-[30px] md:leading-[36px] lg:leading-[42px] text-[#001817] font-poppins">
                <Link
                  className="mb-[8px] md:mb-[10px] lg:mb-[12px]"
                  to={"/shareapp"}
                >
                  On-demand therapy app that allows one to find a therapist
                  instantly.
                </Link>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

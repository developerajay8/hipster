import React, { useEffect, useState } from "react";
import {
  bsl,
  e27,
  ogl,
  ogr,
  today,
  ttbd,
  Ajay,
  bomb,
  img1,
  img2,
  img3,
  img4,
  ont,
  pencil3,
  ship,
  two,
  waj,
  warning,
  descriptionlogo,
  pencil,
  pencil2,
  polygonball,
  watch2,
  bagicon,
  blackstaurn,
} from "../../assets";
import { TiArrowRight } from "react-icons/ti";
import { Link } from "react-router-dom";
import Container2 from "../../components/Container2";
import Container4 from "../../components/Container4";
import Counter from "./counter";
import Counter2 from "./counter2";

export default function Who_we_are() {
  const [clients, setClient] = useState(1);
  // const [client,setClie] = useState(1);
  // const [clien,setCli] = useState(1);

  useEffect(() => {
    const clientInterval = setInterval(() => {
      setClient((prev) => {
        if (prev < 50) {
          return prev + 1;
        } else {
          clearInterval(clientInterval);
          return prev;
        }
      });
    }, 50);
  }, []);


 



  return (
    <div className="">
      <Container4>
        <div className=" py-[80px] xl:px-0 lg:px-[30px] md:px-[40px] sm:px-[30px] px-[26px]">
          <div className="">
            <h1 className="lg:text-[56px] md:text-[42px] sm:text-[35px] text-[35px]  font-poppins text-[#000000]">
              <span className="hover:text-[#718093] textdu">W</span>
              <span className="hover:text-[#273c75] textdu">h</span>
              <span className="hover:text-[#00a8ff] textdu">o</span>
              <span className="pl-[12px]"></span>
              <span className="hover:text-[#4cd137] textdu">w</span>
              <span className="hover:text-[#dcdde1] textdu">e</span>
              <span className="pl-[12px]"></span>
              <span className="hover:text-[#2f3640] textdu">a</span>
              <span className="hover:text-[#f5f6fa] textdu">r</span>
              <span className="hover:text-[#487eb0] textdu">e</span>
              {/* Who we are */}
            </h1>
            <h2
              className="max-w-[865px] font-semibold text-[#001817] xl:text-[32px] lg:text-[28px] sm:text-[24px]
           text-[22px] font-poppins lg:mt-[60px] md:mt-[30px] sm:mt-[18px] mt-[16px] mb-[15px]"
              data-aos="slide-up"
            >
              A full-service software development company based in Singapore. We
              create user-centric digital solutions.{" "}
            </h2>
          </div>
        </div>
      </Container4>
      <div className="Top lg:h-[480px] md:h-[350px]  sm:h-[310px]  h-[290px] "></div>
      <div className="py-[80px] mt-[21px] xl:mx-0 lg:mx-[20px] md:mx-[20px] sm:mx-[20px] mx-[20px]">
        <Container4>
          <div className="grid md:grid-cols-3 grid-col-2 gap-6">
            <div className="md:col-span-1 grid-cols-2 md:pr-[15px] pr-[0px]">
              <h2 className="font-poppins md:text-[32px] text-[24px] md:mb-[15px] mb-0 text-[#001817] font-semibold">
                Our Goal
              </h2>
            </div>
            <div className="md:col-span-2 col-span-2 md:pl-[15px] pl-[0px]">
              <p className="md:text-[20px] text-[16px] font-poppins text-[#6d7676]">
                Since the beginning, our primary goal is to help our clients
                build solutions that matter. We use technology to help users and
                make the world a better place. 🌈
              </p>
            </div>
          </div>
        </Container4>
        <div className="md:h-[100px] h-[40px]"></div>
        <Container4>
          <div className="grid grid-cols-2 gap-6">
            <div className="md:col-span-1 col-span-2 pr-[15px]">
              <img src={ogl} className="max-w-[145px] max-h-[106px]" alt="" />
            </div>
            <div className="md:col-span-1 col-span-2 md:pl-[15px] pl-0 md:mt-[80px] mt-[20px]">
              <img src={ogr} className="max-w-[145px] max-h-[106px]" alt="" />
            </div>
          </div>
        </Container4>
        <div className="md:h-[100px] h-[40px]"></div>
        <Container4>
          <div className="grid grid-cols-3 gap-6">
            <div className="md:col-span-1 col-span-3 md:pr-[15px] pr-0">
              <h2 className="font-poppins md:text-[32px] text-[24px] mb-[15px] text-[#001817] sasassa">
                Simply put, we are not just software{" "}
                <br className="sm:block hidden md:hidden" /> providers.
              </h2>
            </div>
            <div className="md:col-span-2 col-span-3 md:pl-[15px] pl-0">
              <p className="md:text-[20px] text-[16px] font-poppins text-[#6d7676]">
                We are a passionate bunch providing digital solutions for
                change-makers. ❤️ Hipster is a software development company
                based in Singapore, but we are proud to say that our clients
                come from all over the world. 🌎
              </p>
            </div>
          </div>
        </Container4>
        <div className="md:h-[100px] h-[40px]"></div>
        <Container4>
          <div className="">
            <h2 className="xl:text-[42px] lg:text-[32px] md:text-[28px] sm:text-[24px] text-[20px] font-poppins text-[#001817]">
              We have proudly provided tech solutions that have enabled service
              providers to <u>educate the younger generation,</u>
              <u>get food delivered without plastic waste,</u> and{" "}
              <u>transform the mental health scene,</u>
            </h2>
          </div>
        </Container4>
      </div>

      <div className="Bottom lg:h-[480px] md:h-[350px] sm:h-[310px]  h-[290px]"></div>

      <Container4>
        <div className="py-[50px]">
          <div className="grid grid-rows-2">
            <div className="col-span-1">
              <h2 className="md:pb-[30px] text-[32px] font-poppins text-[#000000] text-center font-semibold">
                As seen in
              </h2>
            </div>
            <div className="col-span-1 md:px-0 sm:px-[50px] px-[40px]">
              <div className="grid sm:grid-cols-3 grid-cols-1 sm:max-w-[597px] sm:mx-auto items-center sm:gap-0 gap-9">
                <div className="sm:col-span-1 col-span-1 sm:mx-auto">
                  <img src={today} className="w-[180px] h-[57px]" alt="" />
                </div>
                <div className="sm:col-span-1 col-span-1 sm:mx-auto">
                  <img src={e27} className="w-[144px] h-[93px]" alt="" />
                </div>
                <div className="sm:col-span-1 col-span-1  sm:mx-auto">
                  <img src={bsl} className="w-[180px] h-[42px]" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container4>

      <div className="w-full relative">
        <img src={blackstaurn} className="w-full inset-1  flex  items-center justify-center" alt="" />
        <Container4>
        <div className="font-[poppins] xl:my-[120px]  lg:my-[80px] md:my-[10px] absolute inset-0 max-w-[1140px] mx-auto  px-[15px] lg:py-[100px] sm:py-[50px] py-[18px]">
          <div className="grid grid-cols-3  lg:py-[100px] sm:py-[50px] py-[18px] border rounded-3xl text-[white]">
            <div className=" flex justify-center">
              <div className="">
                <h2 className="text-[20px] gap-3 sm:text-[32px] md:text-[48px] lg:text-[66px] font-semibold">
                  {clients}
                  <span>+</span>
                </h2>
                <p className=" text-[16px] md:leading-[32px] leading-[28px] md:text-[20px]">
                  Happy clients
                </p>
              </div>
            </div>

            <div className=" flex justify-center">
              <div>
                <h2 className="text-[20px] sm:text-[32px] md:text-[48px] lg:text-[66px] gap-3 font-semibold flex">
                <Counter />
                  <span>+</span>
                </h2>
                <p className=" text-[16px] md:leading-[32px] leading-[28px] md:text-[20px]">
                Completed Projects
                </p>
              </div>
            </div>

            <div className=" flex justify-center">
              <div>
                <h2 className="text-[20px] sm:text-[32px] md:text-[48px] lg:text-[66px] flex gap-3 font-semibold">
                <Counter2 />
                  <span>+</span>
                </h2>
                <p className=" text-[16px] md:leading-[32px] leading-[28px] md:text-[20px]">
                Skilled Experts
                </p>
              </div>
            </div>

            
          </div>
        </div>
      </Container4>
      </div>

      <div className="">
        <div className="grid md:grid-cols-5 grid-cols-1">
          <div className="md:col-span-3 col-span-1 xl:px-[80px] px-[40px] xl:py-[80px] py-[40px]">
            <h2
              className="xl:text-[50px] sm:text-[35px] text-[32px] font-poppins text-[#000000] mb-[15px] fs xl:leading-[60px] leading-[40px]"
              data-aos="slide-up"
            >
              People at the heart of all we do
            </h2>
            <p
              className="lg:text-[20px] sm:text-[16px] text-[#6d7676] font-poppins"
              data-aos="slide-up"
            >
              Digital products need to be user-centric, secure, reliable and
              scalable. At Hipster, your projects are in the good hands of our
              specialised team of UI/UX designers👩🏻‍🎨, developers 👨🏻‍💻, and project
              managers👱🏽‍♀️
            </p>
          </div>
          <div className="md:col-span-2 col-span-1 xl:px-[80px] px-[40px] xl:py-[80px] py-[40px] column xl:leading-[60px] sm:leading-[45px] leading-[37px]">
            <h2
              className="mb-[15px] text-[#ffffff] xl:text-[50px] sm:text-[36px] text-[32px] font-poppins"
              data-aos="zoom-in"
            >
              We design and develop experiences that make people’s lives better.
            </h2>
          </div>
        </div>

        <div className="">
          <div className="grid md:grid-cols-5 grid-cols-1">
            <div className="md:col-span-3 col-span-1 border w-[100%] h-[100%]">
              <img
                src={ttbd}
                className="w-[100%] h-[100%]"
                data-aos="zoom-in"
                alt=""
              />
            </div>
            <div className="md:col-span-2 col-span-1 border xl:px-[80px] px-[40px] xl:py-[80px] py-[40px]  column leading-[40px] ">
              <div className="mx-auto">
                <h2
                  className="mb-[18px] text-[#ffffff] xl:text-[32px] text-[32px] font-poppins"
                  data-aos="slide-up"
                >
                  Always learning, always growing, always evolving.
                </h2>
                <p
                  className="text-[20px] font-poppins text-[#ffffff] leading-[30px]"
                  data-aos="slide-up"
                >
                  No one is ever fully prepared to do the job the first time
                  they do it. Thankfully, we are continually gaining experience
                  under our belt. Still, there is always more to learn with
                  technology. This keeps us grounded, open to new ideas,
                  challenging assumptions and pushing the boundaries of tech.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Makeshipster />
    </div>
  );
}



function Makeshipster() {
  return (
    <div className="md:pt-[150px] sm:pt-[90px]  md:pb-[100px] sm:pb-[80px] pb-[40px] Makes relative">
      <Container2>
        <div className="grid grid-cols-1  ">
          <div className="lg:px-[20px] md:px-[25px] sm:px-[30px] px-[20px]">
            <h2 className="lg:text-[50px] md:text-[40px] text-[35px] mb-[15px] text-[#000000] font-poppins">
              What makes
              <br className="md:block hidden" /> Hipster hip?
            </h2>
            <p className="text-[16px] font-poppins text-[#706b6b] mb-[30px] leading-[26px] xl:max-w-[60%]">
              Hipster was founded in 2016 by Nikhil and Bok after a dinner
              discussion in a hawker center. Back then, they did most of the
              work out of a HDB flat. As a pragmatic entrepreneur, Nikhil
              believes that technology only makes sense when it is commercially
              viable. We might not always tell you what you want to hear, but we
              definitely problem-solve with you.
            </p>
            <p className="text-[16px] font-poppins text-[#706b6b] mb-[30px] xl:max-w-[60%]">
              Today, we have two main offices, Singapore and India. We don't
              follow corporate conventions such as a work dress code, but we
              take our work seriously.
            </p>
            <div className="flex justify-between">
              

              <button className="relative overflow-hidden px-10 py-[13px] bg-transparent text-gray-800 font-medium border border-gray-800 rounded-full group">
                <span className="absolute inset-0 w-full h-full bg-blue-500 transition-transform transform -translate-x-full group-hover:translate-x-0"></span>
                <span className="relative text-gray-800 font-poppins font-semibold group-hover:text-white">
                  <Link to={""}>Let's Talk</Link>
                </span>
              </button>
              <img
                src={descriptionlogo}
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

          {/* <div className="PENCIL md:block hidden">
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
          </div> */}
        </div>
      </Container2>
    </div>
  );
}

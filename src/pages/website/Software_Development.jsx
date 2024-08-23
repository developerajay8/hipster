import React from "react";
import Container4 from "../../components/Container4";
import {
  Focus,
  Fx,
  Mirror,
  warning,
  Ajay,
  bomb,
  Nimble,
  Sx,
  groups,
  invalidname,
  notched,
  pencil3,
  two,
  rep,
  edt,
  ast,
  atn,
  SS,
  gm,
  kt,
  wtcl,
  sstf,
  olm,
} from "../../assets";
import { TiArrowRight } from "react-icons/ti";

import Data from "./data";
import Accord from "./Accord";
import { Link } from "react-router-dom";
import Container2 from "../../components/Container2";
import SimpleSlider from "./SimpleSlider";

export default function Software_Development() {
  const accordElems = Data.map((d, i) => {
    // console.log(d,i);
    return (
      <Accord
        key={i}
        title={d.title}
        body={d.body}
        seo={d.seo}
        sep={d.sep}
        seps={d.seps}
      />
    );
  });
  return (
    <div>
      <Container4>
        

        <div className=" pt-[100px] sm:pb-[80px] pb-[50px] xl:px-0 lg:px-[30px] md:px-[40px] sm:px-[20px] px-[20px]">
          <div className="">
            <h1
              className="lg:text-[56px] md:text-[42px] sm:text-[35px] text-[35px]  font-poppins text-[#000000]"
              data-aos="slide-right"
              data-aos-duration="500"
            >
              Enterprise Software Development
            </h1>
            <h2
              className="max-w-[865px] font-semibold text-[#001817] xl:text-[32px] lg:text-[28px] sm:text-[24px]
           text-[22px] font-poppins lg:mt-[60px] md:mt-[30px] sm:mt-[18px] mt-[16px] mb-[15px] sm:leading-[40px] leading-[27px]"
              data-aos="slide-left"
              data-aos-duration="500"
            >
              Enterprise Software Development is a multi-disciplinary approach, and often includes functions such as CRM (Customer Relationship Management), BI (Business Intelligence), operations and order fulfillment, online payment processing, accounting, just to name a few.
            </h2>
          </div>
        </div>
      </Container4>

      <div className="ni lg:min-h-[800px] md:min-h-[500px] min-h-[300px]"></div>

      <div className="py-[80px]">
        <Container4>
          <div className="grid grid-cols-1 xl:px-[0px] lg:px-[10px] md:px-[70px] sm:px-[40px] px-[12px]">
            <h2 className=" lg:text-[46px] md:text-[38px] text-[34px]  font-poppins text-[#000000] font-semibold">
              Our work
            </h2>
            <h3 className="lg:text-[32px] md:text-[24px] text-[22px] max-w-[700px] lg:leading-[45px] md:leading-[30px] md:mt-[25px] mt-[15px] font-poppins text-[#000000]">
              Explore websites created for our clients all around the world and
              across industries
            </h3>
          </div>

          <div className="pt-[60px]">
            <div
              className="grid md:grid-cols-2 grid-cols-1 gap-[80px] xl:px-[0px] lg:px-[14px] md:px-[20px] sm:px-[100px] px-[20px]"
              data-aos="slide-up"
              data-aos-duration="700"
            >
              <div className="col-span-1 ">
                <img src={edt} alt="" />
                <div className="py-[25px]">
                  <h4 className="mb-[12px] text-[24px] font-poppins text-[#001817]">
                    Tueetor — Edutech
                  </h4>
                  <h3 className="lg:text-[32px] text-[24px] font-poppins font-bold text-[#001817]">
                    Online platform for finding digital tutors
                  </h3>
                  <ul classNameclassName="mt-[20px]">
                    <li className="text-[14px] font-poppins text-[#000000]">
                      Match Making Platform, Education Tech
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-span-1  mb-[17px]">
                <div className="lg:pt-[92px] md:pt-[72px]">
                  <img src={Sx} alt="" />
                  <div className="py-[25px]">
                    <h4 className="mb-[12px] text-[24px] font-poppins text-[#001817]">
                      10-min Tutor — Edutech
                    </h4>
                    <h3 className="lg:text-[32px] text-[24px] font-semibold font-poppins text-[#001817]">
                      On-demand tutor app with video-telephony & marketplace
                      functionalities
                    </h3>
                    <ul className="mt-[20px]">
                      <li className="text-[14px] font-poppins text-[#000000]">
                        On-Demand Video Solutions, Education Tech
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="grid md:grid-cols-2 grid-cols-1 gap-[80px] xl:px-[0px] lg:px-[14px] md:px-[20px] sm:px-[100px] px-[20px]"
              data-aos="slide-up"
              data-aos-duration="700"
            >
              <div className="col-span-1 ">
                <img src={SS} alt="" />
                <div className="py-[25px]">
                  <h4 className="mb-[12px] text-[24px] font-poppins text-[#001817]">
                    Tbit — Team Engagement
                  </h4>
                  <h3 className="lg:text-[32px] text-[24px] font-poppins font-bold text-[#001817]">
                    A physical team-building app: say no to boring activities!
                  </h3>
                  <ul classNameclassName="mt-[20px]">
                    <li className="text-[14px] font-poppins text-[#000000]">
                      Gamification in Tech, Event Management
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-span-1  mb-[17px]">
                <div className="lg:pt-[92px] md:pt-[72px]">
                  <img src={olm} alt="" />
                  <div className="py-[25px]">
                    <h4 className="mb-[12px] text-[24px] font-poppins text-[#001817]">
                      L’Hommes — Fashion E-commerce
                    </h4>
                    <h3 className="lg:text-[32px] text-[24px] font-semibold font-poppins text-[#001817]">
                      Custom suits e-commerce platform with fit visualization
                    </h3>
                    <ul className="mt-[20px]">
                      <li className="text-[14px] font-poppins text-[#000000]">
                        Personalized Fashion
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container4>
      </div>

      <div className="py-[80px] bg-[#e6e8f9]">
        <Container4>
          <div className="grid grid-cols-1 xl:px-[0px] lg:px-[10px] md:px-[70px] sm:px-[40px] px-[12px]">
            <h2 className="lg:text-[46px] md:text-[38px] sm:text-[30px] text-[30px] text-[#000000] font-poppins font-bold">
              Our Process
            </h2>
          </div>

          <div className="grid md:grid-cols-2 grid-cols-1 lg:px-[0px] md:px-[50px] sm:px-[80px] px-[12px]">
            <div className="col-span-1 pt-[48px] px-[15px]">
              <h1 className="font-poppins text-[60px]">1</h1>
              <div className="lg:pr-[60px] ">
                <h3 className="lg:text-[28px] text-[22px] font-poppins text-[#000000] font-[600]">
                  After launch care
                </h3>
                <p className="lg:text-[20px] text-[16px] font-poppins mt-[20px] text-[#576464]">
                  Have a peace of mind by working with us. Apps developed by
                  Hipster always comes with a minimum of one year of warranty.
                </p>
              </div>
            </div>
            <div className="col-span-1 pt-[48px] px-[15px]">
              <h1 className="font-poppins text-[60px]">2</h1>
              <div className="lg:pr-[60px] ">
                <h3 className="lg:text-[28px] text-[22px] font-poppins text-[#000000] font-[600]">
                  Code, Test and Launch
                </h3>
                <p className="lg:text-[20px] text-[16px] font-poppins mt-[20px] text-[#576464]">
                  Our frontend and backend developers work together to provide
                  you with an end-to-end solution. Following this, we optimize
                  the SEO and do vigorous quality assurance testing before
                  launching it.
                </p>
              </div>
            </div>
            {/* <div className="col-span-1"></div> */}
          </div>

          <div className="grid md:grid-cols-2 grid-cols-1 lg:px-[0px] md:px-[50px] sm:px-[80px] px-[12px]">
            <div className="col-span-1 pt-[48px] px-[15px]">
              <h1 className="font-poppins text-[60px]">3</h1>
              <div className="lg:pr-[60px] ">
                <h3 className="lg:text-[28px] text-[22px] font-poppins text-[#000000] font-[600]">
                  Design and Evaluate
                </h3>
                <p className="lg:text-[20px] text-[16px] font-poppins mt-[20px] text-[#576464]">
                  UI UX design is crucial to a website’s success. Prototyping is
                  a key activity that we undertake in the early project stage.
                  This enables all stakeholders to visualise the product,
                  interact with it and make changes early.
                </p>
              </div>
            </div>
            <div className="col-span-1 pt-[48px] px-[15px]">
              <h1 className="font-poppins text-[60px]">4</h1>
              <div className="lg:pr-[60px] ">
                <h3 className="lg:text-[28px] text-[22px] font-poppins text-[#000000] font-[600]">
                  Discover, Define and Strategize
                </h3>
                <p className="lg:text-[20px] text-[16px] font-poppins mt-[20px] text-[#576464]">
                  We listen to your short and long term goals. Study your
                  industry, conduct competitor's research and recommend you the
                  right solutions. We don't just wait for instructions from you,
                  we offer our point of view.
                </p>
              </div>
            </div>
            {/* <div className="col-span-1"></div> */}
          </div>
        </Container4>
      </div>

      <div className="py-[80px] lg:px-[20px] md:px-[50px] px-[10px] CAQ">
        <Container4>
          <div className="grid grid-cols-1">
            <h2 className="lg:text-[46px] md:text-[38px] sm:text-[30px] text-[30px] text-[#FFFFFF] font-poppins">
              Commonly Asked Questions
            </h2>
          </div>

          <div className="grid grid-cols-1 pt-[60px]">
            <div className=" max-w-[1140px]">{accordElems}</div>
            <p className="mt-[48px] mb-[15px] text-[20px] font-poppins text-[#FFFFFF] ">
              Still have more questions? Check out our full list of{" "}
              <Link className="FAQ" to={""}>
                FAQ
              </Link>{" "}
              .Alternatively,{" "}
              <Link className="SUM" to={""}>
                send us a message.
              </Link>
            </p>
          </div>
        </Container4>
      </div>

      <div className="client md:py-[100px] sm:py-[70px]  py-[30px] xl:px-[20px] md:px-[20px] sm:px-[15px] px-[15px]">
        <Container2>
          <div className=" grid grid-cols-2">
            <div className="relative lg:col-span-1 md:col-span-2 sm:col-span-2 col-span-2 pr-[80px]">
              <h2 className="text-[50px] text-[#FFFFFF] font-poppins mb-[15px]">
                What Our <br className="xl:block hidden" />
                Clients say
              </h2>
              <div>
                <div className="">
                  <img
                    src={invalidname}
                    data-aos="slide-down"
                    data-aos-duration="2000"
                    alt=""
                    className="absolute top-[160px] left-[70px]"
                  />
                </div>
                <div className="h-[300px] w-[100%]">
                  <img
                    src={groups}
                    alt=""
                    className="absolute top-[210px] left-[50px]"
                  />
                  <img
                    src={groups}
                    alt=""
                    className="absolute top-[270px] left-[0px]"
                  />
                  <img
                    src={groups}
                    alt=""
                    className="absolute top-[180px] left-[120px]"
                  />
                  <img
                    src={groups}
                    alt=""
                    className="absolute xl:block hidden top-[213px] right-[214px]"
                  />
                  <img
                    src={groups}
                    alt=""
                    className="absolute xl:block hidden top-[270px] right-[160px]"
                  />
                </div>
              </div>
            </div>

            <div className="relative lg:col-span-1 md:col-span-2 sm:col-span-2 col-span-2 lg:pr-[80px] lg:px-[0px] md:px-[50px] sm:px-[20px] px-[12px]">
              <SimpleSlider />
            </div>
          </div>
        </Container2>
      </div>
    </div>
  );
}

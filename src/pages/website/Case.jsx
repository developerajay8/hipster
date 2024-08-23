import React from "react";
import Container5 from "../../components/Container5";
import {
  caseGalob1,
  casefrdesign,
  caseleft,
  caseright,
  casescreenleft,
  casescreenright,
  componentscaled,
  hps,
} from "../../assets";
import Container4 from "../../components/Container4";

const Case = () => {
  return (
    <>
      <div className="pt-[100px] font-poppins">
        <Container5>
          <div>
            <h2 className="text-[48px] font-[500]">
              <span className="text-[#00b0ab]">CASE - </span> Non-Profit
            </h2>
            <h3 className="pt-[10px] pb-[48px] text-[48px] font-[600]">
              Revamp of CASE and Case Trust Websites
            </h3>
          </div>
        </Container5>
        <div className="hps_image"></div>
      </div>
      <div className="pt-[80px] font-poppins">
        <Container4>
          <div className="grid grid-cols-2 gap-5">
            <div>
              <h2 className="font-[400] text-[48px] mb-15px">Overview</h2>
              <p className="text-[20px] mt-[25px] text-[#6B7D7C]  text-left font-[400]">
                We updated CASE’s and CaseTrust’s websites by enhancing the
                navigation structure, redesigning the layout, and ensuring it is
                mobile-responsive. The goal was to improve the user experience
                and make the website more accessible across different devices.z
              </p>
            </div>
            <div className="ps-[100px]">
              <div className="mb-[35px]">
                <p className="text-[18px] pb-[10px] text-[#001817]">Client</p>
                <h2 className="text-[24px] font-[500] uppercase">case</h2>
              </div>
              <div className="grid grid-cols-2 pb-[10px] mb-[35px]">
                <div>
                  <h2 className="text-[18px] font-[400] pb-[10px]">Period</h2>
                  <p className="text-[24px] font-[500]">2022-present</p>
                </div>
                <div>
                  <h2 className="text-[18px] font-[400] pb-[10px]">
                    Geography
                  </h2>
                  <p className="text-[24px] font-[500]">Singapore</p>
                </div>
              </div>
              <div>
                <p className="text-[18px] font-normal mb-[10px] text-[#001817]">
                  Work Done
                </p>
                <div className="flex">
                  <div className="caseGalob px-[10px]">
                    <img className="caseGalob1" src={caseGalob1} alt="" />
                    <p className="text-[14px] pt-[5px]  font-medium">
                      CASE <br /> Website
                    </p>
                  </div>
                  <div className="caseGalob px-[10px]">
                    <img className="caseGalob1" src={caseGalob1} alt="" />
                    <p className="text-[14px] pt-[5px] text-center  font-medium">
                      CaseTrust Website
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container4>
      </div>

      <div className="py-[80px] font-poppins">
        <Container4>
          <h2 className="text-[48px] mb-[15px]">Services</h2>
          <div className="flex gap-3">
            <div className="text-[18px] py-[18px] px-[32px] rounded-[35px] bg-[#ccefee] hover:bg-[#00b1ac] hover:text-[#fff] duration-300">
              Product Design
            </div>
            <div className="text-[18px] py-[18px] px-[32px] rounded-[35px] bg-[#ccefee] hover:bg-[#00b1ac] hover:text-[#fff] duration-300">
              Graphic Design Services
            </div>
            <div className="text-[18px] py-[18px] px-[32px] rounded-[35px] bg-[#ccefee] hover:bg-[#00b1ac] hover:text-[#fff] duration-300">
              Web Development
            </div>
          </div>
        </Container4>
      </div>
      <div className="my-[50px] font-poppins">
        <Container4>
          <h5 className="text-[48px] font-[poppins] text-center">
            Designing a website for multiple{" "}
            <span className=" text-[#00b1ac]">target audiences</span>
          </h5>
          <p className="text-center mt-[20px] w-[60%] mx-auto text-[#6B7D7C] text-[20px]">
            Designing a website that caters to multiple target audiences can be
            a challenge, but it is definitely possible with careful planning and
            execution. In Hipster, we have created clear menus and navigation
            targeted at the business and consumer users.
          </p>
          <div className="mt-[50px] grid grid-cols-2  font-[poppins] ">
            <div className="pe-[48px]">
              <p className="text-[24px] font-medium">
                Using simple language, CASE’s website hero image filters the
                users to the correct site for consumer/business
              </p>
              <div className="mt-[50px]">
                <img src={caseleft} alt="" />
              </div>
            </div>
            <div className="ps-[48px] dashboard">
              <p className="text-[24px] font-medium">
                Options to toggle between the consumer/business sites are always
                visible in the respective menu.
              </p>
              <div className="mt-[50px]">
                <img src={caseright} alt="" />
              </div>
            </div>
          </div>
        </Container4>
      </div>

      <div className="videoContenar">
        <div className="flex justify-center">
          <video autoPlay muted loop className="videocontent">
            <source
              src={
                "https://hipster-inc.com/wp-content/uploads/2023/07/casetrustVideo.mp4"
              }
              type="video/mp4"
            />
          </video>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto mt-[150px] mb-[50px] font-poppins">
        <div className="grid grid-cols-2">
          <div className="me-[20px] flex items-center">
            <div>
              <h2 className="text-[48px] mx-w-[400px] font-medium">
                Another key <br /> component,
                <br /> visual appeal
              </h2>
              <p className="text-[20px] my-[24px] text-[#6B7D7C] font-normal">
                We incorporated graphics and multi-media into our website design
                to improve its visual appeal and create a positive first
                impression with friendly human portraits. Graphics also aid in
                creating visual hierarchies, enhancing user experience, and
                conveying complex information more effectively than text alone.
              </p>
            </div>
          </div>
          <div>
            <img src={componentscaled} alt="" />
          </div>
        </div>

        {/* second grid case componant */}
        <div className="grid grid-cols-2 mt-[80px] font-poppins">
          <div className="min-h-[500px] bg-blue-600 rounded-[25px]">
            <img src={casefrdesign} alt="" className="" />
          </div>
          <div className="flex items-center">
            <div className="ps-[48px]">
              <h2 className="text-[48px] mx-w-[400px] font-medium">
                responsive <br />
                design
              </h2>
              <p className="text-[20px] my-[24px] text-[#6B7D7C] font-normal">
                Hipster design mobile friendly website that adapts to different
                devices. One can easily navigate and read content without the
                need to zoom in or out or scroll horizontally.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* second video section here */}
      <div className="videoContenar">
        <div className="flex justify-center">
          <video autoPlay muted loop className="videocontent">
            <source
              src={
                "https://hipster-inc.com/wp-content/uploads/2023/07/case-trust-video.mp4"
              }
              type="video/mp4"
            />
          </video>
        </div>
      </div>
      {/* end */}

      {/* Two websites,section */}
      <div className="font-poppins">
        <h2 className="text-[48px] pt-[50px] font-medium leading-tight text-center">
          Two websites, multiple administrators
        </h2>
        <div className="max-w-[1049px] mx-auto border-blue-500">
          <p className="text-center text-[20px] mt-[18px] mb-[48px] text-[#6B7D7C] font-normal">
            We developed a user-friendly content management system for CASE,
            enabling non-technical <br /> administrators to easily add, delete,
            or update website content without any coding knowledge. This helps{" "}
            <br /> ensure that the content is always up to date.
          </p>
        </div>
        <div className="w-[100%] bg-blue-500">
          <div className="max-w-[1220px] mx-auto flex min-h-[618px] relative">
            <div className="max-w-[500px] absolute bottom-0 left-0">
              <img src={casescreenleft} alt="" />
            </div>
            <div className="max-w-[500px] absolute right-0 top-0 bottom-0">
              <img className="h-[100%]" src={casescreenright} alt="" />
            </div>
          </div>
        </div>
      </div>

      {/* scrolling effect here*/}
      <div className="bg-green-900 h-[200px]"></div>

      {/* last section */}
      <div className="py-[80px] font-poppins">
        <div className="max-w-[1140px] mx-auto">
          <h2 className="text-[48px] font-normal text-center ">
            <span className="next_case">Next Case Study</span>
          </h2>
          <div className="py-[50px]">
            <h2 className="text-center text-[24px] text-[#001817] font-normal mb-[12px]">
              <span>Tbit - Team Engagement</span>
            </h2>
            <h3 className="text-center text-[32px] mb-[12px]">
              <span>
                A physical team-building app: <br /> say no to boring
                activities!
              </span>
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Case;
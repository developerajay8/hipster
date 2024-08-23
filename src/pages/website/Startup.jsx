import React from "react";
import Container6 from "../../components/Container6";
import { FaRegCalendar } from "react-icons/fa6";
import { StartupinSingapore, blog1 } from "../../assets";
import Portfolio from "./Portfolio";

const Startup = () => {
  const prograp = [
    {
      title: "Sustainable Transportation",
      prograp1:
        "Singapore is committed to reducing its carbon footprint and has set a target to phase out internal combustion engine (ICE) vehicles by 2040. A startup that focuses on developing sustainable transportation solutions, such as electric vehicles, charging infrastructure, and smart transportation systems, could be well-positioned to meet the growing demand for eco-friendly transportation.",
    },
    {
      title: "Virtual Events and Experiences",
      prograp1:
        "The pandemic has accelerated the adoption of virtual events and experiences, creating opportunities for startups that provide innovative solutions for virtual conferences, trade shows, and entertainment events. A startup that offers immersive virtual experiences or hybrid events that combine both physical and virtual components could be well-positioned to succeed in this market.",
      prograp2:
        "Virtual Events and Experiences allow you to create highly engaging digital events that can be accessed by multiple attendees, in real time.",
      Bluetext: "Click here for more information.",
    },
    {
      title: "Healthtech",
      prograp1:
        "The healthcare industry is undergoing a digital transformation, and startups that provide innovative solutions for telemedicine, medical diagnostics, and personalized medicine could be well-positioned to meet the growing demand for healthcare services in Singapore. The government is also actively supporting the development of a smart healthcare ecosystem in Singapore, creating opportunities for startups that can leverage emerging technologies like AI and big data analytics.",
      boldtext: "You can also check:",
      BlueText: "Mental health solutions",
    },
    {
      title: "Food and Beverage",
      prograp1:
        "Singapore has a thriving food and beverage industry, and startups that offer innovative food products, such as plant-based meats, functional foods, or specialty snacks, could be well-positioned to succeed in this market. Additionally, startups that offer innovative solutions for food delivery or food waste reduction could also find success in Singapore’s competitive F&B industry.",
    },
    {
      title: "Sustainable Fashion",
      prograp1:
        "The fashion industry is a significant contributor to global carbon emissions, and there is a growing demand for sustainable and ethical fashion options. A startup that offers sustainable fashion solutions, such as eco-friendly fabrics, circular fashion models, or supply chain transparency, could be well-positioned to meet the growing demand for sustainable fashion in Singapore.",
      boldtext: "Click here for:",
      BlueText: "Personalized fashion",
    },
    {
      title: "Digital Wallet for Cryptocurrencies",
      prograp1:
        "Digital Wallet is a platform that supports multiple cryptocurrencies. It provides seamless transactions and secure storage, while supporting clients worldwide. We are continually researching new technologies and providing our users with the best possible experience using cryptocurrency.",
    },
    {
      title: "Virtual Reality Education",
      prograp1:
        "Virtual Reality Education is an immersive and interactive education platform providing a unique way to create a virtual learning environment for students. With our mission to enhance the future of learning, we believe that our platform will bring forth new insights and perspectives on how best to improve the teaching and learning process.",
      prograp2:
        "Virtual Reality is the next frontier in education. If you are thinking about developing an education application,",
      Bluetext: "click here.",
    },
    {
      title: "Smart Home Automation",
      prograp1:
        "The smart home automation platform provides users with control over their home appliances, lighting and security, as well as energy usage. The platform is developed using the latest technology and can be integrated with many existing devices. The result is a simple and fast system that gives users more power in their homes.",
    },
    {
      title: "AI-based Financial Advisory",
      prograp1:
        "Develop an AI-based financial advisory platform that provides personalized financial advice and investment recommendations. The system will use artificial intelligence, such as machine learning and deep learning, to analyze user data and provide personalized recommendations.",
    },
    {
      title: "Autonomous Delivery Robots",
      prograp1:
        "Autonomous Delivery Robots are a new class of delivery robot that can operate independently, making use of artificial intelligence (AI) and sensor technology to deliver goods and materials to the customers.",
      prograp2:
        "It’s important to note that these are just general startup ideas, and any successful business idea will require careful research, planning, and execution. Additionally, there may be other factors to consider, such as regulatory requirements, competition, and market demand.",
    },
  ];

  return (
    <div className=" my-[80px] sm:my-[80px] md:my-[80px] font-poppins">
      <Container6>
        <div className=" sm:mb-[48px] md:mb-[48px] mb-[20px]">
          <div className="px-[15px] mb-[24px] ">
            <h1 className=" text-[30px] md:text-[48px] pt-[20px] md:pt-[80px] leading-[1.2] text-center font-[400] md:font-[600] ">
              2024 Top 10 Startup trends in Singapore
            </h1>
            <div className="flex items-center justify-center gap-3 mt-[30px] pb-[24px]">
              <FaRegCalendar className=" text-[20px] md:text-[25px]" />
              <span className="md:text-[16px]  text-[14px]">
                January 4, 2024
              </span>
            </div>
            <div className="pt-[40px] md:pt-[60px]">
              <img
                className="w-full mt-[5px] md:mt-[20px] mb-[30px]"
                src={StartupinSingapore}
                alt=""
              />
              <p className="text-[16px] md:text-[20px] pb-[20px] leading-[28px] md:leading-[32px] text-[#222] font-[900]">
                <b>
                  Here are a few general startup ideas that could be relevant
                  for Singapore in the future:
                </b>
              </p>

              {prograp.map((data, i) => {
                return (
                  <div key={i}>
                    <h2 className=" mb-[20px]">
                      <strong className="text-[28px] md:leading-[32px] leading-[28px] md:text-[32px] font-[600] ">{data.title}</strong>
                    </h2>
                    <p className=" text-[16px] md:text-[20px] md:leading-[32px] leading-[28px] mb-[20px]">{data.prograp1}</p>
                    <p className="  text-[16px] md:text-[20px] mb-[20px]">
                      {data.prograp2} <span className="text-[#006a83]">{data.Bluetext}</span>
                    </p>
                    <div className=" text-[16px] md:text-[20px] font-[800] pb-[40px] md:pb-[40px] ">
                      <strong>{data.boldtext} <span className="text-[#006a83]">{data.BlueText}</span></strong>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* componant  */}
          <Portfolio/>
        </div>
      </Container6>
    </div>
  );
};

export default Startup;

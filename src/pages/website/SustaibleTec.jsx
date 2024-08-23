import React from "react";
import { FaRegCalendar } from "react-icons/fa6";
import Container6 from "../../components/Container6";
import { Sustainnable_Tecnology } from "../../assets";
import Portfolio from "./Portfolio";

const SustaibleTec = () => {
  const data = [
    {
      title: "1. Solar-Powered Farms",
      prograp1:
        "Solar-powered farms are becoming increasingly popular. This technology allows farmers to generate their own electricity and reduce their carbon footprint. Solar panels are installed on the farm’s roofs, and the energy generated is used to power the farm’s operations. In addition to reducing carbon emissions, solar-powered farms also help farmers save money on their electricity bills.",
    },
    {
      title: "2. Smart Homes",
      prograp1:
        "Smart homes are another example of sustainable technology in action. These homes use technology to automate energy usage, making it more efficient. Smart thermostats, for example, learn your schedule and adjust the temperature of your home accordingly. Smart lighting systems turn off lights when no one is in the room, reducing energy waste.",
    },
    {
      title: "3. Electric Vehicles",
      prograp1:
        "Electric vehicles are becoming more common on our roads. These vehicles emit fewer pollutants than traditional gasoline-powered cars. As battery technology improves, electric vehicles are becoming more practical for everyday use. The widespread adoption of electric vehicles could help reduce the carbon emissions from transportation, which is currently a major contributor to global emissions.",
    },
    {
      title: "4. Green Buildings",
      prograp1:
        "Green buildings are designed to be energy-efficient and environmentally friendly. They are constructed using sustainable materials and feature energy-saving technologies. For example, green buildings often have solar panels, green roofs, and insulation that reduces heating and cooling costs. The use of green buildings can significantly reduce the carbon footprint of buildings and help conserve natural resources.",
    },
    {
      title: "5. Waste-to-Energy Technology",
      prograp1:
        "Waste-to-energy technology is a process that converts waste into energy. This technology helps to reduce the amount of waste that goes to landfills while producing clean energy. The process involves burning waste to produce steam, which is used to generate electricity. Waste-to-energy technology has the potential to provide a significant amount of clean energy while reducing waste.",
    },
    {
      title: "6. Vertical Farming",
      prograp1:
        "Vertical farming is an innovative way to grow crops using sustainable technology. This method involves growing crops in vertically stacked layers, using LED lights and hydroponic systems. Vertical farming uses less water and land than traditional farming methods and can be done in urban areas. This technology can help reduce the carbon footprint of agriculture and provide fresh produce to urban areas.",
    },
    {
      title: "7. Water Purification Technology",
      prograp1:
        "Water purification technology is another example of sustainable technology in action. This technology helps to purify contaminated water, making it safe to drink. There are various water purification methods available, such as reverse osmosis and ultraviolet disinfection. The use of water purification technology can help provide access to clean drinking water, which is essential for human health.",
    },
    {
      title: "Conclusion",
      prograp1:
        "Sustainable technology is helping to create a more sustainable future for our planet. From solar-powered farms to waste-to-energy technology, there are a variety of innovative solutions being developed to reduce our carbon footprint and preserve natural resources. By adopting sustainable technology, we can create a more efficient and sustainable world for future generations.",
      prograpbold: "Click here to check our",
      fontblue: "Sustainability Solution",
    },
  ];
  return (
    <div className=" my-[80px]">
      <Container6>
        <div className="px-[15px] font-[poppins] mb-[24px]">
          <h1 className=" text-[30px] md:text-[48px] pt-[20px] md:pt-[80px] leading-[1.2] text-center font-[400] ">
            7 Inspiring Examples of Sustainable Technology in Action
          </h1>
          <div className="flex items-center justify-center gap-3 mt-[25px] md:mt-[30px] pb-[24px]">
            <FaRegCalendar className=" md:text-[25px] text-[20px]" />
            <span className="md:text-[16px]  text-[14px]"> April 19, 2023</span>
          </div>
          <div className=" md:pt-[60px] pt-[30px]">
            <img
              className="w-full mt-[20px] mb-[30px]"
              src={Sustainnable_Tecnology}
              alt=""
            />
            <p className=" md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">
              Sustainable technology is the development of products and services
              that promote environmental sustainability. Over the years,
              technology has been a driving force in solving environmental
              problems. The adoption of sustainable technology has led to the
              development of innovative solutions that are changing the world.
            </p>
            <p className=" md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">
              In this article, we will discuss seven inspiring examples of
              sustainable technology in action. These examples will showcase how
              technology is being used to create sustainable solutions that help
              reduce our carbon footprint and preserve our planet for future
              generations.
            </p>
          </div>

          <div>
            <h2 className=" text-[28px] md:text-[32px] font-[600] mt-[40px] mb-[20px] leading-[1.2]">
              Table of Contents
            </h2>
            <ul className="text-[#222] text-[20px] leading-[28px] md:leading-[32px] list-decimal ml-[40px] pl-[15px]  md:pl-[40px]">
              <li>Solar-Powered Farms</li>
              <li>Smart Homes</li>
              <li>Electric Vehicles</li>
              <li>Green Buildings</li>
              <li>Waste-to-Energy Technology</li>
              <li>Vertical Farming</li>
              <li>Water Purification Technology</li>
            </ul>
          </div>

          {data.map((item, i) => {
            return (
              <div key={i}>
                <h2 className=" text-[28px] md:text-[32px] font-[600] mt-[40px] mb-[10px] md:mb-[20px] leading-[1.2]">
                  {item.title}
                </h2>
                <p className=" md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">
                  {item.prograp1}
                </p>
                <div className="mt-[15px]">
                  <h2 className=" text-[16px] md:text-[20px] font-[800] leading-[32px] md:leading-[28px]">
                    {item.prograpbold}{" "}
                    <span className="text-[#006a83]">{item.fontblue}</span>
                  </h2>
                </div>
              </div>
            );
          })}

          <div>
            <h2 className=" text-[28px] md:text-[32px] font-[600] mt-[40px] mb-[10px] md:mb-[20px] leading-[1.2]">
              FAQs
            </h2>
            <ol className="pl-[40px] mb-[21px] ml-[42px] text-[20px] font-[900] leading-[32px] text-[#222] list-decimal">
              <li>What is sustainable technology?</li>
            </ol>
            <ul className="text-[16px] md:text-[20px] list-disc ml-[50px] mb-[40px]">
              <li className="mb-[15px] leading-[28px] md:leading-[1.3em]">
                Sustainable technology refers to the development of products and
                services that promote environmental sustainability.
              </li>
            </ul>
          </div>

          <div>
            <ol
              start={2}
              className="pl-[40px] mb-[21px] ml-[42px] text-[20px] font-[900] leading-[28px] md:leading-[32px] text-[#222] list-decimal"
            >
              <li>Why is sustainable technology important?</li>
            </ol>
            <ul className=" text-[16px] md:text-[20px] list-disc ml-[50px] mb-[40px]">
              <li className="mb-[15px] leading-[32px]">
                Sustainable technology is important because it helps to reduce
                our carbon footprint and preserve natural resources.
              </li>
            </ul>
          </div>

          <div>
            <ol
              start={3}
              className="pl-[40px] mb-[21px] ml-[42px] text-[20px] font-[900] leading-[28px] md:leading-[32px] text-[#222] list-decimal"
            >
              <li>What are some examples of sustainable technology?</li>
            </ol>
            <ul className=" md:text-[20px] text-[16px] list-disc ml-[50px] mb-[40px]">
              <li className="mb-[15px] md:leading-[32px] leading-[28px]">
              Examples of sustainable technology include solar-powered farms, smart homes, electric vehicles, green buildings, waste-to-energy technology, vertical farming, and water purification technology.
              </li>
            </ul>
          </div>

          <div>
            <ol
              start={4}
              className="pl-[40px] mb-[21px] ml-[42px] text-[20px] font-[900] leading-[28px] md:leading-[32px] text-[#222] list-decimal"
            >
              <li>How does sustainable technology help the environment?</li>
            </ol>
            <ul className=" text-[16px] md:text-[20px] list-disc ml-[50px] mb-[40px]">
              <li className="mb-[15px] leading-[28px] md:leading-[32px]">
              Sustainable technology helps the environment by reducing carbon emissions, conserving natural resources, and promoting environmental sustainability.
              </li>
            </ul>
          </div>

          <div>
            <ol
              start={5}
              className="pl-[40px] mb-[21px] ml-[42px] text-[20px] font-[900] leading-[28px] md:leading-[32px] text-[#222] list-decimal"
            >
              <li>What can individuals do to support sustainable technology?</li>
            </ol>
            <ul className=" text-[16px] md:text-[20px] list-disc ml-[50px] mb-[40px]">
              <li className="mb-[15px] md:leading-[32px] leading-[28px]">
              Individuals can support sustainable technology by adopting energy-efficient practices, using eco-friendly products, and supporting companies that prioritize environmental sustainability.
              </li>
            </ul>
          </div>
        </div>
        <Portfolio />
      </Container6>
    </div>
  );
};

export default SustaibleTec;

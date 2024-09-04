import React, { useState } from "react";
import { Ajay, bomb, pencil3, two, warning } from "../../assets";
import { TiArrowRight } from "react-icons/ti";
import { Link } from "react-router-dom";
import Container2 from "../../components/Container2";
import Container4 from "../../components/Container4";

export default function Contact() {
  const [clickedButtons, setClickedButtons] = useState([]);

  const buttonNames = [
    "Web Application",
    "Website and App Development",
    "CGI & 2D, 3D",
    "Social Media Management",
    "Branding",
    "Performance marketing",
    "Others",
  ];

  const handleClick = (index) => {
    if (clickedButtons.includes(index)) {
      setClickedButtons(clickedButtons.filter((i) => i !== index));
    } else {
      setClickedButtons([...clickedButtons, index]);
    }
  };

  return (
    <>
      <div className="py-[80px]">
        <Container4>
          <div className="">
            <h1 className="text-[56px] font-poppins text-[#000000] xl:px-[0px] px-[20px]">
              Hello! 👋🏻
            </h1>
            <div className="max-w-[750px] mt-[25px] px-[15px] box-border">
              <div className="">
                <span className="text-[28px] text-[#000000] font-poppins mb-[10px]">
                  I'd like to find out more about...*{" "}
                </span>

                <div className=" pb-[20px]">
                  <div className="flex flex-wrap">
                    {buttonNames.map((name, index) => (
                      <button
                        key={index}
                        className={`m-2 px-4 py-2 label rounded-full text-[14px] text-black ${
                          clickedButtons.includes(index)
                            ? "bg-black text-white"
                            : "bg-white"
                        } transition-colors duration-300 ease-in-out`}
                        onClick={() => handleClick(index)}
                      >
                        {name}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-[20px] cursor-pointer">
                <span className="text-[28px] text-[#000000] font-poppins mb-[10px] mt-[20px]">
                  Project budget (SGD)*{" "}
                </span>
                <div className=" pb-[20px]">
                  <div
                    htmlFor=""
                    className="mt-[20px] mr-[10px] flex flex-wrap gap-2"
                  >
                    <span className="px-[20px] py-[12px] label text-[18px] font-semibold rounded-full ">
                      ./10k
                    </span>
                    <span className="px-[20px] py-[12px] label text-[18px] font-semibold rounded-full ">
                      10-30k
                    </span>
                    <span className="px-[20px] py-[12px] label text-[18px] font-semibold rounded-full ">
                      30-80k
                    </span>
                    <span className="px-[20px] py-[12px] label text-[18px] font-semibold rounded-full ">
                      80k
                    </span>
                    <span className="px-[20px] py-[12px] label text-[18px] font-semibold rounded-full ">
                      Prefer not to share
                    </span>
                    <span className="px-[20px] py-[12px] label text-[18px] font-semibold rounded-full ">
                      Unsure, can you quote?
                    </span>{" "}
                  </div>
                </div>
              </div>

              <form action="">
                <div className="mb-[40px]">
                  <input
                    type="text"
                    placeholder="Your name*"
                    className="border-none w-[100%] p-[8px] text-[20px] md:text-[24px] font-poppins text-[#252424]"
                  />
                  <div className="border"></div>
                </div>
                <div className="mb-[40px]">
                  <input
                    type="email"
                    placeholder="Your email*"
                    className="border-none w-[100%] p-[8px] text-[20px] md:text-[24px] font-poppins text-[#252424]"
                  />
                  <div className="border"></div>
                </div>
                <div className="mb-[40px]">
                  <input
                    type="number"
                    placeholder="Contact number"
                    className="border-none w-[100%] p-[8px] text-[20px] md:text-[24px] font-poppins text-[#252424]"
                  />
                  <div className="border"></div>
                </div>
                <div className="mb-[40px]">
                  <textarea
                    className="border-none w-[100%] p-[8px] text-[20px] md:text-[24px] font-poppins text-[#252424]"
                    placeholder="Tell us about Your project"
                  ></textarea>
                  <div className="border"></div>
                </div>
                <div className="">
                  <button
                    type="submit"
                    className="text-[14px] label px-[20px] hover:bg-black hover:text-white py-[14px] rounded-full"
                  >
                    Send request
                  </button>
                </div>
              </form>
            </div>
          </div>
        </Container4>
      </div>
    </>
  );
}

import React, { useEffect, useState } from "react";
import { first, fourth, logo, second, third } from "../assets";
import { Link, useLocation } from "react-router-dom";
import { HiMenu } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";

export default function Header() {
  const [toggle, setToggle] = useState(false);
  const closeMenu = () => {
    setToggle(false);
  };

  const location = useLocation();

  useEffect(() => {
      return () => {
          window.scrollTo(0,0);
      };
  }, [location]);

  const items = [
    {
      name: "Home",
      url: "/",
    },
    {
      name: "Our Work",
      url: "/ourwork",
    },
    {
      name: "Who we are",
      url: "/whoweare",
    },
    {
      name: "Services",
      url: "/services",
    },
    {
      name: "Contact",
      url: "/contact",
    },
  ];

  const SItems = [
    {
      name: "Web Development",
      url: "/webdevelopment",
    },
    {
      name: "Mobile App Development",
      url: "/mobileappdevelopment",
    },
    {
      name: "UI/UX Design",
      url: "/uiuxdesign",
    },
    {
      name: "Software Development",
      url: "/softwaredevelopment",
    },
    {
      name: "Off The Shelf Products",
      url: "/offtheshelfproducts",
    },
  ];

  const TItems = [
    {
      name: "Process",
      url: "/process",
    },
    {
      name: "Clients",
      url: "/clients",
    },
    {
      name: "Career",
      url: "/career",
    },
    {
      name: "Blog",
      url: "/blog",
    },
  ];

  const FItems = [
    {
      name: "Education",
      url: "/process",
    },
    {
      name: "Fashion",
      url: "/fashion",
    },
    {
      name: "F&B",
      url: "/f&b",
    },
    {
      name: "Sustainability",
      url: "/sustainability",
    },
    {
      name: "Mental health",
      url: "/mentalhealth",
    },
    {
      name: "Gamification",
      url: "/gamification",
    },
    {
      name: "Video Solution",
      url: "/videosolution",
    },
  ];

  const FIItems = [
    {
      name: "Facebook",
      url: "/facebook",
    },
    {
      name: "Instagram",
      url: "/instagram",
    },
    {
      name: "Linkedin",
      url: "/linkedin",
    },
    {
      name: "Dribbble",
      url: "/dribbble",
    },
  ];

  const SIItems = [
    {
      name: "hello@hipster-inc.com",
      url: "/facebook",
    },
    {
      name: "+65 82314107",
      url: "/instagram",
    },
  ];

  return (
    <div className="bg-black  fixed top-0 zindex  w-full">
      <nav className="  ">
        <div className="flex  px-[20px] py-[16px] justify-between items-center">
          <div className="px-[20px]">
            <Link to={'/'}><img src={logo} alt="" /></Link>
          </div>
          <ul className="relative">
            <li className=" px-[20px] items-center gap-3 flex text-[18px] font-[500] text-[#FFFFFF] font-poppins">
              <Link to={""}>menu</Link>
              <HiMenu className="text-2xl cursor-pointer" onClick={() => setToggle(true)} />
            </li>
          </ul>
        </div>

        {/* Responsive Menu */}
        <div
          className={`grid grid-cols-3 h-[100vh] overflow-hidden  z-[999999] absolute top-0 w-full bg-[#ffffff] duration-700 text-white  ${
            toggle == false ? "left-[-100%]" : "left-[0px]"
          }`}
        >
          <IoMdClose
            className="absolute top-[19px] cursor-pointer right-[29px] font-bold text-3xl text-black"
            onClick={() => setToggle(false)}
          />
          <div className="col-span-1 lg:block hidden text-black bg-[#000000] ">
            <h2 className="text-[32px] font- text-[#ffffff] mx-[96px] pt-[50px] pb-[20px] font-bold font-poppins">
              Our Work
            </h2>
            <div className="overflow-y-hidden">
              <img
                src={first}
                alt=""
                className="max-w-[318px] h-[224px] mb-[16px] mx-auto rounded-xl"
              />
              <img
                src={second}
                alt=""
                className="max-w-[318px] h-[224px] mb-[16px] mx-auto rounded-xl"
              />
              <img
                src={third}
                alt=""
                className="max-w-[318px] h-[224px] mb-[16px] mx-auto rounded-xl"
              />
              <img
                src={fourth}
                alt=""
                className="max-w-[318px] h-[224px] mb-[16px] mx-auto rounded-xl"
              />
            </div>
          </div>
          <div className="lg:col-span-2 col-span-3 overflow-auto border h-screen text-black sm:px-[90px]  px-[20px]          md:py-[98px] sm:py-[60px] py-[30px]">
            <div className="grid md:grid-cols-2 ">
              <ul className=" text-[#001817] px-[16px] font-poppins mb-[60px]">
                <div>
                  <h1 className="text-[#7f7f7f] mb-[10px]">Menu</h1>
                </div>
                {items.map((item, index) => {
                  return (
                    <li key={index} className="ms:text-[40px] text-[25px] font">
                      <Link onClick={closeMenu} to={item.url}>
                        {item.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
              <ul className=" text-[#001817] px-[16px] font-poppins mb-[60px]">
                <div>
                  <h1 className="text-[#7f7f7f] mb-[10px]">Services</h1>
                </div>
                {SItems.map((Sitem, index) => {
                  return (
                    <li key={index} className="text-[18px] pb-[10px] leading-4">
                      <Link onClick={closeMenu} to={Sitem.url}>
                        {Sitem.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
              <ul className=" text-[#001817] px-[16px] font-poppins mb-[80px]">
                <div>
                  <h1 className="text-[#7f7f7f] mb-[10px]">More</h1>
                </div>
                {TItems.map((Titem, index) => {
                  return (
                    <li
                      key={index}
                      className="hover:text-gray-500 duration-700 text-[18px] pb-[10px] leading-4"
                    >
                      <Link onClick={closeMenu} to={Titem.url}>
                        {Titem.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
              <ul className=" text-[#001817] px-[16px] font-poppins mb-[80px]">
                <div>
                  <h1 className="text-[#7f7f7f] mb-[10px]">Industries</h1>
                </div>
                {FItems.map((Fitem, index) => {
                  return (
                    <li key={index} className="text-[18px] pb-[10px] leading-4">
                      <Link onClick={closeMenu} to={Fitem.url}>
                        {Fitem.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
              <ul className=" text-[#001817] px-[16px] font-poppins">
                <div>
                  <h1 className="text-[#7f7f7f] mb-[10px]">Social</h1>
                </div>
                {FIItems.map((Fiitem, index) => {
                  return (
                    <li key={index} className="text-[18px] pb-[4px] leading-5">
                      <Link onClick={closeMenu} to={Fiitem.url}>
                        {Fiitem.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
              <ul className=" text-[#001817] pt-[40px] px-[16px] font-poppins">
                <div>
                  <h1 className="text-[#7f7f7f] mb-[10px]">Industries</h1>
                </div>
                {SIItems.map((Siitem, index) => {
                  return (
                    <li key={index} className="text-[18px] pb-[4px] leading-6">
                      <Link onClick={closeMenu} to={Siitem.url}>
                        {Siitem.name}
                      </Link>
                    </li>
                  );
                })}

                <div className="text-[18px] pb-[4px] leading-6">
                  60 Kaki Bukit Place #10-14
                </div>
                <div className="text-[18px] pb-[4px] leading-6">
                  Eunos Techpark, Singapore 415979
                </div>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

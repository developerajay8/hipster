import React from 'react'
import { TiArrowRight } from "react-icons/ti";
import Container2 from './Container2';
import { Ajay, blogos, bomb, business, pencil3, two, warning } from '../assets';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Footer() {

  const [showContent, setShowContent] = useState(false);
  const [position, setPosition] = useState({ top: 0 });

  const handleReadMore = (e) => {
    e.preventDefault();
    const rect = e.target.getBoundingClientRect();
    setPosition({ top: rect.top + window.scrollY });
    setShowContent(true);
  };

  const closeContent = () => {
    setShowContent(false);
  };

  const Footer = [
    {
      name: "Who we are",
      url: "/whoweare"
    },
    {
      name: "Process",
      url: "/process"
    },
    {
      name: "Clients",
      url: "/clients"
    },
    {
      name: "Learning Hub",
      url: "/blog"
    },
    {
      name: "Career",
      url: "/career"
    },
    {
      name: "Contact us",
      url: "/contact"
    }
  ]

  const Footers = [
    {
      name: "Fashion visualiser",
      url: "/fashionvisualiser"
    },
    {
      name: "Community platform",
      url: "/communityplatform"
    },
    {
      name: "Education App Development",
      url: "/educationappdevelopment"
    },
    {
      name: "Survey & feedback app",
      url: "/survey&feedbackapp"
    },
    {
      name: "Event management",
      url: "/eventmanagement"
    },
    {
      name: "Learning management system",
      url: "/learningmanagementsystem"
    }
  ]

  const Foot = [
    {
      name: "Education",
      url: "/education"
    },
    {
      name: "Fashion",
      url: "/fashion"
    },
    {
      name: "F&B",
      url: "/f&B"
    },
    {
      name: "Sustainability",
      url: "/sustainability"
    },
    {
      name: "Mental health",
      url: "/mentalhealth"
    },
    {
      name: "Gamification",
      url: "/gamification"
    },
    {
      name: "Video Solution",
      url: "/videosolution"
    }
  ]

  const Foots = [
    {
      name: "Web Application",
      url: "/webapplication"
    },
    {
      name: "Website and App Development",
      url: "/websiteandappdevelopment"
    },
    {
      name: "CGI & 2D, 3D",
      url: "/cgi"
    },
    {
      name: "Social Media Management",
      url: "/socialmedia"
    },
    {
      name: "Branding",
      url: "/branding"
    }
  ]

  return (
    <div>
      <div className='footer  pt-[100px]'>
       <div className="max-w-[1416px] mx-auto sm:px-[40px] px-[20px]">
          <div className="grid  grid-cols-2 ">
            <div className="col-span-1 leading-[57px]">
              <h2 className='text-[50px] font-poppins text-[#FFFFFF]'>Have an idea ?</h2>

              

              <a className='sdfghj mb-[15px]  ' href="">Let's discuss</a>
              <div className='boders pb-[0px] w-[254px]'></div>
            </div>
            <div className="col-span-1 FTP">
              <div className='max-w-[500px] font-poppins text-[#FFF] text-[20px] text-right float-right'>
              Bhamashah Techno Hub Sansthan Path, Jhalana Gram, Malviya Nagar, Jaipur, Rajasthan 302017
              </div>
            </div>
          </div>

          <div className="mb-[20px]  mt-[82px] grid grid-cols-4 gap-4 ">
            <div className="md:col-span-1 sm:col-span-2 col-span-4 md:px-[20px] ">
              <h4 className='font-bold text-[#FFFFFF] text-[16px] font-poppins mb-[16px]'>Company</h4>
              <ul className=' text-[#FFFFFFCC] text-[16px] font-poppins'>
                {
                  Footer.map(
                    (foot, ind) => {
                      return (
                        <li className='mb-[8px] acdsjcnds duration-[1s] ' key={ind}>
                          <Link to={foot.url}>{foot.name}</Link>
                        </li>
                      )
                    }
                  )
                }
              </ul>
            </div>
            <div className="md:col-span-1 sm:col-span-2 col-span-4 ">
              <h4 className='font-bold text-[#FFFFFF] text-[16px] font-poppins mb-[16px]'>Ready-solutions</h4>
              <ul className=' text-[#FFFFFFCC] text-[16px] font-poppins'>
                {
                  Footers.map(
                    (foot, ind) => {
                      return (
                        <li className='mb-[8px] acdsjcnds duration-[1s]' key={ind}>
                          <div className='cursor-pointer'>{foot.name}</div>
                        </li>
                      )
                    }
                  )
                }
              </ul>
            </div><div className="md:col-span-1 sm:col-span-2 col-span-4 ">
              <h4 className='font-bold text-[#FFFFFF] text-[16px] font-poppins mb-[16px]'>Industries</h4>
              <ul className=' text-[#FFFFFFCC] text-[16px] font-poppins'>
                {
                  Foot.map(
                    (foot, ind) => {
                      return (
                        <li className='mb-[8px] acdsjcnds duration-[1s]' key={ind}>
                          <div className='cursor-pointer'>{foot.name}</div>
                        </li>
                      )
                    }
                  )
                }
              </ul>
            </div><div className="md:col-span-1 sm:col-span-2 col-span-4">
              <h4 className='font-bold text-[#FFFFFF] text-[16px] font-poppins mb-[16px]'>Services</h4>
              <ul className=' text-[#FFFFFFCC] text-[16px] font-poppins'>
                {
                  Foots.map(
                    (foot, ind) => {
                      return (
                        <li className='mb-[8px] acdsjcnds duration-[1s]' key={ind}>
                          <Link to={foot.url}>{foot.name}</Link>
                        </li>
                      )
                    }
                  )
                }
              </ul>
            </div>
          </div>

          <div className="grid  grid-cols-1 akak pb-7 ">
            <div className="">
              <img src={blogos} className='max-w-[206px] max-h-[68px] pb-[20px]' alt="" />
            </div>
          
            <hr className='aman' />
          </div>
          <div className="grid sm:grid-cols-2  grid-cols-1 gap-10 pt-[0px]  ">
            <div className="col-span-1 text-[#FFFFFF] font-poppins"></div>
            <div className="sm:block hidden col-span-1 pb-[20px]">
              <ul className=' flex text-white lg:gap-[60px] md:gap-[40px] gap-[25px] float-right text-[18px] duration-700  font-poppins'>
                <li className='hover:text-gray-800 duration-700'>
                  <Link to={''}>Facebook</Link>
                </li>
                <li className='hover:text-gray-800 duration-700'>
                  <Link>Instagram</Link>
                </li>
                <li className='hover:text-gray-800 duration-700'>
                  <Link>Linkedin</Link>
                </li>
                <li className='hover:text-gray-800 duration-700'>
                  <Link>Dribbble</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className=" relative md:block hidden">
            <img src={bomb} className='FB absolute top-[112px] left-[400px] w-[120px] h-[120px]' alt="" />
          </div>

          <div className=' relative FT'>
            <img src={pencil3} className=' NGo w-[145px] h-[188px] absolute top-[-657px] right-[-10px]' alt="" />
          </div>

          <div className=" relative md:block hidden bts ">
            <img src={two} className='w-[70px] h-[80px] top-[-770px] left-0 absolute' alt="" />
          </div>
       </div>
      </div>

    </div>
  )
}

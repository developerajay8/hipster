


import React, { useEffect, useState } from 'react'
import { OURB, first, fourth, logo, second, third } from '../assets'
import { Link, useLocation } from 'react-router-dom'
import { HiMenu } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import VerticalMode from '../pages/website/VerticalMode';

export default function Header() {
    const [toggle, setToggle] = useState(false)


    const closeMenu = ()=>{
        setToggle(false)
    }

    const location = useLocation();

    useEffect(() => {
        return () => {
            window.scrollTo(0,0);
        };
    }, [location]);


    const items = [
        {
            name: "Home",
            url: "/"
        },
        {
            name: "Our Work",
            url: "/ourwork"
        },
        {
            name: "Who we are",
            url: "/whoweare"
        },
        {
            name: "Services",
            url: "/services"
        },
        {
            name: "Contact",
            url: "/contact"
        }
    ]

    const SItems = [
        {
            name: "Web Development",
            url: "/webdevelopment"
        },
        {
            name: "Mobile App Development",
            url: "/mobileappdevelopment"
        },
        {
            name: "UI/UX Design",
            url: "/uiuxdesign"
        },
        {
            name: "Software Development",
            url: "/softwaredevelopment"
        },
        {
            name: "Off The Shelf Products",
            url: "/offtheshelfproducts"
        }
    ]

    const TItems = [
        {
            name: "Process",
            url: "/process"
        },
        {
            name: "Clients",
            url: "/clients"
        },
        {
            name: "Career",
            url: "/career"
        },
        {
            name: "Blog",
            url: "/blog"
        }
        
        

    ]

    const FItems = [
        {
            name: "Education",
            url: "/process"
        },
        {
            name: "Fashion",
            url: "/fashion"
        },
        {
            name: "F&B",
            url: "/f&b"
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

    const FIItems = [
        {
            name: "Facebook",
            url: "/facebook"
        },
        {
            name: "Instagram",
            url: "/instagram"
        },
        {
            name: "Linkedin",
            url: "/linkedin"
        },
        {
            name: "Dribbble",
            url: "/dribbble"
        }
    ]

    const SIItems = [
        {
            name: "hello@hipster-inc.com",
            url: "/facebook"
        },
        {
            name: "+65 82314107",
            url: "/instagram"
        }
    ]

    return (
        <nav className='bg-black    '>
            <div className='flex px-[20px]  max-w-[1416px] mx-auto py-[16px]  justify-between items-center'>
                <img src={logo} alt="" className='w-[107px] h-[35px]' />
                <ul className='relative'>
                    <li className=' items-center gap-3 flex text-[18px] font-[500] text-[#FFFFFF] font-poppins'>
                        <Link to={""}>menu</Link>
                        <HiMenu className='text-2xl' onClick={() => setToggle(true)} />
                        


                    </li>
                </ul>
            </div>

            {/* Responsive Menu */}
            <div className={`grid grid-cols-12 h-[2000px] relative z-[999999] duration-700 text-white bg-background ${toggle == false ? "right-[-100%]" : "right-[0px]"}`}>
                <IoMdClose className='absolute top-[29px] right-[24px] font-bold text-3xl text-black' onClick={() => setToggle(false)} />
                {/* <VerticalMode/> */}
                <div className='text-black name back-col fixed-content col-span-4'>
                    <h2 className='text-[32px] font- text-[#ffffff] mx-[96px] pt-[50px] pb-[20px] font-bold font-poppins'>Our Work</h2>
                    <div className="overflow-y-hidden">
                        <img src={first} alt="" className='max-w-[318px] h-[224px] mb-[16px] mx-auto rounded-xl'/>
                        <img src={second} alt="" className='max-w-[318px] h-[224px] mb-[16px] mx-auto rounded-xl'/>
                        <img src={third} alt="" className='max-w-[318px] h-[224px] mb-[16px] mx-auto rounded-xl'/>
                        <img src={fourth} alt="" className='max-w-[318px] h-[224px] mb-[16px] mx-auto rounded-xl'/>
                    </div>
                </div>
                <div className='h-[3000px] border col-span-8 px-[90px] py-[98px]'>
                    <div className=' grid grid-cols-2 flex-wrap'>
                        <ul className=' text-[#001817] px-[16px] font-poppins mb-[60px]'>
                            <div>
                                <h1 className='text-[#7f7f7f] mb-[10px]'>Menu</h1>
                            </div>
                            {
                                items.map(
                                    (item, index) => {
                                        return (
                                            <li key={index} className='text-[40px] font'>
                                                <Link onClick={closeMenu} to={item.url}>{item.name}</Link>
                                            </li>
                                        )
                                    }
                                )
                            }
                        </ul>
                        <ul className=' text-[#001817] px-[16px] font-poppins mb-[60px]'>
                            <div>
                                <h1 className='text-[#7f7f7f] mb-[10px]'>Services</h1>
                            </div>
                            {
                                SItems.map(
                                    (Sitem, index) => {
                                        return (
                                            <li key={index} className='text-[18px] pb-[10px] leading-4'>
                                                <Link  onClick={closeMenu}to={Sitem.url}>{Sitem.name}</Link>
                                            </li>
                                        )
                                    }
                                )
                            }
                        </ul>
                        <ul className=' text-[#001817] px-[16px] font-poppins mb-[80px]'>
                            <div>
                                <h1 className='text-[#7f7f7f] mb-[10px]'>More</h1>
                            </div>
                            {
                                TItems.map(
                                    (Titem, index) => {
                                        return (
                                            <li key={index} className='hover:text-gray-500 duration-700 text-[18px] pb-[10px] leading-4'>
                                                <Link  onClick={closeMenu}to={Titem.url}>{Titem.name}</Link>
                                            </li>
                                        )
                                    }
                                )
                            }
                        </ul>
                        <ul className=' text-[#001817] px-[16px] font-poppins mb-[80px]'>
                            <div>
                                <h1 className='text-[#7f7f7f] mb-[10px]'>Industries</h1>
                            </div>
                            {
                                FItems.map(
                                    (Fitem, index) => {
                                        return (
                                            <li key={index} className='text-[18px] pb-[10px] leading-4'>
                                                <Link onClick={closeMenu} to={Fitem.url}>{Fitem.name}</Link>
                                            </li>
                                        )
                                    }
                                )
                            }
                        </ul>
                        <ul className=' text-[#001817] px-[16px] font-poppins'>
                            <div>
                                <h1 className='text-[#7f7f7f] mb-[10px]'>Social</h1>
                            </div>
                            {
                                FIItems.map(
                                    (Fiitem, index) => {
                                        return (
                                            <li key={index} className='text-[18px] pb-[4px] leading-5'>
                                                <Link onClick={closeMenu} to={Fiitem.url}>{Fiitem.name}</Link>
                                            </li>
                                        )
                                    }
                                )
                            }
                        </ul>
                        <ul className=' text-[#001817] px-[16px] font-poppins'>
                            <div>
                                <h1 className='text-[#7f7f7f] mb-[10px]'>Industries</h1>
                            </div>
                            {
                                SIItems.map(
                                    (Siitem, index) => {
                                        return (
                                            <li key={index} className='text-[18px] pb-[4px] leading-6'>
                                                <Link onClick={closeMenu} to={Siitem.url}>{Siitem.name}</Link>  
                                            </li>
                                        )
                                    }
                                )
                            }
                            
                            <div className='text-[18px] pb-[4px] leading-6'>60 Kaki Bukit Place #10-14</div>
                            <div className='text-[18px] pb-[4px] leading-6'>Eunos Techpark, Singapore 415979</div>
                            
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}





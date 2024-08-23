import React, { useState } from 'react';
// import { FaPlus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
const Accord = (props) => {
    const [toggle, settoggle] = useState(false)
    console.log(toggle);

    function demo() {
        settoggle(!toggle)
    }
    return (
        <div className='mt-2 leading-[60px]'>
            <div className='position-relative items-center text-[#FFFFFF] lg:text-[32px] md:text-[25px] text-[15px] font-poppins font-semibold' onClick={demo}>
                {props.title}
                <span className='position-absolute d-inline-block' style={{
                    top: 0,
                    
                    right: 20,
                    transform: toggle == true ? "rotate(-180deg)" : "",
                    transition: "0.5s"

                }}>
                    {/* &darr;	 */}
                    {/* <FaPlus /> */}
                    <FaPlus className='sm:text-[35px] text-[20px]'/>
                </span>
            </div>
            <div className=' leading-[30px] text-white lg:text-[20px] text-[16px] font-poppins  md:mx-[70px] sm:mx-[20px] mx-[8px]' style={{
                display: toggle == true ? "block" : "none"
            }}>
                {props.body}
                <div className='pt-[18px]'>
                    {props.seo}
                </div>
                <div className=''>
                    {props.sep}
                </div>
                <div className=''>
                    {props.seps}
                </div>
            </div>

        </div>
    );
}

export default Accord;


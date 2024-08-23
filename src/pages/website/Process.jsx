

import React from 'react'
import Container4 from '../../components/Container4'
import { Focus, Fx, Mirror, warning, Ajay, bomb, Nimble, Sx, groups, invalidname, notched, pencil3, two, rep, edt, ast, atn, SS, gm, kt, wtcl, sstf, olm, f, s, t, fo, fi, si, ps } from '../../assets'
import { TiArrowRight } from "react-icons/ti";


import Data from './data'
import Accord from './Accord'
import { Link } from 'react-router-dom'
import Container2 from '../../components/Container2'
import SimpleSlider from './SimpleSlider';


export default function Process() {

  // const accordElems = Data.map(
  //   (d, i) => {
  //     // console.log(d,i);
  //     return <Accord key={i} title={d.title} body={d.body} seo={d.seo} sep={d.sep} seps={d.seps} />

  //   }
  // )

  return (
    <div>
      <Container4>
        <div className=" pt-[100px] sm:pb-[80px] pb-[50px] xl:px-0 lg:px-[30px] md:px-[40px] sm:px-[30px] px-[20px]">
          <div className="">
            <h1 className='lg:text-[56px] md:text-[42px] sm:text-[35px] text-[35px]  font-poppins text-[#000000]' data-aos="slide-right" data-aos-duration="500">
              Process
            </h1>
            <h2 className='max-w-[885px] font-semibold text-[#001817] xl:text-[32px] lg:text-[28px] sm:text-[24px]
           text-[22px] font-poppins lg:mt-[60px]  md:mt-[30px] sm:mt-[18px] mt-[16px] mb-[15px] md:leading-[40px] leading-[30px]' data-aos="slide-left" data-aos-duration="500">An activity or set of activities that can accomplish a specific organizational goal. Business processes should have purposeful goals, be as specific as possible and have consistent outcomes.</h2>
          </div>
        </div>
      </Container4>
      {/* <div className="nit lg:min-h-[800px] md:min-h-[500px] min-h-[300px]">
      </div> */}

      <div className="bg-[#000] lg:px-[80px] px-[40px] lg:py-[80px] py-[40px]">
        <div className='max-w-[796px] max-h-[613px] mx-auto'>
          <img src={ps} className='' alt="" />
        </div>
      </div>

      <div className="sm:py-[80px] py-[30px] bg-[#e6e8f9]">
        <Container4>
          <div className="grid grid-cols-1 xl:px-[0px] lg:px-[10px] md:px-[70px] sm:px-[40px] px-[12px]">
            <h2 className='lg:text-[46px] md:text-[38px] sm:text-[30px] text-[30px] text-[#000000] font-poppins font-bold'>Our Process</h2>
          </div>

          <div className="grid md:grid-cols-2 grid-cols-1 lg:px-[0px] md:px-[50px] sm:px-[80px] px-[12px]">
            <div className="col-span-1 pt-[48px] px-[15px]">
              <h1 className='font-poppins text-[60px]'>1</h1>
              <div className="lg:pr-[60px] ">
                <h3 className=' lg:text-[28px] text-[22px] font-poppins text-[#000000] font-[600]' data-aos="slide-right" data-aos-duration="500">After launch care</h3>
                <p className=' lg:text-[20px] text-[16px] font-poppins mt-[20px] text-[#576464]'data-aos="slide-left" data-aos-duration="500">Have a peace of mind by working with us. Apps developed by Hipster always comes with a minimum of one year of warranty.</p>
              </div>
            </div>
            <div className="col-span-1 pt-[48px] px-[15px]">
              <h1 className='font-poppins text-[60px]'>2</h1>
              <div className="lg:pr-[60px] ">
                <h3 data-aos="slide-right" data-aos-duration="500" className='  lg:text-[28px] text-[22px] font-poppins text-[#000000] font-[600]'>Code, Test and Launch</h3>
                <p data-aos="slide-left" data-aos-duration="500" className='   lg:text-[20px] text-[16px] font-poppins mt-[20px] text-[#576464]'>Our frontend and backend developers work together to provide you with an end-to-end solution. Following this, we optimize the SEO and do vigorous quality assurance testing before launching it.</p>
              </div>
            </div>
            {/* <div className="col-span-1"></div> */}
          </div>

          <div className="grid md:grid-cols-2 grid-cols-1 lg:px-[0px] md:px-[50px] sm:px-[80px] px-[12px]">
            <div className="col-span-1 pt-[48px] px-[15px]">
              <h1 className='font-poppins text-[60px]'>3</h1>
              <div data-aos="slide-right" data-aos-duration="500" className="lg:pr-[60px] ">
                <h3 data-aos="slide-left" data-aos-duration="500" className='  lg:text-[28px] text-[22px] font-poppins text-[#000000] font-[600]'>Design and Evaluate</h3>
                <p className='  lg:text-[20px] text-[16px] font-poppins mt-[20px] text-[#576464]'>UI UX design is crucial to a website’s success. Prototyping is a key activity that we undertake in the early project stage. This enables all stakeholders to visualise the product, interact with it and make changes early.</p>
              </div>
            </div>
            <div className="col-span-1 pt-[48px] px-[15px]">
              <h1 className='font-poppins text-[60px]'>4</h1>
              <div className="lg:pr-[60px] ">
                <h3 data-aos="slide-right" data-aos-duration="500" className='   lg:text-[28px] text-[22px] font-poppins text-[#000000] font-[600]'>Discover, Define and Strategize</h3>
                <p data-aos="slide-left" data-aos-duration="500" className='  lg:text-[20px] text-[16px] font-poppins mt-[20px] text-[#576464]'>We listen to your short and long term goals. Study your industry, conduct competitor's research and recommend you the right solutions. We don't just wait for instructions from you, we offer our point of view.</p>
              </div>
            </div>
            {/* <div className="col-span-1"></div> */}
          </div>
        </Container4>
      </div>

     
    </div>
  )
}





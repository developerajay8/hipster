


import React from 'react'
import Container4 from '../../components/Container4'
import { Focus, Fx, Mirror, warning, Ajay, bomb, Nimble, Sx, groups, invalidname, notched, pencil3, two, rep, edt, ast, atn, SS, gm, kt, wtcl, sstf, olm, f, s, t, fo, fi, si } from '../../assets'
import { TiArrowRight } from "react-icons/ti";


import Data from './data'
import Accord from './Accord'
import { Link } from 'react-router-dom'
import Container2 from '../../components/Container2'
import SimpleSlider from './SimpleSlider';




export default function Branding() {
  const accordElems = Data.map(
    (d, i) => {
      // console.log(d,i);
      return <Accord key={i} title={d.title} body={d.body} seo={d.seo} sep={d.sep} seps={d.seps} />

    }
  )
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
              Branding
            </h1>
            <h2
              className=" font-semibold text-[#001817] xl:text-[32px] lg:text-[28px] sm:text-[24px]
           text-[22px] font-poppins lg:mt-[60px] md:mt-[30px] sm:mt-[18px] mt-[16px] mb-[15px] sm:leading-[40px] leading-[27px]"
              data-aos="slide-left"
              data-aos-duration="500"
            >
              Build a distinctive brand identity that resonates with your audience. Our branding services encompass market research, brand strategy, and visual identity design, ensuring that your brand stands out in the competitive landscape.
            </h2>
          </div>
        </div>
      </Container4>
      <div className="nit lg:min-h-[800px] md:min-h-[500px] min-h-[300px]">
      </div>


      <div className="py-[80px]">
        <Container4>
          <div className="grid grid-cols-1 xl:px-[0px] lg:px-[10px] md:px-[30px] px-[20px] ">
            <h2 className='lg:text-[46px] text-[35px] font-poppins font-semibold mb-[15px] text-[#000000]'>How we do it:</h2>
          </div>


          <div className="grid md:grid-cols-2 grid-cols-1 gap-6 lg:px-[0px] md:px-[60px] sm:px-[100px] px-[10px]">
            <div className="col-span-1 lg:pr-[60px] pr-[12px] pt-[48px] pl-[12px]" data-aos="slide-right" data-aos-duration="500">
              <img src={Nimble} alt="" />
              <h3 className='lg:text-[28px] text-[22px] font-poppins mb-[16px] text-[#000000] font-semibold'>Comprehensive Brand Strategy Development: </h3>
              <p className='lg:text-[20px] text-[16px] text-[#596868] font-poppins '>We begin by diving deep into the client's business, understanding their vision, mission, values, and market positioning. We then analyze the client's target market and develop brand persona that guide the creation of messaging and visuals tailored to the specific needs, preferences, and behaviors of the audience. 
              </p>
            </div>
            <div className="col-span-1 lg:pl-[60px] pl-[12px] pt-[48px] pr-[12px]" data-aos="slide-left" data-aos-duration="500">
              <img src={notched} alt="" />
              <h3 className='lg:text-[28px] text-[22px] font-poppins mb-[16px] text-[#000000] font-semibold'>
              Creating a Strong Visual Identity: </h3>
              <p className='lg:text-[20px] text-[16px] text-[#596868] font-poppins '>Business10X designs logos and brand visuals that encapsulate the essence of the brand, making it instantly recognizable and memorable. A strong visual identity helps clients stand out in a crowded market, making a lasting impression on potential customers.
              </p>
            </div>
          </div>


          <div className="grid md:grid-cols-2 grid-cols-1 gap-6 lg:px-[0px] md:px-[60px] sm:px-[100px] px-[10px]">
            <div className="col-span-1 lg:pr-[60px] pr-[12px] pt-[48px] pl-[12px]" data-aos="slide-right" data-aos-duration="500">
              <img src={Focus} alt="" />
              <h3 className='lg:text-[28px] text-[22px] font-poppins mb-[16px] text-[#000000] font-semibold'>Crafting a Distinctive Brand Voice: </h3>
              <p className='lg:text-[20px] text-[16px] text-[#596868] font-poppins '>We help clients develop a unique brand voice that reflects their personality, values, and market positioning. This voice is carried through all communications, ensuring that the brand speaks with clarity and consistency across all channels.
              </p>
            </div>
            <div className="col-span-1 lg:pl-[60px] pl-[12px] pt-[48px] pr-[12px]" data-aos="slide-left" data-aos-duration="500">
              <img src={Mirror} alt="" />
              <h3 className='lg:text-[28px] text-[22px] font-poppins mb-[16px] text-[#000000] font-semibold'>Brand Experience and Customer Engagement:  </h3>
              <p className='lg:text-[20px] text-[16px] text-[#596868] font-poppins '>We develop strategies to engage customers through various channels, including social media, content marketing, and events. These strategies help in building a loyal community around the brand, driving word-of-mouth referrals and repeat business.</p>
            </div>
          </div>
        </Container4>
      </div>



     

      <div className="">
        <div className="grid md:grid-cols-5 grid-cols-1">
          <div className="md:col-span-3 col-span-1 p-[20px] grdnt ">
            <div className="max-w-[535px] my-auto mx-auto">
              <div className="my-[100px]">
                <h2 className='text-[50px] font-poppins mb-[15px] text-[#FFFFFF] '>Business10X's branding services help</h2>
                <p className='text-[20px] font-poppins text-[#FFFFFF]'> clients grow by crafting a compelling, cohesive brand identity that resonates with their target audience and sets them apart from the competition.</p>
              </div>
            </div>
          </div>
          <div className="md:col-span-2 col-span-1 p-[20px] backgrou">
            <div className="max-w-[310px] my-auto mx-auto ">
              <div className="my-[160px]">
                <h2 className='text-[50px] font-poppins mb-[15px] leading-[60px] text-[#FFFFFF] '>Long term success</h2>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="">
        <Container4>
          <div className="grid md:grid-cols-2 grid-cols-1 md:gap-8 w-full md:h-[600px] h-[300px] xl:px-[0px] md:px-[60px] sm:px-[50px] px-[20px]">
            <div className="col-span-1  my-auto">
              <div className='px-[15px]'>
                <h2 className='lg:text-[46px] text-[34px] text-[#000000] font-poppins'data-aos="slide-right" data-aos-duration="500">Check out our
                  <br className='md:block hidden' /> other services</h2>
              </div>
            </div>
            <div className="col-span-1  my-auto"data-aos="slide-left" data-aos-duration="500">
            <div className='px-[15px]' data-aos="slide-left"data-aos-duration="500">
                <h3 className=' lg:text-[32px] text-[22px] lg:leading-[60px] leading-[40px] TU text-[#000000] font-poppins'>
                  <Link to={'/webapplication'}>Web Application</Link>
                </h3>
                <h3 className=' lg:text-[32px] text-[22px] lg:leading-[60px] leading-[40px] TU text-[#000000] font-poppins'>
                  <Link to={'/mediaproduction'}>
                  Media Production</Link>
                </h3>
                <h3 className=' lg:text-[32px] text-[22px] lg:leading-[60px] leading-[40px] TU text-[#000000] font-poppins'>
                  <Link to={'/branding'}>Branding</Link>
                </h3>
              </div>
            </div>
          </div>
        </Container4>
      </div>
    </div>
  )
}



import React from "react";
import Container6 from "../../components/Container6";
import { Virtual_VRrealityreality } from "../../assets";
import { FaRegCalendar } from "react-icons/fa6";

const VirtualReality = () => {
  return (
    <div className="my-[80px]">
      <Container6>
        <div className="font-[poppins] mb-[24px] px-[15px]">
          <h1 className="text-[30px] md:text-[48px] pt-[20px] md:pt-[80px] leading-[1.2] text-center font-[400] ">
            Virtual Reality (VR), Augmented Reality (AR) and Mixed Reality (MR):
            Definitions and Use Cases 
          </h1>
          <div className="flex items-center justify-center gap-3 mt-[25px] md:mt-[30px] pb-[24px]">
            <FaRegCalendar className=" md:text-[25px] text-[20px]" />
            <span className="md:text-[16px]  text-[14px]"> June 28, 2022</span>
          </div>
          <div className=" md:pt-[60px] pt-[30px]">
            <img
              className="w-full mt-[20px] mb-[30px]"
              src={Virtual_VRrealityreality}
              alt=""
            />
            <p className=" md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">
              <span className="font-[600]">
                Virtual reality (VR), Augmented reality (AR)
              </span>
              and <span className="font-[600]">Mixed reality (MR)</span> are new
              emerging technologies that are here to revolutionize the world
              across sectors. You would have likely come across these terms,
              perhaps without knowing what they are or how they affect you – so
              let’s jump right in and shed some light on the subject.
            </p>
          </div>
          <div>
            <h2 className=" text-[28px] md:text-[32px] font-[600] mt-[40px] mb-[10px] md:mb-[20px] leading-[1.2]">
              First, some definitions:
            </h2>
            <p className=" md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">
              <b>Virtual reality </b>is a computer-simulated environment that
              produces real-life visual experiences, whereas{" "}
              <b>Augmented reality</b> is the enhancement of the real physical
              world using digital elements. As you might have speculated,{" "}
              <b>Mixed reality</b> is the combination of both VR and AR. From
              high-performance industrial works to convenient online shopping
              and better-quality education, what can be achieved with the right
              implementation of VR, AR and MR seem countless. To better
              understand these technologies and how they work, we have put
              together a guide on their advantages and differences, where you
              might have interacted with them in the past to give a glimpse of
              what the future with them might look like.
            </p>
          </div>

          <div>
            <h2 className="text-[28px] md:text-[32px] font-[600] mt-[40px] mb-[10px] md:mb-[20px] leading-[1.2]">
              Virtual Reality
            </h2>
            <p className=" md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">
              Virtual Reality can be <b>non-immersive</b> (think video games),{" "}
              <b>semi-immersive</b> (a common example are flight simulators), or{" "}
              <b>fully immersive</b> (right now there are no completely fully
              immersive examples but technology is fast getting there).
            </p>
          </div>

          <div>
            <h2 className=" text-[26px] md:text-[28px] font-[600] mt-[40px] mb-[10px] md:mb-[20px] leading-[1.2]">
              VR Gear
            </h2>
            <p className=" md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">
              Through the help of a VR device such as a{" "}
              <b>VR gaming headset or helmet</b>, players can explore, control
              and get immersed in a 3D environment. Once the user puts on a VR
              headset, the world around him is substituted by virtual reality
              content projected on the display screen. Sensors, lenses and
              screens all are a part of VR headset that provides a life-like or
              real-life experience of the game. More immersive hardware also
              supports smells, sounds and feelings such as heat or cold such as
              a 3D mouse, wired gloves, motion controllers, and omnidirectional
              treadmills.
            </p>
          </div>

          <div>
            <h2 className=" text-[26px] md:text-[28px] font-[500] md:font-[600] mt-[40px] mb-[10px] md:mb-[20px] leading-[1.2]">
              Real-life applications of VR
            </h2>
            <h3 className="mb-[30px] mt-[40px] text-[24px] leading-[1.2] font-[600] underline">
              In education:
            </h3>
            <ul className="list-disc text-[16px] md:text-[20px] ml-[20px] md:ml-[40px] mb-[50px] pl-[20px] md:pl-[40px]">
              <li className="pb-[20px]">
                Students can feel like they are being transported to a{" "}
                <b>battlefield or a historical site such as a museum.</b>
              </li>
              <li>
                Imagine taking a <b>field trip to Mars via 3D goggles</b>! The
                vivid and memorable scenery would without a doubt amplify
                engagement much more than a traditional textbook could.
              </li>
            </ul>
            <h3 className="mb-[30px] mt-[40px] text-[24px] leading-[1.2] font-[400] md:font-[600] underline">
              In entertainment:
            </h3>
            <ul className="list-disc text-[16px] md:text-[20px] ml-[20px] md:ml-[40px] mb-[50px] pl-[20px] md:pl-[40px]">
              <li className="pb-[20px]">
                With a VR headset and application, you could virtually{" "}
                <b>
                  sit in a stadium in Tokyo, Japan watching live Olympic events{" "}
                </b>
                — looking left, right, and straight ahead the same way you would
                in a physical stadium from the comfort of your home.
              </li>
              <li className="pb-[20px]">
                Imagine taking a <b>field trip to Mars via 3D goggles</b>! The
                vivid and memorable scenery would without a doubt amplify
                engagement much more than a traditional textbook could.
              </li>
              <li className="pb-[20px]">
                If you’ve ever taken a <b>Rollercoaster</b> with 3D googles on,
                you’ve experienced VR
              </li>
              <li>
                Don’t have a <b>tennis court?</b> With 3D goggles, you can feel
                like you’re in a tournament since you have to beat the other
                player by moving your body and swinging your racket – also
                making it quite the workout!
              </li>
            </ul>

            <h3 className="mb-[30px] mt-[40px] text-[24px] leading-[1.2] font-[400] md:font-[600] underline">
              In healthcare:
            </h3>
            <ul className="list-disc text-[16px] md:text-[20px] ml-[20px] md:ml-[40px] mb-[50px] pl-[20px] md:pl-[40px]">
              <li className="pb-[20px]">
                VR is already used in <b>medical training</b> for{" "}
                <b>diagnosis, therapy and even surgery.</b>
              </li>
              <li className="pb-[20px]">
                VR brings a <b>calming solution</b> for patients with anxiety in
                which they can be shown calming views on a VR device while being
                prepared for surgery.
              </li>
              <li className="pb-[20px]">
                Medical students can visualise <b>human anatomy</b> to
                understand the body better.
              </li>
            </ul>

            <h3 className="mb-[30px] mt-[40px] text-[24px] leading-[1.2] font-[500] md:font-[600] underline">
              In training:
            </h3>
            <ul className="list-disc text-[16px] md:text-[20px] ml-[20px] md:ml-[40px] mb-[50px] pl-[20px] md:pl-[40px]">
              <li className="pb-[20px]">
                Such as an inspection app we designed for the National
                Environment Agency for training inspectors to survey properties
                and speak to homeowners regarding dengue.
              </li>
            </ul>
          </div>

          <div>
            <h2 className=" text-[28px] md:text-[32px] text-[500] md:font-[600] mt-[40px] mb-[10px] md:mb-[20px] leading-[1.2]">Conclusion</h2>
            <p className=" md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">Indubitably, VR, AR and MR are among the hottest technologies in the tech world. Immersive technology is a result of enormous research and decades of labour. They are not just here to stay but are here to transform the way things are done in every sector. From education to entertainment to industrial application, the world is becoming more of a VR-AR-MR world. These realities are certainly changing the way of living and working. The world of science fiction that we see in movies is certainly getting closer and closer with the innovations taking place in this arena.</p>
          </div>
        </div>
      </Container6>
    </div>
  );
};

export default VirtualReality;

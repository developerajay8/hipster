import React from "react";
import Container6 from "../../components/Container6";
import { FaRegCalendar } from "react-icons/fa6";
import { AITrendsEducation } from "../../assets";
import Portfolio from "./Portfolio";

const BlogOne = () => {
  return (
    <div className="w-full py-[80px] ">
      <Container6>
        <div className="px-[15px] mb-[24px] font-poppins pt-[40px] md:pt-[40px]">
          <h1 className="mb-[24px] text-[30px] md:text-[48px] font-normal text-center">
            Top 5 AI Trends in Education for 2024
          </h1>
          <div className="flex gap-3 justify-center my-[15px] md:my-[30px]">
            <FaRegCalendar />
            <h2>January 5, 2024</h2>
          </div>
        </div>

        <div className="p-[15px] mt-[48px]">
          <img src={AITrendsEducation} className="w-full" alt="" />
        </div>
        <div className="px-[15px] mb-[24px] font-poppins">
          <h1 className=" text-[16px]  md:text-[20px] mb-[20px] font-normal font-poppins leading-[28px] md:leading-[32px]">
            Artificial Intelligence (AI) is rapidly changing the face of
            education. With the power of AI, educators can now deliver
            personalized learning experiences, assess student progress more
            accurately, and provide students with a more immersive and engaging
            learning experience. In this article, we will explore the top 5 AI
            trends in education that are expected to shape the future of
            learning in 2024.
          </h1>

          <div>
            <h2 className=" text-[28px] md:text-[32px] font-bolder mt-[40px] mb-[20px]">
              <strong>Table of Contents</strong>
            </h2>
            <ul className="listStyeleo md:text-[20px] text-[16px] leading-[28px] md:leading-[1.3em]">
              <li>
                <span className="spancolor">
                  AI-Powered Learning Management Systems
                </span>
              </li>
              <li>
                <span className="spancolor">Personalized Learning</span>
              </li>
              <li>
                <span className="spancolor">
                  Chatbots and Virtual Assistants
                </span>
              </li>
              <li>
                <span className="spancolor">Gamification of Learning</span>
              </li>
              <li>
                <span className="spancolor">AI-Powered Assessment</span>
              </li>
              <li>
                <span className="spancolor">FAQs</span>
              </li>
            </ul>
          </div>

          <div className="font-[poppins]">
            <h2 className="mt-[40px] mb-[20px] text-[28px] md:text-[2rem] font-medium">
              AI-Powered Learning Management Systems
            </h2>
            <p className="mt-[20px] text-[16px] md:text-[20px] md:leading-[32px] leading-[28px]  text-[#222] ">
              Learning management systems (LMS) are widely used in educational
              institutions to manage and deliver online courses. With AI-powered
              LMS, institutions can deliver a more personalized learning
              experience to their students. AI algorithms can track student
              progress and provide personalized recommendations based on their
              learning needs. This enables educators to create customized
              learning paths for students and ensure that they stay engaged and
              motivated.
            </p>
          </div>
          <div className="font-[poppins]">
            <h2 className="mt-[40px] mb-[20px] md:text-[2rem]  text-[28px]  font-medium">
              Personalized Learning
            </h2>
            <p className="mt-[20px] text-[16px] md:text-[20px] md:leading-[32px] leading-[28px] text-[#222] ">
              Personalized learning is a pedagogical approach that focuses on
              tailoring the learning experience to the individual needs of each
              student. AI is playing a critical role in delivering personalized
              learning experiences to students. AI algorithms can analyze
              student data to identify their learning style, preferences, and
              performance. Based on this data, AI-powered systems can provide
              personalized recommendations for learning resources, assignments,
              and assessments. This approach ensures that students get the most
              out of their learning experience.
            </p>
          </div>
          <div className="font-[poppins]">
            <h2 className="mt-[40px] mb-[20px] md:text-[2rem] text-[28px] font-medium">
              Chatbots and Virtual Assistants
            </h2>
            <p className="mt-[20px] text-[16px] md:text-[20px] md:leading-[32px] leading-[28px] text-[#222] ">
              Chatbots and virtual assistants are becoming increasingly popular
              in the education sector. These AI-powered tools can provide
              instant assistance to students and teachers, helping them with
              everything from course material to administrative tasks. Chatbots
              can also be used to provide personalized feedback and support to
              students, helping them stay on track and achieve their learning
              goals.
            </p>
          </div>

          <div className="font-[poppins]">
            <h2 className="mt-[40px] mb-[20px] md:text-[2rem] text-[28px]  font-medium">
              Gamification of Learning
            </h2>
            <p className="mt-[20px] md:text-[20px] text-[16px] md:leading-[32px] leading-[28px] text-[#222] ">
              Gamification is the use of game design principles and mechanics to
              enhance learning experiences. With the help of AI, gamification
              can be taken to a whole new level. AI algorithms can analyze
              student data to identify areas where gamification can be most
              effective. For example, AI can help educators create game-based
              learning activities that are tailored to individual students,
              ensuring that they stay engaged and motivated.
            </p>
            <div className="py-[20px]">
              <strong className="text-[20px] md:text-[16px] storg">
                Click here to check our work for{" "}
                <span className="text-[#006a83]">gamification learning</span>
              </strong>
            </div>
          </div>

          <div className="font-[poppins]">
            <h2 className="mt-[40px] mb-[20px] text-[2rem] md:text-[28px] font-medium">
              AI-Powered Assessment
            </h2>
            <p className="mt-[20px] md:text-[20px] text-[16px]  md:leading-[32px] leading-[28px] text-[#222] ">
              Assessment is a critical component of the learning process.
              AI-powered assessment tools can help educators evaluate student
              progress more accurately and efficiently. AI algorithms can
              analyze student data to identify areas where students are
              struggling and provide personalized feedback and support. This
              approach enables educators to deliver a more comprehensive
              assessment of student performance, helping them identify areas for
              improvement and provide targeted interventions.
            </p>
          </div>

          <p>
            <h2 className="mt-[40px] mb-[20px] md:text-[2rem] text-[28px] font-medium leading-[1.2] ">
              FAQs
            </h2>
          </p>
          <div className="md:text-[20px] text-[16px]  md:leading-[32px] leading-[28px] text-[#222] font-normal">
            <p className="mb-[20px] ">
              <strong>Q1. What is AI-powered assessment?</strong>
            </p>
            <p className="mb-[20px] md:text-[20px] text-[16px]">
              A1. AI-powered assessment is the use of artificial intelligence to
              evaluate student progress more accurately and efficiently.
            </p>
          </div>
          <div className="md:text-[20px] text-[16px] leading-[28px] md:leading-[32px] text-[#222] font-normal">
            <p className="mb-[20px] ">
              <strong>Q2. How does AI enable personalized learning?</strong>
            </p>
            <p className="mb-[20px]">
              A2. AI enables personalized learning by analyzing data about
              individual students and tailoring the learning experience to their
              unique needs.
            </p>
          </div>
        </div>

        {/* next blog  componant start */}
        {/* <div className="mt-[50px]">
          <PastSolution />
        </div> */}

        {/*  ............ componant download ................ */}
        <div>
          <Portfolio />
        </div>
      </Container6>
    </div>
  );
};

export default BlogOne;

// const PastSolution = () => {
//   //componant PastSolution

//   const pastData = [
//     {
//       data: "All",
//     },
//     {
//       data: "Personalized Fashion",
//     },
//     {
//       data: "Gamification in Tech",
//     },
//     {
//       data: "On-Demand Video Solutions",
//     },
//     {
//       data: "F&B",
//     },
//     {
//       data: "Match Making Platform",
//     },
//     {
//       data: "Education Tech",
//     },
//     {
//       data: "Sustainability",
//     },
//     {
//       data: "Mental Health",
//     },
//     {
//       data: "Event Management",
//     },
//   ];
//   return (
//     <div className="font-poppins px-[15px] ">
//       <h2 className="md:text-[32px]  text-[28px] mb-[24px]  font-medium md:leading-[1.2] leading-[28px]">
//         Past Solutions
//       </h2>

//       <ul className="md:text-[20px] text-[14px] font-normal cursor-pointer flex md:gap-3 gap-[5px] flex-wrap">
//         {pastData.map((data, i) => {
//           return (
//             <li className="pastHover" key={i}>
//               {data.data}
//               <div className="hoverColorg "></div>
//             </li>
//           );
//         })}
//       </ul>
//     </div>
//   );
// };

// Download our portfolio componant

// const DOWNLOAD = () => {
//   return (
//     <div className="flex  ">
//       <div className="w-[390px] h-[368px] px-[15px] ">
//         <div className="animationBlog  mx-auto my-[20px]">
//           <h3 className="text-[#fff] text-[28px] font-medium leading-[1.2] mb-[24px] ">
//             Download Our Portfolio{" "}
//           </h3>
//           <div className="w-[246px] animationIMG">
//             <img className="w-full" src={portf} alt="" />
//           </div>
//         </div>
//       </div>
//       <div className="flex items-center">
//         <div>
//           <h2 className="text-[24px] font-medium py-[10px]">Let's Connect!</h2>
//           <p className="text-[#001817]  text-[18px] mb-[10px] font-normal">
//             Together, we'll scale milestones for your next business idea.
//           </p>
//           <button className="text-[#fff] bg-[#32373c] rounded-[30px] py-[12px] px-[22px] mt-[24px] buttonclg ">
//             Send Message
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };
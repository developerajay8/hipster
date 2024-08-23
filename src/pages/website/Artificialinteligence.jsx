

import React from "react";
import Container6 from "../../components/Container6";
import { end, ios14, makemobile, trdpi } from "../../assets";
import { FaRegCalendar } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Portfolio from "./Portfolio";

const Artificialinteligence = () => {
  return (
    <div className="md:my-[80px] my-[20px] ">
      <Container6>

        <div className="">
          <li className="list-none text-center ">
            <Link to={''} className="rounded-3xl text-[18px] font-poppins bg-[#00b1ac33] py-[10px] px-[26px]">Artificial Intelligence</Link>
          </li>

        </div>
        <div className="font-[poppins] mb-[24px] px-[15px] xl:mx-[0px] lg:mx-[40px] md:mx-[40px] sm:mx-[20px] mx-[0px]">
          <h1 className="text-[30px] md:text-[48px] pt-[20px] md:pt-[80px] leading-[1.2] text-center font-[400] ">
            Impact of Artificial Intelligence on App Development
          </h1>
          <div className="flex items-center justify-center gap-3 mt-[25px] md:mt-[30px] pb-[24px]">
            <FaRegCalendar className=" md:text-[25px] text-[20px]" />
            <span className="md:text-[16px]  text-[14px]">  November 21, 2019</span>
          </div>

          <div className=" md:pt-[20px] pt-[20px]">
            <img
              className="w-full mt-[20px] mb-[30px]"
              src={end}
              alt=""
            />
          </div>


          <div className="mt-[40px]">
            {/* <h3 className="sm:text-[28px] text-[22px] mt-[40px] mb-[30px] font-bold">All you need to know about iOS 14- Features, Compatibility, Release Date, and Reviews</h3> */}
            <p className=" md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">
              When we think of <b>Artificial Intelligence</b> (AI), we imagine a picture of the robotic machines that replace human intelligence and make us jobless. It may sound threatening the way it is portrayed socially but actually, we are surrounded by AI in lives in various ways:-
            </p>


            <ul className="list-disc sm:ml-[70px] ml-[30px] leading-[27px] mt-[20px] text-[20px] text-[#222222] font-poppins">
              <li className="mb-[14px]"><b>Email Filters in Gmail</b>:- The way Gmail filters out our email in primary, updates, promotions, spam, etc. It is done by AI Algorithms. Recently, Gmail has introduced automatic smart suggested replies and follow up reminder nudge. Google claims to filter 95% of spam in your inbox and sometimes genuine emails also go into Spam.</li>
              <li className="mb-[14px]"><b>Netflix</b>:- I watched a crime thriller recently and your Netflix account shows you many crime thrillers in the suggested watch list. Have you experienced something similar already? Its Netflix’s AI algorithms to personalize the list based on your past history.</li>
              <li className="mb-[14px]"><b>Pinterest</b>:- Pinterest uses object lens algorithms to filter images that are similar to the one that you are searching for. Take a picture and Pinterest will show you thousands of similar images in your list.</li>
              <li className="mb-[14px]"><b>Linkedin</b>:-  Linkedin matches candidates to  jobs based on skills and also helps companies to find great candidates. This is done with the help of AI-based predictions on a big database.</li>
              <li className="mb-[14px]"><b>Tinder</b>:- Feeling cupid? Surprisingly Tinder plays with your emotions with their AI-based suggestions that are matched based on your likes/dislikes or swipe left/right.</li>
              <li className="mb-[14px]"><b>Chatbots</b>:- Funniest AI applications  that needs many improvements. Based on words and sentences in questions, chatbots replies with helpful content as if you are talking to a real person.</li>
              <li className="mb-[14px]"><b>Google Predictive Searches</b>: – When you start typing “Impact of Artificial intelligence”, It shows many suggestions from the user History, based on popularity and relevance.</li>
              <li className="mb-[14px]"><b>Airline Flights</b>:- Autopilot is an AI pilot who is on work. On Average, manual piloting is less than 10% in the entire flight experience.</li>
              <li className="mb-[14px]"><b>Maps and Directions</b>:- AI algorithms use huge data of routes and transport systems to find you the best and fastest paths to your destinations.</li>
              <li className="mb-[14px]"><b>Financial Institutions Fraud Prevention & Banking</b>:- Fraud Detection in financial institutions like banks helps you to detect fraudulent transactions. It also reminds you to pay bills and is used in other personalization of services.</li>
              <li className="mb-[14px]"><b>Recommendations</b>:- Amazon recommends the products and Spotify recommends music based on your past activities using AI algorithms.</li>
            </ul>



          </div>

          <div className="mt-[40px]">
            {/* <h3 className="sm:text-[28px] text-[22px] mt-[40px] mb-[30px] font-bold">All you need to know about iOS 14- Features, Compatibility, Release Date, and Reviews</h3> */}
            <p className=" md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">
              Artificial Intelligence drives our life more than we think it does. Some of the use cases that you integrate with a mobile app or business. The cases below are available as services from Google Cloud or Amazon Web services to try it out in your app:-
            </p>


            <ul className="list-disc sm:ml-[70px] ml-[30px] leading-[27px] mt-[20px] text-[20px] text-[#222222] font-poppins">
              <li className="mb-[14px]"><b>Text Comprehension & Analysis</b>:- Natural language processing to find insights and relationships in a text. Customer emails, support tickets, product reviews, call center conversations, and social media contain a rich amount of information about your business.  Using AI to extract the emotions of your users to use it better analysis to improve the User experience or overall business. This can be used to analyze user Reviews, user posts and comments in your app.</li>
              <li className="mb-[14px]"><b>Forecast</b>:- Forecast uses machine learning to combine time series data with additional variables to build forecasts. Based on historical patterns, the prediction is given to you that helps in financial & health data. For Fintech apps and Health apps, It is the best scenario to show predictions to your users. Historic & chronic data becomes useful with pattern analysis and that’s exactly apple watch tracks your health which recently was in the news for forecasting a heart attack.</li>


              <li className="mb-[14px]"><b>Lex/Chatbots</b>:- Chatbots are not new and every interactive platform provides chatbots for supporting the communication based on textual content and pattern answers. Automatic language procession to analyze the intent of text enables many platforms to build applications with highly engaging user experiences and lifelike conversational interactions within your app.</li>
              <li className="mb-[14px]"><b>Personalize</b>:-  Machine learning algorithms that make it easy for developers to create individualized recommendations for customers using their applications. Your app provides an activity stream from your application – clicks, page views, signups, purchases, and so forth – as well as an inventory of the items you want to recommend, such as articles, products, videos, or music. You can also choose to provide additional demographic information from your users such as age, or geographic location.</li>
              <li className="mb-[14px]"><b>Lifelike speech</b>:- A service that converts text into lifelike speech, enabling start-ups to create applications that talk, and build entirely new categories of speech-enabled products. Alexa/Google home is one of those consistent voices that enabled the Impact of <b>Artificial intelligence</b> that can talk and answers things in speech instead of text.</li>
              <li className="mb-[14px]"><b>Image recognition(Image processing and Analytics)</b>:- Amazon Recognition makes it easy to add image and video analysis to your applications. Image recognition also provides highly accurate facial analysis and facial recognition on images and video that you provide. Start-ups generally use it for facial authentication, showing similar products, Visual Search, etc.</li>
              <li className="mb-[14px]"><b>Text extract(OCR)</b>:-  Amazon Textract is a service that automatically extracts text and data from scanned documents. This goes beyond simple optical character recognition (OCR) to also identify the contents of fields in forms and information stored in tables.</li>
              <li className="mb-[14px]"><b>Transcribe/Speech to Text</b>:- Amazon Transcribe makes it easy for developers to add speech-to-text capability to their applications. Audio data is virtually impossible for computers to search and analyze. For apps supporting voice inputs and case studies like a call center can use that.</li>
              <li className="mb-[14px]"><b>Automatic Translation</b>:- Amazon Translate is a neural machine translation service that delivers fast, high-quality, and affordable language translation. AI-based algorithms from Amazon gives accurate translations using Neural deep learning models to deliver natural translations with a large source of data.  It is easy to deliver your app in multi-language for international users and to easily translate large volumes of text efficiently, without manually translating it all over.</li>
              <li className="mb-[14px]"><b>Anti-Fraud Detection</b>:-  It provides anti-fraud detection services to be used when a loan applicant submits an application. It matches owners’ data with current user’s patterns and if any discrepancies are found, it detects it as unauthenticated or a fraud.</li>
              <li className="mb-[14px]"><b>Big Data  Analysis:- Impact of  <Link className="text-[#006a83] hover:text-[#000000]" to={'/artificialinteligence'}>Artificial Intelligence</Link> </b> (AI) & algorithms enhance the ability for big data analytics and IoT platforms to provide value to each of these market segments. AI applied with large raw data provides more insights and meaningful information that helps in decision making.</li>
            </ul>

            <p className=" md:text-[20px] taxt-[16px] leading-[28px] md:leading-[32px] text-[#222] mt-[20px]">
            Click here: <Link className="text-[#006a83] hover:text-[#000000]" to={'/artificialinteligence'}>Impact of Artificial Intelligence</Link>
            </p>




          </div>

          


        </div>


        <div>
          <Portfolio />
        </div>
      </Container6>
    </div>
  );
};

export default Artificialinteligence;

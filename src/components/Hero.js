import React from "react";
import Navbar from "./Navbar";
import MySkills from "./MySkills";
import profile from "../components/images/dela.jpg";

import "./myStyle.css";
import { FaArrowRight } from "react-icons/fa";
import { DiJavascript1, DiHtml5, DiCss3, DiReact } from "react-icons/di";
import { SiTailwindcss, SiTypescript, SiNextdotjs } from "react-icons/si";
import { useInView } from "react-intersection-observer";
function FadeInSection(props) {
  const [ref, inView] = useInView({
    threshold: 1,
    triggerOnce: true, // Ensures the animation only happens once
  });
  return (
    <div
      ref={ref}
      className={`transition-transform transform ${
        inView ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
      }`}
    >
      {props.children}
    </div>
  );
}

const Hero = () => {
  const [ref, inView] = useInView({
    threshold: 1,
    triggerOnce: true, // Ensures the animation only happens once
  });
  return (
    <div className="bg ">
      <Navbar />
      <FadeInSection>
        <div className="md:py-16 pt-16   justify-center flex flex-col  max-w-7xl first items-center mx-auto">
          <div>
            <div className="w-[250px]  h-[250px] lg:mt-14 mt-10  rounded-full overflow-hidden ">
              <img src={profile} alt="" />
            </div>
          </div>
          <div>
            <p className="text-[20px] -mt-10 md:text-2xl font-poppins text-white md:max-w-2xl text-center ">
              Hi, I'm Dela👋
              <span className="text-gradient text-5xl ">
                <br />A Frontend Developer
              </span>
            </p>

            <div className="">
              {/* <div className="h-[28px] w-[87px] md:h-[56px] md:w-[174px] bg-gradient-to-bl from-[#AA00FF] to-[#0DCCF2] "></div>
            <button className="text-[12px] md:text-[18px] font-poppins h-[28px] w-[87px] md:h-[56px] md:w-[174px] bg-white absolute md:-top-1.5 -top-1 -left-1 md:-left-1.5 md:bottom-[90px] bottom-[5px] flex justify-evenly items-center">
              Let's Talk <FaArrowRight className="md:text-[12px]" />
            </button> */}
              <div className="flex justify-center items-center  pt-6">
                <h2 className="text-white flex-none">My Tech Stack |</h2>
                <div className="flex justify-evenly ml-3 bg-white py-2 px-2 rounded-lg">
                  <DiJavascript1 className="text-black text-[20px] ml-[6px]" />
                  <DiHtml5 className="text-black text-[20px] ml-[6px]" />
                  <DiReact className="text-black text-[20px] ml-[6px]" />
                  <DiCss3 className="text-black text-[20px] ml-[6px]" />
                  <SiTailwindcss className="text-black text-[20px] ml-[7px]" />
                  <SiTypescript className="text-black text-[20px] ml-[7px]" />
                  <SiNextdotjs className="text-black text-[20px] ml-[7px]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </FadeInSection>
    </div>
  );
};

export default Hero;

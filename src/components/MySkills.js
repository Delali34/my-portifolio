import React from "react";
import logo from "../components/images/logo.png";
import logo2 from "../components/images/Logo2.png";
import logo3 from "../components/images/Logo3.png";
import { AiFillEdit } from "react-icons/ai";
import { BsStack } from "react-icons/bs";
import { FaHandshake } from "react-icons/fa";
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

const MySkills = () => {
  const [ref, inView] = useInView({
    threshold: 1,
    triggerOnce: true, // Ensures the animation only happens once
  });
  return (
    <div className="bg1">
      {" "}
      <div
        className="pt-[200px] font-poppins max-w-7xl mx-auto pb-[150px]"
        id="services"
      >
        <FadeInSection>
          <h2 className="text-[30px] md:text-6xl font-bold text-[#c6c5c5] text-center	font-poppins">
            Designing <span className="text-gradient"> Stunning Websites </span>
            <br />
            is My Passion
          </h2>
        </FadeInSection>

        <div className="grid lg:grid-cols-3 grid-cols-1 px-5  lg:space-x-4 mt-10">
          <div className="border-white/70 border-[1px] bg-white/10 mt-5">
            <div className="text-white  p-10 ">
              <AiFillEdit className="text-3xl mt-2" />
              <h1 className="text-2xl font-bold pt-1 text-gradient">
                What I can do for you
              </h1>
              <hr className="my-5" />
              <p className="text-[15px] pt-1 text-gradient">
                Faster, better products that your users love. <br /> Here's all
                the services I provide
                <br />
                <br />
              </p>
              <span className="font-semibold text-[17px]">
                Responsive Web Design <br />
                Mobile App Design
              </span>
            </div>
          </div>
          <div className="border-white/70 border-[1px] bg-white/10 mt-5">
            <div className="text-white  p-10 ">
              <BsStack className="text-3xl mt-2" />
              <h1 className="text-2xl font-bold pt-1 text-gradient">
                {" "}
                What I work with
              </h1>
              <hr className="my-5" />
              <p className="text-[15px] pt-1 text-gradient">
                {" "}
                Work with efficient tools for good user experience. Here's all
                the tools I use
                <br />
                <br />
              </p>
              <span className="font-semibold text-[17px]">
                {" "}
                React-Native <br />
                Javascript <br />
              </span>
            </div>
          </div>
          <div className="border-white/70 border-[1px] bg-white/10 mt-5">
            <div className="text-white  p-10 ">
              <FaHandshake className="text-3xl" />
              <h1 className="text-2xl font-bold pt-1 text-gradient">
                What you can expect
              </h1>
              <hr className="my-5" />
              <p className="text-[15px] pt-1 text-gradient">
                {" "}
                Developing websites and apps with good user interfaces and fast
                optimization.
                <br />
                <br />
              </p>
              <span className="font-semibold text-[17px]">
                {" "}
                User friendly websites and apps <br />
                Fast and efficient
              </span>
            </div>
          </div>
        </div>

        {/* <div className="flex flex-wrap justify-center md:flex md:justify-evenly md:items-start items-center my-[70px]">
          <div className=" mb-[80px] text-center">
            <div className="flex justify-center">
              <img src={logo} alt="" />
            </div>
            <h3 className="text-[24px] md:text-center font-bold font-poppins">
              What I can do for you
            </h3>
            <p className="text-[18px] md:text-center text-[#797979] font-poppins font-normal w-[357px] my-[12px]">
              Faster, better products that your users love. Here's all the
              services I provide:
            </p>

            <li className="font-bold text-[#181818] font-poppins">
              Mobile App Design
            </li>
            <li className="font-bold text-[#181818] font-poppins">
              Web Design
            </li>
          </div>

          <div className=" mb-[80px] text-center">
            <div className="flex justify-center">
              <img src={logo2} alt="" />
            </div>

            <h3 className="text-[24px] md:text-center font-bold font-poppins">
              What I work with
            </h3>
            <p className="text-[18px] md:text-center text-[#797979] font-poppins font-normal w-[357px] my-[12px]">
              Work with efficient tools for good user experience. Here's all the
              tools I use:
            </p>

            <li className="font-bold text-[#181818] font-poppins">React</li>
            <li className="font-bold text-[#181818] font-poppins">
              React-Native
            </li>
            <li className="font-bold text-[#181818] font-poppins">Bootstrap</li>
            <li className="font-bold text-[#181818] font-poppins">
              Javascript
            </li>
          </div>

          <div className=" mb-[80px] text-center">
            <div className="flex justify-center">
              <img src={logo3} alt="" />
            </div>

            <h3 className="text-[24px] md:text-center font-bold font-poppins">
              What you can expect
            </h3>
            <p className="text-[18px] md:text-center text-[#797979] font-poppins font-normal w-[357px] my-[12px]">
              Developing websites and apps with good user interfaces and fast
              optimization.
            </p>

            <li className="font-bold text-[#181818] font-poppins">
              User friendly websites and apps
            </li>
            <li className="font-bold text-[#181818] font-poppins">
              Fast and efficient
            </li>
            <li className="font-bold text-[#181818] font-poppins">
              Neat Interfaces
            </li>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default MySkills;

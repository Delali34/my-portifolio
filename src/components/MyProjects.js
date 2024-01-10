import React from "react";
import hungryImg from "../components/images/Screenshot 2023-11-01 162524.png";
import cert from "../components/images/second.png";
import health from "../components/images/first.png";
import news from "../components/images/Screenshot 2023-11-01 141132.png";
import {
  DiBootstrap,
  DiCss3,
  DiJavascript1,
  DiReact,
  DiHtml5,
} from "react-icons/di";
import { SiTailwindcss, SiTypescript, SiNextdotjs } from "react-icons/si";
import { FaGithub, FaEye } from "react-icons/fa";
import "./myStyle.css";
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

const MyProjects = () => {
  const [ref, inView] = useInView({
    threshold: 1,
    triggerOnce: true, // Ensures the animation only happens once
  });

  return (
    <div className="md:px-[50px] px-[25px] py-[100px]  bg" id="portifolio">
      <FadeInSection>
        <div className=" ">
          <h2 className="text-[30px] text-center md:text-6xl font-bold text-[#fff]   font-poppins">
            Some Of <span className="text-gradient"> My Finest </span>
            <br />
            Works
          </h2>
        </div>
      </FadeInSection>

      <section className="md:mt-[100px] mt-[50px]  ">
        <div className="lg:flex justify-center gap-10">
          {" "}
          <div className=" mb-[50px] border-white grid grid-cols-1 place-items-center border-[1px] p-5">
            {/* Image div */}
            <a
              href="https://www.leadafrique.org/"
              target="_blank"
              className="w-[380px] h-[300px] rounded-md flex justify-center overflow-hidden"
            >
              <img
                src={health}
                alt=""
                className="sm:w-[500px] w-[300px] overflow-hidden md:h-[400px] h-[250px] grayscale hover:grayscale-0 object-cover transition-all duration-300 transform hover:scale-105"
              />
            </a>

            {/* Description */}
            <div className="md:w-[450px] flex flex-col justify-center">
              <h2 className="text-white text-center font-poppins mt-10 md:text-[20px] text-[17px] font-bold mb-[15px] text-gradient">
                Leadafrique International Website
              </h2>
              <p className="text-center font-poppins md:text-[15px] text-[12px] text-white">
                Created a vibrant and user friendly website for the organization
                with responsiveness.
              </p>

              <div className="flex  justify-evenly mt-5 bg-white/20 p-3 rounded-xl">
                <SiNextdotjs className="text-white w-[30px] h-[30px]  text-[35px] text-gradient" />
                <SiTailwindcss className="text-white w-[30px] h-[30px]  text-[35px] text-gradient" />
                <SiTypescript className="text-white w-[30px] h-[30px]  text-[35px] text-gradient" />
              </div>

              <div className="mt-5">
                <a
                  href="https://www.leadafrique.org/"
                  target="_blank"
                  className="  text-white font-poppins flex justify-center"
                >
                  <p className="text-center hover:bg-white hover:text-black w-[150px] p-2 rounded-lg duration-200">
                    {" "}
                    Live Preview
                  </p>
                </a>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 place-items-center mb-[50px] border-white border-[1px] p-5">
            {/* Image div */}
            <a
              href="https://www.thebrocodegh.com/"
              target="_blank"
              className="w-[380px] h-[300px] flex justify-center rounded-md overflow-hidden"
            >
              <img
                src={news}
                alt=""
                className="sm:w-[500px] w-[300px] overflow-hidden md:h-[400px] h-[250px] grayscale hover:grayscale-0 object-cover transition-all duration-300 transform hover:scale-105"
              />
            </a>

            {/* Description */}
            <div className="md:w-[450px] flex flex-col justify-center ">
              <h2 className="text-white text-center font-poppins mt-10 md:text-[20px] text-[17px] font-bold mb-[15px] text-gradient">
                The brocodegh Website
              </h2>
              <p className="text-center font-poppins md:text-[15px] text-[12px] text-white">
                Developed and currently manage a website called thebrocodegh.com
                for a popular Twitter influencer named KalyJay
              </p>

              <div className="flex  justify-evenly mt-5 bg-white/20 p-3 rounded-xl">
                <SiNextdotjs className="text-white w-[30px] h-[30px]  text-[35px] text-gradient" />
                <SiTailwindcss className="text-white w-[30px] h-[30px]  text-[35px] text-gradient" />
                <DiJavascript1 className="text-white w-[30px] h-[30px]  text-[35px] text-gradient" />
              </div>

              <div className="mt-5">
                <a
                  href="https://www.thebrocodegh.com/"
                  target="_blank"
                  className="  text-white font-poppins flex justify-center"
                >
                  <p className="text-center hover:bg-white hover:text-black w-[150px] p-2 rounded-lg duration-200">
                    {" "}
                    Live Preview
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:flex justify-center gap-10">
          <div className=" mb-[50px] grid grid-cols-1 place-items-center border-white border-[1px] p-5">
            {/* Image div */}
            <a
              href="https://flairup.vercel.app/"
              target="_blank"
              className="w-[380px] h-[300px] rounded-md flex justify-center overflow-hidden"
            >
              <img
                src={cert}
                alt=""
                className="sm:w-[500px] w-[300px] overflow-hidden md:h-[400px] h-[250px] grayscale hover:grayscale-0 object-cover transition-all duration-300 transform hover:scale-105"
              />
            </a>

            {/* Description */}
            <div className="md:w-[450px] flex flex-col justify-center">
              <h2 className="text-white text-center font-poppins mt-10 md:text-[20px] text-[17px] font-bold mb-[15px] text-gradient">
                Flairup Website
              </h2>
              <p className="text-center font-poppins md:text-[15px] text-[12px] text-white">
                Created a fully responsive site using React.js
              </p>

              <div className="flex  justify-evenly mt-5 bg-white/20 p-3 rounded-xl">
                <DiReact className="text-white w-[30px] h-[30px]  text-[35px] text-gradient" />
                <DiCss3 className="text-white w-[30px] h-[30px]  text-[35px] text-gradient" />
                <DiJavascript1 className="text-white w-[30px] h-[30px]  text-[35px] text-gradient" />
              </div>

              <div className="mt-5">
                <a
                  href="https://flairup.vercel.app/"
                  target="_blank"
                  className="  text-white font-poppins flex justify-center"
                >
                  <p className="text-center hover:bg-white hover:text-black w-[150px] p-2 rounded-lg duration-200">
                    {" "}
                    Live Preview
                  </p>
                </a>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 place-items-center mb-[50px] border-white border-[1px] p-5">
            {/* Image div */}
            <a
              href="https://myshoppin.netlify.app/"
              target="_blank"
              className="w-[380px] h-[300px] rounded-md flex justify-center overflow-hidden"
            >
              <img
                src={hungryImg}
                alt=""
                className="sm:w-[500px] w-[300px] overflow-hidden md:h-[400px] h-[250px] grayscale hover:grayscale-0 object-cover transition-all duration-300 transform hover:scale-105"
              />
            </a>

            {/* Description */}
            <div className="md:w-[450px] flex flex-col justify-center">
              <h2 className="text-white text-center font-poppins mt-10 md:text-[20px] text-[17px] font-bold mb-[15px] text-gradient">
                Eccomerce Website
              </h2>
              <p className="text-center font-poppins md:text-[15px] text-[12px] text-white">
                Created a vibrant and user friendly website for the organization
                with responsiveness.
              </p>

              <div className="flex  justify-evenly mt-5 bg-white/20 p-3 rounded-xl">
                <DiHtml5 className="text-white w-[30px] h-[30px]  text-[35px] text-gradient" />
                <DiCss3 className="text-white w-[30px] h-[30px]  text-[35px] text-gradient" />
                <DiJavascript1 className="text-white w-[30px] h-[30px]  text-[35px] text-gradient" />
              </div>

              <div className="mt-5">
                <a
                  href="https://myshoppin.netlify.app/"
                  target="_blank"
                  className="  text-white font-poppins flex justify-center"
                >
                  <p className="text-center hover:bg-white hover:text-black w-[150px] p-2 rounded-lg duration-200">
                    {" "}
                    Live Preview
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Food Website */}

        {/* <article className="md:flex md:justify-evenly mb-[150px] flex-row-reverse"> */}
        {/* Image div */}
        {/* <a href="#" className="md:w-[380px] h-[100%] rounded-md overflow-hidden">
            <img src={cert} alt="" className="w-full h-auto transition-all duration-300 transform hover:scale-110"
/>
          </a> */}

        {/* Description */}
        {/* <div className="md:w-[450px]">
            <h2 className="text-white text-center font-poppins text-[20px] font-bold mb-[15px] text-gradient2">
              Health Website
            </h2>
            <p className="text-center font-poppins text-[15px] text-white">
              A health website provides information on various health topics,
              including medical conditions, wellness tips, nutrition, and
              fitness. It aims to educate and empower individuals to make
              informed decisions about their health. Users can access articles,
              videos, and interactive tools, and find healthcare providers and
              resources for better well-being.
            </p>

            <div className="flex justify-evenly mt-5">
              <DiReact className="text-white w-[30px] h-[30px] rounded-full text-[35px] text-gradient3" />
              <DiCss3 className="text-white w-[30px] h-[30px] rounded-full text-[35px] text-gradient3" />
              <DiJavascript1 className="text-white w-[30px] h-[30px] rounded-full text-[35px] text-gradient3" />
            </div>

            <div className="flex justify-evenly mt-5">
              <a href="#" className="flex items-center  text-white font-poppins">
                <FaGithub className="mx-1" />
                Code
              </a>
              <a href="#" className="flex items-center  text-white font-poppins">
                <FaEye className="mx-1" />
                Live Preview
              </a>
            </div>
          </div>
        </article> */}
      </section>
    </div>
  );
};

export default MyProjects;

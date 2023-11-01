import React, { useState } from "react";
import { FaGithub, FaInstagram, FaLinkedin, FaMailBulk } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FiMenu } from "react-icons/fi";
import "./myStyle.css";
import cv from "../components/images/Anyomitse Ernest Delali Resume (1).pdf";
import MobileNav from "./MobileNav";
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
        inView ? "translate-x-0 opacity-100" : "translate-x-4 opacity-0"
      }`}
    >
      {props.children}
    </div>
  );
}
function FadeInSection1(props) {
  const [ref, inView] = useInView({
    threshold: 1,
    triggerOnce: true, // Ensures the animation only happens once
  });
  return (
    <div
      ref={ref}
      className={`transition-transform transform ${
        inView ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"
      }`}
    >
      {props.children}
    </div>
  );
}

const Navbar = () => {
  const [ref, inView] = useInView({
    threshold: 1,
    triggerOnce: true, // Ensures the animation only happens once
  });
  const [isTrue, setIsTrue] = useState(false);

  const setToggle = () => {
    setIsTrue(!isTrue);
  };

  return (
    <header className="flex max-w-7xl mx-auto px-5 justify-between  items-center bg-transparent py-4">
      <FadeInSection>
        <div className="w-14 h-14">
          <img src="/dela.png" alt="" />
        </div>
      </FadeInSection>

      {/* <div className="flex justify-evenly bg-white p-3 rounded-lg ">
        <div>
          <a
            href="#services"
            className="mx-2.5 font-poppins text-black hover:font-bold"
          >
            Service
          </a>
        </div>
        <div>
          <a
            href="#portifolio"
            className="mx-2.5 font-poppins text-black hover:font-bold"
          >
            My Works
          </a>
        </div>
        <div>
          <a
            href="#footer"
            className="mx-2.5 font-poppins text-black hover:font-bold"
          >
            Contact
          </a>
        </div>
      
      </div> */}
      {isTrue && <MobileNav />}
      <FadeInSection1>
        <div className="">
          <a
            href={cv}
            download
            className="text-[10px] md:text-[18px] text-white border-b-[1px] border-white font-poppins"
          >
            Download Cv
          </a>
        </div>
      </FadeInSection1>
    </header>
  );
};

export default Navbar;

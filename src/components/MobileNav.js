import React, { useState } from "react";
import { FaGithub, FaInstagram, FaLinkedin, FaMailBulk } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FiMenu } from "react-icons/fi";
import "./myStyle.css";

const MobileNav = () => {
  const [isTrue, setIsTrue] = useState(false);

  const setToggle = () => {
    setIsTrue(!isTrue);
  };

  return (
    <header className="flex mx-[20px] justify-between md:justify-around items-center bg-transparent py-4 md:hidden sm:block">
      <div className="bg-gradient-to-bl from-[#AA00FF] to-[#0DCCF2]  w-7 h-7 rounded-full flex justify-center items-center">
        <h1 className="text-3l text-white font-bold font-poppins">W</h1>
      </div>

      <FiMenu
        id="menu-btn"
        className=" md:hidden text-[30px] text-white"
        onClick={setToggle}
      />

      {isTrue && (
        <div className="md:flex justify-evenly flex-col absolute top-20 right-10 bg-black">
          <div>
            <a href="#services" className="mx-2.5 font-poppins text-white">
              Service
            </a>
          </div>
          <div>
            <a href="#" className="mx-2.5 font-poppins text-white">
              Portifolio
            </a>
          </div>
          <div>
            <a href="#" className="mx-2.5 font-poppins text-white">
              Blog
            </a>
          </div>
          <div>
            <a href="#" className="mx-2.5 font-poppins text-white">
              Clients
            </a>
          </div>
          //Menu nav here classname md:hidden
        </div>
      )}

      <div className="md:flex-row flex justify-evenly items-center flex-col md:bg-transparent bg-white py-[35px] pl-[10px] h-[40vh] md:h-0 bottom-[200px] md:bottom-0 rounded-xl -left-[14px] z-10 fixed md:static md:shadow-none shadow-md">
        <FaInstagram className="mx-2.5 text-[17px] md:mb-0 mb-[6px] md:text-white" />
        <FaLinkedin className="mx-2.5 text-[17px] md:mb-0 mb-[6px]  md:text-white" />
        <FaGithub className="mx-2.5 text-[17px] md:mb-0 mb-[6px]  md:text-white" />
        <SiGmail className="mx-2.5 text-[17px] md:mb-0 mb-[5px]  md:text-white" />
      </div>
    </header>
  );
};

export default MobileNav;

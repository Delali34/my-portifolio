import React from "react";
import { FiMail, FiArrowRight } from "react-icons/fi";
import { FaGithub, FaInstagram, FaLinkedin, FaMailBulk } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
const Footer = () => {
  return (
    <div className="bg2 py-[100px] px-[50px]" id="footer">
      <div className="md:flex justify-center items-center">
        <p className="text-[40px] md:text-7xl font-poppins font-bold text-black md:max-w-2xl text-center">
          Get In
          <span className="text-black"> Touch </span>
        </p>
      </div>

      <section className="mt-[50px] text-center">
        {/* Work enquiries */}
        <div className="mt-[20px] md:mt-0">
          <h2 className="font-bold font-poppins">Work enquiries</h2>
          <p className="font-poppins text-[14px]">
            Interested in working with me?
            <p>
              <span className=" font-bold">Email</span>:{" "}
              <a href="#" className="hover:border-b-2 hover:text-blue">
                ernestanyomitse752@gmail.com
              </a>
            </p>
          </p>
        </div>
      </section>

      <hr className="mt-[30px] mb-[20px] " />

      <p className="text-center text-[#2c2c2c] font-poppins">
        &copy; 2023 Dela's Portfolio. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;

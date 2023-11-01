import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import MySkills from "./MySkills";
import MyProjects from "./MyProjects";
import { AwardSwiperComp } from "./Swiper";
import Footer from "./Footer";

const WholeWeb = () => {
  return (
    <div>
      {/* <Navbar/> */}
      <Hero />
      {/* <AwardSwiperComp/> */}
      <MySkills />
      <MyProjects />
      <Footer />
    </div>
  );
};

export default WholeWeb;

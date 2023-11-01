import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import cert1 from "../components/images/cert1.jpg"
import cert2 from "../components/images/cert2.png"
import cert3 from "../components/images/cert3.png"
import cert4 from "../components/images/cert4.jpg"
import { SiJavascript } from "react-icons/si"

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export const SwiperComp = () => {
  const responsiveOptions = {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  };

  return (
    <div className="overflow-hidden mt-[60px]">
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={20}
        slidesPerView={3}
        // navigation
        breakpoints={responsiveOptions}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true, hide: true }}
        onSwiper={(swiper) => console.log(swiper)}
        effect="fade"
        onSlideChange={() => console.log("slide change")}
        className="h-[40vh] -mr-[200px]"
      >
        <SwiperSlide>
  <div className="flex justify-center items-center">
    <div className="bg-[#DFDFDF] w-[282px] h-[398px]">
      <p>
        Everyone has the right to freedom of thought, conscience and religion;
        this right includes freedom to change his religion or belief, and
        freedom, either alone or in community with others and pay.
      </p>
    </div>
    <div className="bg-black w-[282px] h-[398px] text-white">
      <p>
        Everyone has the right to freedom of thought, conscience and religion;
        this right includes freedom to change his religion or belief, and
        freedom, either alone or in community with others and in public or
        private, to manifest his religion or belief in teaching, practice,
        worship and observance. Everyone has the right to freedom of opinion
        and expression; this right includes freedom to hold opinions without
        interference and to seek, receive and impart information and ideas
        through any media and regardless of frontiers. Everyone has the right
        to rest and leisure, including reasonable limitation of working hours
        and periodic holidays with pay.
      </p>
    </div>
  </div>
</SwiperSlide>

        <SwiperSlide className="bg-[#DFDFDF] h-[398px]">
          Slide 2
        </SwiperSlide>
        <SwiperSlide className="bg-[#DFDFDF] h-[398px]">
          Slide 3
        </SwiperSlide>
        <SwiperSlide className="bg-[#DFDFDF] h-[398px]">
          Slide 4
        </SwiperSlide>
        {/* edit swiper */}
      </Swiper>
    </div>
  );
};




//AWARDS SLIDER...
export const AwardSwiperComp = () => {
  const responsiveOptions = {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  };
  return (
    <div className="overflow-hidden mt-[60px]">
      <h4 className="overflow-hidden font-poppins my-[20px] text-center text-[18px] text-[#797979]">
        Awards & Recognitions
      </h4>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={20}
        slidesPerView={3}
        loop={true}
        // navigation
        breakpoints={responsiveOptions}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true, hide: true }}
        onSwiper={(swiper) => console.log(swiper)}
        effect="fade"
        onSlideChange={() => console.log("slide change")}
        className="h-[45vh]"
      >
        {/* <SwiperSlide className="bg-[#DFDFDF] w-[282px] overflow-hidden"> */}
        {/* <img src={cert4} alt="" /> */}
        {/* <IoLogoJavascript/> */}
        {/* </SwiperSlide> */}
        <SwiperSlide className="bg-[#DFDFDF] w-[282px] h-[398px] overflow-hidden">
          <img src={cert1} alt="" />
        </SwiperSlide>
        <SwiperSlide className="bg-[#DFDFDF] w-[282px] h-[398px] overflow-hidden">
        <img src={cert2} alt="" />
        </SwiperSlide>
        <SwiperSlide className="bg-[#DFDFDF] w-[282px] h-[398px] overflow-hidden">
        <img src={cert3} alt="" />
        </SwiperSlide>
        {/* edit swiper */}
        {/* Pagination */}
        <div className="flex justify-center mt-4">
          <span className="swiper-pagination-bullet w-[7px] h-[7px] bg-gray-700 rounded-full mx-1 cursor-pointer"></span>
          <span className="swiper-pagination-bullet w-[7px] h-[7px] bg-gray-700 rounded-full mx-1 cursor-pointer"></span>
          <span className="swiper-pagination-bullet w-[7px] h-[7px] bg-gray-700 rounded-full mx-1 cursor-pointer"></span>
        </div>
      </Swiper>
    </div>
  );
};


//AWARDS SLIDER...
export const LogoSwiperComp = () => {
  const responsiveOptions = {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  };
  return (
    <div className="overflow-hidden mt-[60px]">
      <h4 className="overflow-hidden font-poppins my-[20px] text-center text-[18px] text-[#797979]">
        Awards & Recognitions
      </h4>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={20}
        slidesPerView={3}
        loop={true}
        // navigation
        breakpoints={responsiveOptions}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true, hide: true }}
        onSwiper={(swiper) => console.log(swiper)}
        effect="fade"
        onSlideChange={() => console.log("slide change")}
        className="h-[45vh]"
      >
        <SwiperSlide className="bg-[#DFDFDF] w-[282px] overflow-hidden">
        {/* <img src={cert4} alt="" /> */}
        <SiJavascript/>
        </SwiperSlide>
        <SwiperSlide className="bg-[#DFDFDF] w-[282px] h-[398px] overflow-hidden">
          <img src={cert1} alt="" />
        </SwiperSlide>
        <SwiperSlide className="bg-[#DFDFDF] w-[282px] h-[398px] overflow-hidden">
        <img src={cert2} alt="" />
        </SwiperSlide>
        <SwiperSlide className="bg-[#DFDFDF] w-[282px] h-[398px] overflow-hidden">
        <img src={cert3} alt="" />
        </SwiperSlide>
        {/* edit swiper */}
        {/* Pagination */}
        <div className="flex justify-center mt-4">
          <span className="swiper-pagination-bullet w-[7px] h-[7px] bg-gray-700 rounded-full mx-1 cursor-pointer"></span>
          <span className="swiper-pagination-bullet w-[7px] h-[7px] bg-gray-700 rounded-full mx-1 cursor-pointer"></span>
          <span className="swiper-pagination-bullet w-[7px] h-[7px] bg-gray-700 rounded-full mx-1 cursor-pointer"></span>
        </div>
      </Swiper>
    </div>
  );
};

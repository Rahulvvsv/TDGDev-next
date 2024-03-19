import React, { useRef, useState } from "react";
// Import Swiper React components
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

import style from "./index.module.css"
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function App() {
  return (
    <>
      <Swiper
        spaceBetween={10}
        // centeredSlides={true}
        // loopedSlides={8}
        slidesPerView={4}
        a11y={false}
        autoplay={{
            delay:0.5,
          disableOnInteraction: false,
        }}
        // pagination={{
        //   clickable: true,
        // }}
        loop={true}
        speed={16000}
        // navigation={true}
        freeMode={true}
        modules={[Autoplay]}
        className="mySwiper"
      >

        <SwiperSlide>
          <div className={style.something}><Image src={"/about/slider/1.png"} responsive fill></Image></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={style.something}><Image src={"/about/slider/2.png"} responsive fill></Image></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={style.something}><Image src={"/about/slider/3.png"} responsive fill></Image></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={style.something}><Image src={"/about/slider/4.png"}  responsive fill></Image></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={style.something}><Image src={"/about/slider/5.png"}  responsive fill></Image></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={style.something}><Image src={"/about/slider/6.png"}  responsive fill></Image></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={style.something}><Image src={"/about/slider/7.png"}  responsive fill></Image></div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

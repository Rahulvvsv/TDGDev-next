
import React, { useRef, useState } from "react";
// Import Swiper React components
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

import SingleTestimonial from "../SingleTestimonial";
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
        centeredSlides={true}
        // loopedSlides={8}
        slidesPerView={2.4}
        a11y={false}
        autoplay={{
            delay:2500,
          disableOnInteraction: false,
        }}
        // pagination={{
        //   clickable: true,
        // }}
        loop={true}
        // speed={16000}
        // navigation={true}
        // freeMode={true}
        modules={[Autoplay]}
        className="mySwiper"
      >

        <SwiperSlide>
        <SingleTestimonial testimonial={"Furniture exchange was smooth and perfect and very nice wow fantastic delivery service loved the process furniture also was nice not damaged and fast delivery"}  name={"Aaryaa Joshi"} surname={"Baltimore"} ></SingleTestimonial>
        </SwiperSlide>
        <SwiperSlide>
        <SingleTestimonial testimonial={"Furniture exchange was smooth and perfect and very nice wow fantastic delivery service loved the process furniture also was nice not damaged and fast delivery"}  name={"Aaryaa Joshi"} surname={"Baltimore"} ></SingleTestimonial>
        </SwiperSlide>
        <SwiperSlide>
        <SingleTestimonial testimonial={"Furniture exchange was smooth and perfect and very nice wow fantastic delivery service loved the process furniture also was nice not damaged and fast delivery"}  name={"Aaryaa Joshi"} surname={"Baltimore"} ></SingleTestimonial>
        </SwiperSlide>
        <SwiperSlide>
        <SingleTestimonial testimonial={"Furniture exchange was smooth and perfect and very nice wow fantastic delivery service loved the process furniture also was nice not damaged and fast delivery"}  name={"Aaryaa Joshi"} surname={"Baltimore"} ></SingleTestimonial>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

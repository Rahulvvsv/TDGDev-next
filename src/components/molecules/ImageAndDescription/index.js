"use client"
import style from "./index.module.css"
import Image from "next/image";

import {  useState,useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import SingleTestimonial from "../SingleTestimonial";
import style from "./index.module.css"
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay } from "swiper/modules";

export  function App() {
  const [slidesPerView, setSlidesPerView] = useState(2.4);
  useEffect(() => {
    const handleResize = () => {
        if (window.innerWidth<400){
            setSlidesPerView(1.25);
          }
        else if (window.innerWidth < 980) {
            setSlidesPerView(1.4);
        } 
        else {
        setSlidesPerView(2.4);
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <>
      <Swiper
        spaceBetween={10}
        centeredSlides={true}
        slidesPerView={slidesPerView}
        autoplay={{
          delay:1000,
          disableOnInteraction: false,
        }}
        loop={true}
        freeMode={true}
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

const ImageAndDesc = ({img,height,width,content}) => {
    return ( 
    <div className={style.main}>
        <div className={style.image} style={{height:height}}><Image src={img} fill ></Image></div>
        <h1 className={style.content}>{content}</h1>
    </div> 
    );
}
 
export default ImageAndDesc;
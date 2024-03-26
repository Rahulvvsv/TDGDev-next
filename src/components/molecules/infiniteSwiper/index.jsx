// Import Swiper React components
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

import style from "./index.module.css"
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useEffect, useState } from "react";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function App() {
  const [slidesPerView,setSlidesPerView] = useState(4)
  useEffect(() => {
    const handleResize = () => {
        if (window.innerWidth<420){
            setSlidesPerView(2.3);
          }
        else {
        setSlidesPerView(4);
      }
    };

    // const delay = 1 * 90;
    // const timeoutId = setTimeout(() => {
    //   setIsVisible(true);
    // }, delay);
    
    handleResize();
    
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      // clearTimeout(timeoutId);
    };
  }, []);
  return (
    <>
      <Swiper
        spaceBetween={10}
        // centeredSlides={true}
        // loopedSlides={8}
        slidesPerView={slidesPerView}
        a11y={false}
        autoplay={{
            delay:0.5,
          disableOnInteraction: false,
        }}
        // pagination={{
        //   clickable: true,
        // }}
        loop={true}
        speed={8000}
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

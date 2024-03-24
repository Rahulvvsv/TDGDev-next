
import AOSComponent from "../AOS";
import {  useState,useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import {motion} from "framer-motion";
import SingleTestimonial from "../SingleTestimonial";
import style from "./index.module.css"
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay } from "swiper/modules";

export default function App() {
  const [slidesPerView, setSlidesPerView] = useState(2.4);
  const [isVisible, setIsVisible] = useState(false);
  const arr = [1,2,3,4,5,6,7];
  useEffect(() => {
    const handleResize = () => {
        if (window.innerWidth<420){
            setSlidesPerView(1);
          }
        else if (window.innerWidth < 980) {
            setSlidesPerView(1.4);
        } 
        else {
        setSlidesPerView(2.9);
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
        centeredSlides={true}
        slidesPerView={slidesPerView}
      
        autoplay={{
          delay:4000,
          disableOnInteraction: false,
        }}
        loop={true}
        freeMode={true}
        modules={[Autoplay]}
        className={style.Swiper}
      >

        {/* {arr.map((e,key)=>{

          return(

            <SwiperSlide>
        <SingleTestimonial index={0}  testimonial={"Furniture exchange was smooth and perfect and very nice wow fantastic delivery service loved the process furniture also was nice not damaged and fast delivery"}  name={"Aaryaa Joshi"} surname={"Baltimore"} ></SingleTestimonial>
        </SwiperSlide>
            )
          })
        } */}
            <SwiperSlide>
        <SingleTestimonial index={0}  testimonial={"Furniture exchange was smooth and perfect and very nice wow fantastic delivery service loved the process furniture also was nice not damaged and fast delivery"}  name={"Aaryaa Joshi"} surname={"Baltimore"} ></SingleTestimonial>
        </SwiperSlide>
            <SwiperSlide>
        <SingleTestimonial index={0}  testimonial={"Furniture exchange was smooth and perfect and very nice wow fantastic delivery service loved the process furniture also was nice not damaged and fast delivery"}  name={"Aaryaa Joshi"} surname={"Baltimore"} ></SingleTestimonial>
        </SwiperSlide>
            <SwiperSlide>
        <SingleTestimonial index={0}  testimonial={"Furniture exchange was smooth and perfect and very nice wow fantastic delivery service loved the process furniture also was nice not damaged and fast delivery"}  name={"Aaryaa Joshi"} surname={"Baltimore"} ></SingleTestimonial>
        </SwiperSlide>
            <SwiperSlide>
        <SingleTestimonial index={0}  testimonial={"Furniture exchange was smooth and perfect and very nice wow fantastic delivery service loved the process furniture also was nice not damaged and fast delivery"}  name={"Aaryaa Joshi"} surname={"Baltimore"} ></SingleTestimonial>
        </SwiperSlide>
            <SwiperSlide>
        <SingleTestimonial index={0}  testimonial={"Furniture exchange was smooth and perfect and very nice wow fantastic delivery service loved the process furniture also was nice not damaged and fast delivery"}  name={"Aaryaa Joshi"} surname={"Baltimore"} ></SingleTestimonial>
        </SwiperSlide>
            <SwiperSlide>
        <SingleTestimonial index={0}  testimonial={"Furniture exchange was smooth and perfect and very nice wow fantastic delivery service loved the process furniture also was nice not damaged and fast delivery"}  name={"Aaryaa Joshi"} surname={"Baltimore"} ></SingleTestimonial>
        </SwiperSlide>
            <SwiperSlide>
        <SingleTestimonial index={0}  testimonial={"Furniture exchange was smooth and perfect and very nice wow fantastic delivery service loved the process furniture also was nice not damaged and fast delivery"}  name={"Aaryaa Joshi"} surname={"Baltimore"} ></SingleTestimonial>
        </SwiperSlide>
            <SwiperSlide>
        <SingleTestimonial index={0}  testimonial={"Furniture exchange was smooth and perfect and very nice wow fantastic delivery service loved the process furniture also was nice not damaged and fast delivery"}  name={"Aaryaa Joshi"} surname={"Baltimore"} ></SingleTestimonial>
        </SwiperSlide>
       </Swiper>
    <br></br>
    </>
  );
}

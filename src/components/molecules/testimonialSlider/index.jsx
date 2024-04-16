
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
        <SingleTestimonial index={0}  testimonial={"Furniture exchange was smooth and perfect and very nice wow fantastic delivery service loved the process furniture also was nice not damaged and fast delivery"}  name={""} surname={""} ></SingleTestimonial>
        </SwiperSlide>
            )
          })
        } */}
            <SwiperSlide>
        <SingleTestimonial index={0}  testimonial={"TDG Furniture Exchange provided a beautiful bedroom set for a child battling cancer, uplifting her spirits immensely. Grateful for their incredible work!"}  name={""} surname={"  "} ></SingleTestimonial>
        </SwiperSlide>
            <SwiperSlide>
        <SingleTestimonial index={0}  testimonial={"As a single parent, TDG Furniture Exchange restored my faith in humanity with quality furniture donations. A beacon of hope in our community"}  name={""} surname={""} ></SingleTestimonial>
        </SwiperSlide>
            <SwiperSlide>
        <SingleTestimonial index={0}  testimonial={"TDG Furniture Exchange transformed my apartment into a home with essential pieces. Grateful for their kindness and seamless experience!."}  name={""} surname={""} ></SingleTestimonial>
        </SwiperSlide>
            <SwiperSlide>
        <SingleTestimonial index={0}  testimonial={"Thanks to TDG Furniture Exchange, I furnished my first apartment on a tight budget. Essential pieces in great condition made it possible!"}  name={""} surname={""} ></SingleTestimonial>
        </SwiperSlide>
            <SwiperSlide>
        <SingleTestimonial index={0}  testimonial={"Grateful for TDG Furniture Exchange's smart initiative and the armchair they found for our new home. Thank you for your investment!"}  name={""} surname={""} ></SingleTestimonial>
        </SwiperSlide>
            {/* <SwiperSlide>
        <SingleTestimonial index={0}  testimonial={"Thank you for investing so much time, effort and energy into your amazing furniture initiative! Such a smart initiative, really appreciate the armchair that you found us for our new home. We’re grateful for you!"}  name={""} surname={""} ></SingleTestimonial>
        </SwiperSlide> */}
            {/* <SwiperSlide>
        <SingleTestimonial index={0}  testimonial={"Furniture exchange was smooth and perfect and very nice wow fantastic delivery service loved the process furniture also was nice not damaged and fast delivery"}  name={""} surname={""} ></SingleTestimonial>
        </SwiperSlide>
            <SwiperSlide>
        <SingleTestimonial index={0}  testimonial={"Furniture exchange was smooth and perfect and very nice wow fantastic delivery service loved the process furniture also was nice not damaged and fast delivery"}  name={""} surname={""} ></SingleTestimonial>
        </SwiperSlide> */}
       </Swiper>
    <br></br>
    </>
  );
}

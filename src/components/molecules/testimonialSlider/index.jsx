
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
        <SingleTestimonial index={0}  testimonial={"I reached out to furniture exchange as soon as my friend’s child was diagnosed with cancer. The girl needed a new bed, and I thought TDG Furniture exchange might have something that could work. Since she has to spend a lot of time in bed, a nice set would definitely help improve her mood. The communication and seamless delivery of a beautiful bedroom set were unbelievable! The family was so moved by the donation."}  name={""} surname={"  "} ></SingleTestimonial>
        </SwiperSlide>
            <SwiperSlide>
        <SingleTestimonial index={0}  testimonial={"I have no words for the incredible work you do and did. I am very impressed with the unbelievable experience you had made possible for both parties! Looking forward to helping many more people through Furniture Exchange!"}  name={""} surname={""} ></SingleTestimonial>
        </SwiperSlide>
            <SwiperSlide>
        <SingleTestimonial index={0}  testimonial={"TDG Furniture Exchange truly made a difference in my life. As a single parent struggling to furnish our new home, I stumbled upon this amazing platform. Not only did I find quality furniture for my family, but the generosity and support from the donors restored my faith in humanity. Thank you for being a beacon of hope in our community."}  name={""} surname={""} ></SingleTestimonial>
        </SwiperSlide>
            <SwiperSlide>
        <SingleTestimonial index={0}  testimonial={"I couldn't believe the kindness I encountered through TDG Furniture Exchange. After a recent move, I had to start from scratch with furnishing my apartment. Thanks to this platform, I received not only essential pieces but also beautiful items that transformed my space into a home. The simplicity of connecting with donors made the experience seamless. I'm forever grateful!"}  name={""} surname={""} ></SingleTestimonial>
        </SwiperSlide>
            <SwiperSlide>
        <SingleTestimonial index={0}  testimonial={"As a college student moving into my first apartment, I was on a tight budget and didn't have much to spare for furniture. Through this platform, I received essential pieces that were in great condition, allowing me to create a comfortable living space without breaking the bank. Thank you for providing such a valuable service!"}  name={""} surname={""} ></SingleTestimonial>
        </SwiperSlide>
            <SwiperSlide>
        <SingleTestimonial index={0}  testimonial={"Thank you for investing so much time, effort and energy into your amazing furniture initiative! Such a smart initiative, really appreciate the armchair that you found us for our new home. We’re grateful for you!"}  name={""} surname={""} ></SingleTestimonial>
        </SwiperSlide>
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

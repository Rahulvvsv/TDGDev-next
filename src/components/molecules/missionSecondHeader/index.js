import style from "./index.module.css"
import ImageAndDesc from "../ImageAndDescription";
import { useState, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay } from "swiper/modules";
import { EffectCoverflow } from "swiper/modules";

function Scroll() {
  const [views,setViews] = useState(1.1)
  useEffect(()=>{
    if(window.innerWidth<=370){
      setViews(1.5)
    }
  },[])
  return (
    <>
      <Swiper
      effect="coverflow"
        spaceBetween={10}
        // centeredSlides={true}
        slidesPerView={views}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        loop={true}
        freeMode={true}
        coverflowEffect={{
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2,
    slideShadows: false,
    direction: "ltr",
  }}
        modules={[EffectCoverflow,Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
            <ImageAndDesc img={"/about/1.png"} content={"TDG Furniture Exchange fills a crucial need: providing a platform for furniture donations and distributions.Our mission is to foster sharing and connections, making a difference in people's lives."}></ImageAndDesc>
        </SwiperSlide>
        <SwiperSlide>

            <ImageAndDesc img={"/about/2.png"} height={475} width={450} content={"Rooted in the belief that everyone deserves a comfortable living space, we facilitate furniture donations and delivery at no cost to the donor or recipient. With the support of dedicated volunteers, partners, and ambassadors, we currently operate in nine locations, and aim to expand globally."}></ImageAndDesc>
        </SwiperSlide>
        <SwiperSlide>

            <ImageAndDesc img={"/about/3.png"} content={"Join us in the TDG Furniture Exchange initiative, in memory of Yonah Ben Akiva. Together, we enhance interiors and uplift communities through acts of kindness."}></ImageAndDesc>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
const MissionSecondHeader = () => {
  const [mobileView, setMobileView] = useState(false);
  useEffect(() => {
    console.log(mobileView);
    const handleResize = () => {
      if (window.innerWidth < 700) {
        setMobileView(true);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
    return ( mobileView?(<Scroll></Scroll>): 
    <div className={style.main}>
            <ImageAndDesc img={"/about/1.png"} content={"TDG Furniture Exchange fills a crucial need: providing a platform for furniture donations and distributions.Our mission is to foster sharing and connections, making a difference in people's lives."}></ImageAndDesc>

            <ImageAndDesc img={"/about/2.png"} height={475} width={450} content={"Rooted in the belief that everyone deserves a comfortable living space, we facilitate furniture donations and delivery at no cost to the donor or recipient. With the support of dedicated volunteers, partners, and ambassadors, we currently operate in nine locations, and aim to expand globally."}></ImageAndDesc>

            <ImageAndDesc img={"/about/3.png"} content={"Join us in the TDG Furniture Exchange initiative, in memory of Yonah Ben Akiva. Together, we enhance interiors and uplift communities through acts of kindness."}></ImageAndDesc>
    </div>
     );
}
 
export default MissionSecondHeader;
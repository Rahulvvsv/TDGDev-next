import style from "./index.module.css";
import Button from "../../atoms/button";
import { Swiper } from "swiper/react";
import { SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
const ThoughtAndLink = ({ Description, name, ButtonContent, href = "" }) => {
  return (
    <div className={style.main}>
      <Swiper
        slidesPerView={1}
        freeMode={true}
        autoplay={{ delay: 6000 }}
        modules={[Autoplay]}
        loop={true}
        className={style.swiper}
      >
        <SwiperSlide>
          <h1 className={style.heading}>"Helping people furnish their homes through the TDG Furniture Exchange is incredibly rewarding. It reminds us of the transformative power of design and the positive impact we can create in our communities"</h1>
          <h1 className={style.name}>- Blima Ehrentreu, The Designers Group</h1>
          <br></br>
          <Button
            content={"About Us"}
            backgroundColor={"white"}
            fontColor={"black"}
            btnClass={2}
            href={"/aboutUs"}
          ></Button>
        </SwiperSlide>
        {/* <SwiperSlide>
          <h1 className={style.heading}>Transforming spaces, transforming lives. Join TDG Furniture Exchange: where surplus meets purpose, and generosity finds a home</h1>
          <h1 className={style.name}>- Blima Ehrentreu, The Designers Group</h1>
          <br></br>
          <Button
            content={"Contact Us"}
            backgroundColor={"white"}
            fontColor={"black"}
            btnClass={2}
            href={"/contactUs"}
          ></Button>
        </SwiperSlide>
        <SwiperSlide>
          <h1 className={style.heading}>Unlocking the power of giving through furniture - where every piece tells a story of compassion and connection</h1>
          <h1 className={style.name}>- Blima Ehrentreu, The Designers Group</h1>
          <br></br>
          <Button
            content={"See All Locations"}
            backgroundColor={"white"}
            fontColor={"black"}
            btnClass={2}
            href={"/services/getFurniture"}
          ></Button>
        </SwiperSlide> */}
      </Swiper>
    </div>
  );
};

export default ThoughtAndLink;

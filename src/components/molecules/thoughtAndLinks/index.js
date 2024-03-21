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
        autoplay={{ delay: 2500 }}
        modules={[Autoplay]}
        className={style.swiper}
      >
        <SwiperSlide>
          <h1 className={style.heading}>{Description}</h1>
          <h1 className={style.name}>{name}</h1>
          <br></br>
          <Button
            content={ButtonContent}
            backgroundColor={"white"}
            fontColor={"black"}
            btnClass={2}
            href={href}
          ></Button>
        </SwiperSlide>
        <SwiperSlide>
          <h1 className={style.heading}>{Description}</h1>
          <h1 className={style.name}>{name}</h1>
          <br></br>
          <Button
            content={ButtonContent}
            backgroundColor={"white"}
            fontColor={"black"}
            btnClass={2}
            href={href}
          ></Button>
        </SwiperSlide>
        <SwiperSlide>
          <h1 className={style.heading}>{Description}</h1>
          <h1 className={style.name}>{name}</h1>
          <br></br>
          <Button
            content={ButtonContent}
            backgroundColor={"white"}
            fontColor={"black"}
            btnClass={2}
            href={href}
          ></Button>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ThoughtAndLink;

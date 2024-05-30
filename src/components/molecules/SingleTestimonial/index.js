'use client'
import style from "./index.module.css"
import Image from "next/image";
import { useEffect } from "react";
import { useState } from "react";
const SingleTestimonial = ({testimonial,name,surname,opacity,index}) => {
      const [isVisible, setIsVisible] = useState(false);
      useEffect(() => {
    const delay = index * 90;
    const timeoutId = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [index]);

    return ( 
    // <div className={style.main +" "+`${style.thumbContainer + " "} ${isVisible ? style.fadeInSlide : ''}`} style={{opacity:opacity}}>

    <div className={style.main } style={{opacity:opacity}}>
            <div className={style.image}>
                    <Image alt=" " src={"/Icon/quote3.svg"} fill></Image>
            </div>
                <h1 className={style.heading}>{testimonial}</h1>
                <div className={style.testt}>
                    <h1 className={style.name}>{name}</h1>
                    <h1 className={style.surname}>{surname}</h1>
                </div>
    </div>
     );
}
 
export default SingleTestimonial;
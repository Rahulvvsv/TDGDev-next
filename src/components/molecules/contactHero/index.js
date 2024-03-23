import style from "./index.module.css";
import Image from "next/image";
import AOSComponent from "../AOS";
const ContactHero = () => {
  return (
    <AOSComponent>
      <div className={style.main}>
        <div className={style.main2}>
          <div className={style.imageDiv}></div>
          <div className={style.image}>
            <Image src={"/contact/hero.png"} fill></Image>
          </div>
          <div data-aos="fade-up" className={style.content}>
            <h1 className={style.heading}>GET IN TOUCH</h1>
            <h1 className={style.content2}>
              Reach out, share a question, or provide feedback on our TDG
              Furniture Exchange. Fill out the form and we will send you a
              response as soon as possible.
            </h1>
          </div>
        </div>
      </div>
    </AOSComponent>
  );
};

export default ContactHero;

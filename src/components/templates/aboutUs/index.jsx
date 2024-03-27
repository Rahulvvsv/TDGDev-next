import style from "./index.module.css"
import MissionHeader from "../../molecules/missionHeader";
import MissionSecondHeader from "../../molecules/missionSecondHeader";
import SecondHeading from "../../molecules/landing-secondHeading";
import InfiniteSwiper from "../../molecules/infiniteSwiper/index"
import TestimonialSlider from "../../molecules/testimonialSlider"
const AboutUs = () => {
    return (
        <section>
            <section>
                <MissionHeader></MissionHeader>
            </section>
            <section className={style.sizes}>
                <SecondHeading heading={"Our Story"} contactHeading={"Contact Us"}></SecondHeading>
            </section>
            <section className={style.sizes2}>
                <MissionSecondHeader></MissionSecondHeader>
            </section>
            <section className={style.divs}>
                <h1 className={style.name}>We Connect People and Furniture</h1>
            </section>
            <section style={{marginBottom:20,marginTop:20}}>
                <InfiniteSwiper></InfiniteSwiper>
            </section>
            <br />
            <section>
                <TestimonialSlider></TestimonialSlider>
            </section>
            <br />
            
        </section>
      );
}
 
export default AboutUs;
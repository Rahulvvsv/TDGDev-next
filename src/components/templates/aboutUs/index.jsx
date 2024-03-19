import style from "./index.module.css"
import MissionHeader from "../../molecules/missionHeader";
import MissionSecondHeader from "../../molecules/missionSecondHeader";
import SecondHeading from "../../molecules/landing-secondHeading";
import InfiniteSwiper from "../../molecules/infiniteSwiper/index"
const AboutUs = () => {
    return (
        <section>
            <section>
                <MissionHeader></MissionHeader>
            </section>
            <section>
                <SecondHeading heading={"Our Story"} contactHeading={"Contact Us"}></SecondHeading>
            </section>
            <section>
                <MissionSecondHeader></MissionSecondHeader>
            </section>
            <section style={{marginBottom:20,marginTop:20}}>
                <InfiniteSwiper></InfiniteSwiper>
            </section>
        </section>
      );
}
 
export default AboutUs;
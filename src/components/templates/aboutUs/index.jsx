import style from "./index.module.css"
import MissionHeader from "../../molecules/missionHeader";
import MissionSecondHeader from "../../molecules/missionSecondHeader";
import SecondHeading from "../../molecules/landing-secondHeading";
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
        </section>
      );
}
 
export default AboutUs;
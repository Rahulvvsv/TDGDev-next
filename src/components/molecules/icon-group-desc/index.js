import Icondesc from "../icon-desc";
import Image from "next/image";
import style from "./index.module.css"
import AOSComponent from "../AOS";
const IconGroupDesc = () => {
    return (
        <AOSComponent>

    <div className={style.main} data-aos="fade-down" >
        <div className={style.dottedLine}>
            <Image src={"/Icon/line.png"} fill></Image>
        </div>
        <div className={style.dottedLine2}>

            <Image src={"/Icon/line1.png"}  fill></Image>
        </div>
        <Icondesc src={"1.png"} first={"Choose Location"} second={"Pick a location from our options."}></Icondesc>
        <Icondesc  src={"2.png"} first={"Select Furniture"} second={"Browse the furniture and select what you need."}></Icondesc>
        <Icondesc  src={"3.png"} first={"Click to Submit"} second={"You are all set! The donor will contact you with next steps."}></Icondesc>
    </div> 
        </AOSComponent>
    );
}
 
export default IconGroupDesc;
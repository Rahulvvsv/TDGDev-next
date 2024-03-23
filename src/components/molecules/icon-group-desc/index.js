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
        <Icondesc src={"1.png"} first={"Location"} second={"Find us anywhere"}></Icondesc>
        <Icondesc  src={"2.png"} first={"Choose"} second={" If you are interested in an item, click Contact Donor"}></Icondesc>
        <Icondesc  src={"3.png"} first={"Contact"} second={"You are all set! The donor will be in touch with you with further instructions"}></Icondesc>
    </div> 
        </AOSComponent>
    );
}
 
export default IconGroupDesc;
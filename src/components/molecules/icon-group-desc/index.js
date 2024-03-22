import Icondesc from "../icon-desc";
import style from "./index.module.css"
import AOSComponent from "../AOS";
const IconGroupDesc = () => {
    return (
        <AOSComponent>

    <div className={style.main} data-aos="fade-down" >
        <Icondesc src={"1.png"} first={"Location"} second={"Find us anywhere"}></Icondesc>
        <Icondesc  src={"2.png"} first={"Choose"} second={" If you are interested in an item, click Contact Donor"}></Icondesc>
        <Icondesc  src={"3.png"} first={"Contact"} second={"You are all set! The donor will be in touch with you with further instructions"}></Icondesc>
    </div> 
        </AOSComponent>
    );
}
 
export default IconGroupDesc;
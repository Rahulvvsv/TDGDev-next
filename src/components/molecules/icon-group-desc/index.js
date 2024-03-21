import Icondesc from "../icon-desc";
import style from "./index.module.css"
import AOSComponent from "../AOS";
const IconGroupDesc = () => {
    return (
        <AOSComponent>

    <div className={style.main} >
        <Icondesc aos="fade-up" time="300" src={"1.png "} first={"Location"} second={"Find us anywhere"}></Icondesc>
        <Icondesc aos="fade-up" time="700" src={"2.png "} first={"Choose"} second={" If you are interested in an item, click Contact Donor"}></Icondesc>
        <Icondesc aos="fade-up" time="1000" src={"3.png "} first={"Contact"} second={"You are all set! The donor will be in touch with you with further instructions"}></Icondesc>
    </div> 
        </AOSComponent>
    );
}
 
export default IconGroupDesc;
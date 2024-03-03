import Icondesc from "../icon-desc";
import style from "./index.module.css"
const IconGroupDesc = () => {
    return (
    <div className={style.main} >
        <Icondesc src={"1.png "} first={"Location"} second={"Find us anywhere"}></Icondesc>
        <Icondesc src={"2.png "} first={"Location"} second={"Find us anywhere"}></Icondesc>
        <Icondesc src={"3.png "} first={"Location"} second={"Find us anywhere"}></Icondesc>
    </div> 
    );
}
 
export default IconGroupDesc;
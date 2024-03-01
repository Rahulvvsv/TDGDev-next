import style from "./index.module.css"
import Image from "next/image";
const Icondesc = ({src,first,second}) => {
    return (
    <div className={style.main}>
        <Image src={"/Icon/"+src} width={108} height={108}></Image>
        <h1 className={style.first}>{first}</h1>
        <h1 className={style.second}>{second}</h1>
    </div>
     );
}
 
export default Icondesc;
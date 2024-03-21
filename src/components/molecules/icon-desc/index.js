import style from "./index.module.css"
import Image from "next/image";
const Icondesc = ({src,first,second,aos,time}) => {
    return (
    <div className={style.main} data-aos={aos} data-aos-duration={time}>
        <Image src={"/Icon/"+src} width={108} height={108} className={style.images}></Image>
        <div className={style.main2}>

        
        <h1 className={style.first}>{first}</h1>
        <h1 className={style.second}>{second}</h1>
        </div>
    </div>
     );
}
 
export default Icondesc;
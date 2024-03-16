import style from "./index.module.css"
import Image from "next/image";
const ImageAndDesc = ({img,height,width,content}) => {
    return ( 
    <div className={style.main}>
        <div className={style.image} style={{height:height}}><Image src={img} fill ></Image></div>
        <h1 className={style.content}>{content}</h1>
    </div> 
    );
}
 
export default ImageAndDesc;
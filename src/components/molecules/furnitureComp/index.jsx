import style from "./index.module.css"
import Image from "next/image";
import Button from "../../atoms/button";
const FurnitureComp = ({Img,name,desc,key}) => {
    return ( 
        <div className={style.main} key={key}>
            <div className={style.image}>
                <Image src={Img} fill></Image>
            </div>
            <h1 className={style.heading}>{name}</h1>
            <h1 className={style.desc}>{desc}</h1>
            <Button width={270} href={""} backgroundColor={"white"} content={"Contact Donor"} fontColor={"rgba(121, 117, 114, 1)"}></Button>
        </div>
     );
}
 
export default FurnitureComp;
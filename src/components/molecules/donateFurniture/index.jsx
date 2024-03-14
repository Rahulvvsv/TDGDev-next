import style from "./index.module.css"
import Image from "next/image";
const DonateFurniture = ({leftHeading,leftCont,leftImg,rightCont,rightHeading,rightImg}) => {
    return ( 
        <div className={style.main}>
            <div className={style.left}>
                <h1 className={style.heading}>{leftHeading}</h1>
                <h1 className={style.desc}>{leftCont}</h1>
                <div className={style.line}></div>
                <div className={style.image}>
                    <Image src={leftImg} fill></Image>

                    <div className={style.divdiv}>

                    </div>
                </div>
            </div>
            <div className={style.right}>
                <div className={style.image}>
                    <Image src={rightImg} fill></Image>
                    <div className={style.divdiv}>

                    </div>

                </div>
                <h1 className={style.desc}>{rightCont}</h1>
            </div>
        </div>
     );
}
 
export default DonateFurniture;
import style from "./index.module.css"
import Image from "next/image";
import AOSComponent from "../AOS";
const DonateFurniture = ({leftHeading,leftCont,leftImg,rightCont,rightHeading,rightImg}) => {
    return ( 
        <AOSComponent>

        <div className={style.main}>
            <div data-aos="fade-right" data-aos-duration="400" className={style.left}>
                <h1 className={style.heading}>{leftHeading}</h1>
                <h1 className={style.desc}>{leftCont}</h1>
                <div className={style.line}></div>
                <div className={style.image}>
                    <Image src={leftImg} fill></Image>

                    <div className={style.divdiv}>

                    </div>
                </div>
            </div>
            <div data-aos="fade-left" data-aos-duration="400" className={style.right}>
                <div className={style.image}>
                    <Image src={rightImg} fill></Image>
                    <div className={style.divdiv}>

                    </div>

                </div>
                <h1 className={style.desc}>{rightCont}</h1>
            </div>
        </div>
        </AOSComponent>
     );
}
 
export default DonateFurniture;
import Image from 'next/image';
import style from './index.module.css'
import Button from '../../atoms/button';
const ServiceHero = () => {
    return ( 
        <div className={style.main}>
                <div className={style.image}>
                        <Image  src={"/services/Images2/donate furniture.png"} fill></Image>
                        {/* <div className={style.imageCont}></div> */}
                        <Button backgroundColor={"rgba(88, 85, 82, 1)"} effect={true} fontColor={"white"} borderthick={'3px solid white'} href={"/services/donateFurniture"} content={"Donate Furniture"}></Button>
                </div>
                <div className={style.image}>
                        <Image  src={"/services/Images2/donate service.png"} fill></Image>
                        {/* <div className={style.imageCont}></div> */}
                        <Button backgroundColor={"rgba(88, 85, 82, 1)"} effect={true} fontColor={"white"} borderthick={'3px solid white'} href={"/services/donateService"} content={"Donate Service"}></Button>
                </div>
                <div className={style.image}>
                        <Image  src={"/services/Images2/donate money.png"} fill></Image>
                        {/* <div className={style.imageCont}></div> */}
                        <Button backgroundColor={"rgba(88, 85, 82, 1)"} effect={true} fontColor={"white"} borderthick={'3px solid white'} href={"/services/donateMoney"} content={"Donate Money"}></Button>
                </div>
        </div>
     );
}
 
export default ServiceHero;
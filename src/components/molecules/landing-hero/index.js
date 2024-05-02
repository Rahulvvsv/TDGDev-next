import style from "./index.module.css";
import Link from "next/link";
import Image from "next/image";
import Button from "../../atoms/button";
import { useRouter } from "next/router";
import AOSComponent from "../AOS";
const LandingHero = () =>{
    return (
        <AOSComponent>

        <div className={style.main}>
            <div data-aos="fade-right"  className={style.image1} > 
                <div style={{position:'absolute',width:"100%",height:"100%",background:"#79757280",zIndex:"1",borderRadius:"8px"}}></div>
                
                <div   className={style.insideDiv}>
                <Button content={"Donate Furniture"} width={250} height={100} btnClass={1} fontSize={20} fontWeight={500} borderthick={"2px solid white"} backgroundColor={"#585552"}href={"/donate/donateFurniture"} ></Button>
                </div>


                <Image src="/landing/first.jfif" fill style={{objectFit:'cover',borderRadius:"8px"}}   ></Image>
            </div>
            <div data-aos="fade-left"  className={style.image2} >
                <div style={{position:'absolute',width:"100%",height:"100%",background:"#79757280",zIndex:"1",borderRadius:"8px"}}></div>
                <div   className={style.insideDiv}>
                <Button content={"Get Furniture"} width={250} height={100} btnClass={1} fontSize={20}fontWeight={500} borderthick={"2px solid white"} backgroundColor={"#585552"}href={"/donate/getFurniture"} ></Button>
                </div>
                <Image src={"/landing/second.png"}  style={{objectFit:'cover',borderRadius:"8px"}} fill></Image>
            </div>
        </div>
        </AOSComponent>
    )
}


export default LandingHero;
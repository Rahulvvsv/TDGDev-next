import style from "./index.module.css";
import Link from "next/link";
import Image from "next/image";

import { useRouter } from "next/router";
const LandingHero = () =>{
    const router = useRouter();
    return (
        <div className={style.main}>
            <div className={style.image1} > 
                <div style={{position:'absolute',width:"100%",height:"100%",background:"#79757280",zIndex:"1",borderRadius:"8px"}}></div>
                
                <Link href="/services/donateFurniture" className={style.insideDiv}  >
                    <h1>Donate Furniture</h1>
                </Link>

                <Image src="/landing/first.jfif" fill style={{objectFit:'cover',borderRadius:"8px"}}   ></Image>
            </div>
            <div className={style.image2} >
                <div style={{position:'absolute',width:"100%",height:"100%",background:"#79757280",zIndex:"1",borderRadius:"8px"}}></div>
                <Link href="/services/getFurniture" className={style.insideDiv}>
                    <h1>Get Furniture</h1>
                </Link>
                <Image src={"/landing/second.png"}  style={{objectFit:'cover',borderRadius:"8px"}} fill></Image>
            </div>
        </div>
    )
}


export default LandingHero;
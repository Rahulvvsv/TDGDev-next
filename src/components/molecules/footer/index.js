import Image from "next/image";
import style from "./index.module.css"
import Link from "next/link";
const Footer = () => {
    return (
        <div>

       <div className={style.main}>

            <Link href="/" className={style.imageDivtop}>
            <div className={style.imageDiv} onClick={()=>{}}>
                <Image src={"/Icon/4.svg"} fill style={{objectFit:"cover"}}></Image>
            </div>
            </Link>

            <div className={style.main2}>
                <h1 className={style.mainHeading}>Company</h1>
                <Link href={"/"}>
                <h1 className={style.subHeading}>Home</h1>
                </Link>
                <Link href={"/aboutUs"}>
                <h1 className={style.subHeading}>About Us</h1>
                </Link>
                <Link href={"/contactUs"}>
                <h1 className={style.subHeading}>Contact Us</h1>
                </Link>
            </div>

            <div className={style.main2}>

                <Link href={"/services"}>
                <h1 className={style.mainHeading}>Services</h1>
                </Link>
                <Link href={"/services/getFurniture"}>
                <h1 className={style.subHeading}>Location</h1>
                </Link>
                <Link href="/services/">
                <h1 className={style.subHeading}>Donate</h1>
                </Link>
            </div>
            
            <div className={style.mainsomething}>
                <Link href={"/"}>
                    <h1 className={style.subHeading}>Home</h1>
                </Link>
                <Link href={"/aboutUs"}>
                    <h1 className={style.subHeading}>About Us</h1>
                </Link>

                <Link href={"/contactUs"}>
                    <h1 className={style.subHeading}>Contact Us</h1>
                </Link>
                <Link href={"/services"}>
                    <h1 className={style.subHeading}>Services</h1>
                </Link>
            </div>
            <div className={style.main7}>
            </div>

            <div className={style.main2}>
                    <Link href={"mailto:info@tdgfurnitureexchange.com"}>
                <div className={style.main3 +" " + style.emailstyle} >
                    <Image src={"/Icon/globe.svg"} width={16} height={16} objectFit="cover"></Image>
                    <h1 className={style.subHeading}>info@tdgfurnitureexchange.com</h1>
                </div>
                    </Link>
                <div className={style.main3}>
                    <Image src={"/Icon/phone.svg"} width={16} height={16}objectFit="cover"></Image>
                    <h1 className={style.subHeading}>Tel: 646-543-7515</h1>
                </div>
                <div className={style.main3+ " "+style.main9}>
                    <Image src={"/Icon/map.svg"} width={16} height={16}objectFit="cover"></Image>
                    <h1 className={style.subHeading } >170 53rd Street Suite 327
                   Brooklyn NY, 11232</h1>
                </div>
            </div>


            <div className={style.main2}>
                <h1 className={style.mainHeading}>Follow us</h1>
                <div className={style.main4}>
                    <Link href={""}>
                    <Image src={"/Icon/facebook.svg"} width={32} height={32} ></Image>
                    </Link>
                    
                    {/* <Link href={""}>
                    <Image src={"/Icon/twitter.svg"} width={32} height={32}></Image>
                    </Link> */}

                    <Link href={"https://www.linkedin.com/company/thedesignersgroup/"} target="_blank">
                    <Image src={"/Icon/Linkedin.svg"} width={32} height={32}></Image>
                    </Link>

                    <Link href={"https://www.instagram.com/tdgfurnitureexchange/"} target="_blank">
                    <Image src={"/Icon/instagram.svg"} width={32} height={32}></Image>
                    </Link>
                </div>
            </div>


       </div> 
       <div className={style.main5}>

            <div>
                    <h1 className={style.subHeading}>Copyright 2024 TDG</h1>
            </div>
            <div className={style.main6}>
                    <Link href={"/privacy"}>
                    <h1 className={style.subHeading}>Privacy Policy</h1>
                    </Link>
                    <Link href={"/termsandconditions"}>
                    <h1 className={style.subHeading}>Terms of service</h1>
                    </Link>
            </div>
       </div>
        </div>
      );
}
 
export default Footer;
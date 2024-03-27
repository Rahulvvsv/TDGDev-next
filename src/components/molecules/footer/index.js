import Image from "next/image";
import style from "./index.module.css"
import Link from "next/link";
const Footer = () => {
    return (
        <div>

       <div className={style.main}>

            <Link href="/" className={style.imageDivtop}>
            <div className={style.imageDiv} onClick={()=>{}}>
                <Image src={"/Icon/4.png"} fill style={{objectFit:"cover"}}></Image>
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
                <div className={style.main3}>
                    <Image src={"/Icon/globe.png"} width={16} height={16} objectFit="cover"></Image>
                    <h1 className={style.subHeading}>info@mysite.com</h1>
                </div>
                <div className={style.main3}>
                    <Image src={"/Icon/phone.png"} width={16} height={16}objectFit="cover"></Image>
                    <h1 className={style.subHeading}>Tel: 123-456-7890</h1>
                </div>
                <div className={style.main3+ " "+style.main9}>
                    <Image src={"/Icon/map.png"} width={16} height={16}objectFit="cover"></Image>
                    <h1 className={style.subHeading } >500 Terry Francine St.San Francisco CA 94158</h1>
                </div>
            </div>


            <div className={style.main2}>
                <h1 className={style.mainHeading}>Follow us</h1>
                <div className={style.main4}>
                    <Link href={""}>
                    <Image src={"/Icon/facebook.png"} width={32} height={32} ></Image>
                    </Link>
                    
                    <Link href={""}>
                    <Image src={"/Icon/twitter.png"} width={32} height={32}></Image>
                    </Link>

                    <Link href={""}>
                    <Image src={"/Icon/Linkedin.png"} width={32} height={32}></Image>
                    </Link>

                    <Link href={""}>
                    <Image src={"/Icon/instagram.png"} width={32} height={32}></Image>
                    </Link>
                </div>
            </div>


       </div> 
       <div className={style.main5}>

            <div>
                    <h1 className={style.subHeading}>Copyright 2024 TDG</h1>
            </div>
            <div className={style.main6}>
                    <h1 className={style.subHeading}>Privacy Policy</h1>
                    <h1 className={style.subHeading}>Terms of service</h1>
            </div>
       </div>
        </div>
      );
}
 
export default Footer;
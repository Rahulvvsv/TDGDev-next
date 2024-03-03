'use client'
import style from "./index.module.css"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
const Header = () => {
    const [selected,setSelected] = useState(0)
    return ( 
        <div className={style.main}>
            <div className={style.main2}>
                <Image src={"/Icon/logo.png"} fill></Image>
            </div>

            <div className={style.main3}>
                <Link href={""}>
                <h1   className={selected==0?style.selected:style.heading} onClick={()=>{setSelected(0)}}> Home</h1>
                </Link>
                <Link href={""}>
                <h1    className={selected==1?style.selected:style.heading} onClick={()=>{setSelected(1)}}> Services</h1>
                </Link>
                <Link href="">
                <h1     className={selected==2?style.selected:style.heading} onClick={()=>{setSelected(2)}}> About us</h1>
                </Link>
                <Link href="">
                <h1     className={selected==3?style.selected:style.heading}onClick={()=>{setSelected(3)}}> Contact</h1>
                </Link>
            </div>
        </div>
     );
}
 
export default Header;
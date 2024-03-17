"use client"
import style from "./index.module.css"
import Image from "next/image"
import Link from "next/link"
const MobileHeader = ({toggler}) => {
  return (
    <div className={style.main}>
        <Image src={"/Icon/cross.png"} onClick={()=>{toggler(false)}} width={32} height={32} className={style.image}></Image>
        <div className={style.main2}>
        <Link href={"/"} className={style.name}>Home</Link>
        <h1 className={style.name}>Services</h1>
        <div className={style.subnames}>
            <Link href={"/services"} className={style.name2}>Donate</Link>
            <Link href={"/services/getFurniture"} className={style.name2}>Get Furniture</Link>
        </div>
        <Link href={"/aboutUs"} className={style.name}>About Us</Link>
        <Link href={"/contactUs"} className={style.name}>Conatct</Link>
        </div>
    </div>
  )
}

export default MobileHeader
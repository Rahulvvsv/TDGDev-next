"use client";
import style from "./index.module.css";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useEffect } from "react";
import { useRouter } from "next/router";
import {
  AnimatePresence,
  MotionValue,
  motion,
  useMotionValue,
  useTransform,
} from "framer-motion"
const Header = () => {
  const [selected,setSelected] = useState(0)
    const router = useRouter();
    const search = router.asPath;
   useEffect(()=>{

       if(search.includes("services")){
           setSelected(1)
        }
        
        else if(search.includes("aboutUs")){
            setSelected(2)
    }
    else if(search.includes("contactUs")){
        setSelected(3)
    }
    else {
        setSelected(0)
    }
},[search]) 
    return ( 
        <AnimatePresence>
            
        <div className={style.main}>
            <div className={style.main2}>
                <Image src={"/Icon/logo.png"} fill></Image>
            </div>
            <div className={style.main3}>


                <Link href={"/"} style={{position:"relative"}}>
                <h1   className={style.heading} onClick={()=>{setSelected(0)}}> Home</h1>
                {selected===0 ?  <motion.div  transition={{ type: "spring" }}
                      layoutId="underline"
                      style={{width:"100%",position:"absolute",marginTop:10,height:3,backgroundColor:"#797572"}}></motion.div> :""}
                </Link>


                <Link href={"/services"} style={{position:"relative"}}>
                <h1    className={style.heading} onClick={()=>{setSelected(1)}}> Services</h1>

                {selected===1 ?  <motion.div  transition={{ type: "spring" }}
                      layoutId="underline"
                      style={{width:"100%",position:"absolute",marginTop:10,height:3,backgroundColor:"#797572"}}></motion.div> :""}
                </Link>


                <Link href="/aboutUs" style={{position:"relative"}}>
                <h1     className={style.heading} onClick={()=>{setSelected(2)}}> About us</h1>
                {selected===2 ?  <motion.div  transition={{ type: "spring" }}
                      layoutId="underline"
                      style={{width:"100%",position:"absolute",marginTop:10,height:3,backgroundColor:"#797572"}}></motion.div> :""}
                

                </Link>
                <Link href="/contactUs" style={{position:"relative"}}>
                <h1     className={style.heading}onClick={()=>{setSelected(3)}}> Contact</h1>
                {selected===3 ?  <motion.div  transition={{ type: "spring" }}
                      layoutId="underline"
                      style={{width:"100%",position:"absolute",marginTop:10,height:3,backgroundColor:"#797572"}}></motion.div> :""}
                </Link>
            </div>
            <div className={style.main4}>
                <Image src={"/Icon/hamb.png"} width={29} height={22}></Image>
            </div>
        </div>
        </AnimatePresence>
     );
}
 
export default Header;
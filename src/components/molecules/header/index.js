"use client";
import MobileHeader from "../mobileHeader";
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
} from "framer-motion";
const Header = () => {
  const [selected, setSelected] = useState(0);
  const [toggleNavbar, setToggleNavbar] = useState(false);
  const router = useRouter();
  const search = router.asPath;
  useEffect(() => {
    if (search.includes("services")) {
      setSelected(1);
    } else if (search.includes("aboutUs")) {
      setSelected(2);
    } else if (search.includes("contactUs")) {
      setSelected(3);
    } else {
      setSelected(0);
    }
  }, [search]);
  return (
    <div style={{position:"relative"}}>
    <AnimatePresence>
      <div className={style.main}>
        <div className={style.main2} onClick={()=>{router.push("/")}}>
          <Image src={"/Icon/logo2.png"} fill></Image>
        </div>
        <div className={style.main3}>
          <Link href={"/"} style={{ position: "relative" }}>
            <h1
              className={style.heading}
              onClick={() => {
                setSelected(0);
              }}
              >
              {" "}
              Home
            </h1>
            {selected === 0 ? (
              <motion.div
              transition={{ type: "spring" }}
              layoutId="underline"
              style={{
                width: "100%",
                position: "absolute",
                marginTop: 10,
                height: 3,
                backgroundColor: "#797572",
              }}
              ></motion.div>
              ) : (
                ""
                )}
          </Link>

          <Link href={"/services"} style={{ position: "relative" }}>
            <h1
              className={style.heading}
              onClick={() => {
                setSelected(1);
              }}
              >
              {" "}
              Services
            </h1>

            {selected === 1 ? (
              <motion.div
              transition={{ type: "spring" }}
              layoutId="underline"
              style={{
                width: "100%",
                position: "absolute",
                marginTop: 10,
                height: 3,
                backgroundColor: "#797572",
              }}
              ></motion.div>
              ) : (
                ""
                )}
          </Link>

          <Link href="/aboutUs" style={{ position: "relative" }}>
            <h1
              className={style.heading}
              onClick={() => {
                setSelected(2);
              }}
              >
              {" "}
              About Us
            </h1>
            {selected === 2 ? (
              <motion.div
              transition={{ type: "spring" }}
              layoutId="underline"
              style={{
                width: "100%",
                position: "absolute",
                marginTop: 10,
                height: 3,
                backgroundColor: "#797572",
              }}
              ></motion.div>
              ) : (
                ""
                )}
          </Link>
          <Link href="/contactUs" style={{ position: "relative" }}>
            <h1
              className={style.heading}
              onClick={() => {
                setSelected(3);
              }}
              >
              {" "}
              Contact
            </h1>
            {selected === 3 ? (
              <motion.div
              transition={{ type: "spring" }}
              layoutId="underline"
              style={{
                width: "100%",
                position: "absolute",
                marginTop: 10,
                height: 3,
                backgroundColor: "#797572",
              }}
              ></motion.div>
              ) : (
                ""
                )}
          </Link>
        </div>
        <div className={style.main4}>
          <Image
            src={"/Icon/hamb.png"}
            onClick={() => {
              setToggleNavbar(true);
            }}
            width={29}
            height={22}
            ></Image>
        </div>
        
      </div>
    </AnimatePresence>
    <AnimatePresence>

        {toggleNavbar && (
          <motion.section layout initial={{x:250,opacity:0,y:-30}} animate={{x:0,opacity:1,y:-30}} exit={{x:550,opacity:0}}  style={{ position: "absolute",zIndex:5, top: 0, left: 0,width:"100vw",height:"100vh" }}>
            <MobileHeader toggler={setToggleNavbar}></MobileHeader>
          </motion.section>
        )}
        </AnimatePresence>
        </div>
  );
};

export default Header;

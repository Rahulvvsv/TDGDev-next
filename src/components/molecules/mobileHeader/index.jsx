"use client";
import style from "./index.module.css";
import Image from "next/image";
import { useRouter } from "next/router";
const MobileHeader = ({ toggler }) => {
  const router = useRouter();
  return (
    <div className={style.main}>
      <Image
        src={"/Icon/cross.png"}
        onClick={() => {
          toggler(false);
        }}
        width={32}
        height={32}
        className={style.image}
      ></Image>
      <div className={style.main2}>
        <h1
          href={"/"}
          className={style.name}
          onClick={() => {
            toggler(false);
            setTimeout(()=>{router.push("/")},1000)
          }}
        >
          Home
        </h1>
        <h1 className={style.name}>Services</h1>
        <div className={style.subnames}>
          <h1
            href={"/services"}
            onClick={() => {
              toggler(false);
            setTimeout(()=>{router.push("/services")},1000)
            }}
            className={style.name2}
          >
            Donate
          </h1>
          <h1
            href={"/services/getFurniture"}
            onClick={() => {
              toggler(false);
            setTimeout(()=>{router.push("/services/getFurniture")},1000)
            }}
            className={style.name2}
          >
            Get Furniture
          </h1>
        </div>
        <h1
          href={"/aboutUs"}
          onClick={() => {
            toggler(false);
            setTimeout(()=>{router.push("/aboutUs")},1000)
          }}
          className={style.name}
        >
          About Us
        </h1>
        <h1
          href={"/contactUs"}
          onClick={() => {
            toggler(false);
            setTimeout(()=>{router.push("/contactUs")},1000)
          }}
          className={style.name}
        >
         Contact 
        </h1>
      </div>
    </div>
  );
};

export default MobileHeader;

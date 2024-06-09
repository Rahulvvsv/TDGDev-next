"use client";
import style from "./index.module.css";
import Image from "next/image";
import { motion } from "framer-motion";
const MissionHeader = () => {
  return (
    <div className={style.main}>
      <motion.div className={style.main2}   >
        <motion.h1 className={style.heading} initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1}}> </motion.h1>
        <motion.div className={style.content3}>
          <motion.h1 className={style.content} initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.5}}>
            The TDG Furniture Exchange was conceived from a simple yet impactful idea. Recognizing the potential to assist others in need, The Designers Group created a platform that could connect those with surplus furniture to those who need it.
          </motion.h1>
          <motion.h1 className={style.content} initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1}}>The result?</motion.h1>
        </motion.div>
        <motion.h1 className={style.content2} initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1}}>The TDG Furniture Exchange.</motion.h1>

        <motion.div className={style.content4}></motion.div>
      </motion.div>
      <div className={style.image}>
        <Image alt=" " src={"/about/main.png"} fill></Image>
      </div>
    </div>
  );
};

export default MissionHeader;

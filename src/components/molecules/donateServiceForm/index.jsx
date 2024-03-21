"use client"
import style from "./index.module.css"
import InputField from "../../atoms/inputField";
import { AnimatePresence,motion } from "framer-motion";
import Image from "next/image";
import Button from "../../atoms/button";
import { useState } from "react";
const DonateServiceForm = () => {
       const [submitted,setSubmitted] = useState(false)
const [data,setData] = useState({})
    const dataSetter = (e) =>{
        e.preventDefault();
        let name = e.target.name;
        let value = e.target.value;
        setData(prev => ({...prev,[name]:value}))
        console.log(data)
    }
    return ( 
        <div className={style.main}>
{!submitted?<>
           <InputField onChange={dataSetter} placeholder={"FULL NAME*"}></InputField>
            <div className={style.main2}>
                <div>
                <InputField onChange={dataSetter}  placeholder={"EMAIL*"}></InputField>
                </div>
                
                <div>
                <InputField placeholder={"PHONE*"}  onChange={dataSetter} ></InputField>
                </div>
            </div>
            <InputField type="textarea" height={100} onChange={dataSetter}  placeholder={"ENTER SERVICE*"}></InputField>
            <Button href={""} onClick={()=>{
                setSubmitted(true)
            }} content={"Submit"}></Button>
</>:<>

            <motion.div  initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}className={style.main5}>
                <Image src={"/Icon/4.png"} width={190} height={190}></Image>
                <h1 className="heading">Thank you for submitting the form</h1>
            </motion.div>
</>
} 
        </div>
     );
}
 
export default DonateServiceForm;
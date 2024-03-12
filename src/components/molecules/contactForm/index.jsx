"use client"
import style from "./index.module.css"
import InputField from "../../atoms/inputField";
import Button from "../../atoms/button";
import { useState } from "react";
import Image from "next/image";
const ContactForm = () => {
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
            <div className={style.main2}>
                
                <InputField onChange={dataSetter} placeholder={"NAME*"} name={"name"}></InputField>
                <InputField onChange={dataSetter} placeholder={"EMAIL*"} name={"email"}></InputField>
                <InputField onChange={dataSetter} placeholder={"MESSAGE*"} name={"message"} height={70} type="text-area"></InputField>
                <Button href={""} content={"SEND MESSAGE"} width={"100%"}></Button>
            </div>
            <div className={style.main3}>
                <div className={style.main4}>
                    <Image src={"/Icon/globe.png"} width={16} height={16}></Image>
                    <h1 className={style.subHeading}>info@tdgfurnitureexchange.com</h1>
                </div>
                <div className={style.main4}>
                    <Image src={"/Icon/phone.png"} width={16} height={16}></Image>
                    <h1 className={style.subHeading}>9084170619</h1>
                </div>
                <div className={style.main4}>
                    <Image src={"/Icon/map.png"} width={16} height={16}></Image>
                    <h1 className={style.subHeading}>170 53rd Street 327, Brooklyn NY 11232</h1>
                </div>
            </div>
        </div>
     );
}
 
export default ContactForm;
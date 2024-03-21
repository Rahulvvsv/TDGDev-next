"use client";
import style from "./index.module.css";
import InputField from "../../atoms/inputField";
import Button from "../../atoms/button";
import Image from "next/image";
import { useState } from "react";
import { uploadContactForm } from "../../../lib/firebase";
const ContactDonarPopUP = ({data,setData}) => {
    const dataSetter = (e) =>{
        e.preventDefault();
        let name = e.target.name;
        let value = e.target.value;
        setData(prev => ({...prev,[name]:value}))
        console.log(data)
    }
     const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("clicked")
        uploadContactForm(data);
  };
  return (
    <div className={style.main}>
      <div className={style.image}>
        <Image src={"/Icon/4.png"} fill></Image>
      </div>
      <div className={style.main2}>

      <InputField onChange={dataSetter} placeholder={"NAME"} name={"name"}></InputField>
      <InputField onChange={dataSetter} placeholder={"EMAIL"} name={"email"}></InputField>{" "}
      <InputField onChange={dataSetter} placeholder={"PHONE"} name={"phone"}></InputField>
      <InputField onChange={dataSetter} placeholder={"ANY QUESTIONS"} name={"question"}></InputField>
      <Button onClick={handleSubmit} content={"Submit"}></Button>
      </div>
    </div>
  );
};

export default ContactDonarPopUP;

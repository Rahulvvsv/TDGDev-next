"use client"
import style from "./index.module.css"
import InputField from "../../atoms/inputField";
import Button from "../../atoms/button";
import { useState } from "react";
const DonateServiceForm = () => {
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
            <Button href={""} content={"Submit"}></Button>
        </div>
     );
}
 
export default DonateServiceForm;
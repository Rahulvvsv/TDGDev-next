"use client"
import style from "./index.module.css";
import InputField from "../../atoms/inputField";
import Button from "../../atoms/button";
import Image from "next/image";
import { useState } from "react";
import { upLoadData } from "../../../lib/firebase";
const UploadForm = () => {
    const [data,setData] = useState({})
    const dataSetter = (e) =>{
        e.preventDefault();
        let name = e.target.name;
        let value = e.target.value;
        setData(prev => ({...prev,[name]:value}))
        console.log(data)
    }
     const handleImageChange = (e) => {
    const imageFile = e.target.files;
    console.log(imageFile)
    setData((prevData) => ({
      ...prevData,
      image: imageFile
    }));
  };
     const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("clicked")
        upLoadData(data);
  };
 
    return (  
        <div className={style.main}>

            <div className={style.left}>
                <div className={style.imageUpload}>
                    <label htmlFor="files" className="btn"><Image src={"/Icon/plus.png"} width={78} height={78}></Image></label>
                    <input name="image" onChange={handleImageChange} id="files" style={{visibility:"hidden"}} type="file"/>
                    <h1 className={style.heading}>UPLOAD IMAGE</h1>
                </div>
            </div>

            <div className={style.right}>
                <InputField onChange={dataSetter} placeholder={"FULL NAME*"} name={"fullname"}></InputField>
                <InputField onChange={dataSetter} placeholder={"EMAIL*"} name={"email"}></InputField>
                <InputField onChange={dataSetter} placeholder={"PHONE*"} name={"phone"}></InputField>
                <InputField onChange={dataSetter} placeholder={"LOCATION*"} name={"location"}></InputField>
                <InputField onChange={dataSetter} placeholder={"TYPE OF FURNITURE*"} name={"tof"}></InputField>
                <InputField onChange={dataSetter} placeholder={"DESCRIBE YOUR FURNITURE*"} name={"desc"} type="text-area"></InputField>
                <Button onClick={handleSubmit} placeholder={"Submit"} content={"Submit"} href={""} fontColor={"white"}></Button>
            </div>
        </div>
    );
}
 
export default UploadForm;
"use client"
import style from "./index.module.css";
import InputField from "../../atoms/inputField";
import Button from "../../atoms/button";
import Image from "next/image";
import { useState } from "react";
import { AnimatePresence,motion } from "framer-motion";
import { upLoadData } from "../../../lib/firebase";
const   UploadForm = () => {
    const [data,setData] = useState({})
    const [submitted,setSubmitted] = useState(false)
    const [imageUploaded,setImageUploaded] = useState(false)
    const dataSetter = (e) =>{
        e.preventDefault();
        let name = e.target.name;
        let value = e.target.value;
        setData(prev => ({...prev,[name]:value}))
    }
     const handleImageChange = (e) => {
    const imageFile = e.target.files;
    console.log(imageFile)
    setData((prevData) => ({
      ...prevData,
      image: imageFile
    }));
            setImageUploaded(true);
  };
     const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("clicked")
        upLoadData(data);
        setSubmitted(true);
  };
 
    return (  

<div>
{ !submitted?<motion.div layout initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} className={style.main}>
            <div className={style.left}>
                <div className={style.imageUpload}>
                    <label htmlFor="files" className={style.inputs123} ><Image src={"/Icon/plus.png"} width={78} height={78}></Image></label>
                    <input name="image" onChange={handleImageChange}  id="files" style={{visibility:"hidden"}} accept="image/*"type="file"/>
                    <h1 className={style.heading}>UPLOAD IMAGE</h1>
                </div>
                <br />
                    {imageUploaded &&

                    <h1 className={style.heading}>Image is uploaded</h1>
                    }
            </div>

            <motion.div  className={style.right}>
                <InputField onChange={dataSetter} placeholder={"FULL NAME*"} name={"fullname"}></InputField>
                <InputField onChange={dataSetter} placeholder={"EMAIL*"} name={"email"}></InputField>
                <InputField onChange={dataSetter} placeholder={"PHONE*"} name={"phone"}></InputField>
                <InputField placeholder={"LOCATION*"} name={"location"} onChange={dataSetter} type="dropdown"></InputField>
                <InputField onChange={dataSetter} placeholder={"Exact Location*"} name={"ExactLocation"}></InputField>
                <InputField onChange={dataSetter} placeholder={"TYPE OF FURNITURE*"} name={"tof"}></InputField>
                <InputField onChange={dataSetter} placeholder={"DESCRIBE YOUR FURNITURE*"} name={"desc"} type="text-area"></InputField>
                <Button onClick={handleSubmit} placeholder={"Submit"} content={"Submit"} href={""} fontColor={"white"}></Button>
            </motion.div>
            </motion.div>
            :
            <motion.div  initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}className={style.main2}>
                <Image src={"/Icon/4.png"} width={190} height={190}></Image>
                <h1 className="heading">Thank you for submitting the form</h1>
            </motion.div>
}
</div>
    );
}
 
export default UploadForm;
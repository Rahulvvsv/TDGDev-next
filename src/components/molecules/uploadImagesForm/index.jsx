import style from "./index.module.css";
import InputField from "../../atoms/inputField";
import Button from "../../atoms/button";
import Image from "next/image";
const UploadForm = () => {
    return (  
        <div className={style.main}>

            <div className={style.left}>
                <div className={style.imageUpload}>
                    <label for="files" class="btn"><Image src={"/Icon/plus.png"} width={78} height={78}></Image></label>
                    <input id="files" style={{visibility:"hidden"}} type="file"/>
                    <h1 className={style.heading}>UPLOAD IMAGE</h1>
                </div>
            </div>

            <div className={style.right}>
                <InputField placeholder={"FULL NAME*"} name={"fullname"}></InputField>
                <InputField placeholder={"EMAIL*"} name={"email"}></InputField>
                <InputField placeholder={"PHONE*"} name={"phone"}></InputField>
                <InputField placeholder={"LOCATION*"} name={"location"}></InputField>
                <InputField placeholder={"TYPE OF FURNITURE*"} name={"tof"}></InputField>
                <InputField placeholder={"DESCRIBE YOUR FURNITURE*"} name={"fullname"} type="text-area"></InputField>
                <Button placeholder={"Submit"} content={"Submit"} href={""} fontColor={"white"}></Button>
            </div>
        </div>
    );
}
 
export default UploadForm;
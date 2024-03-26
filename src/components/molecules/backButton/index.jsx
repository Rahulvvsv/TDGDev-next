import style from "./index.module.css"
import Image from "next/image";
import { useRouter } from "next/router";
const BackButton = () => {
    const router = useRouter();
  return (
    <div className={style.main}>
            <div className={style.image} onClick={()=>{
                router.back();
            }}>
                <Image src={"/Icon/back.png"} fill></Image>

            </div>
    </div>
  )
}

export default BackButton;
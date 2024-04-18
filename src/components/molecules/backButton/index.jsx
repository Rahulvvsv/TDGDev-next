import style from "./index.module.css"
import Image from "next/image";
import { useRouter } from "next/router";
const BackButton = ({left="15%"}) => {
    const router = useRouter();
  return (
    <div className={style.main} style={{marginLeft:left}}>
            <div className={style.image} onClick={()=>{
                router.back();
            }}>
                <Image src={"/Icon/back2.svg"} fill></Image>

            </div>
    </div>
  )
}

export default BackButton;
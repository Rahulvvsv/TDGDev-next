import style from "./index.module.css"
import Image from "next/image"
import { useRouter } from "next/router";
const LocationGridSingle = ({location="baltimore.png",name="Baltimore",href="/"}) => {
    const router = useRouter();
    return ( 
        <div onClick={()=>{router.push("/donate/getFurniture/"+href)}} className={style.main}>

            <div className={style.image}>
                <h1 className={style.name}>{name}</h1>
                {/* <div className={style.imageCover}> </div> */}
                
                    <Image alt=" " src={"/services/Images2/"+location} fill objectFit="cover" style={{borderRadius:"8px"}}></Image>
                </div>

        </div>
     );
}
 
export default LocationGridSingle;
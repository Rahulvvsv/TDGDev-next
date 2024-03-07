import style from "./index.module.css"
import Image from "next/image"
const LocationGridSingle = ({location="baltimore.jpg",name="BALTIMORE"}) => {
    return ( 
        <div className={style.main}>

            <div className={style.image}>
                <h1 className={style.name}>{name}</h1>
                <div className={style.imageCover}> </div>
                
                    <Image src={"/services/location2/"+location} fill objectFit="cover" style={{borderRadius:"8px"}}></Image>
                </div>

        </div>
     );
}
 
export default LocationGridSingle;
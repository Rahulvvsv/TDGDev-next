import style from "./index.module.css"
import LocationGridSingle from "../locationsGridSingle";
import Button from "../../atoms/button";
import { useEffect,useState } from "react";
import Link from "next/link";
const LocationsGrid = () => {
    const [isMobile,setIsMobile] = useState(false)
    useEffect(()=>{
        if(window.innerWidth<460){

            setIsMobile(true)
        }
    },[])
    return (
    <div className={style.main}>
        <div className={style.main3}>

        <h1 className={style.name1}>Explore our Collection of Furniture</h1>
        <h1 className={style.name2} >Find the perfect item for your home, generously contributed by others. </h1>
        </div>
        <br>
        </br>
        {!isMobile?(
        <>
            <div className={style.main2}>
                <LocationGridSingle  href="Baltimore"></LocationGridSingle>
                <LocationGridSingle href="Cleveland" location="cleveland.png" name="Cleveland" ></LocationGridSingle>
                <LocationGridSingle href="Jerusalem"  location="jerusalem1.png" name="Jerusalem" ></LocationGridSingle>

            </div>
            <div className={style.main2}>
                <LocationGridSingle href="Los Angeles" location="LA.png" name="Los Angeles" ></LocationGridSingle>
                <LocationGridSingle  href="Lakewood" location="8.png" name="Lakewood"></LocationGridSingle>
                <LocationGridSingle href="Miami" location="miami.png" name="Miami"></LocationGridSingle>
            </div>
            <div className={style.main2}>
                <LocationGridSingle href="New Jersey" location="NJ.png" name="New Jersey" ></LocationGridSingle>
                <LocationGridSingle href="New York" location="new york.png" name="New York"></LocationGridSingle>
                <LocationGridSingle href="Toronto" location="toronto.png" name="Toronto"></LocationGridSingle>
            </div>
        </>
            ):
                <div className={style.main2}>
                <LocationGridSingle  href="Baltimore"></LocationGridSingle>
                <LocationGridSingle href="Cleveland" location="cleveland.png" name="Cleveland" ></LocationGridSingle>
                <LocationGridSingle href="Jerusalem"  location="jerusalem.png" name="Jerusalem" ></LocationGridSingle>
                <LocationGridSingle href="Los Angeles" location="LA.png" name="Los Angeles" ></LocationGridSingle>
                <LocationGridSingle  href="Lakewood" location="8.png" name="Lakewood"></LocationGridSingle>
                <LocationGridSingle href="Miami" location="miami.png" name="Miami"></LocationGridSingle>
                <LocationGridSingle href="New Jersey" location="NJ.png" name="New Jersey" ></LocationGridSingle>
                <LocationGridSingle href="New York" location="new york.png" name="New York"></LocationGridSingle>
                <LocationGridSingle href="Toronto" location="toronto.png" name="Toronto"></LocationGridSingle>
                </div>
        }
        <br></br>
        <br></br>

        <Button width={"60%"} content={"SEE ALL FURNITURE"} href={"/donate/getFurniture/all"}></Button>
    </div>
      );
}
 
export default LocationsGrid;
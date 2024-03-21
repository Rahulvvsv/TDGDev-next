import style from "./index.module.css"
import LocationGridSingle from "../locationsGridSingle";
import Button from "../../atoms/button";
import Link from "next/link";
const LocationsGrid = () => {
    return (
    <div className={style.main}>
        <div className={style.main3}>

        <h1 className={style.name1}>Explore our Collection of Donated Furniture</h1>
        <h1 className={style.name2} >Find the perfect item for your home or commercial space, generously contributed by others. Quality meets style, and start your furniture journey with us</h1>
        </div>
        <br>
        </br>
        <div className={style.main2}>
            <LocationGridSingle  href="Baltimore"></LocationGridSingle>
            <LocationGridSingle href="Cleveland" location="cleveland.jpg" name="Cleveland" ></LocationGridSingle>
            <LocationGridSingle href="Jerusalem"  location="jerusalem.jpg" name="Jerusalem" ></LocationGridSingle>

        </div>
        <div className={style.main2}>
            <LocationGridSingle href="Los Angeles" location="la.jpg" name="Los Angeles" ></LocationGridSingle>
            <LocationGridSingle  href="Lakewood" location="lakewood.jpg" name="LakeWood"></LocationGridSingle>
            <LocationGridSingle href="Miami" location="miami.jpg" name="Miami"></LocationGridSingle>
        </div>
        <div className={style.main2}>
            <LocationGridSingle href="New Jersey" location="newjersey.jpg" name="New Jersey" ></LocationGridSingle>
            <LocationGridSingle href="New York" location="newyork.jpg" name="New York"></LocationGridSingle>
            <LocationGridSingle href="Toronto" location="toronto.jpg" name="Toronto"></LocationGridSingle>
        </div>
        <br></br>
        <br></br>

        <Button width={"40%"} content={"SEE ALL FURNITURE"} href={"/services/getFurniture/all"}></Button>
    </div>
      );
}
 
export default LocationsGrid;
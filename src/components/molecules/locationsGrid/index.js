import style from "./index.module.css"
import LocationGridSingle from "../locationsGridSingle";
import Button from "../../atoms/button";
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
            <LocationGridSingle ></LocationGridSingle>
            <LocationGridSingle location="cleveland.jpg" name="Cleveland" ></LocationGridSingle>
            <LocationGridSingle  location="jerusalem.jpg" name="Jerusalem" ></LocationGridSingle>

        </div>
        <div className={style.main2}>
            <LocationGridSingle location="la.jpg" name="Los Angeles" ></LocationGridSingle>
            <LocationGridSingle  location="lakewood.jpg" name="LakeWood"></LocationGridSingle>
            <LocationGridSingle location="miami.jpg" name="Miami"></LocationGridSingle>
        </div>
        <div className={style.main2}>
            <LocationGridSingle location="newjersey.jpg" name="New Jersey" ></LocationGridSingle>
            <LocationGridSingle location="newyork.jpg" name="New York"></LocationGridSingle>
            <LocationGridSingle location="toronto.jpg" name="Toronto"></LocationGridSingle>
        </div>
        <br></br>
        <br></br>

        <Button width={"40%"} content={"SEE ALL FURNITURE"} href={"/services/getFurniture/all"}></Button>
    </div>
      );
}
 
export default LocationsGrid;
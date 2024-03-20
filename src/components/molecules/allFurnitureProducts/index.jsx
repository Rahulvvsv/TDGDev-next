
import style from "./index.module.css"
import { fetchData } from "../../../lib/firebase/index";
import FurnitureComp from "../furnitureComp";
const AllFurnitureProducts = ({data}) => {
    return ( 
            <div className={style.mains}>
            {data.map((e,key)=>{console.log(e);return <FurnitureComp key={key} Img={e?.imageUrl[0]} name={e.productName} desc={e.description}></FurnitureComp>})}
            </div>
     );
}
 
export default AllFurnitureProducts;
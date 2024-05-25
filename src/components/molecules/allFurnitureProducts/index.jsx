import style from "./index.module.css";
import { fetchData } from "../../../lib/firebase/index";
import FurnitureComp from "../furnitureComp";
const AllFurnitureProducts = ({ data }) => {
  return (
    <div className={style.mains}>
      {data.map((e, key) => {
          console.log(e);
        if (e.status === "showOnPage"){

            return (
                <FurnitureComp
                unqId = {e.id}
                key={key}
                Img={e?.imageUrl[0]}
                name={e.productName}
                desc={e.description}
                location={e.location}
                date={e.date}
                ></FurnitureComp>
                );
            }
          })}
          {data.length ==0 && <h1 style={{height:"50vh"}} className={style.heading}>Furniture at this location will be available soon</h1>}   
    </div>
  );
};

export default AllFurnitureProducts;

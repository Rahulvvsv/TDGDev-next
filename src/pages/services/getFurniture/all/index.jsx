import AllFurnitureProducts from "@/components/molecules/allFurnitureProducts";
import style from "./index.module.css"
import { fetchData } from "@/lib/firebase";
import { locationsData } from "../[location]";
import Link from "next/link";
const index = ({data}) => {
  console.log(locationsData)
    return (
        <section className={style.main}>
          <section className={style.left}>
              {locationsData.map((e,key)=>{
                
              return  <Link href={"/services/getFurniture/"+e} key={key} className={style.lists}>{e}</Link>
              })}
          </section>
          <section className={style.right}>

          <AllFurnitureProducts data={JSON.parse(data)}></AllFurnitureProducts>
          </section>
        </section>
      );
}



export async function getServerSideProps({ params }) {
  // Fetch data for the specified page
        let data = await fetchData();
        data = JSON.stringify(data)
        // setDataList(data)
  // Example data fetching, replace this with your actual data fetching logic

  return {
    props: {
      data
    }
  };
} 
export default index;
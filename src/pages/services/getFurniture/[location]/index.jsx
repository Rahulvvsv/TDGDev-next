
import style from "./index.module.css"
import AllFurnitureProducts from "@/components/molecules/allFurnitureProducts";
import { fetchDataLocation } from "@/lib/firebase";
export const locationsData = ["Hyderabad","Secunderabad"]

const index = ({data,id}) => {
    return (
        <section className={style.main}>
          <h1 className={style.heading}>{id}</h1>
          <AllFurnitureProducts data={data}></AllFurnitureProducts>
        </section>
      );
}

export async function getStaticPaths(context) {
    let mappedData = [];
    for (let location of locationsData) {
      mappedData.push({
        params: { location: location },
      });
    }
    return {
      paths: mappedData,
      fallback: false,
    };
  }

export async function getStaticProps(context) {
    const {params} = context;
    let id  = params.location;
        let data = await fetchDataLocation(id);

  return {
    props: {
      data,id
    }
  };
} 
export default index;
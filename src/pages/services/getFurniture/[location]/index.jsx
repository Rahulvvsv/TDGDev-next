
import style from "./index.module.css"
import AllFurnitureProducts from "@/components/molecules/allFurnitureProducts";
import { fetchDataLocation } from "@/lib/firebase";
export const locationsData = ["Baltimore","Cleveland","Jerusalem","Lakewood","Los Angeles","Miami","New Jersey","New York","Toronto"]
import { Suspense } from "react";
const index = ({data,id}) => {
    return (
        <section className={style.main}>
          <h1 className={style.heading}>{id}</h1>
          <Suspense fallback={<h1>Loading</h1>}>

          <AllFurnitureProducts data={JSON.parse(data)}></AllFurnitureProducts>
          </Suspense>
        </section>
      );
}

// export async function getStaticPaths(context) {
//     let mappedData = [];
//     for (let location of locationsData) {
//       mappedData.push({
//         params: { location: location },
//       });
//     }
//     return {
//       paths: mappedData,
//       fallback: false,
//     };
//   }

export async function getServerSideProps(context) {
    const {params} = context;
    let id  = params.location;
    console.log(id)
    let data = await fetchDataLocation(id);
    data =JSON.stringify(data)

  return {
    props: {
      data,id
    }
  };
} 
export default index;
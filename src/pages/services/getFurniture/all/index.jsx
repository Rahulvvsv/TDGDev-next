import AllFurnitureProducts from "@/components/molecules/allFurnitureProducts";
import { fetchData } from "@/lib/firebase";
const index = ({data}) => {
    return (
        <>
          <AllFurnitureProducts data={data}></AllFurnitureProducts>
        </>
      );
}



export async function getStaticProps({ params }) {
  // Fetch data for the specified page
        let data = await fetchData();
        // setDataList(data)
  // Example data fetching, replace this with your actual data fetching logic

  return {
    props: {
      data
    }
  };
} 
export default index;
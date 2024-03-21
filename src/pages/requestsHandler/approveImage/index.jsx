import UploadRequestHandler from "@/components/templates/uploadRequestHandler";
import { fetchData } from "@/lib/firebase";
const Imageapprove = () =>{
    return(
        <section>
          <UploadRequestHandler ></UploadRequestHandler>
        </section>
    )
}

export default Imageapprove;

// export async function getServerSideProps(context) {
//     let data = await fetchData();
//     // console.log(data)

//   return {
//     props: {
//       data
//     }
//   };
// } 
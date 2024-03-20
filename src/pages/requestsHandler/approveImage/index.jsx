import UploadRequestHandler from "@/components/molecules/uploadRequestHandler";
const Imageapprove = ({data}) =>{
    return(
        <section>

        </section>
    )
}

export default Imageapprove;

export async function getServerSideProps(context) {
    let data = await fetchDataLocation();

  return {
    props: {
      data
    }
  };
} 
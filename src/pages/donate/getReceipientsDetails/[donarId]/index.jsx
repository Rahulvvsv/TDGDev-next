import style from "./index.module.css";
import { fetchSingleBasedOnId } from "@/lib/firebase";
import ReceipientForm from "@/components/newMolecules/ReceiptDetailsForm";

import "react-datepicker/dist/react-datepicker.css";
const index = ({ data, id }) => {

  data = JSON.parse(data)
  return (
    <section className={style.main}>
      <ReceipientForm
        images={data.donarDetails.imageUrl}
        name={data.donarDetails.name}
        productName={data.donarDetails.productName}
        productId={id}
        description={data.donarDetails.description}
      ></ReceipientForm>
    </section>
  );
};

export async function getServerSideProps(context) {
  const { params } = context;
  let id = params.donarId;
  console.log(id);
  let data = await fetchSingleBasedOnId(id);
  data = JSON.stringify(data)

  return {
    props: {
      data,
      id,
    },
  };
}
export default index;

import DonateFurniture from "@/components/templates/donateFurniture";
import Head from "next/head";
const index = () => {
  return (
    <>
      <Head>
        <title>Donate Furniture</title>
        <meta
          name="description"
          content="Donate your extra furniture to TDG Furniture Exchange. Help people to find the right fit for their furniture needs by your generous donation."
        />
        <meta
          name="keywords"
          content="Donate furniture, TDG Furniture Exchange donation, furniture charity"
        />
      </Head>
      <DonateFurniture></DonateFurniture>
    </>
  );
};

export default index;

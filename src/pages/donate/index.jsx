import ServicesLanding from "@/components/templates/servicesLanding";
import Head from "next/head";
const index = () => {
  return (
    <>
      <Head>
        <title>Donate | TDG Furniture Exchange</title>
        <meta
          name="description"
          content="Become a part of the TDG Furniture Exchange program by contributing through furniture donations, monetary support, or volunteer services."
        />
        <meta
          name="keywords"
          content="Donate, charity, furniture donation, non-profit, donate money, donate services"
        />
      </Head>
      <ServicesLanding></ServicesLanding>
    </>
  );
};

export default index;

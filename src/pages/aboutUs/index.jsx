import AboutUs from "@/components/templates/aboutUs";
import Head from "next/head";
const index = () => {
  return (
    <>
      <Head>
        <title>About Us</title>
        <meta
          name="description"
          content="Our mission is to help people in need get furniture easily and at no-cost."
        />
        <meta
          name="keywords"
          content="About TDG Furniture Exchange, furniture non-profit, community support"
        />
      </Head>
      <AboutUs></AboutUs>
    </>
  );
};

export default index;

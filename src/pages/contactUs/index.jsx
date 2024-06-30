import ContactUS from "@/components/templates/contactUs";
import Head from "next/head";
const index = () => {
  return (
    <>
      <Head>
        <title>Contact Us</title>
        <meta
          name="description"
          content="Get in touch with TDG Furniture Exchange. Contact us for any inquiries about furniture donation or exchange, donating money or services, or becoming a volunteer for us."
        />
        <meta
          name="keywords"
          content="Contact TDG Furniture Exchange, furniture inquiries, furniture donation contact"
        />
      </Head>
      <ContactUS></ContactUS>
    </>
  );
};

export default index;

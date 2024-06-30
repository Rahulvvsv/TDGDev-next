import Header from "@/components/molecules/header";
import Footer from "@/components/molecules/footer";
import NextNProgress from "nextjs-progressbar";
import Head from "next/head";

import { Toaster } from "react-hot-toast";

import "./index.css";
export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>TDG Furniture Exchange | Furniture Donation Program</title>
        <meta name="description" content="TDG Furniture Exchange is a unique philanthropic program that matches people who are in need of furniture with those who have furniture to give away." />
        <meta name="keywords" content="TDG Furniture Exchange, donate furniture, exchange furniture" />
      </Head>

      <Head>
        <link rel="icon" type="image/png" href="/Icon/4.png" />
       
      </Head>
      <section>
        <NextNProgress color="#585552" />
        <Toaster position="top-right" />

        <section style={{ position: "relative" }}>
          <Header></Header>
        </section>
        <section className="mainss">
          <Component {...pageProps} />
        </section>
        <Footer></Footer>
      </section>
    </>
  );
}

import Header from "@/components/molecules/header"
import Footer from "@/components/molecules/footer"
import NextNProgress from 'nextjs-progressbar';
import { Toaster } from "react-hot-toast";

import "./index.css"
export default function MyApp({ Component, pageProps }) {
  return (
    <section >

    <NextNProgress color="#585552" />
    <Toaster position="top-right" />

    <section style={{position:"relative"}}>
    <Header></Header>
    </section>
    <section className="mainss">

      <Component {...pageProps} />
    </section>
      <Footer></Footer>
    </section>
      )
}

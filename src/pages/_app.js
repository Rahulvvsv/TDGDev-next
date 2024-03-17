import Header from "@/components/molecules/header"
import Footer from "@/components/molecules/footer"
import NextNProgress from 'nextjs-progressbar';

import "./index.css"
export default function MyApp({ Component, pageProps }) {
  return (
    <section >

    <NextNProgress color="#585552" />
    <section style={{position:"relative"}}>
    <Header></Header>
    </section>
      <Component {...pageProps} />
      <Footer></Footer>
    </section>
      )
}

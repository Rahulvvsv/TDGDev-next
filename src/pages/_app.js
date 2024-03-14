import Header from "@/components/molecules/header"
import Footer from "@/components/molecules/footer"
import NextNProgress from 'nextjs-progressbar';

import "./index.css"
export default function MyApp({ Component, pageProps }) {
  return (
    <>

    <NextNProgress color="#585552" />
    <Header></Header>
      <Component {...pageProps} />
      <Footer></Footer>
    </>
      )
}

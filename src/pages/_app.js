import Header from "@/components/molecules/header"
import Footer from "@/components/molecules/footer"
import "./index.css"
export default function MyApp({ Component, pageProps }) {
  return (
    <>
    <Header></Header>
      <Component {...pageProps} />
      <Footer></Footer>
    </>
      )
}

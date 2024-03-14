
import ContactUs from ".";
import Header from "../../molecules/header";
import Footer from "../../molecules/footer";
export default{
    title:"Templates/ContactUs",
    component:ContactUs
}


export const Primary = () => {
    return(
        <>
        <Header></Header>
        <ContactUs></ContactUs>
        <Footer></Footer>
        </>

    )
}
import AboutUs from ".";
import Header from "../../molecules/header";
import Footer from "../../molecules/footer";
export default{
    title:"Templates/AboutUs",
    component:AboutUs
}


export const Primary = () => {
    return(
        <>
        <Header></Header>
        <AboutUs></AboutUs>
        <Footer></Footer>
        </>

    )
}
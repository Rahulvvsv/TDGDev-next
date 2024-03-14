

import ServicesLanding from ".";
import Header from "../../molecules/header";
import Footer from "../../molecules/footer";
export default{
    title:"Templates/ServicesLanding",
    component:ServicesLanding
}


export const Primary = () => {
    return(
        <>
        <Header></Header>
        <ServicesLanding></ServicesLanding>
        <Footer></Footer>
        </>

    )
}
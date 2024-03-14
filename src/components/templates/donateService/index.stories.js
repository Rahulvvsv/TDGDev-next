import DonatePage from ".";

import Header from "../../molecules/header";
import Footer from "../../molecules/footer";

export default{
    title:"Templates/DonateService",
    component:DonatePage
    
}


export const Primary = () => {
    return(
        <>
        <Header></Header>
        <DonatePage></DonatePage>
        <Footer></Footer>
        </>

    )
}
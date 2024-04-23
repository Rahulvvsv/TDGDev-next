import style from "./index.module.css"

import DonateFurniture from "../../molecules/donateFurniture";
import DonateServiceForm from "../../molecules/donateServiceForm";

import BackButton from "@/components/molecules/backButton";
const DonateService = ({content="Service",href=""}) => {
    return (  
        <section>
            <section>
                <BackButton left="10%"></BackButton>
            </section>
            <br></br>
            <section>
            <DonateServiceForm href={href} ></DonateServiceForm>
            </section>
            <section className={style.main2}>
    {content == "Service"?
             <DonateFurniture leftHeading={"Donate Service"} leftCont={"At the TDG Furniture Exchange, we believe in the power of giving. Your donation of a service will play a crucial role in providing quality furniture to those in need. Join us in making a difference through your generosity."} leftImg={"/services/Images2/donate service.png"} rightImg={"/services/Images2/donate service 2.png"} rightCont={"Your support allows us to continue serving our community and make a difference in people's lives. Join us in our mission today!"} ></DonateFurniture>
             :

             <DonateFurniture leftHeading={"Donate Money"} leftCont={"At the TDG Furniture Exchange, we believe in the power of giving. Your monetary donations play a crucial role in providing quality furniture to those in need. Join us in making a difference through your generosity"} leftImg={"/donate/7.png"} rightImg={"/donate/4.png"} rightCont={"Your support allows us to continue serving our community and make a difference in people's lives. Join us in our mission and donate today!"} ></DonateFurniture>
            }
            </section>
        </section>
    );
}
 
export default DonateService;
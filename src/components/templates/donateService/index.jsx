import style from "./index.module.css"

import DonateFurniture from "../../molecules/donateFurniture";
import DonateServiceForm from "../../molecules/donateServiceForm";

const DonateService = ({content="Donate Service"}) => {
    return (  
        <section>
            <section>
            <DonateServiceForm></DonateServiceForm>
            </section>
            <section className={style.main2}>
             <DonateFurniture leftHeading={content} leftCont={"At the TDG Furniture Exchange, we believe in the power of giving. Your monetary donations play a crucial role in providing quality furniture to those in need. Join us in making a difference through your generosity"} leftImg={"/donate/2.png"} rightImg={"/donate/1.png"} rightCont={"Your support allows us to continue serving our community and make a difference in people's lives. Join us in our mission and donate today!"} href="https://buy.stripe.com/test_9AQg05cSu2p1gAU4gg"></DonateFurniture>
            </section>
        </section>
    );
}
 
export default DonateService;
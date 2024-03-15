import style from "./index.module.css"
import ContactHero from "../../molecules/contactHero";
import ContactForm from "../../molecules/contactForm";
import HereToAssist from "../../molecules/hereToAssist";
const ContactUS = () => {
    return (  
        <section>
            <section>
                <ContactHero></ContactHero>
            </section>
            <section className={style.main2}>
                <ContactForm></ContactForm>
            </section>
            {/* <section className={style.main3}>
                <HereToAssist></HereToAssist>
            </section> */}
        </section>
    );
}
 
export default ContactUS;
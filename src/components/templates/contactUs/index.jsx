import style from "./index.module.css"
import ContactHero from "../../molecules/contactHero";
import ContactForm from "../../molecules/contactForm";
import HereToAssist from "../../molecules/hereToAssist";
const ContactUS = () => {
    return (  
        <section>
            <section className={style.main3}>
                <HereToAssist></HereToAssist>
            </section>
            <section className={style.main1}>
                <ContactHero></ContactHero>
            </section>
            <section className={style.main2}>
                <ContactForm></ContactForm>
            </section>
            <section className={style.main4}>
                <h1 className={style.heading}>TDG Furniture exchange currently operates in Baltimore, Cleveland, Jerusalem, Lakewood, Los Angeles, Miami, New Jersey, New York and Toronto. </h1>
                <br />
                <h1 className={style.heading}>The Designers Group can facilitate and fund the start of a branch in your neighborhood. Please reach out to info@tdgfurnitureexchange.com to get involved.</h1>

            </section>
        </section>
    );
}
 
export default ContactUS;
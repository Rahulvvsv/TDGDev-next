import style from "./index.module.css"
import Image from "next/image";
const ContactHero = () => {
    return ( 
    <div className={style.main}>
        <div className={style.main2}>

        <div className={style.image}><div className={style.imageDiv}></div><Image src={"/contact/hero.png"} fill></Image></div>
        <div className={style.content}>
            <h1 className={style.heading}>GET IN TOUCH</h1>
            <h1 className={style.content2}>Reach out, share a question, or provide feedback on our TDG Furniture Exchange. Fill out the form and we will send you a response as soon as possible.</h1>
        </div>
        </div>
    </div> );
}
 
export default ContactHero;
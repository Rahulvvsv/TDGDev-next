import style from "./index.module.css"
import AOSComponent from "../AOS"
import Button from "../../atoms/button"
const SecondHeading = ({heading,contactHeading}) =>{
    return (
        <AOSComponent>

        <div className={style.main} data-aos="fade-down">
            <h1 className={style.fonts}>{heading}</h1>
            <Button href={"/contactUs"} content={contactHeading} effect={true}></Button>
        </div>
        </AOSComponent>
    )
}

export default SecondHeading;
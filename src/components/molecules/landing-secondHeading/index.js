import style from "./index.module.css"
import Button from "../../atoms/button"
const SecondHeading = ({heading,contactHeading}) =>{
    return (
        <div className={style.main}>
            <h1 className={style.fonts}>{heading}</h1>
            <Button href={"/contactUs"} content={contactHeading} effect={true}></Button>
        </div>
    )
}

export default SecondHeading;
import style from "./index.module.css"
import Button from "../../atoms/button";
const ThoughtAndLink = ({Description,name,ButtonContent,href=""}) => {
    return ( 
        <div className={style.main}>
           <h1 className={style.heading}>{Description}</h1> 
           <h1 className={style.name}>{name}</h1>
           <Button content={ButtonContent} backgroundColor={"white"} fontColor={"black"} href={href}></Button>
        </div>
     );
}
 
export default ThoughtAndLink;
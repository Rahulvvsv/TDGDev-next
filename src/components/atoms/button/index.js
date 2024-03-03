import Link from "next/link"
import style from "./index.module.css"
const Button = ({href,content,width,backgroundColor,fontColor}) =>{
   return (
    <Link href={href} className={style.button} style={{width:width,backgroundColor:backgroundColor,color:fontColor}}>
            {content}
    </Link>
   ) 
};

export default Button;
import Link from "next/link"
import style from "./index.module.css"
const Button = ({href,content,width,backgroundColor,fontColor,borderthick}) =>{
   return (
    <Link href={href} className={style.button} style={{width:width,backgroundColor:backgroundColor,color:fontColor,border:borderthick}}>
            {content}
    </Link>
   ) 
};

export default Button;
import Link from "next/link"
import style from "./index.module.css"
const Button = ({href,content,width}) =>{
   return (
    <Link href={href} className={style.button} style={{width:width}}>
            {content}
    </Link>
   ) 
};

export default Button;
import style from "./index.module.css"
import Image from "next/image";
const SingleTestimonial = ({testimonial,name,surname,opacity}) => {
    return ( 
    <div className={style.main} style={{opacity:opacity}}>
            <div className={style.image}>
                    <Image src={"/Icon/quotes.png"} fill></Image>
            </div>
                <h1 className={style.heading}>{testimonial}</h1>
                <div>
                    <h1 className={style.name}>{name}</h1>
                    <h1 className={style.surname}>{surname}</h1>
                </div>
    </div>
     );
}
 
export default SingleTestimonial;
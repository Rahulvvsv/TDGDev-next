import style from "./index.module.css"
import Image from "next/image";
const MissionHeader = () => {

    return ( 
    <div className={style.main}>

        <div className={style.main2}>
                <h1 className={style.heading}> OUR MISSION</h1>
                <div className={style.content3}>
                    
                <h1 className={style.content}>TDG Furniture Exchange, powered by The Designers Group, was conceived from a simple yet impactful idea. Recognizing the potential to assist others in need, The Designers Group created a platform that could connect those with surplus furniture to individuals seeking it.
</h1>
                <h1 className={style.content}>The result?</h1>
                </div>
                <h1 className={style.content2}>The TDG Furniture Exchange.</h1>

                <div className={style.content4}></div> 
        </div>
        <div className={style.image}>
            <Image src={"/about/main.png"} fill></Image>
        </div>
    </div> 
    );
}
 
export default MissionHeader;
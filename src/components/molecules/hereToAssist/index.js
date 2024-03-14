import style from "./index.module.css"
import Button from "../../atoms/button";
const HereToAssist = () => {
    let StatesList = ["Baltimore","Cleveland","Jerusalem","Lakewood","Los Angeles","Miami","New Jersey","New York","Toronto"]
    return ( 
        <div className={style.main}>
            <div className={style.main2}>

                <h1 className={style.heading}>We&apos;re here to assist you!</h1>
                <p className={style.content}>Whether you have questions about our furniture listings, want to schedule a pickup or delivery, or simply want to chat about all things furniture, we&apos;re here to assist you. </p>
                <div className={style.states}>

                {StatesList.map( (e,key)=><Button key={key} content={e} backgroundColor={"white"} borderthick={"2px solid rgba(121, 117, 114, 1)"} fontColor={"rgba(121, 117, 114, 1)"} href={""}></Button>)}
                </div>
                
            </div>
        </div>
     );
}
 
export default HereToAssist;
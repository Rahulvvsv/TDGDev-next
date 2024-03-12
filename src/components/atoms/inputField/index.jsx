"use client"
import style from "./index.module.css"
const InputField = ({placeholder,height,onChange,name,type="text"}) => {
    return ( 
        <>
        {type==="text"?<input className={style.inputs} name={name} onChange={onChange} type={type} placeholder={placeholder} style={{height:height}}></input>
:<textarea className={style.inputs+" " +style.input2} name={name} onChange={onChange} type={type} placeholder={placeholder} style={{height:height}} ></textarea>}
        </>

     );
}
 
export default InputField;
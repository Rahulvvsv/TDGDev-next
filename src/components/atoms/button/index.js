import Link from "next/link";
import style from "./index.module.css";
import { useRouter } from "next/router";
const Button = ({
  href,
  content,
  width,
  height,
  backgroundColor,
  fontColor = "white",
  borderthick,
  onClick ,
  effect = true,
  fontSize,
  fontWeight,
  btnClass =1
}) => {
  const router = useRouter();
  let rerouter = ()=>{
    // //console.log(href)
    router.push(href)
  }
  let EffectButton = () => {

    return (
      <div onClick={onClick || rerouter} className={style.main} style={{ color: fontColor,width:width ,height:height}}>
        <div
          type="button"
          className={  style["button"+btnClass]}
          style={{
            backgroundColor: backgroundColor,
            color: fontColor,
            border: borderthick,width:width ,height:height
          }}
        >

      <p className={style.btntext} style={{fontWeight:fontWeight,fontSize:fontSize}}>{content}</p>
        </div>
      </div>
    );
  };

  let NoEffect = () => {
    return (
      <Link
        href={href}
        className={style.button}
        style={{
          width: width,
          backgroundColor: backgroundColor,
          color: fontColor,
          border: borderthick,
        }}
      >
        {content}
      </Link>
    );
  };

  
  return (
        effect ? <EffectButton /> : <NoEffect /> 
  )
};

export default Button;

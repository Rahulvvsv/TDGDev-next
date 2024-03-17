import Link from "next/link";
import style from "./index.module.css";
const Button = ({
  href,
  content,
  width,
  backgroundColor,
  fontColor = "white",
  borderthick,
  effect = true,
}) => {
  let EffectButton = () => {
    return (
      <div className={style.main} style={{ color: fontColor,width:width }}>
        <span className={style.btntext}>{content}</span>
        <Link
          href={href}
          className={style.button1}
          style={{
            // width: width,
            backgroundColor: backgroundColor,
            color: fontColor,
            border: borderthick,
          }}
        ></Link>
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

import style from "./index.module.css";
import Button from "../../atoms/button";
const HereToAssist = ({ openModal, setEmail }) => {
  function lwr(str) {
    // Remove spaces from the input string
    let str2 = str.replace(/\s/g, "");
    // Convert the string to lowercase
    var lowerStr = str2.toLowerCase();
    let mail = "";
    if (lowerStr == "newyork") {
      mail = "info";
    } else if (lowerStr == "losangeles") {
      mail = "la";
    } else {
      mail = lowerStr;
    }
    return { lowerStr, mail };
  }

  let StatesList = [
    "Baltimore",
    "Cleveland",
    "Jerusalem",
    "Lakewood",
    "Los Angeles",
    "Miami",
    "New Jersey",
    "New York",
    "Toronto",
  ];
  return (
    <div className={style.main}>
      <div className={style.main2}>
        <h1 className={style.heading}>We&apos;re here to assist you!</h1>
        <p className={style.content}>
          Whether you have questions about our furniture listings, want to
          schedule a pickup or delivery, or simply want to chat about all things
          furniture, we&apos;re here to assist you.{" "}
        </p>
        <div className={style.states + " " + style["grid-container"]}>
          {StatesList.map((e, key) => (
            <Button
              onClick={() => {
                // console.log("inside this buttton");
                openModal(true);
                setEmail(lwr(e).mail + "@tdgfurnitureexchange.com");
              }}
              key={key}
              content={e}
              effect={false}
              href={""}
              backgroundColor={"white"}
              width={"90%"}
              btnClass={2}
              className={style["grid-item"]}
              borderthick={"2px solid rgba(121, 117, 114, 1)"}
              fontColor={"rgba(121, 117, 114, 1)"}
            ></Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HereToAssist;

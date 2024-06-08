
import style from "./index.module.css"
  function dateTimeFormateer(timestamp) {
    try{

        const { seconds, nanoseconds } = timestamp;
    const milliseconds = seconds * 1000 + nanoseconds / 1e6;
const date = new Date(milliseconds);
const options = { month: "short", day: "numeric", year: "2-digit" };
const formattedDate = date.toLocaleDateString("en-US", options);
return formattedDate;
}
catch{

const date = new Date();
const options = { month: "short", day: "numeric", year: "2-digit" };
const formattedDate = date.toLocaleDateString("en-US", options);
return formattedDate;

}
  }

const Desc = (data)=>{
    data = data["data"]
    let desc = data.desc
    let date = data.date
    let name = data.name
    console.log(data)
    console.log(desc,date,name,"from desc")
 return (
    <div className={style.something}>
      <p className={style.heading}>{name}</p>
      {/* <p className={style.desc}>{desc}</p> */}
        <p className={style.hh2}>{dateTimeFormateer(date)}</p>
    </div>
 )
}

export default Desc;
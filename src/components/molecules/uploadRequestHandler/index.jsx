"use client";
import style from "./index.module.css";
import FurnitureComp from "../furnitureComp";
import Button from "../../atoms/button";
const UploadRequestHandlerComp = ({
  img,
  name,
  desc,
  date,
  location,
  email,
  key
}) => {
  return (
    <section className={style.main} key={key}>
      <div className={style.left}>
        <FurnitureComp
          Img={img}
          name={name}
          desc={desc}
          showButton={false}
        ></FurnitureComp>
      </div>
      <div className={style.right}>
        <h1 className={style.heading}>Date-{date}</h1>
        <h1 className={style.heading}>Location-{location}</h1>
        <h1 className={style.heading}>Email-{email}</h1>

        <div className={style.buttons}>
          <Button content={"Accept"} href={""}></Button>

          <Button
            content={"Decline"}
            backgroundColor={"white"}
            borderthick={"1px solid #797572"}
            fontColor="#797572"
            href={""}
          ></Button>
        </div>
      </div>
    </section>
  );
};

const UploadRequestHandler = ({ data = [] }) => {
  return (
    <section className={style.main3}>
    <div className={style.main2}>

      <h1 className={style.heading1}>Welcome, TDG Fam</h1>
      <p className={style.subheading1}>Accept for approving the image posted by the user to be seen on website</p>
    </div>
      {data.map((e, key) => {
        console.log(e,data);
        return (
          <UploadRequestHandlerComp
            key={key}
            img={e.img}
            name={e.name}
            desc={e.desc}
            date={e.date}
            location={e.location}
            email={e.email}
          ></UploadRequestHandlerComp>
        );
      })}
    </section>
  );
};

export default UploadRequestHandler;

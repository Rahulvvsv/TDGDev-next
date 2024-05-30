"use client";
import { Suspense } from "react";
import { fetchData } from "@/lib/firebase";
import style from "./index.module.css";
import FurnitureComp from "../../molecules/furnitureComp";
import Button from "../../atoms/button";
import { updateDocument } from "../../../lib/firebase";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { toast } from 'react-hot-toast';

const UploadRequestHandlerComp = ({
  img,
  name,
  desc,
  date,
  location,
  email,
  unqid,
  status,
  udate
}) => {
  // //console.log(unqid, "from here");
  const router = useRouter();

  const acceptHandler = (id) => {
    // //console.log("clickedd", id);
    updateDocument(id, { status: "showOnPage" });
    // router.push("")
    toast.success("Item added to page")
  };
  const declineHandler = (id) => {
    updateDocument(id, { status: "declined" });
    toast.success("Item removed from main page")
    // router.push("")
  };

  return (
    <section key={unqid}>
      <section className={style.main}>
        <div className={style.left}>
          <FurnitureComp
            Img={img}
            name={name}
            desc={desc}
            date={udate}
            showButton={false}
          ></FurnitureComp>
        </div>
        <div className={style.right}>
          <h1 className={style.heading}>Date-{udate.toDate().toString().slice(0,16) || `None`}</h1>
          <h1 className={style.heading}>Location-{location || `None`} </h1>
          <h1 className={style.heading}>Email-{email || `None`}</h1>

          {status == "hidden" ? (
            <div className={style.buttons}>
              <Button
                onClick={() => {
                  acceptHandler(unqid);
                }}
                content={"Accept"}
                href={""}
              ></Button>

              <Button
                content={"Decline"}
                backgroundColor={"white"}
                borderthick={"1px solid #797572"}
                fontColor="#797572"
                href={""}
                btnClass={2}
                onClick={() => {
                  declineHandler(unqid);
                }}
              ></Button>
            </div>
          ) : (
            <div className={style.main4}>
              <h1 className={style.heading}>Status :{status}</h1>
              {status == "declined" && (
                <Button
                  onClick={() => {
                    acceptHandler(unqid);
                  }}
                  content={"Accept"}
                ></Button>
              )}
              {status == "showOnPage" && (
                <Button
                  onClick={() => {
                    declineHandler(unqid);
                  }}
                  content={"Decline"}
                ></Button>
              )}
            </div>
          )}
        </div>
      </section>
      <hr></hr>
    </section>
  );
};

const UploadRequestHandler = () => {
  const [dataToShow, setDataToShow] = useState([]);
  const [data,setData] = useState([])
  const [selectedButton, setSelectedButton] = useState(1);


  useEffect(() => {

    const fetcher = async () =>{
      let data = await fetchData();
      setData(data)
    }
     fetcher();
    if (selectedButton == 1) {
      let newArr = data.map((e) => {
        if (e.status == "hidden") {
          return e;
        }
      });

      setDataToShow(newArr);
    }
    if (selectedButton == 2) {
      let newArr = data.map((e) => {
        if (e.status != "hidden") {
          return e;
        }
      });
      setDataToShow(newArr);
      console.log("hi")
    }
  }, [selectedButton]);
return (
    <section className={style.main3}>
      <div className={style.main2}>
        <h1 className={style.heading1}>APPROVE IMAGES </h1>
        <p className={style.subheading1}>
          Approve the images posted by the users to be seen on website
        </p>
        <div className={style.div2}>
          <div
            className={
              selectedButton == 1 ? style.button1Selected : style.button1
            }
            onClick={() => {
              setSelectedButton(1);
            }}
          >
            New Requests
          </div>
          <div
            className={
              selectedButton == 2 ? style.button1Selected : style.button1
            }
            onClick={() => {
              setSelectedButton(2);
            }}
          >
            All requests
          </div>
        </div>
      </div>
      <Suspense fallback={<h1>Loading</h1>}>

      {dataToShow.map((e, key) => {
        if(e!=undefined){
          
          return (
            
            <UploadRequestHandlerComp
            unqid={e.id}
            key={e.id}
            img={e.imageUrl || "/"}
            name={e.name}
            desc={e.description}
            date={e.timestamp}
            location={e.location}
            email={e.email}
            status={e.status}
            udate={e.date}
            ></UploadRequestHandlerComp>
            );
          }
        })}
        </Suspense>
    </section>
  );
};

export default UploadRequestHandler;

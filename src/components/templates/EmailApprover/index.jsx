"use client";
import { Suspense } from "react";
import { fetchDataBasedOnId } from "../../../lib/firebase";
import style from "./index.module.css";
import FurnitureComp from "../../molecules/furnitureComp";
import Button from "../../atoms/button";
import { useEffect, useState } from "react";
import { updateClientDetails } from "../../../lib/firebase";
import { useRouter } from "next/router";
import { toast } from "react-hot-toast";
import { Emailer } from "@/lib/emailjs";

const UploadRequestHandlerComp = ({ client, owner, status }) => {
  // console.log(unqid, "from here");
  const router = useRouter();

  const acceptHandler = (id) => {
    toast.success("Email Sent");
    updateClientDetails(id, { status: "Sent" });
  };
  const declineHandler = (id) => {
    toast.success("Email will not be sent to client");
    updateClientDetails(id, { status: "Declined" });
  };

  return (
    <section key={client.id}>
      <section className={style.main}>
        <div className={style.left}>
          <FurnitureComp
            Img={owner.imageUrl}
            name={owner.name}
            desc={owner.description}
            date={owner.date}
            showButton={false}
          ></FurnitureComp>
        </div>
        <div className={style.rightop}>
          <div className={style.rightop2}>
            <div className={style.right}>
              <h1 className={style.heading + " " + style.heading2}>
                Owner Information
              </h1>
              <h1 className={style.heading}>
                Date-{owner?.date?.toDate().toString().slice(0,16)}
              </h1>
              <h1 className={style.heading}>Location-{owner.location || `None`}</h1>
              <h1 className={style.heading}>Email-{owner.email || `None`}</h1>
              <h1 className={style.heading}>Phone-{owner.phone|| `None`}</h1>
            </div>
            <div className={style.right}>
              <h1 className={style.heading + " " + style.heading2}>
                Client Information
              </h1>
              <h1 className={style.heading}>
                Date-{client?.date?.toDate().toString().slice(0,16)}
              </h1>
              <h1 className={style.heading}>Name-{client.name|| `None`}</h1>
              <h1 className={style.heading}>Email-{client.email|| `None`}</h1>
              <h1 className={style.heading}>Phone-{client.phone|| `None`}</h1>
            </div>
          </div>
          {client.status == "newReq" ? (
            <div className={style.buttons}>
              <Button
                onClick={() => {
                  acceptHandler(client.id);
                  Emailer({
                    name: owner.name,
                    image: owner.imageUrl[0],
                    to_email: client.email,
                    email:owner.email,
                    phone:owner.phone
                  });
                }}
                content={"Send"}
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
                  declineHandler(client.id);
                }}
              ></Button>
            </div>
          ) : (
            <div className={style.main4}>
              <h1 className={style.heading}>Status :{client.status}</h1>
              {client.status == "declined" && (
                <Button
                  onClick={() => {
                    acceptHandler(client.id);

                    Emailer({
                      name: owner.name,
                      image: owner.imageUrl[0],
                      to_email: client.email,
                    });
                  }}
                  content={"Sent"}
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

const EmailApprover = () => {
  const [dataToShow, setDataToShow] = useState([]);
  const [data, setData] = useState([]);
  const [selectedButton, setSelectedButton] = useState(1);

  const [received, setReceived] = useState(false);
  useEffect(() => {
    const fetcher = async () => {
      let data2 = await fetchDataBasedOnId();
      setData(data2);
      setReceived(true);
      return data2;
    };
    const DataCheckers = async (data3) => {
      if (selectedButton == 1) {
        let newArr = data3.map((e) => {
          // console.log(e)
          if (e != undefined) {
            if (e.client.status == "newReq") {
              console.log(e.client);
              return e;
            }
          }
        });

        setDataToShow(newArr);
      }
      if (selectedButton == 2) {
        let newArr = data3.map((e) => {
          if (e != undefined) {
            if (e?.client?.status != "newReq") {
              return e;
            }
          }
        });
        setDataToShow(newArr);
      }
      console.log(dataToShow);
    };

    let FinalRunner = async () => {
      let fetchedData = await fetcher();
      console.log(fetchedData);
      let runner = await DataCheckers(fetchedData);
    };
    FinalRunner();
  }, [selectedButton, received]);
  return (
    <section className={style.main3}>
      <div className={style.main2}>
        <h1 className={style.heading1}>VERIFY DONOR DETAILS</h1>
        <p className={style.subheading1}>
          Verify the Client information before sending him the donor details
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
          if (e != undefined) {
              return (
                  <UploadRequestHandlerComp
                  unqid={e.id}
                  key={e.id}
                  client={e.client}
                  owner={e.owner}
                  ></UploadRequestHandlerComp>
                  );
                }
            })}
            </Suspense>
    </section>
  );
};

export default EmailApprover;

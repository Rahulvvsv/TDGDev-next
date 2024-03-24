"use client";
import style from "./index.module.css";
import InputField from "../../atoms/inputField";
import Button from "../../atoms/button";
import Image from "next/image";
import { useState } from "react";
import { uploadContactForm } from "../../../lib/firebase";
import toast from "react-hot-toast";
const ContactDonarPopUP = ({ data, setData, modalCloser }) => {
  const [submitted, setSubmitted] = useState(false);
  const dataSetter = (e) => {
    e.preventDefault();
    let name = e.target.name;
    let value = e.target.value;
    setData((prev) => ({ ...prev, [name]: value }));
    console.log(data);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("clicked", data);
    uploadContactForm(data);
    setSubmitted(true);
    toast.success("Your request is received");
  };
  return (
    <div className={style.main}>
      <Image
        src={"/Icon/cross.png"}
        width={20}
        height={20}
        style={{
          position: "absolute",
          right: 20,
          top: 15,
          filter: "invert(1)",
        }}
        onClick={modalCloser}
      ></Image>
      <div className={style.image}>
        <Image src={"/Icon/4.png"} fill></Image>
      </div>
      <p>You'll receive an email with the furniture details</p>
      <br />
      <div className={style.main2}>
        {submitted ? (
          <div>
            {/* <h1 className={style.heading}>
              Thank you for your generous offer to donate your service. We will
              notify you as soon as an opportunity comes up, and you can confirm
              your intent to donate. We appreciate your support!
            </h1> */}
            <Button content={"Back"} onClick={modalCloser}></Button>
          </div>
        ) : (
          <>
            <InputField
              onChange={dataSetter}
              placeholder={"NAME"}
              name={"name"}
            ></InputField>
            <InputField
              onChange={dataSetter}
              placeholder={"EMAIL"}
              name={"email"}
            ></InputField>{" "}
            <InputField
              onChange={dataSetter}
              placeholder={"PHONE"}
              name={"phone"}
            ></InputField>
            <InputField
              onChange={dataSetter}
              placeholder={"ANY QUESTIONS"}
              name={"question"}
            ></InputField>
            <Button onClick={handleSubmit} content={"Submit"}></Button>
          </>
        )}
      </div>
    </div>
  );
};

export default ContactDonarPopUP;

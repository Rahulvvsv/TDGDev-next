"use client";
import style from "./index.module.css";
import InputField from "../../atoms/inputField";
import Button from "../../atoms/button";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ReCAPTCHA from "react-google-recaptcha";
import { upLoadData } from "../../../lib/firebase";
import toast from "react-hot-toast";
import DatePicker from "react-datepicker";

const ReceipientForm = ({
  images,
  productId,
  productName,
  name,
  description,
}) => {
  const [data, setData] = useState({});
  let captcha = useRef(null);
  const [files, setFiles] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [previewUrls, setPreviewUrls] = useState(images);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [errors, setErrors] = useState({});
  const [startDate, setStartDate] = useState(new Date());


  console.log(images, productId);

  const dataSetter = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log(data);
      // upLoadData(data);
      // setSubmitted(true);
    } else {
      toast.error("Form is invalid, please check your inputs");
    }
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    // Validate full name
    if (!data.fullName || data.fullName.trim() === "") {
      newErrors.fullName = "Full name is required";
      isValid = false;
    }

    // Validate phone
    if (!data.phone || data.phone.trim() === "") {
      newErrors.phone = "Phone number is required";
      isValid = false;
    } else if (!/^\d{10}$/.test(data.phone.trim())) {
      // assuming a 10-digit phone number
      newErrors.phone = "Invalid phone number";
      isValid = false;
    }

    // Validate description
    if (!data.desc || data.desc.trim() === "") {
      newErrors.desc = "Description is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  return (
    <div>
      {!submitted ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={style.main}
        >
          <div className={style.left}>
            <div className={style.imageUpload}>
              <Image
                alt=" "
                src={images[0]}
                className={style.imageInside}
                fill
              />
            </div>

            <div className={style.main890}>
              <h1 className={style.heading}>Donor Name: {name}</h1>
              <h1 className={style.heading}>Furniture Name: {productName}</h1>
              <h1 className={style.heading}>Description: {description}</h1>
            </div>
            <br />
          </div>

          <motion.div className={style.right}>
            <br />
            <InputField
              onChange={dataSetter}
              placeholder={"RECIPIENT'S NAME*"}
              name={"recName"}
            />
            {errors.fullName && (
              <div className={style.error}>{errors.fullName}</div>
            )}

            <InputField
              onChange={dataSetter}
              placeholder={"RECIPIENT'S CONTACT DETAILS*"}
              name={"recContact"}
            />
            {errors.phone && <div className={style.error}>{errors.phone}</div>}

            {/* <InputField
              onChange={dataSetter}
              placeholder={"PICK UP DATE*"}
              name={"pick"}
              type="text-area"
            /> */}
        
            <DatePicker className={style.datepicker} selected={startDate} onChange={(date) => setStartDate(date)} />
            {errors.desc && <div className={style.error}>{errors.desc}</div>}

            <Button
              onClick={handleSubmit}
              placeholder={"SUBMIT"}
              content={"SUBMIT"}
              href={""}
              fontColor={"white"}
            />
          </motion.div>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={style.main2}
        >
          <Image alt=" " src={"/Icon/4.png"} width={190} height={190} />
          <h1 className={style.heading1}>
            Thank you for your offer to donate. Someone will be in touch with
            next steps. Your generosity is appreciated!
          </h1>
        </motion.div>
      )}
    </div>
  );
};

export default ReceipientForm;

"use client";

import { useSearchParams } from "next/navigation";
import style from "./index.module.css";
import InputField from "../../atoms/inputField";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Button from "../../atoms/button";
import { useEffect, useState } from "react";

const TestimonialForm = ({ href }) => {
  const searchParams = useSearchParams();
  const [submitted, setSubmitted] = useState(false);
  const [data, setData] = useState({});
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (searchParams.has("donation")) {
      let value = searchParams.get("donation");
      if (value === "1") {
        setSubmitted(true);
      }
    }
  }, [searchParams]);

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    // Validate full name
    if (!data.fullName || data.fullName.trim() === "") {
      newErrors.fullName = "Full name is required";
      isValid = false;
    }

    // Validate email
    if (!data.email || !data.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      newErrors.email = "Invalid email address";
      isValid = false;
    }

    // Validate phone
    if (!data.phone || data.phone.trim() === "") {
      newErrors.phone = "Phone number is required";
      isValid = false;
    }

    // Validate service
    if (!data.service || data.service.trim() === "") {
      newErrors.service = "Service is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const dataSetter = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setSubmitted(true);
      if (href !== "") {
        window.location.href = href;
      }
    }
  };

  return (
    <div className={style.main2}>
      <section className={style.secc}>
        
      <h1 className={style.heading2 +" " + style.heading3} > Share Your Experience</h1>
      <h1 className={style.heading2}>We would love to hear about your experience with the TDG Furniture Exchange. </h1>
      <h1 className={style.heading2}>Your testimonial helps us inspire others and improve our service. Thank you for your support!</h1>
      </section>
      {!submitted ? (
        <>
          <InputField
            onChange={dataSetter}
            placeholder={"FULL NAME*"}
            name="fullName"
          />
          {errors.fullName && (
            <div className={style.error}>{errors.fullName}</div>
          )}

          <InputField
            onChange={dataSetter}
            placeholder={"EMAIL*"}
            name="email"
          />
          {errors.email && (
            <div className={style.error} style={{ marginTop: 10 }}>
              {errors.email}
            </div>
          )}

          <InputField
            placeholder={"LOCATION*"}
            onChange={dataSetter}
            name="location"
          />
          {errors.phone && (
            <div className={style.error} style={{ marginTop: 10 }}>
              {errors.phone}
            </div>
          )}
                  <InputField
            placeholder={"FURNITURE ITEM DONATED*"}
            onChange={dataSetter}
            name="donatedItem"
          />
          {errors.phone && (
            <div className={style.error} style={{ marginTop: 10 }}>
              {errors.phone}
            </div>
          )}

          <InputField
            type="text-area"
            height={100}
            onChange={dataSetter}
            placeholder={"TESTIMONIAL*"}
            name="testimonial"
          />
          {errors.service && (
            <div className={style.error}>{errors.service}</div>
          )}
          <Button type="submit" content={"SUBMIT"} onClick={handleSubmit} />
        </>
      ) : (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={style.main5}
          >
            <Image alt=" " src={"/Icon/4.png"} width={190} height={190} />
            <h1 className={style.heading}>
              Thank you for your generous donation to our furniture exchange
              initiative.
            </h1>
            <h1 className={style.heading}>
              Your support helps transform houses into homes for those in need.
            </h1>
          </motion.div>
        </>
      )}
    </div>
  );
};

export default TestimonialForm;

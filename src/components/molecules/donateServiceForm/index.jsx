"use client";
// import style from "./index.module.css"
// import InputField from "../../atoms/inputField";
// import { AnimatePresence,motion } from "framer-motion";
// import Image from "next/image";
// import Button from "../../atoms/button";
// import { useState } from "react";
// const DonateServiceForm = ({href}) => {
//        const [submitted,setSubmitted] = useState(false)
// const [data,setData] = useState({})
//     const dataSetter = (e) =>{
//         e.preventDefault();
//         let name = e.target.name;
//         let value = e.target.value;
//         setData(prev => ({...prev,[name]:value}))
//         //console.log(data)
//     }
//     return (
//         <div className={style.main}>
// {!submitted?<>
//            <InputField onChange={dataSetter} placeholder={"FULL NAME*"}></InputField>
//             <div className={style.main2}>
//                 <div>
//                 <InputField onChange={dataSetter}  placeholder={"EMAIL*"}></InputField>
//                 </div>

//                 <div>
//                 <InputField placeholder={"PHONE*"}  onChange={dataSetter} ></InputField>
//                 </div>
//             </div>
//             <InputField type="textarea" height={100} onChange={dataSetter}  placeholder={"ENTER SERVICE*"}></InputField>
//             <Button  onClick={()=>{

//                 setSubmitted(true)
//                 if(href!=""){
//                     window.location.href=href
//                 }
//             }} content={"Submit"}></Button>
// </>:<>

//             <motion.div  initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}className={style.main5}>
//                 <Image alt=" " src={"/Icon/4.png"} width={190} height={190}></Image>
//                 <h1 className={style.heading}>Thank you for your generous offer to donate your service. We will notify you as soon as an opportunity comes up, and you can confirm your intent to donate. We appreciate your support!</h1>
//             </motion.div>
// </>
// }
//         </div>
//      );
// }

// export default DonateServiceForm;
import style from "./index.module.css";
import InputField from "../../atoms/inputField";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Button from "../../atoms/button";
import { useState } from "react";

const DonateServiceForm = ({ href }) => {
  const [submitted, setSubmitted] = useState(false);
  const [data, setData] = useState({});
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    // Validate full name
    if (!data.fullName || data.fullName.trim() === "") {
      newErrors.fullName = "Full name is required";
      isValid = false;
    }

    // Validate email
    if (!data.email || data.email.trim() === "") {
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
    } else if (!/^\d{10}$/.test(data.phone.trim())) {
      // assuming a 10-digit phone number
      newErrors.phone = "Invalid phone number";
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
    <div className={style.main}>
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
          <div className={style.main2}>
            <div>
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
            </div>
            <div>
              <InputField
                placeholder={"PHONE*"}
                onChange={dataSetter}
                name="phone"
              />
              {errors.phone && (
                <div className={style.error} style={{ marginTop: 10 }}>
                  {errors.phone}
                </div>
              )}
            </div>
          </div>
          <InputField
            type="text-area"
            height={100}
            onChange={dataSetter}
            placeholder={"ENTER SERVICE*"}
            name="service"
          />
          {errors.service && (
            <div className={style.error}>{errors.service}</div>
          )}
          <Button type="submit" content={"Submit"} onClick={handleSubmit} />
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
              Thank you for your generous offer to donate your service. We will
              notify you as soon as an opportunity comes up, and you can confirm
              your intent to donate. We appreciate your support!
            </h1>
          </motion.div>
        </>
      )}
    </div>
  );
};

export default DonateServiceForm;

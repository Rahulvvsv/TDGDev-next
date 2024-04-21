// "use client"
// import style from "./index.module.css"
// import InputField from "../../atoms/inputField";
// import Button from "../../atoms/button";
// import { useState } from "react";
// import Image from "next/image";
// const ContactForm = () => {
//     const [data,setData] = useState({})
//     const dataSetter = (e) =>{
//         e.preventDefault();
//         let name = e.target.name;
//         let value = e.target.value;
//         setData(prev => ({...prev,[name]:value}))
//         console.log(data)
//     }
//     return ( 
//         <div className={style.main}>

//             <form className={style.main2}>
                
//                 <InputField onChange={dataSetter} placeholder={"NAME*"} name={"name"}></InputField>
//                 <InputField onChange={dataSetter} placeholder={"EMAIL*"} name={"email"}></InputField>
//                 <InputField onChange={dataSetter} placeholder={"MESSAGE*"} name={"message"} height={70} type="text-area"></InputField>
//                 <Button href={""} content={"SEND MESSAGE"} width={"100%"}></Button>
//             </form>
//             <div className={style.main3}>
//                 <div className={style.main4}>
//                     <Image src={"/Icon/globe.png"} width={16} height={16}></Image>
//                     <h1 className={style.subHeading}>info@tdgfurnitureexchange.com</h1>
//                 </div>
//                 <div className={style.main4}>
//                     <Image src={"/Icon/phone.png"} width={16} height={16}></Image>
//                     <h1 className={style.subHeading}>9084170619</h1>
//                 </div>
//                 <div className={style.main4}>
//                     <Image src={"/Icon/map.png"} width={16} height={16}></Image>
//                     <h1 className={style.subHeading}>170 53rd Street 327, Brooklyn NY 11232</h1>
//                 </div>
//             </div>
//         </div>
//      );
// }
 
// export default ContactForm;
import style from "./index.module.css"
import InputField from "../../atoms/inputField";
import Button from "../../atoms/button";
import { useState } from "react";
import Image from "next/image";

const ContactForm = () => {
    const [data, setData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const [errors, setErrors] = useState({});

    const validateForm = () => {
        let isValid = true;
        const newErrors = {};

        // Validate name
        if (!data.name.trim()) {
            newErrors.name = "Name is required";
            isValid = false;
        }

        // Validate email
        if (!data.email.trim()) {
            newErrors.email = "Email is required";
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(data.email)) {
            newErrors.email = "Invalid email address";
            isValid = false;
        }

        // Validate message
        if (!data.message.trim()) {
            newErrors.message = "Message is required";
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const dataSetter = (e) => {
        const { name, value } = e.target;
        setData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            // Submit the form data
            console.log("Form submitted:", data);
            // Reset form after submission if needed
            setData({
                name: "",
                email: "",
                message: ""
            });
            setErrors({});
        }
    };

    return (
        <div className={style.main}>
            <form className={style.main2} onSubmit={handleSubmit}>
                <InputField
                    onChange={dataSetter}
                    placeholder={"NAME*"}
                    name={"name"}
                    value={data.name}
                />
                {errors.name && <div className={style.error}>{errors.name}</div>}
                <InputField
                    onChange={dataSetter}
                    placeholder={"EMAIL*"}
                    name={"email"}
                    value={data.email}
                />
                {errors.email && <div className={style.error}>{errors.email}</div>}
                <InputField
                    onChange={dataSetter}
                    placeholder={"MESSAGE*"}
                    name={"message"}
                    height={70}
                    type="text-area"
                    value={data.message}
                />
                {errors.message && <div className={style.error}>{errors.message}</div>}
                <Button content={"SEND MESSAGE"} onClick={handleSubmit} width={"100%"} href={""} />

            </form>
            <div className={style.main3}>
                {/* Contact information */}
                 <div className={style.main4}>
                     <Image src={"/Icon/globe.png"} width={16} height={16}></Image>
                     <h1 className={style.subHeading}>info@tdgfurnitureexchange.com</h1>
                 </div>
                 <div className={style.main4}>
                     <Image src={"/Icon/phone.png"} width={16} height={16}></Image>
                     <h1 className={style.subHeading}>646-543-7515</h1>
                 </div>
                 <div className={style.main4}>
                     <Image src={"/Icon/map.png"} width={16} height={16}></Image>
                     <h1 className={style.subHeading}>170 53rd Street 327, Brooklyn NY 11232</h1>
                 </div>
            </div>
        </div>
    );
}

export default ContactForm;

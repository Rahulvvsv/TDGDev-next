// import style from "./index.module.css";
// import ContactHero from "../../molecules/contactHero";
// import ContactForm from "../../molecules/contactForm";
// import HereToAssist from "../../molecules/hereToAssist";
// const ContactUS = () => {
//   return (
//     <section>
//       <section className={style.main3}>
//         <HereToAssist></HereToAssist>
//         <Modal
//           isOpen={modalIsOpen}
//           onAfterOpen={afterOpenModal}
//           onRequestClose={closeModal}
//           className={style.main8}
//           overlayClassName={style.main10}
//           subtitle="popup"
//         >
//           <section className={style.main9}>
//             <ContactDonarPopUP
//               data={data}
//               setData={setData}
//               modalCloser={closeModal}
//             ></ContactDonarPopUP>
//           </section>
//         </Modal>
//       </section>
//       <section className={style.main1}>
//         <ContactHero></ContactHero>
//       </section>
//       <section className={style.main2}>
//         <ContactForm></ContactForm>
//       </section>
//       <section className={style.main4}>
//         <h1 className={style.heading}>
//           TDG Furniture exchange currently operates in Baltimore, Cleveland,
//           Jerusalem, Lakewood, Los Angeles, Miami, New Jersey, New York and
//           Toronto.{" "}
//         </h1>
//         <br />
//         <h1 className={style.heading}>
//           The Designers Group can facilitate and fund the start of a branch in
//           your neighborhood. Please reach out to info@tdgfurnitureexchange.com
//           to get involved.
//         </h1>
//       </section>
//     </section>
//   );
// };

// export default ContactUS;
import React, { useState } from "react";
import style from "./index.module.css";
import ContactHero from "../../molecules/contactHero";
import ContactForm from "../../molecules/contactForm";
import HereToAssist from "../../molecules/hereToAssist";
import Modal from "react-modal";
import Button from "@/components/atoms/button";
import Image from "next/image";
const ContactUS = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [data, setData] = useState({});

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const afterOpenModal = () => {
    // Handle after modal is opened
  };

  return (
    <section>
      <section className={style.main3}>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          className={style.main8}
          overlayClassName={style.main10}
          subtitle="popup"
        >
          <section className={style.main9}>
            <div
              onClick={() => {
                closeModal();
              }}
              className={style.closeButton}
            >
              <Image
                src={"/Icon/cross.png"}
                width={20}
                height={20}
                className={style.image}
              />
            </div>
            <Button
              key={email}
              content={email}
              backgroundColor={"white"}
              width={"90%"}
              effect={false}
              btnClass={2}
              className={style["grid-item"]}
              borderthick={"2px solid rgba(121, 117, 114, 1)"}
              fontColor={"rgba(121, 117, 114, 1)"}
              href={`mailto:${email}`}
            ></Button>
          </section>
        </Modal>
        <HereToAssist
          openModal={setModalIsOpen}
          setEmail={setEmail}
        ></HereToAssist>
      </section>
      <section className={style.main1}>
        <ContactHero></ContactHero>
      </section>
      <section className={style.main2}>
        <ContactForm></ContactForm>
      </section>
      <section className={style.main4}>
        <h1 className={style.heading}>
          TDG Furniture exchange currently operates in Baltimore, Cleveland,
          Jerusalem, Lakewood, Los Angeles, Miami, New Jersey, New York and
          Toronto.{" "}
        </h1>
        <br />
        <h1 className={style.heading}>
          The Designers Group can facilitate and fund the start of a branch in
          your neighborhood. Please reach out to info@tdgfurnitureexchange.com
          to get involved.
        </h1>
      </section>
    </section>
  );
};

export default ContactUS;

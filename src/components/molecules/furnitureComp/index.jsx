import style from "./index.module.css";
import Image from "next/image";
import Button from "../../atoms/button";
import Modal from "react-modal";
import { useState } from "react";
import ContactDonarPopUP from "../contactDonarPop";
const FurnitureComp = ({ Img, name, desc, key = "", showButton = true,unqId }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [data,setData] = useState({})
  function openModal() {
    setIsOpen(true);
    setData({"donarId":unqId})
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className={style.main} key={key}>
      <div className={style.image}>
        <Image src={Img} fill></Image>
      </div>
      <h1 className={style.heading}>{name}</h1>
      <h1 className={style.desc}>{desc}</h1>
      {showButton && (
        <Button
          width={270}
          href={""}
          backgroundColor={"white"}
          content={"Contact Donor"}
          fontColor={"rgba(121, 117, 114, 1)"}
          onClick={openModal}
        ></Button>
      )}
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        className={style.main8}
        overlayClassName={style.main10}
        subtitle="popup"
      >
        <section className={style.main9}>
          <ContactDonarPopUP data={data}></ContactDonarPopUP>
        </section>
      </Modal>
    </div>
  );
};

export default FurnitureComp;

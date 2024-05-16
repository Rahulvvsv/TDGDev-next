import style from "./index.module.css";
import Image from "next/image";
import Button from "../../atoms/button";
import Modal from "react-modal";
import { useState } from "react";
import ContactDonarPopUP from "../contactDonarPop";
const FurnitureComp = ({ Img, name="None", desc="None", key = "", showButton = true,unqId }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [data,setData] = useState({})
  const [ImageLink,setImage] = useState();

  const [imageModalIsOpen, setImageIsOpen] = useState(false);
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
  function closeImageModal() {
    setImageIsOpen(false);
  }

  return (
    <div className={style.main} id={style.something} key={key}>
      <div className={style.image} onClick={()=>{setImageIsOpen(true);setImage(Img)}}>
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
          btnClass={2}
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
          <ContactDonarPopUP data={data} setData={setData} modalCloser={closeModal}></ContactDonarPopUP>
        </section>
      </Modal>
      
      <Modal
        isOpen={imageModalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        className={style.main18}
        overlayClassName={style.main10}
        subtitle="popup"
      >
        <section className={style.main9}>
          {/* <ContactDonarPopUP data={data} setData={setData} modalCloser={closeModal}></ContactDonarPopUP> */}
          <div className={style.main20}>

          <Image
            src={"/Icon/cross.png"}
            width={20}
            height={20}
            style={{
              position: "absolute",
              right: 20,
              top: 15,
              zIndex:10,
              filter: "invert(1)",
            }}
            onClick={closeImageModal}
          ></Image>
          <div className={style.modalImage}>

          <Image src={ImageLink} fill></Image>
          </div>
          </div>
        </section>
      </Modal>
    </div>
  );
};

export default FurnitureComp;

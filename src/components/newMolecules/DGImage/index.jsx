
import style from "./index.module.css";
import Image from "next/image";
import Button from "../../atoms/button";
import Modal from "react-modal";
import { useState } from "react";
import {
  TransformWrapper,
  TransformComponent,
  useControls,
} from "react-zoom-pan-pinch";

const FurnitureComp = (params,key=1) => {
    
let Img = params["data"]
  const [modalIsOpen, setIsOpen] = useState(false);
  const [data, setData] = useState({});
  const [ImageLink, setImage] = useState();

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imageModalIsOpen, setImageIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
    setData({ donarId: unqId });
  }
  const Controls = () => {
    const { zoomIn, zoomOut, resetTransform } = useControls();

    return (
      <div className={style.tools}>
        <button onClick={() => zoomIn()}>Zoom In </button>
        <button onClick={() => zoomOut()}>Zoom out</button>
        <button onClick={() => resetTransform()}>Reset</button>
      </div>
    );
  };

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

  function dateTimeFormateer(timestamp) {
    const { seconds, nanoseconds } = timestamp;
    const milliseconds = seconds * 1000 + nanoseconds / 1e6;
    const date = new Date(milliseconds);
    const options = { month: "short", day: "numeric", year: "2-digit" };
    const formattedDate = date.toLocaleDateString("en-US", options);
    return formattedDate;
  }

  const handleImageNavigation = (direction) => {
    // console.log("clickedd")
    if (direction === "left") {
      setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? ImageLink.length - 1 : prevIndex - 1));
    } else if (direction === "right") {
      setCurrentImageIndex((prevIndex) => (prevIndex === ImageLink.length - 1 ? 0 : prevIndex + 1));
    }
  };
  return (
    <div  key={key}>
      <div
        className={style.image}
        onClick={() => {
          setImageIsOpen(true);
          setImage(Img);
        }}
      >
        <Image width={75} height={75} src={Img[0]} ></Image>
         </div>


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
                zIndex: 10,
                filter: "invert(1)",
                cursor:"pointer"
              }}
              onClick={closeImageModal}
            ></Image>

                { ImageLink?.length > 1 &&

                  <div className={style.navbuttondiv}>


                  <button onClick={() => handleImageNavigation("left")} className={style.navButton}>{"<"}</button>
                  <button onClick={() => handleImageNavigation("right")} className={style.navButton}>{">"}</button>
                </div>
                }
            <TransformWrapper
              initialScale={1}
              initialPositionX={0}
              initialPositionY={0}
              className={style.wrapper}
            >
              {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
                <>
                  <Controls />
                  <TransformComponent

              style={{width:"100%",height:"100%"}}
                   >
              <div className={style.modalImage}>
                      <Image alt=" " src={ImageLink[currentImageIndex]} fill ></Image>
              </div>
                  </TransformComponent>
                </>
              )}
            </TransformWrapper>
          </div>
        </section>
      </Modal>
    </div>
  );
};

export default FurnitureComp;

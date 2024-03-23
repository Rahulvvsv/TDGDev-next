import style from "./index.module.css"

import DonateFurniture from "../../molecules/donateFurniture";
import UploadForm from "../../molecules/uploadImagesForm";
const DonateFurnitureForm = () => {
    return (  
        <section>
            <section className={style.main}>
                <UploadForm></UploadForm>
            </section>
            <section className={style.main2}>
             <DonateFurniture leftHeading={"Donate Furiture"} leftCont={"Our furniture exchange service provides a platform to donate your furniture you no longer need."} leftImg={"/donate/8.png"} rightImg={"/donate/5.png"} rightCont={"Donating your unwanted furniture can bring joy to someone who truly needs it. Say goodbye to your unused furniture and give it a new life!"}></DonateFurniture>
            </section>
        </section>
    );
}
 
export default DonateFurnitureForm;
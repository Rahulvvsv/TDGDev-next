import style from "./index.module.css"

import DonateFurniture from "../../molecules/donateFurniture";
import BackButton from "@/components/molecules/backButton";
import UploadForm from "../../molecules/uploadImagesForm";
const DonateFurnitureForm = () => {
    return (  
        <section>
            <section >
                <BackButton></BackButton>
            </section>
            <section className={style.main}>
                <UploadForm></UploadForm>
            </section>
            <section className={style.main2}>
             <DonateFurniture leftHeading={"Donate Furniture"} leftCont={"Our furniture exchange service provides a platform to donate your furniture you no longer need."} leftImg={"/donate/furn1.jpeg"} rightImg={"/donate/furn2.jpeg"} rightCont={"Donating your unwanted furniture can bring joy to someone who truly needs it. Say goodbye to your unused furniture and give it a new life!"}></DonateFurniture>
            </section>
        </section>
    );
}
 
export default DonateFurnitureForm;
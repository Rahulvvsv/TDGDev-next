import SingleTestimonial from ".";
export default{
    title:"Molecules/SingleTestimonial",
    component:SingleTestimonial
}

export const Primary = () => <SingleTestimonial testimonial={"Furniture exchange was smooth and perfect and very nice wow fantastic delivery service loved the process furniture also was nice not damaged and fast delivery"}  name={"Aaryaa Joshi"} surname={"Baltimore"} ></SingleTestimonial>


export const Secondary = () => <SingleTestimonial testimonial={"Furniture exchange was smooth and perfect and very nice wow fantastic delivery service loved the process furniture also was nice not damaged and fast delivery"}  name={"Aaryaa Joshi"} surname={"Baltimore"}  opacity={0.6} ></SingleTestimonial>
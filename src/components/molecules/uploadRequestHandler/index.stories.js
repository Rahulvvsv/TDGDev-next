import UploadRequestHandler from ".";
export default{
    title:"Molecules/uploadRequestHandler",
    component:UploadRequestHandler
}
let data = [{img:"client/1.jfif",name:"rahul",desc:"stylish",date:"2-12-23",location:"hyderabad",email:"rahulwork120@gmail.com"}]
export const Primary = () => <UploadRequestHandler data={data}></UploadRequestHandler>
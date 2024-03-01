import Button from ".";
export default{
    title:"Atoms/Button",
    component:Button
}

export const Primary = () => <Button href={"www.google.com"} content={"Conatct US"}></Button>
export const Secondary = () => <Button href={'www.google.com'} content={"Contact US"} width={300}></Button>
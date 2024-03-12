import InputField from ".";

export default{
    title:"Atoms/InputField",
    component:InputField

}


export const Primary = () => <InputField placeholder={"NAME*"}></InputField>
export const Secondary = () => <InputField placeholder={"MESSAGE*"} type="text-area" height={"100px"}></InputField>
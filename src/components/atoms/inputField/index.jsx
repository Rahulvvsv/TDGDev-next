"use client";
import style from "./index.module.css";
import { locationsData } from "../../../pages/services/getFurniture/[location]";
const InputField = ({ placeholder, height, onChange, name, type = "text" }) => {
  return (
    <>
      {type == "text" && (
        <input
          required
          className={style.inputs}
          name={name}
          onChange={onChange}
          type={type}
          placeholder={placeholder}
          style={{ height: height }}
        ></input>
      )}

      {type == "text-area" && (
        <textarea
          className={style.inputs + " " + style.input2}
          required
          name={name}
          onChange={onChange}
          type={type}
          placeholder={placeholder}
          style={{ height: height }}
        ></textarea>
      )}

      {type == "dropdown" && (
        <select  name="location" className={style.inputs} onChange={onChange}>
          <option className={style.inputs} >Location</option>
          {locationsData.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      )}
    </>
  );
};

export default InputField;

import { updateDocument } from "@/lib/firebase";
import { useState, useEffect } from "react";
import style from "./index.module.css";

const Status = (props) => {
  // console.log("props", props);
  const initialStatus = props.data.value.status;
  const [status, setStatus] = useState(initialStatus);

  let id = props.data.value.id;
  const getDropdownValue = (status) => {
    switch (status) {
      case "showOnPage":
        return "published on website";
      case "hidden":
        return "New Request";
      case "declined":
        return "removed from website";

      case "donorFound":
        return "donor found";
      default:
        return "";
    }
  };

  const getDropdownOptions = (status) => {
    switch (status) {
      case "showOnPage":
        return [
          { value: "declined", label: "remove from website" },
          { value: "donorFound", label: "donor Found" },
        ];
      case "hidden":
        return [
          { value: "declined", label: "remove from website" },
          { value: "showOnPage", label: "publish on the website" },
          { value: "donorFound", label: "donor Found" },
        ];
      case "declined":
        return [
          { value: "showOnPage", label: "publish on the website" },
          { value: "donorFound", label: "donor Found" },
        ];

        
      case "donorFound":
        return [
            { value: "showOnPage", label: "publish on the website" },
          { value: "declined", label: "remove from website" },
          { value: "donorFound", label: "donor Found" },
        ];
      default:
        return [];
    }
  };

  const handleChange = (event) => {
    let value = event.target.value;
    // console.log("loggin values", value,typeof(value), id);
    if (value === "showOnPage") {
      // console.log("in here", id);
      updateDocument(id, { status: "showOnPage" });
    } else if (value === "declined") {
      // console.log("in here 2", id);
      updateDocument(id, { status: "declined" });
    } else if (value === "donorFound") {
      // console.log("in here 3", id);
      updateDocument(id, { status: "donorFound" });
    }
    setStatus(event.target.value);
  };

  useEffect(() => {
    // console.log(props, status);
  }, [ status]);

  const dropdownValue = getDropdownValue(initialStatus);
  const dropdownOptions = getDropdownOptions(initialStatus);

  return (
    <div className={style.status + " " + style[status]}>
      <div className={style.dropdownContainer}>
        <select
          className={style.dropdown +" " + style[status]}
          value={status}
          onChange={handleChange}
        >
          <option className={style.option} value={initialStatus}>
            {dropdownValue}
          </option>
          {dropdownOptions.map((option) => (
            <option
              className={style.option}
              key={option.value}
              value={option.value}
            >
              {option.label}
            </option>
          ))}
        </select>
        <span className={style.icon}>▼</span>{" "}
        {/* You can replace this with any icon */}
      </div>
    </div>
  );
};

export default Status;

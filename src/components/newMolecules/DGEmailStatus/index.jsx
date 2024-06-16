import { updateDocument } from "@/lib/firebase";
import { useState, useEffect } from "react";
import style from "./index.module.css";
import { updateClientDetails } from "@/lib/firebase";
import { Emailer } from "@/lib/emailjs";
const Status = (props) => {
  let {clientEmail,clientId,donarId, donarEmail,donarPhone,productImage,donarName} = props.data.value;
  console.log("props", clientEmail,clientId,donarId);
  const initialStatus = props.data.value.status;
  const [status, setStatus] = useState(initialStatus);

  let id = props.data.value.id;
  const getDropdownValue = (status) => {
    switch (status) {
      case "Sent":
        return "Email Sent";
      case "newReq":
        return "New Request";
      case "Declined":
        return "Rejected";

      case "donorFound":
        return "donor found";
      default:
        return "";
    }
  };

  const getDropdownOptions = (status) => {
    switch (status) {
      case "Sent":
        return [
          { value: "Sent", label: "Resend Email" },
        ];
      case "newReq":
        return [
          { value: "Sent", label: "Send Email" },
          { value: "Declined", label: "Reject Request" },
          { value: "donorFound", label: "donor Found" },
        ];
      case "Declined":
        return [
          { value: "Sent", label: "Approve and Send Email" },
          { value: "donorFound", label: "donor Found" },
        ];

        
      case "donorFound":
        return [
        ];
      default:
        return [];
    }
  };

  const handleChange = (event) => {
    let value = event.target.value;
    // console.log("loggin values", value,typeof(value), id);
    if (value === "Sent") {
      // console.log("in here", id);
      // updateDocument(id, { status: "showOnPage" });

    updateClientDetails(clientId, { status: "Sent" });
                  Emailer({
                    name: donarName,
                    image: productImage,
                    to_email: clientEmail,
                    email:donarEmail,
                    phone:donarPhone
                  });
    } else if (value === "Declined") {
      // console.log("in here 2", id);

    updateClientDetails(clientId, { status: "Declined" });
      // updateDocument(id, { status: "Declined" });
    } else if (value === "donorFound") {
      // console.log("in here 3", id);
      // updateDocument(id, { status: "donorFound" });
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
          className={style.dropdown+  " " + style[status]}
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

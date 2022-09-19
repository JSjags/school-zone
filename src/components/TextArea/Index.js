import { useState } from "react";
import { TextWrapper } from "./TextArea.styles";

const TextArea = ({ value, setFormData, name, message }) => {
  const [, setText] = useState("");
  const handleChange = (e) => {
    setFormData((prev) => {
      if (name === "summary" || name === "message") {
        return {
          ...prev,
          [name]: e.target.value,
        };
      } else {
        return {
          ...prev,
          [e.target.name]: {
            value: e.target.value,
            type: prev[e.target.name].type,
          },
        };
      }
    });
  };

  return (
    <>
      <TextWrapper
        message={message}
        placeholder={name[0].toUpperCase() + name.slice(1)}
        name={name}
        value={value}
        onChange={(e) => {
          setText(e.target.value);
          handleChange(e);
        }}
      />
    </>
  );
};

export default TextArea;

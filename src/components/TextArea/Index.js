import { useState } from "react";
import { TextWrapper } from "./TextArea.styles";

const TextArea = ({ value, setFormData, name }) => {
  const [text, setText] = useState("");
  const handleChange = (e) => {
    setFormData((prev) => {
      if (name === "summary") {
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

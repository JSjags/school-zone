import React from "react";
import { TextWrapper } from "./Text.styles";

const Text = ({ value, setFormData, name }) => {
  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <>
      <TextWrapper
        as="input"
        name={name}
        placeholder="Input text"
        value={value}
        onChange={(e) => {
          handleChange(e);
        }}
      />
    </>
  );
};

export default Text;

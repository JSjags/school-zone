import React from "react";
import { NumberWrapper } from "./Number.styles";

const Number = ({ value, setFormData, name }) => {
  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  return (
    <>
      <NumberWrapper
        as="input"
        placeholder="Input number"
        name={name}
        value={value}
        onChange={(e) => {
          handleChange(e);
        }}
      />
    </>
  );
};

export default Number;

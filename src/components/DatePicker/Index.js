import React from "react";
import { DatePickerWrapper } from "./DatePicker.styles";

const DatePicker = ({ value, formData, setFormData, name }) => {
  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: {
        value: e.target.value,
        type: prev[e.target.name].type,
      },
    }));
  };

  return (
    <>
      <DatePickerWrapper
        as="input"
        name={name}
        type="date"
        value={value}
        onChange={(e) => {
          handleChange(e);
        }}
      />
    </>
  );
};

export default DatePicker;

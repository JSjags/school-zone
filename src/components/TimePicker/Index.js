import React from "react";
import { TimePickerWrapper } from "./TimePicker.styles";

const TimePicker = ({ value, formData, setFormData, name }) => {
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
      <TimePickerWrapper
        as="input"
        name={name}
        type="time"
        value={value}
        onChange={(e) => {
          handleChange(e);
        }}
      />
    </>
  );
};

export default TimePicker;

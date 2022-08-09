import React from "react";
import { NumberWrapper } from "./Number.styles";

const Number = () => {
  return (
    <>
      <NumberWrapper as="input" placeholder="Input number" />
    </>
  );
};

export default Number;

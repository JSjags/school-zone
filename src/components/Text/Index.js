import React from "react";
import { TextWrapper } from "./Text.styles";

const Text = ({ placeholder }) => {
  return (
    <>
      <TextWrapper as="input" placeholder="Input text" />
    </>
  );
};

export default Text;

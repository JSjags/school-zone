import React from "react";
import { motion } from "framer-motion";

import { Content, Wrapper } from "./Spinner.styles";

export function Spinner({ style }) {
  const wrapperVariants = {
    hidden: {
      opacity: 0,
      height: 0,
    },
    visible: {
      opacity: 1,
      height: 42,
      width: "100%",

      transition: {
        opacity: {
          duration: 0.25,
          delay: 0.25,
        },
        height: {
          duration: 0,
          delay: 0.25,
        },
        width: {
          duration: 1,
        },
      },
    },
    exit: {
      opacity: 0,
      height: 0,
      width: "90px",
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };
  const spinnerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      rotateZ: "360deg",

      transition: {
        opacity: {
          duration: 1.5,
        },
        rotateZ: {
          duration: 0.25,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.25,
        },
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.25,
        ease: "easeInOut",
      },
    },
  };
  return (
    <Wrapper
      as={motion.div}
      variants={wrapperVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      style={style && style}
    >
      <Content as={motion.div} variants={spinnerVariants} />
    </Wrapper>
  );
}

export default Spinner;

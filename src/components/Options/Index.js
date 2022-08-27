import { useState, useRef } from "react";
import { OptionsWrapper, OptionsContent } from "./Options.styles";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft } from "react-icons/fa";

const Options = ({ options, value, setFormData, name }) => {
  const OptionsRef = useRef();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    console.log(options);
  };

  const handleChange = (e) => {
    setFormData((prev) => {
      if (name === "view" || "filter") {
        return {
          ...prev,
          [name]: !e.target.value ? e.target.textContent : e.target.value,
        };
      }
      return {
        ...prev,
        [OptionsRef.current.name]: {
          value: !e.target.value ? e.target.textContent : e.target.value,
          type: prev[OptionsRef.current.name].type,
        },
      };
    });
    console.log(e.target.textContent);
  };

  const optionsVariants = {
    hidden: {
      y: "-50px",
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    },
    exit: {
      y: "-50px",
      opacity: 0,
      transition: {
        ease: "easeInOut",
        duration: 0.3,
      },
    },
  };

  return (
    <OptionsWrapper name={name} value={value}>
      <OptionsContent name={name} value={value}>
        <FaChevronLeft
          onClick={toggleMenu}
          style={
            isOpen
              ? {
                  position: "absolute",
                  top: "50%",
                  right: 10,
                  transition: "all 200ms ease-in-out",
                  transform: "translateY(-50%) rotate(-90deg)",
                  zIndex: 100,
                }
              : {
                  position: "absolute",
                  top: "50%",
                  right: 10,
                  transition: "all 200ms ease-in-out",
                  transform: "translateY(-50%)",
                  zIndex: 100,
                }
          }
        />
        <input
          ref={OptionsRef}
          id="options"
          readOnly
          name={name}
          value={value}
          onChange={(e) => {
            handleChange(e);
          }}
          type={"text"}
          onClick={toggleMenu}
          placeholder="Select Option"
        />
      </OptionsContent>
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            key={"options"}
            variants={optionsVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            id="options-list"
          >
            {options.split(" ").map((val, i) => {
              return (
                <li
                  key={i}
                  onClick={(e) => {
                    toggleMenu();
                    handleChange(e);
                    OptionsRef.current.focus();
                    OptionsRef.current.blur();
                  }}
                >
                  {val.replace(/([A-Z])/g, " $1").replace(/^./, function (str) {
                    return str;
                  })}
                </li>
              );
            })}
          </motion.ul>
        )}
      </AnimatePresence>
    </OptionsWrapper>
  );
};

export default Options;

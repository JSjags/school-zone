import { useState, useRef } from "react";
import { Wrapper, Content } from "./TemplateOptions.styles";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft } from "react-icons/fa";

const TemplateOptions = ({
  templateOption,
  setTemplateOption,
  errors,
  setErrors,
}) => {
  const templateOptions = [
    "Text",
    "Number",
    "Options",
    "Date Picker",
    "Time Picker",
    "Image Picker",
  ];

  const templateInputRef = useRef();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const updateTemplateOption = (e) => {
    setTemplateOption((prevState) => ({
      ...prevState,
      type: e.target.textContent,
    }));
    templateInputRef.current.blur();
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
    <Wrapper>
      <Content>
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
                  zIndex: 1,
                  color: "var(--text)",
                }
              : {
                  position: "absolute",
                  top: "50%",
                  right: 10,
                  transition: "all 200ms ease-in-out",
                  transform: "translateY(-50%)",
                  zIndex: 1,
                  color: "var(--text)",
                }
          }
        />
        <input
          ref={templateInputRef}
          id="level"
          value={templateOption.type}
          readOnly
          name="templateOption"
          type={"text"}
          onClick={toggleMenu}
          onChange={(e) => {
            setTemplateOption((prevState) => ({
              ...prevState,
              type: e.target.value,
            }));
          }}
        />
      </Content>
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            key={"options"}
            variants={optionsVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            id="institution-list"
          >
            {templateOptions.map((option, i) => (
              <li
                key={i}
                data-name="institutionLevel"
                onClick={(e) => {
                  toggleMenu();
                  updateTemplateOption(e);
                  templateInputRef.current.focus();
                  templateInputRef.current.blur();
                }}
              >
                {option}
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </Wrapper>
  );
};

export default TemplateOptions;

import { useState, useEffect, useRef } from "react";
import { Wrapper, Content } from "./Options.styles";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft } from "react-icons/fa";
import { BiErrorCircle } from "react-icons/bi";

const Options = ({ options, value, setFormData, name }) => {
  const OptionsRef = useRef();
  const [isOpen, setIsOpen] = useState(false);

  // useEffect(() => {
  //   const data = { ...errors };
  //   delete data.institutionLevel;
  //   setErrors((prevState) => ({ ...data }));
  //   if (institutionLevel !== "Select your institution") {
  //     setFormValidity((prevState) => ({
  //       ...prevState,
  //       institutionLevel: true,
  //     }));
  //   }
  // }, [institutionLevel]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [OptionsRef.current.name]: !e.target.value
        ? e.target.textContent
        : e.target.value,
    }));
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
          id="level"
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
            {options.split(" ").map((val, i) => {
              return (
                <li
                  onClick={(e) => {
                    toggleMenu();
                    handleChange(e);
                    OptionsRef.current.focus();
                    OptionsRef.current.blur();
                  }}
                >
                  {val}
                </li>
              );
            })}
          </motion.ul>
        )}
        {/* <p ref={institutionLevelRef} className="error">
          {errors.institutionLevel && (
            <span>
              <BiErrorCircle />
            </span>
          )}
          <span>{errors.institutionLevel}</span>
        </p> */}
      </AnimatePresence>
    </Wrapper>
  );
};

export default Options;

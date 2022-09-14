import { useState, useRef } from "react";
import { OptionsWrapper, OptionsContent } from "./Options.styles";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

import { fetchSchoolSettings } from "../../features/school/schoolDataSlice";
import {
  BsSortAlphaDownAlt,
  BsSortAlphaUpAlt,
  BsSortNumericDownAlt,
  BsSortNumericUpAlt,
} from "react-icons/bs";

const Options = ({ options, value, setShowMessage, setFormData, name }) => {
  const dispatch = useDispatch();

  const { id: schoolId, token: schoolToken } = useSelector(
    (state) => state.schoolAuth
  );
  const { currentPage } = useSelector((state) => state.config);

  const OptionsRef = useRef();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const resolveValue = (val) => {
    return val.replace(/([A-Z])/g, " $1").replace(/^./, function (str) {
      return str;
    });
  };

  const updateSettings = async (object) => {
    const serverResponse = await axios({
      url: `/api/schools/${schoolId}/settings`,
      method: "put",
      data: object,
      headers: {
        Authorization: `Bearer ${schoolToken}`,
      },
    });
    if (serverResponse.data.message === "successful") {
      dispatch(fetchSchoolSettings(schoolToken));
      setShowMessage(true);
      setTimeout(() => setShowMessage(false), 3000);
    } else {
      setShowMessage(true);
      setTimeout(() => setShowMessage(false), 3000);
    }
  };

  const handleChange = (e) => {
    setFormData((prev) => {
      if (name === "view" || name === "filter" || name === "theme") {
        const newObject = {
          ...prev,
          [name]: !e.target.value ? e.target.textContent : e.target.value,
        };
        name === "theme" && updateSettings(newObject);
        return newObject;
      }
      return {
        ...prev,
        [OptionsRef.current.name]: {
          value: !e.target.value ? e.target.textContent : e.target.value,
          type: prev[OptionsRef.current.name].type,
        },
      };
    });
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
                  color: "var(--text)",
                  position: "absolute",
                  top: "50%",
                  right: 10,
                  transition: "all 200ms ease-in-out",
                  transform: "translateY(-50%) rotate(-90deg)",
                  zIndex: 100,
                }
              : {
                  color: "var(--text)",
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
                  {currentPage === "posts" &&
                    (() => {
                      switch (resolveValue(val).trim()) {
                        case "Date(asc)":
                          return <BsSortNumericUpAlt />;

                        case "Date(desc)":
                          return <BsSortNumericDownAlt />;

                        case "Title(asc)":
                          return <BsSortAlphaUpAlt />;

                        case "Title(desc)":
                          return <BsSortAlphaDownAlt />;

                        default:
                          return;
                      }
                    })()}
                  {resolveValue(val)}
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

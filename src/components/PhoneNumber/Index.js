import { useState, useRef } from "react";
import { useQuery } from "react-query";
import { Wrapper, Content } from "./PhoneNumber.styles";
import { FaChevronLeft } from "react-icons/fa";
import { BiErrorCircle } from "react-icons/bi";
import { AnimatePresence, motion } from "framer-motion";
import { useCallback } from "react";

function PhoneNumber({
  country,
  countryCodePrefix,
  phoneNumber,
  formData,
  setFormData,
  errors,
  checkPhone,
  phoneRef,
  formatValue,
}) {
  const dialCodeRef = useRef();
  const countryNameRef = useRef();
  const phoneNumberRef = useRef();

  const fetchCountries = async () => {
    const response = await fetch(
      "https://gist.githubusercontent.com/anubhavshrimal/75f6183458db8c453306f93521e93d37/raw/f77e7598a8503f1f70528ae1cbf9f66755698a16/CountryCodes.json"
    );
    return await response.json();
  };

  const { data, status } = useQuery("countriesList", fetchCountries);
  const [isOpen, setIsOpen] = useState(false);
  const [countryCode, setCountryCode] = useState(country ? country : "ng");

  const countryVariants = {
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

  const getDefaultCountry = useCallback(() => {
    const countryFilter = data.filter(
      (country) =>
        country.name.toLowerCase() === countryCode.toLowerCase() ||
        country.code.toLowerCase() === countryCode.toLowerCase()
    );
    return countryFilter[0].code;
  }, [countryCode, data]);

  return (
    status === "success" && (
      <>
        <label htmlFor="phone-number">Phone-Number:</label>
        <Wrapper>
          <Content>
            <div id="code-box" onClick={() => setIsOpen(!isOpen)}>
              <img
                alt="flag"
                width={"25px"}
                src={`https://flagsapi.com/${getDefaultCountry()}/flat/32.png`}
              />
              <input
                value={countryCodePrefix}
                id="country-code"
                type={"text"}
                readOnly
              />
              <FaChevronLeft
                style={
                  isOpen
                    ? {
                        position: "absolute",
                        top: "50%",
                        right: "5px",
                        color: "var(--text)",
                        transition: "all 200ms ease-in-out",
                        transform: "translateY(-50%) rotate(-90deg)",
                      }
                    : {
                        position: "absolute",
                        top: "50%",
                        color: "var(--text)",
                        right: "5px",
                        transition: "all 200ms ease-in-out",
                        transform: "translateY(-50%)",
                      }
                }
              />
              <AnimatePresence>
                {isOpen && (
                  <motion.ul
                    key={"country-options"}
                    variants={countryVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    id="country-options"
                  >
                    {data.map((c) => (
                      <li
                        key={country.name}
                        className="country-flag"
                        onClick={(e) => {
                          setCountryCode(c.code);
                          setFormData((prevData) => ({
                            ...prevData,
                            country: c.name,
                            countryCodePrefix: c.dial_code,
                          }));
                          console.log(country);
                        }}
                      >
                        <img
                          alt="country-flag"
                          width={"25px"}
                          src={`https://flagsapi.com/${c.code.toUpperCase()}/flat/32.png`}
                        />
                        <p ref={dialCodeRef} id="country-dial-code">
                          {c.dial_code}
                        </p>
                        <p ref={countryNameRef} id="country-name">
                          {c.name}
                        </p>
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </div>
            <div className="input-box">
              <input
                id="phone"
                value={phoneNumber}
                name="phoneNumber"
                ref={phoneNumberRef}
                type={"number"}
                onChange={(e) => {
                  setFormData((prevState) => ({
                    ...prevState,
                    phoneNumber: e.target.value,
                  }));
                  checkPhone(e);
                  formatValue(e);
                }}
              />
              <p ref={phoneRef} className="error">
                {errors.phoneNumber && (
                  <span>
                    <BiErrorCircle />
                  </span>
                )}
                <span>{errors.phoneNumber}</span>
              </p>
            </div>
          </Content>
        </Wrapper>
      </>
    )
  );
}

export default PhoneNumber;

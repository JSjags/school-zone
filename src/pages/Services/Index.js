import Footer from "../../components/Footer/Index";
import { Wrapper, Content } from "./Services.styles";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import {
  MdOutlineAccountCircle,
  MdSecurity,
  MdBrush,
  MdShowChart,
} from "react-icons/md";

import { FaRegAddressCard, FaChalkboardTeacher } from "react-icons/fa";
const Services = () => {
  const servicesVariants = {
    exit: {
      x: "-10vw",
      opacity: 0,
      transition: {
        duration: 0.7,
        ease: "easeInOut",
      },
    },
  };
  const contentVariants = {
    hidden: {
      x: "20vw",
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        ease: "easeInOut",
        duration: 1.2,
        staggerChildren: 0.2,
      },
    },
  };
  const childVariants = {
    hidden: {
      x: 0,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeInOut",
        staggerChildren: 0.2,
      },
    },
  };
  return (
    <>
      <Wrapper variants={servicesVariants} exit="exit">
        <Content
          as={motion.div}
          variants={contentVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 variants={childVariants}>
            Do more with SchoolZone
          </motion.h1>
          <motion.p variants={childVariants}>
            Mix and match services from SchoolZone to solve for your school's
            exact use case.
          </motion.p>
          <motion.div variants={contentVariants} className="services-container">
            <motion.div className="service" variants={childVariants}>
              <motion.span variants={childVariants} className="service-icon">
                <FaRegAddressCard
                  style={{
                    fontSize: "1.5em",
                    color: "white",
                    background: "transparent",
                  }}
                />
              </motion.span>
              <motion.h3 variants={childVariants} className="service-title">
                Student Registration
              </motion.h3>
              <motion.p variants={childVariants} className="service-desc">
                Easily add newly registered students with details to your
                account.
              </motion.p>
              <motion.button variants={childVariants} className="service-link">
                <Link to={"/services/details"}>Learn More →</Link>
              </motion.button>
            </motion.div>
            <motion.div variants={childVariants} className="service">
              <motion.span className="service-icon" variants={childVariants}>
                <MdShowChart
                  style={{
                    fontSize: "1.5em",
                    color: "white",
                    background: "transparent",
                  }}
                />
              </motion.span>
              <motion.h3 variants={childVariants} className="service-title">
                Data Visualization
              </motion.h3>
              <motion.p variants={childVariants} className="service-desc">
                Experience several of your data reproduced and represented
                visually through graphs, charts and the likes.
              </motion.p>
              <motion.button variants={childVariants} className="service-link">
                <Link to={"/services/details"}>Learn More →</Link>
              </motion.button>
            </motion.div>
            <motion.div variants={childVariants} className="service">
              <motion.span variants={childVariants} className="service-icon">
                <MdOutlineAccountCircle
                  style={{
                    fontSize: "1.5em",
                    color: "white",
                    background: "transparent",
                  }}
                />
              </motion.span>
              <motion.h3 variants={childVariants} className="service-title">
                Student Portal
              </motion.h3>
              <motion.p variants={childVariants} className="service-desc">
                Create students portal during student registration and allow for
                students to login and check messages and other information.
              </motion.p>
              <motion.button variants={childVariants} className="service-link">
                <Link to={"/services/details"}>Learn More →</Link>
              </motion.button>
            </motion.div>
            <motion.div variants={childVariants} className="service">
              <motion.span variants={childVariants} className="service-icon">
                <FaChalkboardTeacher
                  style={{
                    fontSize: "1.5em",
                    color: "white",
                    background: "transparent",
                  }}
                />
              </motion.span>
              <motion.h3 variants={childVariants} className="service-title">
                Staff Account
              </motion.h3>
              <motion.p variants={childVariants} className="service-desc">
                Just like the student portal, create account for staffs of your
                school with ease.
              </motion.p>
              <motion.button variants={childVariants} className="service-link">
                <Link to={"/services/details"}>Learn More →</Link>
              </motion.button>
            </motion.div>
            <motion.div variants={childVariants} className="service">
              <motion.span variants={childVariants} className="service-icon">
                <MdBrush
                  style={{
                    fontSize: "1.5em",
                    color: "white",
                    background: "transparent",
                  }}
                />
              </motion.span>
              <motion.h3 variants={childVariants} className="service-title">
                Personalization
              </motion.h3>
              <motion.p variants={childVariants} className="service-desc">
                Make your SchoolZone page your own with built-in customization
                options.
              </motion.p>
              <motion.button variants={childVariants} className="service-link">
                <Link to={"/services/details"}>Learn More →</Link>
              </motion.button>
            </motion.div>
            <motion.div variants={childVariants} className="service">
              <motion.span variants={childVariants} className="service-icon">
                <MdSecurity
                  style={{
                    fontSize: "1.5em",
                    color: "white",
                    background: "transparent",
                  }}
                />
              </motion.span>
              <motion.h3 variants={childVariants} className="service-title">
                Security
              </motion.h3>
              <motion.p variants={childVariants} className="service-desc">
                At SchoolZone we try our best to keep our user's data secure and
                private.
              </motion.p>
              <motion.button variants={childVariants} className="service-link">
                <Link to={"/services/details"}>Learn More →</Link>
              </motion.button>
            </motion.div>
          </motion.div>
        </Content>
      </Wrapper>
      <Footer />
    </>
  );
};

export default Services;

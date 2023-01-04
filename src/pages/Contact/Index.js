import { Wrapper, Content } from "./Contact.styles";
import Footer from "../../components/Footer/Index";
import { motion } from "framer-motion";

import ContactImg from "./images/Contact.image";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
  const contactVariants = {
    hidden: {
      x: "10vw",
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
    exit: {
      x: "-10vw",
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };
  const contentVariants = {
    hidden: {
      x: "30vw",
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  const headerVariants = {
    hidden: {
      x: "20vw",
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: "easeInOut",
      },
    },
    exit: {
      x: "-10vw",
      opacity: 0,
      transition: {
        ease: "easeInOut",
        duration: 1.2,
      },
    },
  };

  const formVariants = {
    hidden: {
      x: "10vw",
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
        ease: "easeInOut",
      },
    },
    exit: {
      x: "-10vw",
      opacity: 0,
      transition: {
        ease: "easeInOut",
        duration: 0.8,
      },
    },
  };

  const labelVariants = {
    hidden: {
      x: "20vw",
      opacity: 0,
    },
    visible: {
      x: "20vw",
      opacity: 1,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
  };
  const buttonVariants = {
    hidden: {
      x: "10vw",
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        ease: "easeInOut",
        duration: 0.4,
      },
    },
  };
  const leftSlideVariants = {
    hidden: {
      x: "5vw",
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        ease: "easeInOut",
        duration: 1,
      },
    },
  };
  const topSlideVariants = {
    hidden: {
      y: "-5vh",
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        ease: "easeInOut",
        duration: 0.8,
      },
    },
  };

  return (
    <motion.div
      variants={contactVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <Wrapper>
        <Content variants={contentVariants}>
          <motion.h2 variants={headerVariants}>
            Hey, want to reach out to us, kindly let us know what's on your mind
            in the form below.
          </motion.h2>
          <div className="form-container">
            <motion.form variants={formVariants}>
              <motion.label variants={labelVariants} htmlFor="name">
                <motion.p variants={topSlideVariants}>Name:</motion.p>
              </motion.label>

              <motion.input
                variants={leftSlideVariants}
                id="name"
                placeholder="John Doe"
              />

              <motion.label variants={labelVariants} htmlFor="email">
                <motion.p variants={topSlideVariants}>Email:</motion.p>
              </motion.label>

              <motion.input
                variants={leftSlideVariants}
                id="email"
                placeholder="johndoe@example.com"
              />

              <motion.label variants={labelVariants} htmlFor="title">
                <motion.p variants={topSlideVariants}>Title:</motion.p>
              </motion.label>

              <motion.input
                variants={leftSlideVariants}
                id="title"
                placeholder="Something on my mind"
              />

              <motion.label variants={labelVariants} htmlFor="message">
                <motion.p variants={topSlideVariants}>Message:</motion.p>
              </motion.label>

              <motion.textarea
                variants={leftSlideVariants}
                id="message"
                placeholder="What's on your mind? Let us know in here."
              />

              <motion.button variants={buttonVariants}>Submit</motion.button>
            </motion.form>
            <ContactImg />
          </div>
          <hr></hr>
          <div className="options">
            <a href="mailto:contact@schoolzone.com">
              <MdEmail style={{ fontSize: "2em" }} /> E-Mail
            </a>
            <a href="tel:+2347045621414">
              <FaPhoneAlt style={{ fontSize: "2em" }} /> Phone
            </a>
          </div>
          <p className="thank-you">
            If you've reached out to us, we'll be in touch and get back to you
            soon.Thank you.
          </p>
        </Content>
      </Wrapper>
      <Footer />
    </motion.div>
  );
};

export default Contact;

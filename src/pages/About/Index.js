import { useEffect } from "react";
import { Wrapper, Content } from "./About.styles";
import { motion } from "framer-motion";
import Footer from "../../components/Footer/Index";

const About = () => {
  const containerVariants = {
    exit: {
      x: "-10vw",
      opacity: 0,
      transition: {
        duration: 0.5,
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
        duration: 0,
        ease: "easeInOut",
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };
  const headerVariants = {
    hidden: {
      x: "-100px",
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        ease: "easeInOut",
        duration: 0.5,
      },
    },
  };
  const descVariants = {
    hidden: {
      x: "100px",
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        ease: "easeInOut",
        duration: 0.5,
      },
    },
  };
  return (
    <motion.div variants={containerVariants} exit="exit">
      <Wrapper>
        <Content
          as={motion.div}
          variants={contentVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 variants={headerVariants}>About Us</motion.h1>
          <motion.p variants={descVariants}>
            We are an independent development team located in Nigeria, a country
            located in the West Coast of Africa.We are a collective team of
            Diverse Individuals in terms of race, culture, gender, skin colour,
            age and the likes.
            <br />
            <br />
            School Zone ensures and maintains a comfortable and friendly working
            environment for its staffs and employees and frowns at any form of
            harrasment and toxicity in our workspace.
          </motion.p>
          <motion.h3 variants={headerVariants}>Our Mission</motion.h3>
          <motion.p variants={descVariants}>
            To arm Institutions with the best Administrative Infrastructure and
            Technology to limit dependency on paperwork and eradicate human
            error.
          </motion.p>
          <motion.h3 variants={headerVariants}>Our Vision</motion.h3>
          <motion.p variants={descVariants}>
            To help build digital and software solutions to solve Administrative
            challenges and to digitalize archeic and primitive systems in the
            world.
          </motion.p>
        </Content>
      </Wrapper>
      <Footer />
    </motion.div>
  );
};

export default About;

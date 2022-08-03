import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { Wrapper, Content } from "./Home.style";
import HeroIcon from "./images/Hero.image";
import TimeImage from "./images/Time.image";
import ServerImage from "./images/Server.image";
import VisualizeImage from "./images/Visualize.image";
import ReliableImage from "./images/Reliable.image";
import SecureImage from "./images/Secure.image";
import Footer from "../../components/Footer/Index";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";

const Home = () => {
  const navigate = useNavigate();

  const { id } = useSelector((state) => state.schoolAuth);

  const containerVariants = {
    exit: {
      x: "-10vw",
      opacity: 0,
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };
  const heroVariants = {
    hidden: {
      y: "-10vh",
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        ease: "easeInOut",
        duration: 1,
      },
    },
  };

  useEffect(() => {
    if (id) {
      console.log(id);
      navigate("/schooldashboard");
    }
  }, [id, navigate]);

  return (
    <motion.div variants={containerVariants} exit="exit">
      <Wrapper>
        <Content>
          <motion.div
            className="hero"
            variants={heroVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="hero-text">
              <h1 className="hero-text-header">Organize Your School's Data</h1>
              <p className="hero-text-desc">
                It's high time you got rid of all that clunky paperwork, stress
                and slow process.
                <br />
                Lets take away all those worries from you.
              </p>
              <Link to={"/signup"}>
                <button>Get Started</button>
              </Link>
            </div>
            <HeroIcon />
          </motion.div>
          <div className="home-content">
            <section className="points-right">
              <TimeImage />
              <div className="points-box">
                <h2>Channel Your Time And Resources Elsewhere</h2>
                <p>
                  Yes, you heard it right, channel your time and resources
                  somewhere else and trust School Zone to organize your data for
                  you all in one place.
                </p>
              </div>
            </section>
            <section className="points-left">
              <ServerImage />
              <div className="points-box">
                <h2>All Your Data In One Place</h2>
                <p>
                  Thanks to the power of the cloud, all your data is available
                  to you everywhere and anytime.
                </p>
              </div>
            </section>
            <section className="points-right">
              <VisualizeImage />
              <div className="points-box">
                <h2>Visualize Your Data</h2>
                <p>
                  Oh yeah, don't just get numbers, get your data also in charts
                  and graphs on your dashboard.
                </p>
              </div>
            </section>
            <section className="points-left">
              <ReliableImage />
              <div className="points-box">
                <h2>Reliable Service You Can Trust</h2>
                <p>
                  School Zone is a service built for schools to help solve
                  administrative problems.
                </p>
              </div>
            </section>
            <section className="points-right">
              <SecureImage />
              <div className="points-box">
                <h2>Believe Us, Your Data Is Secured</h2>
                <p>
                  Be not worried, School Zone got you covered, We know your data
                  is very valuable to you, so we make sure to follow and ensure
                  strict security measures.
                </p>
              </div>
            </section>
          </div>
        </Content>
      </Wrapper>
      <Footer />
    </motion.div>
  );
};

export default Home;

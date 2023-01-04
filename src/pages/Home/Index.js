import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { Wrapper, Content } from "./Home.style";
import HeroIcon from "./images/Hero.image";
import TimeImage from "./images/Time.image";
import Footer from "../../components/Footer/Index";
import { FaDatabase, FaChartBar, FaTools } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import featureImg1 from "../../assets/landingPage/feature-1.png";
import featureImg2 from "../../assets/landingPage/feature-2.png";
import featureImg3 from "../../assets/landingPage/feature-3.png";

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
          <div className="section-header">
            <h2>Why school owners love</h2>
            <h2>SchoolZone?</h2>
            <p>
              Following reasons show advantages of integrating SchoolZone for
              managing your school's data.
            </p>
          </div>
          <div className="features">
            <div className="feature-card">
              <div className="icon-cont">
                <FaDatabase size={"80px"} color={"#63b231"} />
              </div>
              <h2 className="feature-title">All Your Data In One Place</h2>
              <p className="feature-detail">
                Thanks to the power of the cloud, all your school's data are
                available to you everywhere and anytime.
              </p>
            </div>
            <div className="feature-card">
              <div className="icon-cont">
                <FaChartBar size={"80px"} color={"#f46e16"} />
              </div>
              <h2 className="feature-title">Visualize Your Data</h2>
              <p className="feature-detail">
                Oh yeah, don't just get numbers, get your data also in charts
                and graphs on your dashboard.
              </p>
            </div>
            <div className="feature-card">
              <div className="icon-cont">
                <FaTools size={"80px"} color={"#ffdb33"} />
              </div>
              <h2 className="feature-title">Built-In Applications</h2>
              <p className="feature-detail">
                Utilize and leverage in-built applications such as Scheduler,
                Text Editor and Kanban Board for improved productivity.
              </p>
            </div>
          </div>
          <div className="difficulty">
            <div className="difficulty-detail">
              <h1>Simplicity Made Simpler! </h1>
              <p>
                Not good with spreadsheets or over-complicated data management
                tools? Worry not, Schoolzone is designed to away all that
                complexity and make your school's data easier to manage.
              </p>
            </div>

            <TimeImage />
          </div>
          <div className="home-content">
            <section className="points-right">
              <div className="points-box">
                <h2>Manage Students, Staff, Finance And More</h2>
                <p>
                  Yes, you heard it right. Manage students, staffs and finance,
                  posts amongst others. Create custom templates for creating
                  profiles for both students and staffs and recording financial
                  statements.
                </p>
              </div>
              <img src={featureImg1} alt="manage" />
            </section>
            <section className="points-left">
              <img src={featureImg2} alt="manage" />
              <div className="points-box">
                <h2>Intuitive Dashboard</h2>
                <p>
                  Say no boring data in numbers. Experience your school's data
                  in visualized form such bar charts and graphs that best
                  represents your numbers.
                </p>
              </div>
            </section>
            <section className="points-right">
              <div className="points-box">
                <h2>In-Built Applications</h2>
                <p>
                  Enjoy and utilise SchoolZones built-in applications to boost
                  your productivity. Manage your schedules with the schedular
                  app, create articles with the built-in editor and organize
                  your tasks with the Kanban Board.
                </p>
              </div>
              <img src={featureImg3} alt="manage" />
            </section>
            <section className="cta-box">
              <div className="difficulty">
                <div className="difficulty-detail">
                  <h1>Get Your School's Data Together! </h1>
                  <p>Try SchoolZone out and experience the difference.</p>
                  <a href="/signup">Get Started</a>
                </div>
              </div>
            </section>
            {/* <section className="points-left">
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
            </section> */}
          </div>
        </Content>
      </Wrapper>
      <Footer />
    </motion.div>
  );
};

export default Home;

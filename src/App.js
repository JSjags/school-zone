import "devextreme/dist/css/dx.common.css";
import "devextreme/dist/css/dx.light.css";
import { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { AnimatePresence } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";

import { Wrapper } from "./App.styles";
import Header from "./components/Header/Index";
import Home from "./pages/Home/Index";
import About from "./pages/About/Index";
import Contact from "./pages/Contact/Index";
import Services from "./pages/Services/Index";
import Signup from "./pages/Signup/Index";
import Login from "./pages/Login/Index";
import SchoolDashboard from "./pages/SchoolDashboard/Index";
import Students from "./pages/Students/Index";
import Staffs from "./pages/Staffs/Index";
import Finance from "./pages/Finance/Index";
import Profile from "./pages/Profile/Index";
import Settings from "./pages/Settings/Index";
import Scheduler from "./pages/Scheduler/Index";
import Kanban from "./pages/Kanban/Index";
import Editor from "./pages/Editor/Index";
import Posts from "./pages/Posts/Index";
import MobileMenu from "./components/MobileMenu/Index";

import { setDashboardMenu } from "./features/config/configData";
import { GlobalStyles } from "./pages/Global.styles";

import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./pages/Global.styles";

import "./App.css";
import { getTheme } from "./utils";

const queryClient = new QueryClient();

function App() {
  const dispatch = useDispatch();

  const location = useLocation();
  const isLoggedIn = useSelector((state) => state.schoolAuth.isLoggedIn);
  const { data: schoolData } = useSelector((state) => state.schoolData);
  const { isDashboardMenuOpen } = useSelector((state) => state.config);
  const THEME_VALUE = schoolData?.settings?.theme
    ? schoolData?.settings?.theme
    : localStorage.getItem("schoolZoneTheme")
    ? localStorage.getItem("schoolZoneTheme").trim()
    : " Auto";

  const { isHomeMenuOpen } = useSelector((state) => state.config);

  const [showMobileMenu, setShowMobileMenu] = useState(window.innerWidth < 769);

  function handleMenuClose(e) {
    // get event path and check if any element's id matches navbar's id
    if (
      (e.nativeEvent.composedPath().every((elem) => elem.id !== "nav-bar") ||
        e.nativeEvent.composedPath().some((elem) => elem.id === "nav-link")) &&
      window.innerWidth < 768 &&
      isDashboardMenuOpen
    ) {
      dispatch(setDashboardMenu());
    }
    // else cancel out of process
    return;
  }

  useEffect(() => {
    window.addEventListener("resize", () => {
      window.innerWidth > 768
        ? setShowMobileMenu(false)
        : setShowMobileMenu(true);
    });
    return () => {
      window.removeEventListener("resize", () => {
        window.innerWidth > 768
          ? setShowMobileMenu(false)
          : setShowMobileMenu(true);
      });
    };
  }, []);

  return (
    <ThemeProvider
      theme={getTheme(THEME_VALUE) === "Light" ? lightTheme : darkTheme}
    >
      <GlobalStyles isLoggedIn={isLoggedIn} />
      <Wrapper
        onClick={handleMenuClose}
        isLoggedIn={isLoggedIn}
        showMobileMenu={showMobileMenu}
      >
        <QueryClientProvider client={queryClient}>
          <Header />
          <AnimatePresence>
            {showMobileMenu && isHomeMenuOpen && !isLoggedIn && <MobileMenu />}
          </AnimatePresence>
          <AnimatePresence exitBeforeEnter>
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home />}>
                <Route path="home" element={<Home />} />
              </Route>
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/services" element={<Services />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
              <Route path="/schooldashboard" element={<SchoolDashboard />} />
              <Route path="/schooldashboard/students" element={<Students />} />
              <Route path="/schooldashboard/staffs" element={<Staffs />} />
              <Route path="/schooldashboard/finance" element={<Finance />} />
              <Route path="/schooldashboard/posts" element={<Posts />} />
              <Route path="/schooldashboard/profile" element={<Profile />} />
              <Route path="/schooldashboard/settings" element={<Settings />} />
              <Route
                path="/schooldashboard/scheduler"
                element={<Scheduler />}
              />
              <Route path="/schooldashboard/kanban" element={<Kanban />} />
              <Route path="/schooldashboard/editor" element={<Editor />} />
            </Routes>
          </AnimatePresence>
          {/* <ReactQueryDevtools initialIsOpen={false} /> */}
        </QueryClientProvider>
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;

import { Routes, Route, useLocation } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { AnimatePresence } from "framer-motion";
import { useSelector } from "react-redux";

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

const queryClient = new QueryClient();

function App() {
  const location = useLocation();
  const isLoggedIn = useSelector((state) => state.schoolAuth.isLoggedIn);

  return (
    <Wrapper isLoggedIn={isLoggedIn}>
      <QueryClientProvider client={queryClient}>
        <Header />
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
            <Route path="/schooldashboard/profile" element={<Profile />} />
            <Route path="/schooldashboard/settings" element={<Settings />} />
          </Routes>
        </AnimatePresence>
        {/* <ReactQueryDevtools initialIsOpen={false} /> */}
      </QueryClientProvider>
    </Wrapper>
  );
}

export default App;

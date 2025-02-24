import React from "react";
import Layout from "./components/Layout/Layout";
import About from "./pages/About/About";
import Techstack from "./pages/Techstack/Techstack";
import { ThemeProvider, useTheme } from "./context/ThemeContext";
import Projects from "./pages/Projects/Projects";
import Education from "./pages/Education/Education";
import MobileNav from "./components/MobileNav/MobileNav";
import { AttentionSeeker } from "react-awesome-reveal";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { animateScroll as scroll } from "react-scroll";
import "./App.css";
import Contact from "./pages/Contact/Contact";
import "./App.css";
// import WorkExp from "./pages/workExp/workExp";
// import * as motion from "motion/react-client";

function App() {
  return (
    <ThemeProvider>
      {" "}
      {/* ✅ Wrap your app inside ThemeProvider */}
      <ThemedApp />
    </ThemeProvider>
  );
}

// Extracting theme logic to avoid calling useTheme outside provider
const ThemedApp = () => {
  const [theme] = useTheme();

  // Function to scroll to top
  const scrollToTop = () => {
    scroll.scrollToTop({
      duration: 800, // Smooth scroll duration in milliseconds
      smooth: "easeInOutQuart",
    });
  };

  return (
    <>
      <div id={theme}>
        <ToastContainer />
        <MobileNav />
        <Layout />
        <div className="container">
          <About />
          <Education />
          <Techstack />
          <Projects />
          {/* <WorkExp /> */}
          <Contact />
        </div>
        <div className="footer pb-3 ms-3 text-center">
          <hr />
          <h6 className="text-center">
            Designed by Ananya Mishra © 2023 All rights reserved
          </h6>
        </div>
      </div>

      {/* Custom Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          backgroundColor: "#1e1e2c",
          color: "#f29f67",
          border: "none",
          borderRadius: "50%",
          padding: "15px",
          fontSize: "18px",
          cursor: "pointer",
        }}
      >
        ↑
      </button>
    </>
  );
};

export default App;

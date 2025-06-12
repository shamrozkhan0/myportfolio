import { useRef, useEffect, useState } from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import "./App.css";

import Theme from "@/Components/theme/Theme";

import WebsiteScroll from "./Components/layout/WebsiteScroll";
import Navbar from "@/Components/layout/Navbar";
import Banner from "@/Components/layout/Banner";
import Skill from "@/Components/layout/Skill";
import Projects from "./Components/layout/Projects";
import Footer from "./Components/layout/Footer";



function App() {
  const aboutRef = useRef(null);
  const skillRef = useRef(null);
  const projectsRef = useRef(null);

  const [activeSection, setActiveSection] = useState("about");

useEffect(() => {
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: .6, // 60% of section must be visible to be "active"
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setActiveSection(entry.target.id);
      }
    });
  }, options);

  const sections = [aboutRef, skillRef, projectsRef];
  sections.forEach(ref => observer.observe(ref.current));

  return () => {
    sections.forEach(ref => observer.unobserve(ref.current));
  };
}, []); 

  return (
    <>
      <ThemeProvider theme={Theme}>
        <CssBaseline />
        <WebsiteScroll />

        <Navbar
          activeSection={activeSection}
          onButtonClick={{
            about: () => {
              aboutRef.current.scrollIntoView({ behavior: "smooth" });
              setActiveSection("about");
            },
            skills: () => {
              skillRef.current.scrollIntoView({ behavior: "smooth" }),
                setActiveSection("skills");
            },
            projects: () => {
              projectsRef.current.scrollIntoView({ behavior: "smooth" }),
                setActiveSection("projects");
            },
          }}
        />

        <Banner ref={aboutRef} />
        <Skill ref={skillRef} />
        <Projects ref={projectsRef} />
        <Footer/>

      </ThemeProvider>
    </>
  );
}

export default App;

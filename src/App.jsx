import { useRef, useEffect, useState } from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";

import "./App.css";

import Theme from "@/Components/theme/Theme";

import WebsietScroll from "@/Components/layout/WebsiteScroll";
import Navbar from "@/Components/layout/Navbar";
import Banner from "@/Components/layout/Banner";
import Skill from "@/Components/layout/Skill";
import Projects from "./Components/layout/Projects";
import WebsiteScroll from "./Components/layout/WebsiteScroll";


function App() {
  const aboutRef = useRef(null);
  const skillRef = useRef(null);
  const projectsRef = useRef(null);

  const [activeSection, setActiveSection] = useState("about");

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
      </ThemeProvider>
    </>
  );
}

export default App;

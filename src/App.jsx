import { useRef, useEffect, useState, useCallback } from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import "./App.css";

import Theme from "@/Components/theme/Theme";

// Custom Website Compoenents
import WebsiteScroll from "@/Components/layout/WebsiteScroll";
import Navbar from "@/Components/layout/Navbar";
import Banner from "@/Components/layout/Banner";
import Skill from "@/Components/layout/Skill";
import Projects from "@/Components/layout/Projects";
import Faqs from "@/Components/layout/Faqs";
import Loader from "./Components/layout/Loader";


import Banner2 from "./Components/layout/Banner2";


function App() {
  const projectsRef = useRef(null);
  const aboutRef = useRef(null);
  const skillRef = useRef(null);
  const faqRef = useRef(null);

  const [activeSection, setActiveSection] = useState("about");
  const [scrollWidth, setScrollWidth] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setScrollWidth(scrollPercent); // assuming this sets scroll progress
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 🔁 Track Active Section on Scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.6,
      }
    );

    const sections = [aboutRef, skillRef, projectsRef, faqRef];
    sections.forEach((ref) => ref.current && observer.observe(ref.current));

    return () => {
      sections.forEach((ref) => ref.current && observer.unobserve(ref.current));
    };
  }, []);

  //  ScrollIntoView handlers (memoized to avoid re-renders)
  const scrollToRef = useCallback((ref, section) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
    setActiveSection(section);
  }, []);


// const [isLoading, setIsLoading] = useState(true);
// const [isAppReady, setIsAppReady] = useState(false);
// const [isFadingOut, setIsFadingOut] = useState(false);



// useEffect(() => {
//   const loadEverything = async () => {
//     await document.fonts.ready;
//     await new Promise((res) => setTimeout(res, 500)); // optional buffer
//     setIsAppReady(true);
//   };
//   loadEverything();
// }, []);

// useEffect(() => {
//   if (isAppReady) {
//     setIsFadingOut(true);
//     setTimeout(() => setIsLoading(false), 1000); // matches fade-out CSS
//   }
// }, [isAppReady]);

  

  return (
    <>

      {/* <Loader/> */}

      {/* {isLoading && <Loader />} */}

      {/* {!isLoading && ( */}
        <ThemeProvider theme={Theme}>
          <CssBaseline />

          <WebsiteScroll scrollValue={scrollWidth} />


          <Navbar
            scrollValue={scrollWidth}
            activeSection={activeSection}
            onButtonClick={{
              about: () => scrollToRef(aboutRef, "about"),
              skills: () => scrollToRef(skillRef, "skills"),
              projects: () => scrollToRef(projectsRef, "projects"),
              faq: () => scrollToRef(faqRef, "faq"),
            }}
          />

          {/* <Banner ref={aboutRef} /> */}
          <Banner2 ref={aboutRef}/>
          <Skill ref={skillRef} />
          <Projects ref={projectsRef} />
          <Faqs ref={faqRef} />
        </ThemeProvider>
      {/* )} */}

    </>
  );
}

export default App;

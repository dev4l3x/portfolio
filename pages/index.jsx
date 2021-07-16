import "./index.module.css";
import React from "react";
import Navbar from "../components/NavBar/Navbar";
import Home from "../modules/Home/Home";
import About from "../modules/About/About";
import Experience from "../modules/Experience/Experience";
import Skills from "../modules/Skills/Skills";
import Projects from "../modules/Projects/Projects";
import Contact from "../modules/Contact/Contact";

function HomePage() {
  return (
    <React.Fragment>
      <Navbar />
      <Home className="mt-1 sm:mt-10" />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
    </React.Fragment>
  );
}

export default HomePage;

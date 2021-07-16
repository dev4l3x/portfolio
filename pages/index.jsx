import "./index.module.css";
import React, { useEffect, useRef } from "react";
import Navbar from "../components/NavBar/Navbar";
import Home from "../modules/Home/Home";
import About from "../modules/About/About";
import Experience from "../modules/Experience/Experience";
import Skills from "../modules/Skills/Skills";
import Projects from "../modules/Projects/Projects";
import Contact from "../modules/Contact/Contact";

function HomePage() {
  const projects = useRef();
  const experience = useRef();
  const skill = useRef();

  const menu_actions = {
    experience: () => {
      const el = document.getElementById("experience");
      _scrollTo(el);
    },
    skills: () => {
      const el = document.getElementById("skill");
      _scrollTo(el);
    },
    projects: () => {
      const el = document.getElementById("projects");
      _scrollTo(el);
    },
    linkedin: () => {
      window.open(
        "https://es.linkedin.com/in/alex-s%C3%A1nchez-iglesias-56a19b195",
        "_blank"
      );
    },
  };

  function _scrollTo(element) {
    element.scrollIntoView();
  }

  function handleNavigationClicked(nav_selected) {
    const action = menu_actions[nav_selected];
    action();
  }

  return (
    <React.Fragment>
      <Navbar onClick={handleNavigationClicked} />
      <Home className="mt-1 sm:mt-10" />
      <About />
      <Experience id="experience" />
      <Skills id="skill" />
      <Projects id="projects" />
      <Contact />
    </React.Fragment>
  );
}

export default HomePage;

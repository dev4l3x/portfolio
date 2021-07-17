import "./index.module.css";
import React, { useEffect, useRef } from "react";
import Navbar from "../components/NavBar/Navbar";
import Home from "../modules/Home/Home";
import About from "../modules/About/About";
import Experience from "../modules/Experience/Experience";
import Skills from "../modules/Skills/Skills";
import Projects from "../modules/Projects/Projects";
import Contact from "../modules/Contact/Contact";
import file from "../resources/data.yml";
import { Helmet } from "react-helmet";

function HomePage({ experience, projects, skills }) {
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
      <Helmet>
        <title>Alex Sánchez Iglesias</title>
        <link rel="shortcut icon" type="image/png" href="/favicon.ico"></link>
      </Helmet>
      <Navbar onClick={handleNavigationClicked} />
      <Home className="mt-1 sm:mt-10" />
      <About />
      <Experience id="experience" experiences={experience} />
      <Skills id="skill" skills={skills} />
      <Projects id="projects" projects={projects} />
      <Contact />
    </React.Fragment>
  );
}

export async function getStaticProps() {
  // we can read files syncronous because this gets executed at build time

  const projects = file.projects;
  projects.forEach((project) => {
    project.techs = project.techs.map((tech) => {
      const skill_info = file.skills.find((skill) =>
        skill.techs.includes(tech)
      );
      const color = (skill_info && skill_info.color) || "#FFF2AC";
      return {
        color: color,
        name: tech,
      };
    });
  });

  return {
    props: {
      experience: file.experience,
      skills: file.skills,
      projects,
    },
  };
}

export default HomePage;

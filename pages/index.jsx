import "./index.module.css";
import React from "react";
import Navbar from "../components/NavBar/Navbar";
import Home from "../modules/Home/Home";
import About from "../modules/About/About";
import Experience from "../modules/Experience/Experience";

function HomePage() {
  return (
    <React.Fragment>
      <Navbar />
      <Home className="mt-1 sm:mt-10" />
      <About />
      <Experience />
    </React.Fragment>
  );
}

export default HomePage;

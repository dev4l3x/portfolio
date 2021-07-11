import "./index.module.css";
import React from "react";
import Navbar from "../components/NavBar/Navbar";
import Home from "../modules/Home/Home";
import About from "../modules/About/About";

function HomePage() {
  return (
    <React.Fragment>
      <Navbar />
      <Home className="mt-1 sm:mt-10" />
      <About />
    </React.Fragment>
  );
}

export default HomePage;

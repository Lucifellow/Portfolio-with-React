import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar.component";
import Home from "./components/home.component";
import Projects from "./components/project.component";
import Resume from "./components/resume.component";
import Contact from "./components/contact.component";
import {Element} from "react-scroll";
import './App.css';

function App() {
  return (
    <div className="App container-fluid flex">
      <Navbar />
      <Home />
      <Element id="Projects" name="projects">
        <Projects />
      </Element>
      <Element id="Resume" name="resume">
      <Resume />
      </Element>
      <Element id="Contact" name="contact">
        <Contact />
      </Element>
    </div>
  );
}

export default App;

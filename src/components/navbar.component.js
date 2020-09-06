import React,{useState} from "react";
import logo from "./assets/portfolio.png"
import "./nav.css"


//a navbar and hamburger menu using bootstrap 
export default function Navbar(props){
    return(
        <div id="navbar">
        <nav id="main-nav"className="navbar navbar-expand-lg navbar-light">
            <a id="name"className="navbar-brand blue-anim" href="#"><img id="logo"className="border-radius" src={logo}/> &nbsp; Hrishikesh Vyas</a>
            <div id="hamburger-div">
                <button className="navbar-toggler navbar-light bg-light border border-dark " type="button" data-toggle="collapse" data-target=".navbar-collapse" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            </div>
            <div className="collapse navbar-collapse " id="navbarSupportedContent">
            <ul id="nav-element " className="navbar-nav">
                <li className="nav-item active">
                    <a id="project-link"className="nav-link blue-anim bold " href="#projects-section">
                    Projects
                    </a>
                </li>
                <li className="nav-item active">
                    <a className="nav-link blue-anim bold" href="https://drive.google.com/file/d/1nx6T8oqzMELWnqnECSNqwY2awhCcTxCP/view?usp=sharing" target="_blank">
                        Resume
                    </a></li>
                <li className="nav-item active">
                    <a className="nav-link blue-anim bold" href="#contact-section">
                        Contact
                    </a>
                </li>
            </ul>
            </div>
           
        </nav>
        </div>
        
    );
}
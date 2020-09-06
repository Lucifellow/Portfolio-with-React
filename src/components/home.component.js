import React from "react";
import "./home.css"

//Showing home welcome page 
export default function Navbar(props){
    return(
        <section id="home-section">
        <div id="home-container" className="container-fluid">
            <h2 id="main-text">Hello, my name is Hrishikesh. I'm a web developer.</h2>
        </div>
        </section>
    );
}

import React,{useState} from "react";
import "./resume.css"


//Adding resume link section
export default function Navbar(props){
    return(
        <section id="resume-section">
            <div id="resume-container" className="container-fluid">
                <h2 id="resume-header">Resume</h2>
                <div className="inside-a-div">
                    <p id="resume-text">Link to my resume:</p>
                    <a id="resume-link" className="btn btn-primary" href="https://drive.google.com/file/d/1nx6T8oqzMELWnqnECSNqwY2awhCcTxCP/view?usp=sharing" target="_blank">Resume &nbsp; <i className="fas fa-external-link-alt"></i></a>
                </div>
            </div>
        </section>
    );
}
import React from "react";
import markdown from "./assets/markdown_previewer.JPG";
import random_quote from "./assets/random_quote.jpg";
import pomodoro_clock from "./assets/pomodoro_clock.jpg";
import landing_page from "./assets/landing_page.jpg";
import exercise_tracker from "./assets/exercise_tracker.jpg";
import corona_tracker from "./assets/corona-tracker.jpg";
import heat_map from "./assets/heat_map.jpg";
import choropleth_map from "./assets/choropleth.jpg";
import store_img from "./assets/store.JPG";
import chat_img from "./assets/chat.jpg";
import "./project.css";


//Projects section for displaying projects
export default function Navbar(){
    return(
        <section id="projects-section">
        <div id="project-container">
            <h2 id="project-head" className="center-text" >Projects</h2>

            
            <div id="store-container" className="project-inner-big-container">
                <h3 id="store_header" className="center-text">E-commerce Store</h3>
                <div className="flex-row">
                    <img id="store_img" className="project-img" alt="store_img" src={store_img}/>
                    <div id="column-view">
                        <p id="store-desc" className="description-adjust">
                        A MERN stack e-commerce store with Sign in for users, product display and checkout wizard, add/remove/edit/view product for admin.
                        Front-end is made with React - Redux, server is made with Node/Express and database used in MongoDB/ mongoose.
                        </p>
                        <div className="flex-row margin-width center-tech">
                            <p className="medium-font blue-box-shadow padding-width" >React</p>
                            <p className="medium-font blue-box-shadow padding-width margin-width" >Redux</p>
                            <p className="medium-font green-box-shadow margin-width padding-width" >Node/Express</p> 
                            <p className="medium-font mongo-green-box-shadow margin-width padding-width">MongoDB/Mongoose</p>                     
                        </div>
                        <div className="flex-row margin-width center-btns">
                            <a className="btn btn-primary top-margin-link " href="https://blackbearstore.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                                View live website &nbsp;<i className="fas fa-external-link-square-alt"></i>
                            </a>
                            <a className="btn btn-success top-margin-link btn-margin" href="https://github.com/Lucifellow/MERN-stack-e-commerce-store" target="_blank" rel="noopener noreferrer">
                                View Source &nbsp; <i className="fab fa-github"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <hr />

            <div id="chat-container" className="project-inner-big-container">
                <h3 id="chat_header" className="center-text">Chat Application</h3>
                <div className="flex-row">
                    <img id="chat_img" className="project-img" alt="chat_img" src={chat_img}/>
                    <div id="column-view">
                        <p id="chat-desc" className="description-adjust">
                            A real-time chat application for sending and receiving messages between users in the same room.
                            Users can create rooms and invite other users to the same room to send and receive messages. 
                        </p>
                        <div className="flex-row margin-width center-tech">
                            <p className="medium-font blue-box-shadow padding-width" >React</p>
                            <p className="medium-font violet-box-shadow margin-width padding-width" >Socket.io</p>
                            <p className="medium-font green-box-shadow margin-width padding-width" >Node/Express</p>                          
                        </div>
                        <div className="flex-row margin-width center-btns">
                            <a className="btn btn-primary top-margin-link " href="https://cyberchatrealtime.netlify.app/" target="_blank" rel="noopener noreferrer">
                                View live website &nbsp;<i className="fas fa-external-link-square-alt"></i>
                            </a>
                            <a className="btn btn-success top-margin-link btn-margin" href="https://github.com/Lucifellow/Chat-application" target="_blank" rel="noopener noreferrer">
                                View Source &nbsp; <i className="fab fa-github"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <hr />

            <div id="exercise-container" className="project-inner-big-container">
                <h3 id="exercise_header" className="center-text">Exercise Tracker</h3>
                <div className="flex-row">
                    <img id="exercise_img" className="project-img" alt="exercise_img" src={exercise_tracker}/>
                    <div id="column-view">
                        <p id="exercise-desc" className="description-adjust">
                            New Users can visit "Create Users" link and type their username to create a new user. Users can visit
                            "Create Exercise Log" and select their username from drop-down list to fill in information of their exercise. Updated list
                            of exercises for new user can be seen by visiting "Exercises" link. Users can edit their exercise or delete it
                            from the same page by clicking on the respective button.
                        </p>
                        <div className="flex-row margin-width center-tech">
                            <p className="medium-font blue-box-shadow padding-width" >React</p>
                            <p className="medium-font violet-box-shadow margin-width padding-width" >Bootstrap</p>
                            <p className="medium-font green-box-shadow margin-width padding-width" >Node/Express</p> 
                            <p className="medium-font mongo-green-box-shadow margin-width padding-width">MongoDB/Mongoose</p>                         
                        </div>
                        <div className="flex-row margin-width center-btns">
                            <a className="btn btn-primary top-margin-link " href="https://exercise-tracker-full-stack.exercisetracker.repl.co/" target="_blank" rel="noopener noreferrer">
                                View live website &nbsp;<i className="fas fa-external-link-square-alt"></i>
                            </a>
                            <a className="btn btn-success top-margin-link btn-margin" href="https://github.com/Lucifellow/Exercise-Tracker-Full-Stack" target="_blank" rel="noopener noreferrer">
                                View Source &nbsp; <i className="fab fa-github"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <hr />

            <div id="corona-container" className="project-inner-big-container">
                <h3 id="corona_header" className="center-text">COVID-19 Tracker</h3>
                <div className="flex-row">
                    <img id="corona_img" className="project-img" alt="corona_img" src={corona_tracker}/>
                    <div id="column-view">
                        <p id="corona-desc" className="description-adjust">
                        A corona virus tracker that displays latest information of infection cases, recovery, deaths, vaccine trial, and therapeutic trial data. 
                        Users can view global data or data of individual country on map. It displays sorted data of live cases by country and a line graph showing
                        worldwide cases, recovered cases, deaths in last 160 days, vaccine and therapeutic trial. API used for getting COVID-19 data is disease.sh.   
                        </p>
                        <div className="flex-row margin-width center-tech">
                            <p className="medium-font blue-box-shadow padding-width" >React/Hooks</p>

                            <p className="medium-font violet-box-shadow margin-width padding-width" >CSS</p>                        
                        </div>
                        <div className="flex-row margin-width center-btns">
                            <a className="btn btn-primary top-margin-link " href="https://lucifellow.github.io/COVID-19-Tracker/" target="_blank" rel="noopener noreferrer">
                                View live website &nbsp;<i className="fas fa-external-link-square-alt"></i>
                            </a>
                            <a className="btn btn-success top-margin-link btn-margin" href="https://github.com/Lucifellow/COVID-19-Tracker" target="_blank" rel="noopener noreferrer">
                                View Source &nbsp; <i className="fab fa-github"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <hr />

            <div id="markdown-container" className="project-inner-container">
                <h3 id="markdown_header" className="center-text">Markdown Previewer</h3>
                <div className="flex-row">
                    <img id="markdown_img" className="project-img" alt="markdown_img" src={markdown}/>
                    <div id="column-view">
                        <p id="markdown-desc" className="description-adjust">In this project, users can edit their markup in the editor on the left 
                        and see live preview in the previewer on the right. The editor text demonstrates how to use syntax for markdown with its live preview.
                        </p>
                        <div className="flex-row margin-width center-tech">
                            <p className="medium-font blue-box-shadow padding-width" >React</p>
                            <p className="medium-font pink-box-shadow margin-width padding-width" >Sass</p>
                            <p className="medium-font violet-box-shadow margin-width padding-width" >Bootstrap</p>
                        </div>
                        <div className="flex-row margin-width center-btns">
                            <a className="btn btn-primary top-margin-link " href="https://lucifellow.github.io/Markdown-Preview/" target="_blank" rel="noopener noreferrer">
                                View live website &nbsp;<i className="fas fa-external-link-square-alt"></i>
                            </a>
                            <a className="btn btn-success top-margin-link btn-margin" href="https://github.com/Lucifellow/Markdown-Preview" target="_blank" rel="noopener noreferrer">
                                View Source &nbsp; <i className="fab fa-github"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <hr />

            <div id="quote-container" className="project-inner-container">
                <h3 id="quote_header" className="center-text">Random Quote Generator</h3>
                <div className="flex-row">
                    <img id="quote_img" className="project-img" alt="quote_img" src={random_quote}/>
                    <div id="column-view">
                        <p id="quote-desc" className="description-adjust">
                            Generates random quotes with a unique theme. Get a new quote by clicking on the New Quote button. 
                            You can tweet the displayed quote with the name of the author by clicking on the Tweet button.  
                        </p>
                        <div className="flex-row margin-width center-tech">
                            <p className="medium-font blue-box-shadow padding-width">jQuery</p>
                            <p className="medium-font pink-box-shadow margin-width padding-width">Sass</p>
                            <p className="medium-font violet-box-shadow margin-width padding-width">Bootstrap</p>
                        </div>
                        <div className="flex-row margin-width center-btns">
                            <a className="btn btn-primary top-margin-link " href="https://lucifellow.github.io/Random-Quote-Generator/" target="_blank" rel="noopener noreferrer">
                                View live website &nbsp;<i className="fas fa-external-link-square-alt"></i>
                            </a>
                            <a className="btn btn-success top-margin-link btn-margin" href="https://github.com/Lucifellow/Random-Quote-Generator" target="_blank" rel="noopener noreferrer">
                                View Source &nbsp; <i className="fab fa-github"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <hr />

            <div id="clock-container" className="project-inner-big-container">
                <h3 id="clock_header" className="center-text">Pomodoro Clock</h3>
                <div className="flex-row">
                    <img id="clock_img" className="project-img" alt="clock_img" src={pomodoro_clock}/>
                    <div id="column-view">
                        <p id="clock-desc" className="description-adjust">
                        Users can set the amount of time for work and for break. After the set amount of time has passed while working, the clock will start an alarm to remind you to take break and vice versa.
                          You can pause and play the time by pressing the play/pause button. The reset button will stop the timer if it is playing and reset all values to default.   
                        </p>
                        <div className="flex-row margin-width center-tech">
                            <p className="medium-font blue-box-shadow padding-width">React</p>
                            <p className="medium-font pink-box-shadow margin-width padding-width">Sass</p>
                            <p className="medium-font blue-box-shadow margin-width padding-width">jQuery</p>
                        </div>
                        <div className="flex-row margin-width center-btns">
                            <a className="btn btn-primary top-margin-link " href="https://lucifellow.github.io/Pomodoro-Clock/" target="_blank" rel="noopener noreferrer">
                                View live website &nbsp;<i className="fas fa-external-link-square-alt"></i>
                            </a>
                            <a className="btn btn-success top-margin-link btn-margin" href="https://github.com/Lucifellow/Pomodoro-Clock" target="_blank" rel="noopener noreferrer">
                                View Source &nbsp; <i className="fab fa-github"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            
            <div id="landing-container" className="project-inner-container">
                <h3 id="landing_header" className="center-text">Product Landing Page</h3>
                <div className="flex-row">
                    <img id="landing_img" className="project-img" alt="landing_img" src={landing_page}/>
                    <div id="column-view">
                        <p id="landing-desc" className="description-adjust">
                            A product landing page describing features, video demo, image presentation,
                            price comparison of different products or services.
                        </p>
                        <div className="flex-row margin-width center-tech">
                            <p className="medium-font orange-box-shadow padding-width">HTML5</p>
                            <p className="medium-font blue-box-shadow margin-width padding-width">CSS3</p>
                        </div>
                        <div className="flex-row margin-width center-btns">
                            <a className="btn btn-primary top-margin-link " href="https://lucifellow.github.io/Product-landing-page/" target="_blank" rel="noopener noreferrer">
                                View live website &nbsp;<i className="fas fa-external-link-square-alt"></i>
                            </a>
                            <a className="btn btn-success top-margin-link btn-margin" href="https://github.com/Lucifellow/Product-landing-page" target="_blank" rel="noopener noreferrer">
                                View Source &nbsp; <i className="fab fa-github"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            
           

            <div id="heat-container" className="project-inner-big-container">
                <h3 id="heat_header" className="center-text">Heat Map</h3>
                <div className="flex-row">
                    <img id="heat_img" className="project-img" alt="heat_img" src={heat_map}/>
                    <div id="column-view">
                        <p id="heat-desc" className="description-adjust">
                            A heat map that shows the temperature variance from 1753 to 2015 with a base temperature of 8.66 °C. It fetches data from api for global
                            temperature in json format. The X-axis represents years and the Y-axis represents months. Hover over any data to get more information
                            from api with the help of tooltip.
                        </p>
                        <div className="flex-row margin-width center-tech">
                            <p className="medium-font d3-box-shadow padding-width" >D3</p>
                            <p className="medium-font orange-box-shadow margin-width padding-width" >HTML5</p>
                            <p className="medium-font blue-box-shadow margin-width padding-width">CSS3</p>
                            <p className="medium-font yellow-box-shadow margin-width padding-width">JavaScript</p>
                        </div>
                        <div className="flex-row margin-width center-btns">
                            <a className="btn btn-primary top-margin-link " href="https://lucifellow.github.io/D3-Heat-Map/" target="_blank" rel="noopener noreferrer">
                                View live website &nbsp;<i className="fas fa-external-link-square-alt"></i>
                            </a>
                            <a className="btn btn-success top-margin-link btn-margin" href="https://github.com/Lucifellow/D3-Heat-Map" target="_blank" rel="noopener noreferrer">
                                View Source &nbsp; <i className="fab fa-github"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
        
            <div id="choropleth-container" className="project-inner-big-container">
                <h3 id="choropleth_header" className="center-text">Choropleth Map</h3>
                <div className="flex-row">
                    <img id="usa_img" className="project-img" alt="usa_img" src={choropleth_map}/>
                    <div id="column-view">
                        <p id="heat-desc" className="description-adjust">
                            A choropleth map that shows the percentage of adults in the USA with ages 25 years or above who have a bachelors or a higher degree. 
                            It fetches data from two apis, one for the USA county topographic location and another for education in each county of USA
                             in json format. Hover over any data to get more information.
                        </p>
                        <div className="flex-row margin-width center-tech">
                            <p className="medium-font d3-box-shadow padding-width" >D3</p>
                            <p className="medium-font orange-box-shadow margin-width padding-width" >HTML5</p>
                            <p className="medium-font blue-box-shadow margin-width padding-width">CSS3</p>
                            <p className="medium-font yellow-box-shadow margin-width padding-width">JavaScript</p>
                        </div>
                        <div className="flex-row margin-width center-btns">
                            <a className="btn btn-primary top-margin-link " href="https://lucifellow.github.io/D3-Choropleth-map/" target="_blank" rel="noopener noreferrer">
                                View live website &nbsp;<i className="fas fa-external-link-square-alt"></i>
                            </a>
                            <a className="btn btn-success top-margin-link btn-margin" href="https://github.com/Lucifellow/D3-Choropleth-map" target="_blank" rel="noopener noreferrer">
                                View Source &nbsp; <i className="fab fa-github"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        </section>
    );
}
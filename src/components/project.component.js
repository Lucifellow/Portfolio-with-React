import React,{useState} from "react";
import markdown from "./assets/markdown_previewer.JPG";
import random_quote from "./assets/random_quote.jpg";
import pomodoro_clock from "./assets/pomodoro_clock.jpg";
import landing_page from "./assets/landing_page.jpg";
import survey_page from "./assets/survey_page.jpg";
import exercise_tracker from "./assets/exercise_tracker.jpg";
import heat_map from "./assets/heat_map.jpg";
import choropleth_map from "./assets/choropleth.jpg";
import bar_chart from "./assets/bar-chart.jpg"
import scatter_plot from "./assets/scatter_plot.jpg"
import "./project.css";


//Projects section for displaying projects
export default function Navbar(){
    return(
        <section id="projects-section">
        <div id="project-container">
            <h2 id="project-head" className="center-text" >Projects</h2>

            <div id="markdown-container" className="project-inner-container">
                <h3 id="markdown_header" className="center-text">Markdown Previewer</h3>
                <div className="flex-row">
                    <img id="markdown_img" className="project-img" src={markdown}/>
                    <div id="column-view">
                        <p id="markdown-desc" className="description-adjust">In this project, users can edit their markup in the editor on left 
                        and see live preview in the previewer on right. The editor text demonstrates how to use syntax for markdown with its live preview.
                        </p>
                        <div className="flex-row margin-width center-tech">
                            <p className="medium-font blue-box-shadow padding-width" >React</p>
                            <p className="medium-font orange-box-shadow margin-width padding-width" >HTML5</p>
                            <p className="medium-font blue-box-shadow margin-width padding-width" >CSS3</p>
                            <p className="medium-font yellow-box-shadow margin-width padding-width" >JavaScript</p>
                            <p className="medium-font pink-box-shadow margin-width padding-width" >Sass</p>
                            <p className="medium-font violet-box-shadow margin-width padding-width" >Bootstrap</p>
                        </div>
                        <div className="flex-row margin-width center-btns">
                            <a className="btn btn-primary top-margin-link " href="https://lucifellow.github.io/Markdown-Preview/" target="_blank">
                                View live website &nbsp;<i className="fas fa-external-link-square-alt"></i>
                            </a>
                            <a className="btn btn-success top-margin-link btn-margin" href="https://github.com/Lucifellow/Markdown-Preview" target="_blank">
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
                    <img id="quote_img" className="project-img" src={random_quote}/>
                    <div id="column-view">
                        <p id="quote-desc" className="description-adjust">
                            Generate random quotes with a unique theme. Get new quote by clicking on the New Quote button. 
                            You can tweet the displayed quote with the name of author by clicking on Tweet button.  
                        </p>
                        <div className="flex-row margin-width center-tech">
                            <p className="medium-font blue-box-shadow padding-width">jQuery</p>
                            <p className="medium-font orange-box-shadow margin-width padding-width">HTML5</p>
                            <p className="medium-font blue-box-shadow margin-width padding-width">CSS3</p>
                            <p className="medium-font yellow-box-shadow margin-width padding-width">JavaScript</p>
                            <p className="medium-font pink-box-shadow margin-width padding-width">Sass</p>
                            <p className="medium-font violet-box-shadow margin-width padding-width">Bootstrap</p>
                        </div>
                        <div className="flex-row margin-width center-btns">
                            <a className="btn btn-primary top-margin-link " href="https://lucifellow.github.io/Random-Quote-Generator/" target="_blank">
                                View live website &nbsp;<i className="fas fa-external-link-square-alt"></i>
                            </a>
                            <a className="btn btn-success top-margin-link btn-margin" href="https://github.com/Lucifellow/Random-Quote-Generator" target="_blank">
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
                    <img id="clock_img" className="project-img" src={pomodoro_clock}/>
                    <div id="column-view">
                        <p id="clock-desc" className="description-adjust">
                          In pomodoro clock, users can set minutes to work and take break. After set amount of minutes have passed on doing work, it will start an alarm to remind you to take break and vice versa.
                          You can pause and play the time by pressing middle button. The reset button will stop the timer if it is playing and reset all values to default.   
                        </p>
                        <div className="flex-row margin-width center-tech">
                            <p className="medium-font blue-box-shadow padding-width">React</p>
                            <p className="medium-font orange-box-shadow margin-width padding-width">HTML5</p>
                            <p className="medium-font yellow-box-shadow margin-width padding-width">JavaScript</p>
                            <p className="medium-font pink-box-shadow margin-width padding-width">Sass</p>
                            <p className="medium-font blue-box-shadow margin-width padding-width">jQuery</p>
                        </div>
                        <div className="flex-row margin-width center-btns">
                            <a className="btn btn-primary top-margin-link " href="https://lucifellow.github.io/Pomodoro-Clock/" target="_blank">
                                View live website &nbsp;<i className="fas fa-external-link-square-alt"></i>
                            </a>
                            <a className="btn btn-success top-margin-link btn-margin" href="https://github.com/Lucifellow/Pomodoro-Clock" target="_blank">
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
                    <img id="landing_img" className="project-img" src={landing_page}/>
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
                            <a className="btn btn-primary top-margin-link " href="https://lucifellow.github.io/Product-landing-page/" target="_blank">
                                View live website &nbsp;<i className="fas fa-external-link-square-alt"></i>
                            </a>
                            <a className="btn btn-success top-margin-link btn-margin" href="https://github.com/Lucifellow/Product-landing-page" target="_blank">
                                View Source &nbsp; <i className="fab fa-github"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <hr />

            <div id="survey-container" className="project-inner-container">
                <h3 id="survey_header" className="center-text">Survey Page</h3>
                <div className="flex-row">
                    <img id="survey_img" className="project-img" src={survey_page}/>
                    <div id="column-view">
                        <p id="survey-desc" className="description-adjust">
                           A survey form to get feedback from users about a service or product.
                        </p>
                        <div className="flex-row margin-width top-margin-link center-tech">
                            <p className="medium-font orange-box-shadow padding-width" >HTML5</p>
                            <p className="medium-font blue-box-shadow margin-width padding-width">CSS3</p>
                        </div>
                        <div className="flex-row margin-width center-btns">
                            <a className="btn btn-primary top-margin-link " href="https://lucifellow.github.io/Survey-Form/" target="_blank">
                                View live website &nbsp;<i className="fas fa-external-link-square-alt"></i>
                            </a>
                            <a className="btn btn-success top-margin-link btn-margin" href="https://github.com/Lucifellow/Survey-Form" target="_blank">
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
                    <img id="exercise_img" className="project-img" src={exercise_tracker}/>
                    <div id="column-view">
                        <p id="exercise-desc" className="description-adjust">
                            New Users can visit create users link and type their username and click create user. Users can visit
                            Create Exercise Log and select their username from drop-down list and fill in information of their exercise. Updated list
                            of exercises for new user can be seen by visiting Exercises link. Users can edit their exercise or delete it
                            from the same page by clicking on the respective button. It will take some time to load.
                        </p>
                        <div className="flex-row margin-width center-tech">
                            <p className="medium-font blue-box-shadow padding-width" >React</p>
                            <p className="medium-font violet-box-shadow margin-width padding-width" >Bootstrap</p>
                            <p className="medium-font green-box-shadow margin-width padding-width" >Node/Express</p> 
                            <p className="medium-font mongo-green-box-shadow margin-width padding-width">MongoDB/Mongoose</p>                         
                        </div>
                        <div className="flex-row margin-width center-btns">
                            <a className="btn btn-primary top-margin-link " href="https://exercise-tracker-full-stack.exercisetracker.repl.co/" target="_blank">
                                View live website &nbsp;<i className="fas fa-external-link-square-alt"></i>
                            </a>
                            <a className="btn btn-success top-margin-link btn-margin" href="https://github.com/Lucifellow/Exercise-Tracker-Full-Stack" target="_blank">
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
                    <img id="heat_img" className="project-img" src={heat_map}/>
                    <div id="column-view">
                        <p id="heat-desc" className="description-adjust">
                            A heat map that shows temperature variance from 1753 to 2015 with base temperature 8.66 °C. It fetches data from api for global
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
                            <a className="btn btn-primary top-margin-link " href="https://lucifellow.github.io/D3-Heat-Map/" target="_blank">
                                View live website &nbsp;<i className="fas fa-external-link-square-alt"></i>
                            </a>
                            <a className="btn btn-success top-margin-link btn-margin" href="https://github.com/Lucifellow/D3-Heat-Map" target="_blank">
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
                    <img id="heat_img" className="project-img" src={choropleth_map}/>
                    <div id="column-view">
                        <p id="heat-desc" className="description-adjust">
                            A choropleth map that shows percentage of adults in USA 25 years or older with a bachelors or higher degree. 
                            It fetches data from two apis, one for USA county topographic location and another for education in each county for USA
                             in json format. Hover over any data to get more information.
                        </p>
                        <div className="flex-row margin-width center-tech">
                            <p className="medium-font d3-box-shadow padding-width" >D3</p>
                            <p className="medium-font orange-box-shadow margin-width padding-width" >HTML5</p>
                            <p className="medium-font blue-box-shadow margin-width padding-width">CSS3</p>
                            <p className="medium-font yellow-box-shadow margin-width padding-width">JavaScript</p>
                        </div>
                        <div className="flex-row margin-width center-btns">
                            <a className="btn btn-primary top-margin-link " href="https://lucifellow.github.io/D3-Choropleth-map/" target="_blank">
                                View live website &nbsp;<i className="fas fa-external-link-square-alt"></i>
                            </a>
                            <a className="btn btn-success top-margin-link btn-margin" href="https://github.com/Lucifellow/D3-Choropleth-map" target="_blank">
                                View Source &nbsp; <i className="fab fa-github"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <hr />

            <div id="bar-container" className="project-inner-container">
                <h3 id="bar_header" className="center-text">Bar Chart</h3>
                <div className="flex-row">
                    <img id="bar_img" className="project-img" src={bar_chart}/>
                    <div id="column-view">
                        <p id="bar-desc" className="description-adjust">
                            A bar chart that shows GDP growth of USA from 1947 to 2015. The x-axis represents time in years and y-axis represents
                            GDP in billion dollars.
                        </p>
                        <div className="flex-row margin-width center-tech">
                            <p className="medium-font d3-box-shadow padding-width" >D3</p>
                            <p className="medium-font orange-box-shadow margin-width padding-width" >HTML5</p>
                            <p className="medium-font blue-box-shadow margin-width padding-width">CSS3</p>
                            <p className="medium-font yellow-box-shadow margin-width padding-width">JavaScript</p>
                        </div>
                        <div className="flex-row margin-width center-btns">
                            <a className="btn btn-primary top-margin-link " href="https://lucifellow.github.io/D3-Bar-Chart/" target="_blank">
                                View live website &nbsp;<i className="fas fa-external-link-square-alt"></i>
                            </a>
                            <a className="btn btn-success top-margin-link btn-margin" href="https://github.com/Lucifellow/D3-Bar-Chart" target="_blank">
                                View Source &nbsp; <i className="fab fa-github"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <hr />

            <div id="scatter-container" className="project-inner-big-container">
                <h3 id="scatter_header" className="center-text">Scatter Plot</h3>
                <div className="flex-row">
                    <img id="scatter_img" className="project-img" src={scatter_plot}/>
                    <div id="column-view">
                        <p id="scatter-desc" className="description-adjust">
                            This scatter plot represents bicycle racers doping in professional races to improve their performance. The x-axis
                            shows years and the y-axis shows time taken by bikers to finish the race. Red dot represents bikers who are doping
                            and green dot represents bikers without doping.
                        </p>
                        <div className="flex-row margin-width center-tech">
                            <p className="medium-font d3-box-shadow padding-width" >D3</p>
                            <p className="medium-font orange-box-shadow margin-width padding-width" >HTML5</p>
                            <p className="medium-font blue-box-shadow margin-width padding-width">CSS3</p>
                            <p className="medium-font yellow-box-shadow margin-width padding-width">JavaScript</p>
                        </div>
                        <div className="flex-row margin-width center-btns">
                            <a className="btn btn-primary top-margin-link " href="https://lucifellow.github.io/D3-Scatter-Plot/" target="_blank">
                                View live website &nbsp;<i className="fas fa-external-link-square-alt"></i>
                            </a>
                            <a className="btn btn-success top-margin-link btn-margin" href="https://github.com/Lucifellow/D3-Scatter-Plot" target="_blank">
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
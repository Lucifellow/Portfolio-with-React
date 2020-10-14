import React from "react";
import "./contact.css"

//adding contact links at footer section
export default function Contact(props){
    return(
        <section id="contact-section" className="container-fluid">
            <div id="contact-container">
                <h2 id="contact-header">Contact</h2>
                <div id="contact-div-inner">
                    <p id="contact-desc">
                        If you have an opportunity for me or want to collaborate on a project, please feel free to contact me on 
                            LinkedIn, Github, CodePen or Email:
                    </p>
                    
                    <div id="contact-logo">

                        <a id="linkedin-link" href="https://www.linkedin.com/in/hrishikesh-vyas/" target="_blank" rel="noopener noreferrer">
                            <img id="linkedinimg" className="contactimg img-anim" alt="LinkedIn_img" src="https://i.imgur.com/NiV2Gyn.png"/>
                        </a>

                        <a id="profile-link" className="margin-left-contact-logo" href="https://github.com/Lucifellow" target="_blank" rel="noopener noreferrer">
                            <img id="githublogo" className="contactimg img-anim" alt="Github_img"  src="https://i.imgur.com/3h9XHpd.png"  />
                        </a>
                        
                        <a id="codepen-link" className="margin-left-contact-logo" href="https://codepen.io/hvyas" target="_blank" rel="noopener noreferrer">
                            <img id="codepenlogo" className="contactimg img-anim" alt="codepen_img"  src="https://blog.codepen.io/wp-content/uploads/2012/06/Button-Fill-Black-Large.png"/>
                        </a>

                        <a id="gmail-link" className="margin-left-contact-logo" href="mailto:vyashrishikesh93@gmail.com" rel="noopener noreferrer">
                            <img id="gmailimg" className="contactimg img-anim" alt="gmail_img"  src="https://i.imgur.com/pbQWgAJ.png"  />
                        </a>

                    </div>
                </div>
            </div>
        </section>
    );
}
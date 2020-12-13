import React, {Component } from "react";
import Animation from '../components/Animation'

class home extends Component {

    render() {
        return(
            
            <>
                {/** Animation rendering - animation was done using react-three-fiber, sass, drei & react-scripts
                 * https://threejs.org/
                 * https://github.com/pmndrs/react-three-fiber
                 */}

                <Animation />

                    <div>
                        <div className="title-name">

                            {/** The name that you see at the center of the page with the title and social links */}

                            <h1 style={{fontSize: '92px', opacity: '.6', fontWeight: 'bold', color: '#757575', textAlign: 'center'}}>Abdul Khaliq</h1>
                                <span style={{color: '#000', opacity: "0.7", fontSize: '22px', padding: '1em'}}>
                                Software Engineer | Web Developer
                                </span>

                            {/** Social media links to connect */}
                            
                            <div className="social-links">

                                {/** Linkedin link */}

                                <a  href="https://www.linkedin.com/in/amkhaliq/" rel="noopener noreferrer" target="_blank">
                                    <i className="fab fa-linkedin-in" id="linkedin" aria-hidden="true"/>
                                </a>

                                {/** Github link */}

                                <a href="https://github.com/amkhaliq" rel="noopener noreferrer" target="_blank">
                                    <i className="fab fa-github-alt" id="github" aria-hidden="true"/>
                                </a>            

                                {/** Slack link */}

                                <a href="https://gamecode-hq.slack.com" rel="noopener noreferrer" target="_blank">
                                    <i className="fab fa-slack" id="slack" aria-hidden="true"/>
                                </a> 
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default home;
import React, { Component } from 'react';
import '../App.css'
import Hacker from '../images/hacker.svg'
import resume from './Resume.pdf'

class about extends Component {
    render() {
        return(
                <div className="canva">
                        <div className="container">
                            <div className="image">
                                <img src={Hacker} alt="_blank"/>
                            </div>

                                        <div className="description">
                                            <h1 style={{color: "black"}}>Mohammed 
                                        <br />
                                            Abdul Khaliq
                                        </h1>      

                                        <div>
                                            <p>
                                            I am passionate about computers and software that
                                            improves the lives of those around the world. I 
                                            would love to be a part of that future. I am aspiring
                                            to be a software engineer, but I also have interest in
                                            web development and artificial intelligence.
                                            </p>
                                        </div>

                                            <div>
                                                <button class="resume-btn">
                                                    <a id="resume-link" rel="noreferrer" href={resume} target="_blank">Resume</a>
                                                </button>
                                            </div>
                            </div>
                        </div>
                </div>
        )
    }
}

export default about;
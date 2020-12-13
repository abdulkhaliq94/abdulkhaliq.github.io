import React, { Component } from 'react';
import '../App.css'
import Hacker from '../images/hacker.svg'

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
                            </div>
                        </div>
                </div>
        )
    }
}

export default about;
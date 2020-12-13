import React from 'react'

const navbar = () => {
    return (

      <header>

        <div className="topnav" id="myTopnav">
            
            <a href="/contact">Contact</a>
            <a href="/projects">Projects</a>
            <a href="/about">About</a>
            <a href="/home" >Home</a>
            
              <div id="name-header">
                <a href="/">Abdul Khaliq</a>
              </div>
        </div>
      </header>
    );
  };
  
  export default navbar;
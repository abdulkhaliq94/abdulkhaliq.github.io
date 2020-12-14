import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';

function Main() {
    return(
        <>
            <Switch>
                <Route exact path="/"><Home /></Route>
                <Route path="/home"><Home /></Route>
                <Route path="/about"><About /></Route>
                <Route path="/projects"><Projects /></Route>
                <Route path="/contact"><Contact /></Route>
            </Switch>
        </>
    )
}

export default Main;
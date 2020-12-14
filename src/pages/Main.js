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
                <Route path="/"><Home /></Route>
                <Route path="/About"><About /></Route>
                <Route path="/Projects"><Projects /></Route>
                <Route path="/Contact"><Contact /></Route>
            </Switch>
        </>
    )
}

export default Main;
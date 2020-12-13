import React, { Component } from 'react';

class projects extends Component {
    constructor(props) {
        super(props)

        this.state = {
            activeTab: 0
        }
    }

    switchTabs = () => {
        return(
            <h1>Projects page</h1>
        )
    }
}

export default projects;
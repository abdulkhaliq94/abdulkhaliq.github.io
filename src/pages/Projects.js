import React, { Component } from 'react';
import {Tabs, Tab, Cell, Grid} from 'react-mdl'

class projects extends Component {
    constructor(props) {
        super(props)

        this.state = {
            activeTab: 0
        }
    }

    render() {
        return(
            <div className="tabs">
                <Tabs activeTab={this.state.activeTab} 
                    onChange={(tabId) => this.setState({activeTab: tabId})} ripple>
                        <Tab id="tabs">React</Tab>
                        <Tab id="tabs">Python</Tab>
                        <Tab id="tabs">Machine Learning</Tab>
                    </Tabs>

                    <Grid>
                        <Cell col={12}>
                            <div className="content">
                                {this.switchTabs()}
                            </div>
                        </Cell>
                    </Grid>
            </div>
        )
    }
}

export default projects;
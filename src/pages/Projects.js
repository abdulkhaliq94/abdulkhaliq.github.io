import React, { Component } from 'react';
import {Tabs, Tab, Cell, Grid, Card, CardTitle, CardText, Button, CardActions} from 'react-mdl'

class projects extends Component {
    constructor(props) {
        super(props)

        this.state = {
            activeTab: 0
        }
    }

    switchTabs = () => {
        if(this.state.activeTab === 0) {
            return (
                <div className="grid-flow-horizontal">
                    <div className="cards">
                        <Card shadow={5} style={{minWidth: '450', height: '100%', margin: 'auto'}}>
                            <CardTitle style={{color: 'white', height: '176px', display: 'flex', background: 
                                'url(https://i.redd.it/x1sr1lob3ai41.jpg) center / cover'}}>
                                    
                                </CardTitle>
                            <CardText id="card-text">
                                    <p>Unknown</p>
                                    <i>Coming soon...</i>

                                    <br />Pellentesque posuere neque velit, nec condimentum urna efficitur nec. 
                                    Fusce ante felis, mollis in nisl nec, pharetra viverra mi. 
                                    In malesuada dictum ex quis scelerisque.
                                    <br /><br />Technologies used: HTML | CSS | REACT | BOOTSTRAP
                                </CardText>
                            <CardActions border style={{textDecoration: "none"}}>
                                    <Button colored>CodePen</Button>
                                    <Button colored>LiveDemo</Button>
                                    <Button colored>Github</Button>
                                </CardActions>
                        </Card>
                    </div>
                </div>
            )
        } else if(this.state.activeTab === 1) {
            return(
                <div className="grid-flow-horizontal">
                    
                </div>
                
            )
        } else if(this.state.activeTab === 2) {
            return(
                <div className="grid-flow-horizontal">
                    
                </div>
            )
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
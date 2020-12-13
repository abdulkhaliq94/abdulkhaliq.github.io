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
                    
                    <div className="cards">
                        <Card shadow={5} style={{minWidth: '450', height: '100%', margin: 'auto'}}>
                            <CardTitle style={{color: 'black', height: '176px', background: 
                                'url(https://themewagon.com/wp-content/uploads/2017/02/04.-Developer.jpg) center / cover'}}>
                                    
                                </CardTitle>
                            <CardText id="card-text">
                                    <p>Portfolio</p>
                                    	The portfolio website was built with a dynamic react JS library including react three
                                         fiber to create some amazing animations and react router to navigate through different pages.
                                         <br /><br />Technologies used: HTML | CSS | SASS | JAVASCRIPT | REACT | REACT-THREE-FIBER
                                          | REACT-SCRIPTS | REACT-MDL | BOOTSTRAP
                                </CardText>
                            <CardActions border>
                                    <Button colored style={{textDecoration: "none"}} href="https://www.github.com/amkhaliq/abdulkhaliq.github.io" target="_blank">Github</Button>
                                    <Button colored>LiveDemo</Button>
                                </CardActions>
                        </Card>
                    </div>

                    <div className="cards">
                        <Card shadow={5} style={{minWidth: '450', height: '100%', margin: 'auto'}}>
                            <CardTitle style={{color: 'black', height: '176px', background: 
                                'url(https://creativgoods.com/wp-content/uploads/2016/11/Abstract-background-for-design-mousepad.jpg) center / cover'}}>
                                    
                                </CardTitle>
                        <CardText id="card-text">
                                <p>Design Pad</p>
                                A react app for dragging and dropping colors from a pad into a board.<br/><br></br> React was used to build this app
                                for web development class.
                                <br /><br /><br /> Technologies used: HTML | CSS | REACT
                        </CardText>
                        <CardActions border style={{textDecoration: "none"}}>
                                <Button colored style={{textDecoration: "none"}} href="https://www.github.com/amkhaliq/design-pad" target="_blank">Github</Button>
                            </CardActions>
                        </Card>
                    </div>
                </div>
            )
        } else if(this.state.activeTab === 1) {
            return(
                <div className="grid-flow-horizontal">
                    <div className="cards">
                        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                            <CardTitle style={{color: 'black', height: '176px', background: 
                            'url(https://www.stlucieco.gov/Home/ShowPublishedImage/1527/635744494515070000) center / cover'}}>

                                </CardTitle>
                            <CardText id="card-text">
                                <p>Housing Prices</p>
                                Housing prices was used as a kaggle challenge in data analysis class to predict the housing prices of an area.
                                <br/><br/> Technologies used: Python | Jupyter | Jupyter Notebook
                            </CardText>
                            <CardActions border style={{textDecoration: "none"}}>
                                <Button colored style={{textDecoration: "none"}} href="https://github.com/amkhaliq/housing_prices" target="_blank">Github</Button>
                            </CardActions>
                        </Card>
                    </div>,

                    <div className="cards">
                        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                            <CardTitle style={{color: 'black', height: '176px', background: 
                            'url(https://www.kindpng.com/picc/m/34-349389_payroll-png-transparent-png.png) center / cover'}}>

                                </CardTitle>
                            <CardText id="card-text">
                                <p>NYC Payroll</p>
                                NYC Payroll dataset was used in the project of citywide payroll.
                                <br/><br/> Technologies used: Python | Jupyter | Jupyter Notebook
                            </CardText>
                            <CardActions border style={{textDecoration: "none"}}>
                                <Button colored style={{textDecoration: "none"}} href="https://github.com/amkhaliq/nyc_payroll" target="_blank">Github</Button>
                            </CardActions>
                        </Card>
                    </div>
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
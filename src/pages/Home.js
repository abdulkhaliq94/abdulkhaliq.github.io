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
                                
                    </div>
                </div>
            </>
        )
    }
}

export default home;
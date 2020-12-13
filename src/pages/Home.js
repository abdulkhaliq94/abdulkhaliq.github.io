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

                    
            </>
        )
    }
}

export default home;
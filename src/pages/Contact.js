import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import FormContent from '../components/FormContent'

class contact extends React.Component {
  constructor(props) {
    super(props) 

    this.state = {
        name: '',
        email: '',
        message: '',
        disabled: false,
        emailSent: null,
    }
  }

  render () {
    return (
          <div className="bg-contact"/*style={{backgroundColor: "black", opacity: "0.1"}}*/>
              <FormContent>
                  <h1>Let's Connect!</h1>
                  
              </FormContent>
          </div>
    );
  }
}

export default contact;
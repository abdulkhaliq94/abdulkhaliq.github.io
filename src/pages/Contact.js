import React from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
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

  handleChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({
        disabled: true
    });
    alert('Hey ' + this.state.name + ', Your message was sent successfully!')
  }

  render () {
    return (
          <div className="bg-contact"/*style={{backgroundColor: "black", opacity: "0.1"}}*/>
              <FormContent>
                  <h1>Let's Connect!</h1>
                  <Form onSubmit={this.handleSubmit}>
                      <Form.Group>
                          <Form.Label htmlFor="fname" className="labels">Full Name</Form.Label>
                          <Form.Control id="fname" name="name" type="text" placeholder="Ex: John Smith" value={this.state.name} onChange={this.handleChange}/>
                      </Form.Group>

                      <Form.Group>
                          <Form.Label htmlFor="email" className="labels">Email</Form.Label>
                          <Form.Control id="email" name="email" type="email" placeholder="Ex: jsmith@gmail.com" value={this.state.email} onChange={this.handleChange}/>
                      </Form.Group>

                      <Form.Group>
                          <Form.Label htmlFor="message" className="labels">Message</Form.Label>
                          <Form.Control id="message" name="message" placeholder="Ex: Type your message here..." as="textarea" rows="4" value={this.state.message} onChange={this.handleChange}/>
                      </Form.Group>
                      
                      <Button id="submit-btn" className="d-inline-block" variant="primary" type="submit" disabled={this.state.disabled}>
                              Send
                      </Button>

                        {this.state.emailSent === true && <p className="d-inline success-msg">Email Sent</p>}
                        {this.state.emailSent === false && <p className="d-inline err-msg">Email Not Sent</p>}
                  </Form>
              </FormContent>
          </div>
    );
  }
}

export default contact;
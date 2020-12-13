import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function FormContent(props) {
    return (
        <Container fluid={true}>
            <Row className="justify-content-center" style={{marginTop: "4.5%"}}>
                <Col md={4}>
                    {props.children}
                </Col>
            </Row>
        </Container>
    );
}

export default FormContent;
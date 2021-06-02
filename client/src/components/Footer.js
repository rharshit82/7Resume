import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
    return (
        <Container fluid className="bg-dark text-white py-3">
            <Row>
                <Col>7Resume is the top Resume making website where you can store and create Resume</Col>
                <Col>Users can host their Resume as well as use the best sample resume for creating their own.</Col>
                <Col><Row>
                    <Col className="text-center"><h5>Our Links</h5></Col></Row>
                    <Row><Col className="text-center">About Us</Col></Row>
                    <Row><Col className="text-center">Contact Us</Col></Row>

                </Col>

            </Row>
            <Row ><Col className="text-center p-1">Copyright &copy; 7Resume</Col></Row>
        </Container>
    )
}

export default Footer

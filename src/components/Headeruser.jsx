import React from 'react'
import { Navbar, Container, Button } from 'react-bootstrap';

function Headeruser() {
    return (
        <>
            <Navbar bg="light" expand="lg" className="shadow-sm mb-5">
                <Container className="d-flex justify-content-between align-items-center">
                    <Navbar.Brand href="#home" className="d-flex align-items-center">
                        <img
                            src="https://thumbs.dreamstime.com/b/clean-vector-logo-library-white-background-perfect-representing-knowledge-learning-minimalistic-design-format-339580971.jpg" 
                            alt="Library Logo"
                            style={{ height: '50px', marginRight: '10px' }}
                        />
                        <span className="h4 mb-0">Library Management</span>
                    </Navbar.Brand>
                    <div>
                        <Button variant="primary" className="me-2">Login</Button>
                        <Button variant="secondary">Membership</Button>
                    </div>
                    <div>
                        <Button variant="warning" className="me-2">Logout</Button>
                    </div>
                </Container>
            </Navbar>
        </>
    )
}

export default Headeruser
import React, { useEffect } from 'react'
import { Navbar, Container, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';


function Headeruser() {
    const username =localStorage.getItem('username')

    const navigate = useNavigate();

    const handleLogout = () => {
      localStorage.removeItem('user');
      localStorage.removeItem('username');
      navigate('/'); // Redirect to home page
    };
    
    

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
                   {!username ? <div>
                    <Link to={'/login'}><Button variant="primary" className="me-2">Login</Button></Link>
                       <Link to={'/logout'}> <Button variant="secondary">Membership</Button></Link>
                    </div>
                    :
                    <div>
                        <Button onClick={handleLogout} variant="warning" className="me-2">Logout</Button>
                    </div>}
                </Container>
            </Navbar>
        </>
    )
}

export default Headeruser
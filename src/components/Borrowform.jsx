import React, { useEffect } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import  {Link}  from 'react-router-dom';

function Borrowform() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
        
    const handleShow = () =>{
        const username=localStorage.getItem('username')
        if(!username){
            setShow(true)
        }
    }
   

    
    return (
        
        <>
        <div>
             <button onClick={handleShow} className='btn btn-success '>Borrow</button>
             </div>
            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Borrow !</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='text-center'>
                        <p>Are you a Member ? <Link  className='text-decoration-none text-primary' to={'/login'}>Login</Link></p>
                        <p>Do you want a Membership <Link className='text-decoration-none text-warning' to={'/membership'}>Take Membership</Link></p>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Borrowform
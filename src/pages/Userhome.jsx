import React from 'react'
import Headeruser from '../components/Headeruser'
import { Button, Card } from 'react-bootstrap'
import Borrowform from '../components/Borrowform'


function Userhome() {
    return (
        <>
            <Headeruser />

            <div className='container '>
                <div className="row">
                    <div className="col-md-1"></div>
                    <div className="col-md-10">
                        <div className="row">
                            <div className="col-md-3">
                                <Card  className="shadow-sm ">
                                <Card.Img className='mt-3'  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6J5kqBCeeFK8VxcrJN2RW42Ge_eiRW-OSBw&s" alt="Book" />
                                <Card.Body>
                                    <Card.Title>Book Title</Card.Title>
                                    <Card.Text>
                                        A brief description of the book goes here.
                                    </Card.Text>
                                    <div className="d-flex justify-content-between">
                                        <Button variant="info">View More</Button>
                                        <Borrowform/>
                                    </div>
                                </Card.Body>
                            </Card></div>
                            <div className="col-md-3 ">
                                <Card className="shadow-sm">
                                    <Card.Img className='mt-3'   src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6J5kqBCeeFK8VxcrJN2RW42Ge_eiRW-OSBw&s" alt="Book" /> {/* Replace with actual image path */}
                                    <Card.Body>
                                        <Card.Title>Book Title</Card.Title>
                                        <Card.Text>
                                            A brief description of the book goes here.
                                        </Card.Text>
                                        <div className="d-flex justify-content-between">
                                            <Button variant="info">View More</Button>
                                            <Borrowform/>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div className="col-md-3 ">
                                <Card  className="shadow-sm">
                                    <Card.Img className='mt-3'   src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6J5kqBCeeFK8VxcrJN2RW42Ge_eiRW-OSBw&s" alt="Book" /> {/* Replace with actual image path */}
                                    <Card.Body>
                                        <Card.Title>Book Title</Card.Title>
                                        <Card.Text>
                                            A brief description of the book goes here.
                                        </Card.Text>
                                        <div className="d-flex justify-content-between">
                                            <Button variant="info">View More</Button>
                                            <Borrowform/>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div className="col-md-3 ">
                                <Card  className="shadow-sm">
                                    <Card.Img className='mt-3'   src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6J5kqBCeeFK8VxcrJN2RW42Ge_eiRW-OSBw&s" alt="Book" /> {/* Replace with actual image path */}
                                    <Card.Body>
                                        <Card.Title>Book Title</Card.Title>
                                        <Card.Text>
                                            A brief description of the book goes here.
                                        </Card.Text>
                                        <div className="d-flex justify-content-between">
                                            <Button variant="info">View More</Button>
                                            <Borrowform/>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-1"></div>
                </div>
            </div>
        </>
    )
}

export default Userhome
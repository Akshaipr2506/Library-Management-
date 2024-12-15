import React from 'react'
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function BookCard() {
  return (
   <>
    <Card style={{ width: '90%'}}>
      <Card.Img variant="top"  src='https://static01.nyt.com/images/2022/10/30/books/review/30GroupText-ROTH/18GroupText-ROTH-superJumbo.jpg' height='300px'/>
      <Card.Body>
        <Card.Title className='text-center'>Book Tittle</Card.Title>
        <Card.Text>
         <h3 className='text-center'>Author</h3>
        </Card.Text>
        <Button variant="danger">Delete</Button>
      </Card.Body>
    </Card>
   </>
  )
}

export default BookCard
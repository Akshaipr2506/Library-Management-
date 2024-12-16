import React, { useEffect, useState } from 'react'
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { deleteBookApi } from '../services/allApi';



function BookCard({book,setBookDeleteStatus}) {


  const handleDelete=async(id)=>{
      const result=await deleteBookApi(id)
      if(result.status>=200 && result.status<300){
        setBookDeleteStatus(result)
        alert("Book Deleted Successfully")
      }

  }

  return (
   <>
      <Card key={book?.id}  style={{ width: '90%'}}>
      <Card.Img variant="top"  src={book?.imgurl} height='300px'/>
      <Card.Body>
        <Card.Title className='text-center'>{book?.title}</Card.Title>
        <Card.Text>
         <h3 className='text-center'>{book?.author}</h3>
        </Card.Text>
        <Button onClick={()=>{handleDelete(book?.id)}} variant="danger">Delete</Button>
      </Card.Body>
    </Card>    
   </>
  )
}

export default BookCard
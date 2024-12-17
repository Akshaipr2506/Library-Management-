import React, { useEffect, useState } from 'react';
import Headeruser from '../components/Headeruser';
import { Button, Card, Container, Row, Col } from 'react-bootstrap';
import Borrowform from '../components/Borrowform';
import { getBookDetailsApi } from "../services/allApi";

function Userhome() {
    const [bookDetails, setBookDetails] = useState([]);

    useEffect(() => {
        fetchBooks();
      }, []);
      
      const fetchBooks = async () => {
        try {
          const result = await getBookDetailsApi();
          setBookDetails(result.data);
          console.log(result.data); // Debug API response
        } catch (error) {
          console.error("Failed to fetch book details:", error);
        }
      };

    return (
        <>
        <div className='userhome-page'>

        
            <Headeruser />

            <Container className="my-5">
                <Row>
                    {/* Map through bookDetails and display cards */}
                    {bookDetails.map((book, index) => (
                        <Col md={3} key={index} className="mb-4">
                            <Card className="shadow-sm h-100 p-3">
                                <Card.Img
                                    className="mt-3"
                                    src={
                                        book.imgurl // Placeholder for missing image
                                    }
                                    alt={book.title || "Book Image"}
                                    style={{ height: "250px", objectFit: "cover" }}
                                />
                                <Card.Body>
                                    <Card.Title>{book.title || "Untitled Book"}</Card.Title>
                                    <Card.Text>
                                        <p>{book.author || "Unknown Author"}</p>
                                    </Card.Text>
                                    <div className="d-flex justify-content-between">
                                        <Button variant="info" className='me-3'>View More</Button>
                                        <Borrowform />
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
            </div>
        </>
    );
}

export default Userhome;

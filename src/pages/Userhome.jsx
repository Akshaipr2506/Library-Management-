import React, { useEffect, useState } from 'react';
import Headeruser from '../components/Headeruser';
import { Button, Card, Container, Row, Col } from 'react-bootstrap';
import Borrowform from '../components/Borrowform';
import { getBookDetailsApi, getUserDetailsApi, updateUserBorrowedBooksApi } from '../services/allApi';

function Userhome() {
    const [bookDetails, setBookDetails] = useState([]);

    useEffect(() => {
        fetchBooks();
    }, []);

    const fetchBooks = async () => {
        try {
            const result = await getBookDetailsApi();
            setBookDetails(result.data);
        } catch (error) {
            console.error("Failed to fetch book details:", error);
        }
    };

    const handleConfirmBorrow = async (selectedBook) => {
        try {
            const userId = localStorage.getItem("userId"); // Fetch the logged-in user's ID
            if (!userId) {
                alert("Please log in to borrow books!");
                return;
            }

            // Fetch user details
            const userResponse = await getUserDetailsApi(userId);
            const user = userResponse.data;

            // Prepare borrow details
            const borrowedDate = new Date();
            const returnDate = new Date(borrowedDate);
            returnDate.setDate(borrowedDate.getDate() + 7);

            const borrowedBook = {
                bookId: selectedBook.id,
                title: selectedBook.title,
                author: selectedBook.author,
                borrowedDate: borrowedDate.toISOString(),
                returnDate: returnDate.toISOString(),
            };

            // Add to user's borrowedBooks array
            const updatedUserData = {
                ...user,
                borrowedBooks: [...(user.borrowedBooks || []), borrowedBook],
            };

            // Update user in database
            const response = await updateUserBorrowedBooksApi(userId, updatedUserData);

            if (response.status === 200) {
                alert(`Book "${selectedBook.title}" borrowed successfully!`);
            } else {
                alert("Failed to borrow the book. Please try again.");
            }
        } catch (error) {
            console.error("Error borrowing the book:", error);
            alert("An error occurred. Please try again.");
        }
    };

    return (
        <div className="userhome-page">
            <Headeruser />
            <Container className="my-5">
                <Row>
                    {bookDetails.map((book, index) => (
                        <Col md={3} key={index} className="mb-4">
                            <Card className="shadow-sm h-100 p-3">
                                <Card.Img
                                    className="mt-3"
                                    src={book.imgurl || "https://via.placeholder.com/150"}
                                    alt={book.title || "Book Image"}
                                    style={{ height: "250px", objectFit: "cover" }}
                                />
                                <Card.Body>
                                    <Card.Title>{book.title || "Untitled Book"}</Card.Title>
                                    <Card.Text>
                                        <p>{book.author || "Unknown Author"}</p>
                                    </Card.Text>
                                    <div className="d-flex justify-content-between">
                                        <Button className='me-3' variant="info">View More</Button>
                                        <Borrowform book={book} onConfirmBorrow={handleConfirmBorrow} />
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
}

export default Userhome;

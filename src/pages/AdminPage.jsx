import React, { useEffect, useState } from "react";
import "./AdminPage.css";
import BookCard from "../components/BookCard";
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faPowerOff } from "@fortawesome/free-solid-svg-icons";
import AddBook from "../components/AddBook";
import { getBookDetailsApi } from "../services/allApi";
import { Link } from "react-router-dom";


function AdminPage() {
  const [getBookDetails, setGetBookDetails] = useState([])
  const [bookDeleteStatus, setBookDeleteStatus] = useState("")
  const [addBookStatus, setAddBookStatus] = useState("")

  const bookDetailsApi = async () => {
    const result = await getBookDetailsApi()
    // console.log(result);
    setGetBookDetails(result.data)


  }
  console.log(getBookDetails);

  useEffect(() => {
    bookDetailsApi();
  }, [bookDeleteStatus, addBookStatus]);



  return (
    <>
      <div className="bod ">
        {/* admin header */}
        <Navbar className="bg-transparent justify-content-between py-4 px-4 ">
          <Form inline>
            <InputGroup>
              <Link to={'/'}><Button className="btn btn-warning p-2"><FontAwesomeIcon icon={faHouse} /> Back Home</Button></Link>
            </InputGroup>
          </Form>


          <Form inline>
            <Row>
              <Col xs="auto">


              </Col>
              <Col xs="auto">
                <Link to={'/memberdetails'}><Button className="btn btn-danger p-2">Member details</Button></Link>
              </Col>
            </Row>
          </Form>
        </Navbar>


        {/* admin page body */}
        <h1 style={{
          fontSize: '50px', color: 'white'
        }} className='mt-5 text-center shadow'>Admin Page</h1>

        <div className="container mt-5">
          <div className="row">
            <div className="col-md-5"></div>
            <div className="col-md-2"><AddBook setAddBookStatus={setAddBookStatus} /></div>
            <div className="col-md-5"></div>

          </div>
        </div>
        {getBookDetails?.length > 0 ? <div className="container-fluid p-5 mx-3 ">

          <div className="row">

            {getBookDetails?.map((item) => (
              <div className="col-md-3 p-2 my-2 ">
                <BookCard book={item} setBookDeleteStatus={setBookDeleteStatus} />
              </div>
            ))}



          </div>

        </div>

          :
          <div className="container-fluid my-5"  >
            <div className="row">
              <div className="col-md-4"></div>
              <div className="col-md-4">
                <img src="https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-2130356-1800917.png" width={'100%'} alt="" />
                <h4 className='text-center text-danger'>No Books  Available....</h4>
              </div>
              <div className="col-md-4"></div>
            </div>
          </div>}




      </div>
    </>
  );
}

export default AdminPage;
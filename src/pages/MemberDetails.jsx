import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function MemberDetails() {
  const [members, setMembers] = useState([]);

  const fetchMembers = async () => {
    try {
      const response = await axios.get('http://localhost:4000/Users'); 
      console.log('Fetched Members:', response.data);
      setMembers(response.data); 
    } catch (error) {
      console.error('Error fetching members:', error);
    }
  };

  useEffect(() => {
    fetchMembers(); 
  }, []);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-transparent py-4 px-4">
        <div className="container-fluid">
          <form className="d-flex">
            <div className="input-group">
              <Link to={'/AdminPage'}>
                <button className="btn btn-warning p-2" type="button">
                  <i className="fas fa-house"></i> Back Home
                </button>
              </Link>
            </div>
          </form>

          <form className="d-flex">
            <div className="row">
              <div className="col-auto"></div>
              <div className="col-auto">
                <Link to={'/'}>
                  <button className="btn btn-danger p-2" type="button">
                    Log Out <i className="fas fa-power-off"></i>
                  </button>
                </Link>
              </div>
            </div>
          </form>
        </div>
      </nav>

      <div className="container mt-2">
        <h2 className="mb-4 text-center">Member Details</h2>

        {members.length > 0 ? (
          <table className="table table-hover table-bordered">
            <thead className="table-primary">
              <tr>
                <th>Member ID</th>
                <th>Member Name</th>
                <th>Books Borrowed</th>
                <th>Borrow Date</th>
                <th>Return Date</th>
              </tr>
            </thead>
            <tbody>
              {members.map((member) => (
                <tr key={member.id}> 
                  <td>{member.id}</td> 
                  <td>{member.username}</td> 
                  <td>No Books Borrowed</td> 
                  <td>1/1/24</td> 
                  <td>1/1/24</td> 
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="text-center mt-2">
            <img
              src="https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-illustration-download-in-svg-png-gif-file-formats--shopping-ecommerce-simple-error-state-pack-user-interface-illustrations-6024626.png"
              alt="No Members"
              className="w-50"
            />
            <h5 className="text-white">No Members Found...</h5>
          </div>
        )}
      </div>
    </>
  );
}

export default MemberDetails;

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Make request to JSON Server to validate user credentials
      const response = await axios.get('http://localhost:4000/users', {
        params: { username, password },
      });

      if (response.data.length === 0) {
        setError('Invalid username or password');
      } else {
        const user = response.data[0];
        localStorage.setItem('user', JSON.stringify(user)); // Store user data


        // Store only the username in localStorage
        localStorage.setItem('username', user.username);


        // Redirect based on role
        if (user.role === 'admin') {
          navigate('/admin-home');
        } else {
          navigate('/home');
        }
      }
    } catch (err) {
      setError('An error occurred during login');
    }
  };

  return (
   <div className="login-container">
      <div className="login-form">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Login</button>
        </form>
        <p className="register-redirect">
          Don't have an account? <Link to={'/register'} style={{textDecoration:'none',color:'#FFD700', fontWeight:'bold'}}>Register</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
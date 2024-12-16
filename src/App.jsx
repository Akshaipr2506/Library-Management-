// src/App.js
import React from 'react';
import {  Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Userhome from './pages/Userhome'

import Register from './components/Register';
import AdminPage from './pages/AdminPage';
import Footer from './components/Footer';
import AdminLogin from './pages/AdminLogin';

function App() {
  return (<>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path={'/'} element={<Userhome/>}/>
        <Route path={'/adminPage'} element={<AdminPage/>}/>
        <Route path={'/adminLogin'} element={<AdminLogin/>}/>

      </Routes>
      <Footer/>
  </>
  );
}

export default App;

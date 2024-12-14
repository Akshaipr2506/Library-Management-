// src/App.js
import React from 'react';
import {  Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Userhome from './pages/Userhome';
function App() {
  return (
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path={'/'} element={<Userhome/>}/>
      </Routes>
  );
}

export default App;

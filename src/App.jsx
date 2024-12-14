// src/App.js
import React from 'react';
import {  Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Userhome from './pages/Userhome'

import Register from './components/Register';

function App() {
  return (
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
<<<<<<< HEAD
        <Route path={'/'} element={<Userhome/>}></Route>
=======
        <Route path={'/'} element={<Userhome/>}/>

>>>>>>> naveen
      </Routes>
  );
}

export default App;

import React from 'react';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Core from './pages/Home/Core';

function App() {
  return (
   <Router >
     <Routes>
       <Route path="/" element={<Core />} />
      </Routes>
   </Router>
  )
}

export default App

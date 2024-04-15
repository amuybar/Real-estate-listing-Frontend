import React from 'react';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.js';
import Nav from './components/Nav.js';


import SearchPage from './pages/SearchPage.js';
import DetailPage from './pages/DetailPage.js';
import SellProperty from './pages/SellPage.js';
import Registerpage from './pages/Registerpage.js';
import LoginPage from './pages/LoginPage.js';
import ResetPasswordScreen from './pages/ResetPassword.js';
import RentPage from './pages/RentPage.js';
import BuyingPage from './pages/BuyingPage.js';
import FindAgentPage from './pages/FindAgent.js';
import PreApprovalPage from './pages/PreAprove.js';

function App() {
  return (
   <Router >
    <Nav/>
     <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/search" element={<SearchPage />} />
       <Route path="/listingpage/:listingId" element={<DetailPage />} />
       <Route path='/sell' element={<SellProperty/>}/>
       <Route path='/register' element={<Registerpage/>}/>
       <Route path='/login' element={<LoginPage/>}/>
       <Route path='/reset-password' element={<ResetPasswordScreen/>}/>
       <Route path="/rent" element={<RentPage />} />
       <Route path="/buy" element={<BuyingPage/>} />
       <Route path="/pre-approval" element={<PreApprovalPage/>} />
       <Route path="/find-agent" element={<FindAgentPage/>} />
      </Routes>
   </Router>
  )
}

export default App

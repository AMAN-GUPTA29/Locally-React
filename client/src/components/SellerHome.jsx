import React from 'react';
import './App.css';
import Sellerhome from './UI/Sellerhome';
import Navbar from './UI/Navbar';
import Myrequests from './UI/Myrequests';
import Broadcast from './UI/Broadcast';
import Chat from "./UI/Chat"

const SellerHome = () => {
  return (
    <div className="App">
      <Navbar /> 
      <Sellerhome />
      <Myrequests />
      <Broadcast /> 
      <Chat/>
    </div>
  );
};

export default SellerHome;
import React from 'react';
import { BrowserRouter as  Router, Route, Routes } from 'react-router-dom';
import App from '../App.jsx';
import Contact from "./Contact.jsx"

const RouterComponent = () => {
    return (
      <Router>
          <Routes>
              <Route path="/" element={<App />} />
              <Route path="/contact" element={<Contact />} />
          </Routes>
      </Router>
      
    );
  };
export default RouterComponent;
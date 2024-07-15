import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Home from "./pages/Home"
import Titulos from "./pages/Titulos";
import './App.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/titulos" element={<Titulos />} />
      </Routes>
    </Router>
  );
};

export default App;


import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import ProductDetails from './ProductDetails';
import Bag from './Bag';
import './App.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/product/:id" element={<Bag/>}/>
      </Routes>
    </Router>
  );
};

export default App;

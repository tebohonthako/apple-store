import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage'; // Import your homepage component
import ProductDetails from './ProductDetails';
import Bag from './Bag'; // Import your Bag component
import { BagProvider } from './BagContext'; // Import your BagProvider
import Checkout from './Checkout';

function App() {
  return (
    <BagProvider>
      <Router>
        <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/Bag" element={<Bag/>}/>
        <Route path="/Checkout" element={<Checkout/>}/>
        </Routes>
      </Router>
    </BagProvider>
  );
}

export default App;
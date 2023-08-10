import React from'react';
import products from './data';
import SideBar from './SideBar';
import './App.css';
import { useParams, Link } from 'react-router-dom';
// import { useBag } from ''; 



const Bag = () => {
  // const { products } = useBag();l,                                                                                                                                      
  

  return (
    <div className="container">
    <h1>Check your Bag Items</h1>
    <ul>
      {products.map((item, index) => (
        <li key={index}>
          {item.title} - {item.currency} {item.price.toFixed(2)}
        </li>
      ))}
    </ul>
  </div>
  )
    
  };

export default Bag;
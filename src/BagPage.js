// BagPage.js

import React from 'react';
import { Link } from 'react-router-dom';
import { useBag } from './BagContext';
import './BagPage.css';

const BagPage = () => {
  const { bagItems, total } = useBag();

  return (
    <div className="bagsidebar">
      <h3>Bag</h3>
      <div className="bag-images">
        {bagItems.map((item, index) => (
          <img key={index} src={item.imageUrl} alt={item.title} className="bag-item-image" />
        ))}
      </div>
      <p>Bag Total: ${total.toFixed(2)}</p> {/* Display the total from context */}
      <Link to="/Checkout">
        <button className="view-bag-button">
          Checkout
        </button>
      </Link>
    </div>
  );
};

export default BagPage;

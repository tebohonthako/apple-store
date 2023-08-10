import React from 'react';
import { Link } from 'react-router-dom';
import { useBag } from './BagContext'; // Import useBag from your BagContext
import './BagPage.css'; // Import your custom CSS for styling

const BagPage = () => {
  const { bagItems } = useBag(); // Use the useBag hook to get the bagItems

  // Calculate the total price
  const total = bagItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="bagsidebar">
      <h3>Bag</h3>
      <div className="bag-images">
        {bagItems.map((item, index) => (
          <img key={index} src={item.imageUrl} alt={item.title} className="bag-item-image" />
        ))}
      </div>
      <p>Total: ${total.toFixed(2)}</p> {/* Display the total */}
      <Link to="/Checkout">
        <button className="view-bag-button">
          Checkout
        </button>
      </Link>
    </div>
  );
};

export default BagPage;

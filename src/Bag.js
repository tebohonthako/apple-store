import React, { useState } from 'react';
import { useBag } from './BagContext'; // Import useBag from your BagContext
import SideBar from './SideBar';
import BagPage from './BagPage';
import { Link } from 'react-router-dom';
import './Bag.css';

const Bag = () => {
  const { bagItems, addToBag, removeFromBag } = useBag(); // Use the useBag hook to get the bagItems, addToBag, and removeFromBag functions

  const [quantities, setQuantities] = useState(
    bagItems.map(item => ({ id: item.id, quantity: 1 })) // Initialize quantities with default values
  );

  // Calculate the total price
  const total = bagItems.reduce((sum, item) => {
    const quantity = quantities.find(q => q.id === item.id).quantity;
    return sum + item.price * quantity;
  }, 0);

  // Update the quantity for a specific item
  const handleQuantityChange = (itemId, newQuantity) => {
    setQuantities(prevQuantities =>
      prevQuantities.map(q =>
        q.id === itemId ? { ...q, quantity: newQuantity } : q
      )
    );
  };

  return (
    <div className="container">
      <div className="mt-3">
        <Link to="/">Back</Link>
      </div>
      <h1>Your Bag</h1>
      <SideBar/>
      <BagPage/>
      <ul className="bag-list">
        {bagItems.map((item, index) => (
          <li key={index} className="bag-item">
            <div className="bag-item-content">
              <img src={item.imageUrl} alt={item.title} className="bag-item-image" />
              <div className="bag-item-details">
                <h2>{item.title}</h2>
                <p>Price: {item.currency} {item.price.toFixed(2)}</p>
                <p>Rating: {item.rating}</p>
                <h3>Specs:</h3>
                <ul>
                  {item.specs.map((spec, specIndex) => (
                    <li key={specIndex}>{spec}</li>
                  ))}
                </ul>
                <label>Quantity: </label>
                <input
                  type="number"
                  value={quantities.find(q => q.id === item.id).quantity}
                  min="1"
                  onChange={e =>
                    handleQuantityChange(item.id, parseInt(e.target.value))
                  }
                />
                <button onClick={() => removeFromBag(item)}>Remove</button> {/* Add Remove button */}
              </div>
            </div>
          </li>
        ))}
      </ul>
      <p>Total: ${total.toFixed(2)}</p> {/* Display the total */}
    </div>
  );
};

export default Bag;

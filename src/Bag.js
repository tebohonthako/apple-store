import React, { useState } from 'react';
import { useBag } from './BagContext';
import SideBar from './SideBar';
import BagPage from './BagPage';
import { Link } from 'react-router-dom';
import './Bag.css';

const Bag = () => {
  const { bagItems, addToBag, removeFromBag, updateQuantity, total } = useBag();

  const [quantities, setQuantities] = useState(
    bagItems.map(item => ({ id: item.id, quantity: item.quantity })) // Initialize quantities with existing quantities
  );

  const handleQuantityChange = (itemId, newQuantity) => {
    setQuantities(prevQuantities =>
      prevQuantities.map(q =>
        q.id === itemId ? { ...q, quantity: newQuantity } : q
      )
    );
    const product = bagItems.find(item => item.id === itemId);
    updateQuantity(product, newQuantity); // Update the quantity and total
  };

  return (
    <div className="container">
      <div className="mt-3  back-home-bag">
        <Link to="/">Keep Shopping</Link>
      </div>
      <h1>Check Your Bag Items</h1>
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

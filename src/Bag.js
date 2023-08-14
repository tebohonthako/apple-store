import React, { useState } from 'react';
import { useBag } from './BagContext';
import { Link, useLocation } from 'react-router-dom';
import './Bag.css';
import SideBar from './SideBar';
import BagPage from './BagPage';

const Bag = () => {
  const { bagItems, removeFromBag, updateQuantity} = useBag();
  const location = useLocation();

  const [quantities, setQuantities] = useState(
    bagItems.map(item => ({ id: item.id, quantity: item.quantity }))
  );

  const handleQuantityChange = (itemId, newQuantity) => {
    setQuantities(prevQuantities =>
      prevQuantities.map(q =>
        q.id === itemId ? { ...q, quantity: newQuantity } : q
      )
    );
    const product = bagItems.find(item => item.id === itemId);
    updateQuantity(product, newQuantity);
  };

  const isCheckoutPage = location.pathname === '/Checkout';

  return (
    <div className="bag-container">
      <Link to="/" className="back-link">
        <button className="back-button">Back</button>
      </Link>
      {!isCheckoutPage && <SideBar />}
      {!isCheckoutPage && <BagPage />}
      <ul className="bag-list">
        <h1 className="check-your-bag-heading">Check Your Bag Items</h1>
        {bagItems.map((item, index) => (
          <li key={index} className="bag-item">
            <div className="bag-item-content">
              <img src={item.imageUrl} alt={item.title} className="bag-item-img" />
              <div className="bag-item-details">
                <h2 className="item-title">{item.title}</h2>
                <p className="item-description">{item.description}</p>
                <p className="item-paragraph">Rating: {item.rating}</p>
                <p className="item-paragraph">Price: {item.currency} {item.price.toFixed(2)}</p>
                <label className="quantity-label">Quantity: </label>
                <input
                  type="number"
                  value={quantities.find(q => q.id === item.id).quantity}
                  min="1"
                  onChange={e =>
                    handleQuantityChange(item.id, parseInt(e.target.value))
                  }
                />
                <button onClick={() => removeFromBag(item)} className="remove-button">Remove</button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Bag;

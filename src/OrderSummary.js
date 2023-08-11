import React from 'react';
import './OrderSummary.css';
import { Link } from 'react-router-dom';

const OrderSummary = ({ total }) => {
  const placeOrder = () => {
    // Simulate a successful order placement
    window.alert('Order successfully placed!');
  };

  // Check if total is a valid number before calling toFixed
  const formattedTotal = typeof total === 'number' ? total.toFixed(2) : '0.00';

  return (
    <div className="order-summary-sidebar">
      <div className="order-summary-container">
        <h3>Order Summary</h3>
        <p>Total: ${formattedTotal}</p>
        <button className="place-order-button" onClick={placeOrder}>
          Place Order
        </button>
        <Link to="/">
            <button className='back-btn'>
            Back
            </button>
        </Link>
      </div>
    </div>
  );
};

export default OrderSummary;
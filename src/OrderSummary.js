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
        <h6>Order Summary</h6>
        <p>Items: $ {formattedTotal}</p>
        <p>Shipping: $ 6.99</p>
        <p>Gift card: $ 0.00</p>
        <hr></hr>
        <p className="order-total">Order Total: $ {formattedTotal}</p>
        <hr></hr>
        <button className="place-order-button" onClick={placeOrder}>
          Place your order
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
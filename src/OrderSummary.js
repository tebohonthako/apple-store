import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './OrderSummary.css';

const OrderSummary = ({ total }) => {
  const navigate = useNavigate();

  const placeOrder = () => {
    // Redirect to the success page
    navigate('/Ordersuccess');
  };

  const formattedTotal = typeof total === 'number' ? total.toFixed(2) : '0.00';

  return (
    <div className="order-summary-sidebar">
      <div className="order-summary-container">
        <h6>Order Summary</h6>
        <p>Items: $ {formattedTotal}</p>
        <p>Shipping: $ 0.00</p>
        <p>Gift card: $ 0.00</p>
        <hr></hr>
        <p className="order-total">Order Total: $ {formattedTotal}</p>
        <hr></hr>
        <button className="place-order-button" onClick={placeOrder}>
          Place your order
        </button>
        <Link to="/">
          <button className='back-btn '>
            Back
          </button>
        </Link>
      </div>
    </div>
  );
};

export default OrderSummary;

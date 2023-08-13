import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Checkout.css';
import Bag from './Bag';
import OrderSummary from './OrderSummary';
import { useBag } from './BagContext';
import UserData from './UserData';
import { Link } from 'react-router-dom'; // Don't forget to import Link

const Checkout = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Access paymentMethod from state
  const paymentMethod = location.state?.paymentMethod;

  // Extract total from the useBag hook
  const { total: bagTotal } = useBag();
  const storedUser = JSON.parse(localStorage.getItem('user')) || UserData[0];

  const handleChangeUserInfo = () => {
    navigate('/ChangeUserInfo');
  };

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>
      <div className="user-info">
        <h3>Shipping Address</h3>
        <p>Name: {storedUser.name}</p>
        <p>Street: {storedUser.shippingAddress.street}</p>
        <p>City: {storedUser.shippingAddress.city}</p>
        <p>State: {storedUser.shippingAddress.state}</p>
        <p>Zip: {storedUser.shippingAddress.zip}</p>
        <p>Country: {storedUser.shippingAddress.country}</p>
        <button className="change-buttons" onClick={handleChangeUserInfo}>
          Change User Info
        </button>
      </div>
      <div className="payment-info">
        <h3>Payment Method</h3>
        <p>Type: {paymentMethod?.type || storedUser.paymentMethod.type}</p>
        <p>Card Number: {paymentMethod?.cardNumber || storedUser.paymentMethod.cardNumber}</p>
        <p>Expiration Date: {paymentMethod?.expirationDate || storedUser.paymentMethod.expirationDate}</p>
        <p>CVV: {paymentMethod?.cvv || storedUser.paymentMethod.cvv}</p>
        <Link to="/ChangePaymentInfo">
          <button className="change-buttons">
            Change Payment Info
          </button>
        </Link>
      </div>

      <div className="billing-info">
        <p>
          <input type="checkbox" />
          Billing Address same as Shipping Address
        </p>
      </div>
      <div className="gift-card-info">
        <h3>Gift Card</h3>
        <p>Amount: {storedUser.giftCard}</p>
      </div>
      <OrderSummary total={bagTotal} />
      <Bag />
    </div>
  );
};

export default Checkout;

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
      <div className="user-info">
        <h3>S H I P P I N G   A D D R E S S </h3>
        <p>{storedUser.name}</p>
        <p>{storedUser.shippingAddress.street}</p>
        <p>{storedUser.shippingAddress.city}</p>
        <p>{storedUser.shippingAddress.state}</p>
        <p>{storedUser.shippingAddress.zip}</p>
        <p>{storedUser.shippingAddress.country}</p>
        <button className="change-buttons change" onClick={handleChangeUserInfo}>
          Change
        </button>
      </div>
      <div className="payment-info">
        <h3>P A Y M E N T  M E T H O D </h3>
        <p>Type: {paymentMethod?.type || storedUser.paymentMethod.type}</p>
        <p>Card Number: {paymentMethod?.cardNumber || storedUser.paymentMethod.cardNumber}</p>
        <p>Expiration Date: {paymentMethod?.expirationDate || storedUser.paymentMethod.expirationDate}</p>
        <p>CVV: {paymentMethod?.cvv || storedUser.paymentMethod.cvv}</p>
        <Link to="/ChangePaymentInfo">
          <button className="change-buttons change">
            Change
          </button>
        </Link>
        {/* <div className="gift-card-info"> */}
        <h6>Gift Card</h6>
        <p>Amount: {storedUser.giftCard}</p>
      {/* </div> */}
        {/* <div className="billing-info"> */}
        <p>
          <input type="checkbox" />
          Billing Address same as Shipping Address
        </p>
      {/* </div> */}
      
      </div>
      <OrderSummary total={bagTotal} />
      <Bag />
    </div>
  );
};

export default Checkout;

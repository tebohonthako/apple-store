// Checkout.js
import React from 'react';
import { useLocation } from 'react-router-dom';
import UserData from './UserData'; // Import the user data
import './Checkout.css';
import Bag from './Bag';
import OrderSummary from './OrderSummary';
import { useBag } from './BagContext'; // Import the useBag hook if it's not already imported
import { Link } from 'react-router-dom';

const Checkout = () => {
  const user = UserData[0]; // Assuming you have only one user in the array
  const location = useLocation();

  // Access paymentMethod from state
  const paymentMethod = location.state?.paymentMethod;

  const total = user.total; // Update this with the appropriate value

  // Extract total from the useBag hook
  const { total: bagTotal } = useBag();

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>
      <div className="user-info">
        <h3>Shipping Address</h3>
        <p>Name: {user.name}</p>
        <p>Street: {user.shippingAddress.street}</p>
        <p>City: {user.shippingAddress.city}</p>
        <p>State: {user.shippingAddress.state}</p>
        <p>Zip: {user.shippingAddress.zip}</p>
        <p>Country: {user.shippingAddress.country}</p>
        <Link to="/ChangeUserInfo">
          <button className="change-buttons">
            Change User Info
          </button>
        </Link>
      </div>
      <div className="payment-info">
        <h3>Payment Method</h3>
        <p>Type: {paymentMethod?.type || user.paymentMethod.type}</p>
        <p>Card Number: {paymentMethod?.cardNumber || user.paymentMethod.cardNumber}</p>
        <p>Expiration Date: {paymentMethod?.expirationDate || user.paymentMethod.expirationDate}</p>
        <p>CVV: {paymentMethod?.cvv || user.paymentMethod.cvv}</p>
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
        <p>Amount: {user.giftCard}</p>
      </div>
      {/* <OrderSummary total={total} /> */}
      <OrderSummary total={bagTotal} /> {/* Add OrderSummary with bag total */}
      <Bag />
    </div>
  );
};

export default Checkout;

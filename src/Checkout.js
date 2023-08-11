import React from 'react';
import UserData from './UserData'; // Import the user data
import './Checkout.css';
import Bag from './Bag';

const Checkout = () => {
  const user = UserData[0]; // Assuming you have only one user in the array

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
      </div>
      <div className="payment-info">
        <h3>Payment Method</h3>
        <p>Type: {user.paymentMethod.type}</p>
        <p>Card Number: {user.paymentMethod.cardNumber}</p>
        <p>Expiration Date: {user.paymentMethod.expirationDate}</p>
        <p>CVV: {user.paymentMethod.cvv}</p>
      </div>
      <div className="billing-info">
      <p>
          <input
            type="checkbox"
          />
          Billing Address same as Shipping Address
        </p>
       
      </div>
      <div className="gift-card-info">
        <h3>Gift Card</h3>
        <p>Amount: {user.giftCard}</p>
      </div>
      <Bag/>
    </div>
  );
};

export default Checkout;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserData from './UserData'; // Import the user data
import './ChangePaymentInfo.css'; // Import your custom CSS for styling
import { Link } from 'react-router-dom';

const ChangePaymentInfo = () => {
  const user = UserData[0];
  const navigate = useNavigate(); // Create a navigate function

  // State for form fields
  const [type, setType] = useState(user.paymentMethod.type);
  const [cardNumber, setCardNumber] = useState(user.paymentMethod.cardNumber);
  const [expirationDate, setExpirationDate] = useState(user.paymentMethod.expirationDate);
  const [cvv, setCVV] = useState(user.paymentMethod.cvv);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitting form...");
    const updatedUser = {
      ...user,
      paymentMethod: {
        type,
        cardNumber,
        expirationDate,
        cvv,
      },
    };
    localStorage.setItem('user', JSON.stringify(updatedUser));
    navigate('/checkout'); // Redirect to the checkout page using the navigate function
  };

  return (
    <div className="payment-info-container">
      <div className="card-options">
  <h2>SELECT A CARD</h2>
  <div className="card-option">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-credit-card" viewBox="0 0 16 16">
      <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v1h14V4a1 1 0 0 0-1-1H2zm13 4H1v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V7z"/>
      <path d="M2 10a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-1z"/>
    </svg>
    <span>Mastercard ending in 4752</span>
  </div>
  <div className="card-option">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-credit-card" viewBox="0 0 16 16">
      <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v1h14V4a1 1 0 0 0-1-1H2zm13 4H1v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V7z"/>
      <path d="M2 10a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-1z"/>
    </svg>
    <span>Visacard ending in 2584</span>
  </div>
</div>
      <div className="container-payment">
        <div className="centered-border-payment">
       <h2> ADD A NEW CARD</h2>
          <form className="payment-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="type">Payment Type:</label>
              <input type="text" id="type" className="form-control" value={type} onChange={(e) => setType(e.target.value)} />
            </div>
            <div className="form-group">
              <label htmlFor="cardNumber">Card Number:</label>
              <input type="text" id="cardNumber" className="form-control" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} />
            </div>
            <div className="form-group">
              <label htmlFor="expirationDate">Expiration Date:</label>
              <input type="text" id="expirationDate" className="form-control" value={expirationDate} onChange={(e) => setExpirationDate(e.target.value)} />
            </div>
            <div className="form-group">
              <label htmlFor="cvv">CVV:</label>
              <input type="text" id="cvv" className="form-control" value={cvv} onChange={(e) => setCVV(e.target.value)} />
            </div>
            <p>
              <input type="checkbox" className='def-address' />
              Save this as your default payment method
            </p>
            <div className="form-group">
              <button type="submit" className="btn btn-primary save-changes-button">
                Add Payment Method
              </button>
            </div>
            <div className="back-btn-icon">
            <Link to="/checkout" className='back-btn-user'>
              Back
            </Link>
            <span className="icon-with-text" style={{ display: 'flex', alignItems: 'center', marginTop: '20px', color: '#02D693' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-lock" viewBox="0 0 16 16">
                <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z"/>
              </svg>
              <span>Secure Connection</span>
            </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChangePaymentInfo;

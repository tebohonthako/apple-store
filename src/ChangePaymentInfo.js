import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import UserData from './UserData'; // Import the user data
import './ChangePaymentInfo.css'; // Import your custom CSS for styling

const ChangePaymentInfo = () => {
  const user = UserData[0]; // Assuming you have only one user in the array

  // State for form fields
  const [type, setType] = useState(user.paymentMethod.type);
  const [cardNumber, setCardNumber] = useState(user.paymentMethod.cardNumber);
  const [expirationDate, setExpirationDate] = useState(user.paymentMethod.expirationDate);
  const [cvv, setCVV] = useState(user.paymentMethod.cvv);

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Update the user's payment information here
    // You can use the setState functions to update the state of the form fields
  };

  return (
    <div className="form-container">
      <h2>Change Payment Information</h2>
      <form className="payment-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="type">Type:</label>
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
        <div className="form-group">
          <Link to={{
            pathname: "/checkout",
            state: {
              paymentMethod: {
                type,
                cardNumber,
                expirationDate,
                cvv
              }
            }
          }}>
            <button className="btn btn-primary save-changes-button">Save Changes</button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default ChangePaymentInfo;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserData from './UserData'; // Import the user data
import './ChangeUserInfo.css'; // Import your custom CSS for styling
import { Link } from 'react-router-dom';

const ChangeUserInfo = () => {
  const user = UserData[0];
  const navigate = useNavigate(); // Create a navigate function

  // State for form fields
  const [name, setName] = useState(user.name);
  const [street, setStreet] = useState(user.shippingAddress.street);
  const [city, setCity] = useState(user.shippingAddress.city);
  const [state, setState] = useState(user.shippingAddress.state);
  const [zip, setZip] = useState(user.shippingAddress.zip);
  const [country, setCountry] = useState(user.shippingAddress.country);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitting form...");
    const updatedUser = {
      ...user,
      name,
      shippingAddress: {
        street,
        city,
        state,
        zip,
        country,
      },
    };
    localStorage.setItem('user', JSON.stringify(updatedUser));
    navigate('/checkout'); // Redirect to the checkout page using navigate function
  };

  return (
    <div className="form-container">
      <div className="centered-border-user">
      <form className="user-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Shipping Name:</label>
          <input type="text" id="name" className="form-control" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="street">Street:</label>
          <input type="text" id="street" className="form-control" value={street} onChange={(e) => setStreet(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="city">City:</label>
          <input type="text" id="city" className="form-control" value={city} onChange={(e) => setCity(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="state">State:</label>
          <input type="text" id="state" className="form-control" value={state} onChange={(e) => setState(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="zip">Zip:</label>
          <input type="text" id="zip" className="form-control" value={zip} onChange={(e) => setZip(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="country">Country:</label>
          <input type="text" id="country" className="form-control" value={country} onChange={(e) => setCountry(e.target.value)} />
        </div>
        <p>
          <input type="checkbox" className='def-address' />
          Save this as your default address
        </p>
        <div className="form-group">
          <button type="submit" className="btn btn-primary save-changes-button">
            Add Address
          </button>
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
        </div>
      </form>
      </div>
    </div>
  );
};

export default ChangeUserInfo;

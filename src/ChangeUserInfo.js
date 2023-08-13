import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserData from './UserData'; // Import the user data
import './ChangeUserInfo.css'; // Import your custom CSS for styling

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
      <h2>Change User Information</h2>
      <form className="user-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
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
        <div className="form-group">
          <button type="submit" className="btn btn-primary save-changes-button">
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChangeUserInfo;

import React from 'react';
import { useBag } from './BagContext'; // Import useBag from your BagContext
import SideBar from './SideBar';
import { Link } from 'react-router-dom';

const Bag = () => {
  const { bagItems } = useBag(); // Use the useBag hook to get the bagItems

  return (
    <div className="container">
      <h1>Your Bag</h1>
      <SideBar/>
      <ul>
        {bagItems.map((item, index) => (
          <li key={index}>
            <div className="bag-item">
              <img src={item.imageUrl} alt={item.title} className="bag-item-image" />
              <div className="bag-item-details">
                <h2>{item.title}</h2>
                <p>Price: {item.currency} {item.price.toFixed(2)}</p>
                <p>Rating: {item.rating}</p>
                <h3>Specs:</h3>
                <ul>
                  {item.specs.map((spec, specIndex) => (
                    <li key={specIndex}>{spec}</li>
                  ))}
                </ul>
                
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-3">
        <Link to="/">Back</Link>
      </div>
    </div>
    
  );
};

export default Bag;
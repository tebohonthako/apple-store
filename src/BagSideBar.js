import React from 'react';
import { Link } from 'react-router-dom';
import { useBag } from './BagContext'; // Import useBag from your BagContext
import './BagSideBar.css'; // Import your custom CSS for styling
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const BagSideBar = () => {
  const { bagItems } = useBag(); // Use the useBag hook to get the bagItems

  return (
    <div className="bagsidebar">
      <h3>Bag</h3>
      <div className="bag-images">
        {bagItems.map((item, index) => (
          <img key={index} src={item.imageUrl} alt={item.title} className="bag-item-image" />
        ))}
      </div>
      <Link to="/Bag">
        <button className="view-bag-button">
        <FontAwesomeIcon icon={faShoppingBag} /> View Bag
        </button>
      </Link>

    </div>
  );
};

export default BagSideBar;

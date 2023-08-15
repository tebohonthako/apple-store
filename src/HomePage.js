import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import products from './data'; // Import your products data
import SearchBar from './SearchBar';
import SideBar from './SideBar';
import BagSideBar from './BagSideBar';
import './HomePage.css';
import './App.css';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


// Homepage functional compononent
const Homepage = () => {
  const [filteredProducts, setFilteredProducts] = useState(products);  //

  const handleSearch = (query) => {                                 // function for filter searchbar
    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  return (
    <div className='cards'>
      <SearchBar onSearch={handleSearch} />
      <SideBar />
      <BagSideBar />
      <div className="row product-list">
        {filteredProducts.map((product) => (
          <div key={product.id} className="col-md-3 mb-4">
            <div className="card" style={{ width: '10rem' }}>
              <img src={product.imageUrl} style={{ width: '100%', height: '12rem', objectFit: 'cover' }} className="card-img-top card-images" alt={product.title} />
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">{product.description}</p>
                <div className='price-btn'>
                  <p>{product.currency} {product.price.toFixed(2)}</p>
                  <Link to={`/product/${product.id}`} className="btn btn-primary bag-button">
                    <FontAwesomeIcon icon={faShoppingBag} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
};

export default Homepage;

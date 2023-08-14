import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useBag } from './BagContext'; // Import useBag from your BagContext
import products from './data';
import SideBar from './SideBar';
import BagSideBar from './BagSideBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import './ProductDetails.css';

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));
  const { addToBag } = useBag(); // Use the useBag hook to get the addToBag function

  if (!product) {
    return <div className="product-not-found">Product not found</div>;
  }

  return (
    <div className="product-details-container container mt-5">
      <SideBar />
      <BagSideBar />
      <Link to="/" className="back-home-link">
        <button className="back-home-button">
          Keep Shopping
        </button>
      </Link>
      <div className="product-details">
        <div className="product-img-info">
          <img src={product.imageUrl} className="product-img" alt={product.title} />
          <div className="product-info">
            <div className="product-title-container">
              <h1 className="product-title">{product.title}</h1>
            </div>
            <p className="product-description">{product.description}</p>
            <p className="product-rating">Rating: {product.rating}</p>
            <p className="product-price">
              Price: {product.currency} {product.price.toFixed(2)}
            </p>
            <Link to="/Bag" className="add-to-bag-link">
              <button className="add-to-bag-button" onClick={() => addToBag(product)}>
                <FontAwesomeIcon icon={faShoppingBag} /> Add to Bag
              </button>
            </Link>
          </div>
        </div>
        <hr />
        <ul className="product-specs-list">
          <h6 className="specs-title">Product Specifications:</h6>
          {product.specs.map((spec, index) => (
            <li key={index} className="spec-item">
              {spec}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductDetails;

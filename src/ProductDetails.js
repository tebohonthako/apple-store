import React from 'react';
import { useParams, Link } from 'react-router-dom';
import products from './data';
import SideBar from './SideBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons'; // or other appropriate import depending on the style you need
import './ProductDetails.css';

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <div className="container">Product not found</div>;
  }

  return (
    <div className="product-details-container container mt-5">
      <SideBar />
      <div className="mt-3">
        <Link to="/">
          Back
        </Link>
      </div>
      <div className="product-details">
        <img
          src={product.imageUrl}
          className="product-img"
          alt={product.title}
        />
        <div className="product-info">
          <h1 className="card-title">{product.title}</h1>
          <p className="card-text">{product.description}</p>
          <p className="card-text">Rating: {product.rating}</p>
          <p className="card-text">
            Price: {product.currency} {product.price.toFixed(2)}
          </p>
          <Link to="/" className="btn btn-primary add-to-bag">
            <FontAwesomeIcon icon={faShoppingBag} /> Add to Bag
          </Link>
    </div>
        </div>
          <hr/>
          <br/>
          <ul className="list-group">
          <h6 className="card-title">Description:</h6>
            {product.specs.map((spec, index) => (
              <li key={index} className="list-group-item">
                {spec}
              </li>
            ))}
          </ul>

    </div>
  );
};

export default ProductDetails;

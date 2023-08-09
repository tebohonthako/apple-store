import React from 'react';
import { useParams, Link } from 'react-router-dom';
import products from './data';
import SideBar from './SideBar';

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <div className="container">Product not found</div>;
  }

  return (
    <div className="container mt-5">
      <SideBar/>
      <div className="card">
        <img
          src={product.imageUrl}
          className="card-img-top img-fluid"
          alt={product.title}
          style={{ maxWidth: '300px', margin: '0 auto' }}
        />
        <div className="card-body">
          <h1 className="card-title">{product.title}</h1>
          <p className="card-text">{product.description}</p>
          <p className="card-text">Rating: {product.rating}</p>
          <p className="card-text">
            Price: {product.currency} {product.price.toFixed(2)}
          </p>
          <Link to="" className="btn btn-primary">
          Add to Bag
          </Link>
          <hr/>
          <br/>
          <h6 className="card-title">Description:</h6>
          <ul className="list-group">
            {product.specs.map((spec, index) => (
              <li key={index} className="list-group-item">
                {spec}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mt-3">
        <Link to="/" className="btn btn-secondary">
          Back to Homepage
        </Link>
      </div>
    </div>
  );
};

export default ProductDetails;

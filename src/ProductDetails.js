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
    return <div className="container">Product not found</div>;
  }


  return (
    <div className="product-details-container container mt-5">
      <SideBar />
      <BagSideBar />
      <div className="mt-3 back-home">
        <Link to="/">Keep Shopping</Link>
      </div>
      <div className="product-details">
        <div className='product-img-info'>
        <img src={product.imageUrl} className="product-img" alt={product.title} />
        <div className="product-info">
          <h1 className="card-title">{product.title}</h1>
          <p className="card-text-description">{product.description}</p>
          <p className="card-text">Rating: {product.rating}</p>
          <p className="card-text">
            Price: {product.currency} {product.price.toFixed(2)}
          </p>
          <Link to="/Bag">
          <button className="btn btn-primary add-to-bag" onClick={() => addToBag(product)}>
            <FontAwesomeIcon icon={faShoppingBag} /> Add to Bag
          </button>
          </Link>
          </div>
        </div>
        <hr />
        <br />
        <ul className="list-group">
          <h6 className="card-title">Description:</h6>
          {product.specs.map((spec, index) => (
            <li key={index} className="list-group-item">
              {spec}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductDetails;

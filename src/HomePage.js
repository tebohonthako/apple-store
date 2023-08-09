import React from 'react';
import { Link } from 'react-router-dom';
import products from './data';
import SideBar from './SideBar';
import './App.css';


const Homepage = () => {
  return (
    <div className='cards'>
      <form className='search-item'>
        <label className='search-item-label'>Search item</label>
        <br/>
        <input className='search-bar' type='text' placeholder='Apple watch, Samsung S21, Macbook Pro, ...'/>
      </form>
      <SideBar/>
      <div className="row product-list">
        {products.map((product) => (
          <div key={product.id} className="col-md-3 mb-4">
            <div className="card" style={{ width: '14rem' }}>
              <img src={product.imageUrl} className="card-img-top" alt={product.title} />
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">{product.description}</p>
                <p>Price: {product.currency} {product.price.toFixed(2)}</p>
                {/* <Link to={`/product/${product.id}`} className="btn btn-primary">View</Link> */}
                <Link to={`/product/${product.id}`} className="btn btn-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart-fill" viewBox="0 0 16 16">
                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                  </svg>
                </Link>
          
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Homepage;

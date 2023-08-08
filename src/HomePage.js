import React from 'react';
import { Link } from 'react-router-dom';
import products from './data';
import SideBar from './SideBar';

const Homepage = () => {
  return (
    <div>
      <h1>Dashboard</h1>
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
                <a href="#" className="btn btn-primary">Buy</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Homepage;
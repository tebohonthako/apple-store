import React from 'react';


const SideBar = () => {
    return (
      <div className="sidebar">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/products">Products</a>
          </li>
          <li>
            <a href="/cart">Cart</a>
          </li>
          <li>
            <a href="/checkout">Checkout</a>
          </li>
          {/* Add more menu items here as needed */}
        </ul>
      </div>
    );
  };
  
  export default SideBar;
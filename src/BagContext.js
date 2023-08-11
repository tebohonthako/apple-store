// BagContext.js

import React, { createContext, useContext, useState } from 'react';

const BagContext = createContext();

export const BagProvider = ({ children }) => {
  const [bagItems, setBagItems] = useState([]);
  const [total, setTotal] = useState(0);

  const addToBag = (product) => {
    setBagItems([...bagItems, { ...product, quantity: 1 }]); // Set initial quantity to 1
    setTotal(total + product.price); // Update the total
  };

  const removeFromBag = (product) => {
    const updatedBagItems = bagItems.filter(item => item !== product);
    setBagItems(updatedBagItems);
    setTotal(total - product.price * product.quantity);
  };

  const updateQuantity = (product, newQuantity) => {
    const updatedBagItems = bagItems.map(item =>
      item === product ? { ...item, quantity: newQuantity } : item
    );

    const updatedTotal = updatedBagItems.reduce((sum, item) =>
      sum + item.price * item.quantity, 0);

    setBagItems(updatedBagItems);
    setTotal(updatedTotal);
  };

  return (
    <BagContext.Provider value={{ bagItems, addToBag, removeFromBag, updateQuantity, total }}>
      {children}
    </BagContext.Provider>
  );
};

export const useBag = () => {
  return useContext(BagContext);
};

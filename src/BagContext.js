import React, { createContext, useState, useContext } from 'react';

const BagContext = createContext();

export const BagProvider = ({ children }) => {
  const [bagItems, setBagItems] = useState([]);

  const addToBag = (product) => {
    setBagItems([...bagItems, product]);
  };

  return (
    <BagContext.Provider value={{ bagItems, addToBag }}>
      {children}
    </BagContext.Provider>
  );
};

export const useBag = () => {
  return useContext(BagContext);
};
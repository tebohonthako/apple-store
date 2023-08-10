import React, { createContext, useState, useContext } from 'react';

const BagContext = createContext();

export const BagProvider = ({ children }) => {
  const [bagItems, setBagItems] = useState([]);

  const addToBag = (product) => {
    setBagItems([...bagItems, product]);
  };

  const removeFromBag = (product) => {
    const updatedBagItems = bagItems.filter(item => item !== product);
    setBagItems(updatedBagItems);
  };

  return (
    <BagContext.Provider value={{ bagItems, addToBag, removeFromBag }}> {/* Add removeFromBag */}
      {children}
    </BagContext.Provider>
  );
};

export const useBag = () => {
  return useContext(BagContext);
};

// AddWineContext.js
import React, { createContext, useState, useContext } from 'react';

const AddWineContext = createContext();

export const useAddWineContext = () => {
  return useContext(AddWineContext);
};

export const AddWineProvider = ({ children }) => {
  const [addedWines, setAddedWines] = useState([]);

  const addWine = (wine) => {
    setAddedWines([...addedWines, wine]);
  };

  return (
    <AddWineContext.Provider value={{ addedWines, addWine }}>
      {children}
    </AddWineContext.Provider>
  );
};
import React, { useState } from 'react';

const Wines = () => {
  const [selectedWines, setSelectedWines] = useState([]);

  return (
    <div>
      <h2>Selected Wines</h2>
      <ul>
        {selectedWines.map((wine, index) => (
          <li key={index}>{wine.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Wines;
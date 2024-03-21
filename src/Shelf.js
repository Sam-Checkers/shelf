import React from 'react';

const Shelf = ({ shelf }) => {
  return (
    <div>
      <h2>Your Shelf:</h2>
      <ul>
        {shelf.map((wine) => (
          <li key={wine.id}>
            <div>
              {wine.name} - {wine.type} - {wine.region}
            </div>
            <div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Shelf;
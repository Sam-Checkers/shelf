const Shelf = ({ selectedWine }) => {
  return (
    <div>
      <h1>Selected Wine</h1>
      {selectedWine ? (
        <div>
          <p>Name: {selectedWine.name}</p>
          <p>Type: {selectedWine.type}</p>
          <p>Region: {selectedWine.region}</p>
        </div>
      ) : (
        <p>No wine selected</p>
      )}
    </div>
  );
};

export default Shelf;
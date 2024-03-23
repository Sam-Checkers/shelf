import React, { useState, useEffect } from 'react';
import './Inventory.css'; // Import the CSS file for styling

const Inventory = () => {
  const [wines, setWines] = useState([]);
  const [selectedWine, setSelectedWine] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWines = async () => {
      try {
        const response = await fetch('https://winery-1.onrender.com/get_all_wines');
        if (response.ok) {
          const data = await response.json();
          setWines(data); // Assuming the API response is an array of wines
          setLoading(false);
        } else {
          console.error('Failed to fetch wines');
          setLoading(false);
        }
      } catch (error) {
        console.error('Error fetching wines:', error);
        setLoading(false);
      }
    };

    fetchWines();
  }, []);

  const handleWineClick = (wine) => {
    setSelectedWine(wine);
  };

  const handleCloseModal = () => {
    setSelectedWine(null);
  };

  const getImageUrl = (wineName) => {
    return `https://winery-1.onrender.com/static/images/${wineName.toLowerCase()}-i.png`;
  };

  return (
    <div>
      <h1>Inventory</h1>
      {loading ? (
        <p>Loading wines...</p>
      ) : (
        <ul>
          {wines.map((wine, index) => (
            <li key={index} onClick={() => handleWineClick(wine)}>
              {wine.name} - {wine.type} - {wine.region}
            </li>
          ))}
        </ul>
      )}
      {selectedWine && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>&times;</span>
            <h2>{selectedWine.name}</h2>
            <img src={getImageUrl(selectedWine.name)} alt={selectedWine.name} className="centered-image" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Inventory;
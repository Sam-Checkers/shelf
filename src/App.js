import React, { useState, useEffect } from 'react';
import LoginForm from './LoginForm';
import Shelf from './Shelf';

function App() {
  const [user, setUser] = useState(null);
  const [shelf, setShelf] = useState([]);

  const handleLogin = async (credentials) => {
    try {
      const response = await fetch('https://winery-1.onrender.com/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });
      if (response.ok) {
        const userData = await response.json();
        setUser(userData);
      } else {
      }
    } catch (error) {
    }
  };

  const fetchShelf = async () => {
    try {
      const response = await fetch('https://winery-1.onrender.com/home', {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      if (response.ok) {
        const shelfData = await response.json();
        setShelf(shelfData);
      } else {
      }
    } catch (error) {
    }
  };

  useEffect(() => {
    if (user) {
      fetchShelf();
    }
  }, [user]);

  return (
    <div>
      {user ? (
        <Shelf shelf={shelf} />
      ) : (
        <LoginForm onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;
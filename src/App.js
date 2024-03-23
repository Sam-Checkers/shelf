import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import Home from './Home';
import Login from './Login';
import Register from './Register';
import Profile from './Profile';
import Navbar from './Navbar';
import Inventory from './Inventory';
import Shelf from './Shelf';

function App() {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const path = window.location.pathname;

  return (
    <Router>
      <div>
        <Navbar />
        {path === '/' && <Home />}
        {path === '/login' && <Login />}
        {path === '/register' && <Register />}
        {path === '/profile' && <Profile />}
        {path === '/inventory' && <Inventory />}
        {path === '/shelf' && <Shelf />}
      </div>
    </Router>
  );
}

export default App;
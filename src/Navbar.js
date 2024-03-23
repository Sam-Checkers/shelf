import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Navbar = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <nav>
      <ul>
        <li><a href="/">Home</a></li>
        {!isAuthenticated && <li><button onClick={() => loginWithRedirect()}>Log In</button></li>}
        {!isAuthenticated && <li><button onClick={() => loginWithRedirect({ screen_hint: 'signup' })}>Register</button></li>}
        {isAuthenticated && <li><a href="/profile">Profile</a></li>}
        {isAuthenticated && <li><button onClick={() => logout({ returnTo: 'http://localhost:3000' })}>Log Out</button></li>}
        {isAuthenticated && <li><a href="/inventory">Inventory</a></li>}
        {isAuthenticated && <li><a href="/shelf">Shelf</a></li>}
      </ul>
    </nav>
  );
};

export default Navbar;
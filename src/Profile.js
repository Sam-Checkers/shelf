import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div style={styles.container}>Loading...</div>;
  }

  return (
    isAuthenticated && (
      <div style={styles.container}>
        <h2>User Profile</h2>
        <div style={styles.profileInfo}>
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
        </div>
      </div>
    )
  );
};

const styles = {
  container: {
    backgroundColor: '#f4f4f4',
    padding: '20px',
    borderRadius: '5px',
    margin: '20px 0',
  },
  profileInfo: {
    marginTop: '10px',
  },
};

export default Profile;
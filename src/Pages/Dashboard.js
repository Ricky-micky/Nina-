import React from 'react';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token'); // Remove token from localStorage
    navigate('/'); // Redirect to home
  };

  return (
    <div className='Dashboard'>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Dashboard; // Add this line to export the component

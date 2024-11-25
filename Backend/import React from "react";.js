import React from "react";
import { useNavigate } from 'react-router-dom'; // Corrected typo here

function Home() {
  const navigate = useNavigate();
  const isLoggedIn = !!localStorage.getItem('token'); // Check if token exists

  React.useEffect(() => {
    if (isLoggedIn) {
      navigate('/dashboard'); // Redirect to dashboard if logged in
    }
  }, [isLoggedIn, navigate]);

  return (
    <div>
      <button onClick={() => navigate("/signup")}>Sign Up</button>
      <button onClick={() => navigate("/register")}>Register</button>
    </div>
  );
}

export default Home;

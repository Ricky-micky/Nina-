import React from 'react';

function Register() {
  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>Register</h1>
      <form>
        <div>
          <label>Username:</label>
          <input type="text" placeholder="Choose a username" />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" placeholder="Enter your email" />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" placeholder="Create a password" />
        </div>
        <div>
          <label>Confirm Password:</label>
          <input type="password" placeholder="Confirm your password" />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;

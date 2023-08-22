import React, { useState } from 'react';

const Login = ({ showSignUp, setShowSignUp }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginResult, setLoginResult] = useState('');

  const handleLogin = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/v1/todo/login", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ "username":username, "password":password })
      });

      if (response.ok) {
        console.log('Login successful!');
      } else {
        console.log('Login failed');
      }
    } catch (error) {
      console.error('Error:', error);
      setLoginResult('An error occurred while logging in');
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <div className="input-group">
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="input-group">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button onClick={handleLogin}>Login</button>
      <p>
        Don't have an account?{' '}
        <span onClick={() => setShowSignUp(true)} className="link">
          Sign up
        </span>
      </p>
    </div>
  );
};

export default Login;

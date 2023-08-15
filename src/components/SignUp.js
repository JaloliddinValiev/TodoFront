import React, { useState } from 'react';

const SignUp = ({ showSignUp, setShowSignUp }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    // Perform your sign-up logic here
    console.log('Signed up with', username, email, password);
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
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
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
      <button onClick={handleSignUp}>Sign Up</button>
      <p>
        Already have an account?{' '}
        <span onClick={() => setShowSignUp(false)} className="link">
          Login
        </span>
      </p>
    </div>
  );
};

export default SignUp;

import React, { useState } from 'react';


const SignUp = ({ showSignUp, setShowSignUp }) => {
  const [name, setname] = useState('');
  const [username, setusername] = useState('');
  const [password, setPassword] = useState('');

  
  
  async function handleClick() {
    try {
      const response = await fetch("http://localhost:8080/api/v1/todo", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          "name": name,
          "nickname": username,
          "password": password
        })
      });
  
      // Check if the request was successful
      if (!response.ok) {
        throw new Error(`Request failed with status: ${response.status}`);
      }
      if (response.ok) {
        console.log("saved");
        

      }
  
      // Handle the response as needed (e.g., parse JSON response)
      // const data = await response.json();
      // console.log("Response data:", data);
    } catch (error) {
      console.error("Error:", error);
    }
  }
  

  

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <div className="input-group">
        <label htmlFor="name">name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setname(e.target.value)}
        />
      </div>
      <div className="input-group">
        <label htmlFor="username">Username:</label>
        <input
          type="username"
          id="username"
          value={username}
          onChange={(e) => setusername(e.target.value)}
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
      <button onClick={handleClick}>Sign Up</button>
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

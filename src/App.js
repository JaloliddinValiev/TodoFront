import React, { useState } from 'react';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Main from './components/Main';

function App() {
  const [showSignUp, setShowSignUp] = useState(false);

  return (
    <div className="App">
      {showSignUp ? (
        <SignUp showSignUp={showSignUp} setShowSignUp={setShowSignUp} />
      ) : (
        <Login showSignUp={showSignUp} setShowSignUp={setShowSignUp} />
      )}
      if (boolhehe) {
        <Main/>
      }
    </div>
  );
}

export default App;

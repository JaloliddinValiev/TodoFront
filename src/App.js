import React, { useState } from 'react';
import Main from './components/Main';
import Login from './components/Login';
import SignUp from './components/SignUp';

function App() {
  const [showSignUp, setShowSignUp] = useState(false);

  return (
    <div className="App">
      {/* {showSignUp ? (
        <SignUp showSignUp={showSignUp} setShowSignUp={setShowSignUp} />
      ) : (
        <Login showSignUp={showSignUp} setShowSignUp={setShowSignUp} />
      )} */}
      <Main />
    </div>
  );
}

export default App;

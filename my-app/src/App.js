import React, { useState } from 'react';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import Button from './components/Button';
import Alert from './components/Alert';
import './App.css';

function App() {
  const [showLogin, setShowLogin] = useState(true);

  const handleLogin = (e) => {
    e.preventDefault();
    // Logic for handling login button click
  };

  const handleRegister = (e) => {
    e.preventDefault();
    // Logic for handling registration button click
  };

  return (
    <div className="App">
      <h1>{showLogin ? 'Login' : 'Register'}</h1>
      {showLogin ? (
        <LoginForm handleLogin={handleLogin} />
      ) : (
        <RegisterForm handleRegister={handleRegister} />
      )}
      <Button label={showLogin ? 'Register' : 'Login'} onClick={() => setShowLogin(!showLogin)} />
      <Alert message="Invalid email or password." />
    </div>
  );
}

export default App;

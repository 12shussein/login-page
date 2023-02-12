// LoginForm.jsx
import React from 'react';
import Input from './Input';
import Button from './Button';

function LoginForm({ handleLogin }) {
  return (
    <form>
      <Input type="email" placeholder="Email" />
      <Input type="password" placeholder="Password" />
      <Button label="Login" onClick={handleLogin} />
    </form>
  );
}

export default LoginForm;
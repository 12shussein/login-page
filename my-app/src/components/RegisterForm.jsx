import React from 'react';
import Input from './Input';
import Button from './Button';

function RegisterForm({ handleRegister }) {
  return (
    <form>
      <Input type="email" placeholder="Email" />
      <Input type="password" placeholder="Password" />
      <Button label="Register" onClick={handleRegister} />
    </form>
  );
}

export default RegisterForm;

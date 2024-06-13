import React from 'react';
import { SignIn } from '@clerk/clerk-react';

function Login() {
  return (
    <div>
      <h2>Login</h2>
      <SignIn />
    </div>
  );
}

export default Login;

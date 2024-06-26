// Login.tsx

import React from 'react';
import { useAuth } from '../AuthContext';
type UserRole = 'user' | 'admin'

const Login: React.FC = () => {
  const { login } = useAuth();

  const handleLogin = (role: UserRole) => {
    login(role);
  };

  return (
    <div>
      <h2>Login Page</h2>
      <button onClick={() => handleLogin('user')}>Login as User</button>
      <button onClick={() => handleLogin('admin')}>Login as Admin</button>
    </div>
  );
};

export default Login;

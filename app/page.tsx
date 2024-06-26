import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './AuthContext';
import Login from './login/page'; // Ensure the path is correct
import Page from './dashboard/page'; // Ensure the path is correct

const AppContent: React.FC = () => {
  const isLoggedIn = useAuth();
  return (
    <Routes>
      <Route path="/login" element={isLoggedIn ? <Navigate to="/dashboard" /> : <Login />} />
      <Route path="/dashboard" element={isLoggedIn ? <Page /> : <Navigate to="/login" />} />
      <Route path="/" element={<Navigate to="/login" />} />
    </Routes>
  );
};

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Router>
        <AppContent />
      </Router>
    </AuthProvider>
  );
};

export default App;

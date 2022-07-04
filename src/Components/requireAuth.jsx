import React from 'react';
import { Navigate } from 'react-router-dom';

export default function RequireAuth({ children }) {
  const token = localStorage.getItem('token');

  if (token) {
    return children;
  }
  return <Navigate to="/login" replace={true} />;
}

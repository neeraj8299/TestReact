import React from 'react';
import { Link } from 'react-router-dom';

export default function Dashboard() {
  return (
    <>
    <h1>Welcome to Dashboard</h1>
    <Link to="/contact">Go To Contact Page</Link>
    </>
  );
}

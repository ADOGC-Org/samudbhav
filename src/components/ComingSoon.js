import React from 'react';
import { Link } from 'react-router-dom';
import './ComingSoon.css';

function ComingSoon() {
  return (
    <div className="coming-soon">
      <h2>Coming Soon</h2>
      <p>This section is under construction. Please check back later.</p>
      <Link to="/" className="home-link">Go to Home</Link>
    </div>
  );
}

export default ComingSoon;

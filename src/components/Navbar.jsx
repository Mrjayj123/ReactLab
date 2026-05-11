import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <h1>DevPortfolio</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/add-project" className="btn-add">Add Project</Link>
      </div>
    </nav>
  );
}
export default Navbar;
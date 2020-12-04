import React from "react";
import { Link } from "react-router-dom";

import './css/navigator.css'

export default function Navigator() {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/" className="nav-link">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/users" className="nav-link">Users</Link>
        </li>
      </ul>
    </nav>
  );
}

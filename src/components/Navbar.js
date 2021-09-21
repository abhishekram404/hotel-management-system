import React from "react";
import "../styles/navbar.scss";

export default function Navbar() {
  return (
    <nav className="navbar bg-dark px-4 py-3">
      <a href="#" className="navbar-brand">
        Hotel Management System
      </a>
      <ul className="nav">
        <li className="nav-item text-light mx-3">Home</li>
        <li className="nav-item text-light mx-3">About Us</li>
        <li className="nav-item text-light mx-3">Contact</li>
      </ul>
    </nav>
  );
}

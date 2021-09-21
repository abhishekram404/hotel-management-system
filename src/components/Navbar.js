import React from "react";
import "../styles/navbar.scss";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <nav className="navbar  px-4 py-3">
      <a href="#" className="navbar-brand">
        Hotel Management System
      </a>
      <div className="nav">
        <Link className="nav-item text-light mx-3" to="/">
          Home
        </Link>
        <Link className="nav-item text-light mx-3" to="/about">
          About Us
        </Link>
        <Link className="nav-item text-light mx-3" to="/contact">
          Contact
        </Link>
        <Link className="nav-item text-light mx-3" to="/login">
          Logout &nbsp;
          <RiLogoutCircleRLine />
        </Link>
      </div>
    </nav>
  );
}

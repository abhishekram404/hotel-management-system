import React from "react";
import "../styles/navbar.scss";
import { useDispatch, useSelector } from "react-redux";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { AiOutlineUser } from "react-icons/ai";
import { Link } from "react-router-dom";
import { send_logout_request } from "../redux/actions/userActions";
export default function Navbar() {
  const dispatch = useDispatch();
  const { isUserLoggedIn } = useSelector((state) => state.all);
  return (
    <nav className="navbar  px-4 py-3">
      <a href="#" className="navbar-brand">
        Hotel Management System
      </a>
      <div className="nav">
        {isUserLoggedIn ? (
          <>
            {" "}
            <Link className="nav-item text-light mx-3" to="/">
              Home
            </Link>
            <Link className="nav-item text-light mx-3" to="/about">
              About Us
            </Link>
            <Link className="nav-item text-light mx-3" to="/contact">
              Contact
            </Link>
            <Link className="nav-item text-light mx-3" to="/admin">
              Admin&nbsp;
              <AiOutlineUser />
            </Link>
            <div
              className="nav-item text-light mx-3"
              onClick={() => {
                dispatch(send_logout_request());
              }}
            >
              Logout &nbsp;
              <RiLogoutCircleRLine />
            </div>
          </>
        ) : (
          <Link className="nav-item text-light mx-3" to="/login">
            Login
          </Link>
        )}
      </div>
    </nav>
  );
}

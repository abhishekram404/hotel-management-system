import React from "react";
import "../styles/register.scss";
import { Link } from "react-router-dom";
export default function Register() {
  return (
    <div className="register  mx-auto p-4">
      <div className="wrapper">
        <h2 className="text-center">Register</h2>
        <hr />

        <form className="customer-login ">
          <h4>Become a customer</h4>
          <br />
          <div className="mb-3 row">
            <div className="col">
              <label htmlFor="firstName" className="form-label">
                First Name
              </label>
              <input type="text" className="form-control" id="firstName" />
            </div>
            <div className="col">
              <label htmlFor="lastName" className="form-label">
                Last Name
              </label>
              <input type="text" className="form-control" id="lastName" />
            </div>
          </div>
          <div class="mb-3">
            <label for="email" class="form-label">
              Email
            </label>
            <input type="email" class="form-control" id="email" />
            <div id="emailHelp" class="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div class="mb-3">
            <label for="username" class="form-label">
              Username
            </label>
            <input type="text" class="form-control" id="username" />
          </div>
          <div class="mb-3">
            <label for="password" class="form-label">
              Password
            </label>
            <input type="password" class="form-control" id="password" />
          </div>
          <div class="mb-3">
            <label for="confirm_password" class="form-label">
              Confirm Password
            </label>
            <input type="password" class="form-control" id="confirm_password" />
          </div>

          <button type="submit" class="btn btn-primary" id="login-btn">
            Register{" "}
          </button>
        </form>

        <hr />
        <h6 className="text-center">
          ALready a customer ? <Link to="/login">Login here</Link>
        </h6>
      </div>
    </div>
  );
}

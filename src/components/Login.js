import React from "react";
import "../styles/login.scss";
import { Link } from "react-router-dom";
export default function Login() {
  return (
    <div className="login  mx-auto p-4">
      <div className="wrapper">
        <h2 className="text-center">Login</h2>
        <hr />

        <div className="forms">
          <form className="customer-login ">
            <h4>Customer Login</h4>
            <br />
            <div class="mb-3">
              <label for="username" class="form-label">
                Username
              </label>
              <input type="text" class="form-control" id="username" />
              <div id="emailHelp" class="form-text">
                We'll never share your username with anyone else.
              </div>
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">
                Password
              </label>
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
              />
            </div>

            <button type="submit" class="btn btn-primary" id="login-btn">
              Login
            </button>
          </form>

          <form className="employee-login">
            <h4>Employee Login</h4>
            <br />
            <div class="mb-3">
              <label for="username" class="form-label">
                Username
              </label>
              <input type="text" class="form-control" id="username" />
              <div id="emailHelp" class="form-text">
                We'll never share your username with anyone else.
              </div>
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">
                Password
              </label>
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
              />
            </div>

            <button type="submit" class="btn btn-primary" id="login-btn">
              Login
            </button>
          </form>
        </div>
        <hr />
        <h6 className="text-center">
          Not a customer yet ? <Link to="/register">Become one here</Link>
        </h6>
      </div>
    </div>
  );
}

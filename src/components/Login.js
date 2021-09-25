import React from "react";
import "../styles/login.scss";
export default function Login() {
  return (
    <div className="login  mx-auto p-4">
      <div className="wrapper">
        <h2 className="text-center">Login</h2>
        <hr />

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
    </div>
  );
}

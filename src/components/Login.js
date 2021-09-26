import React, { useState, useEffect } from "react";
import { useLocation, useHistory, withRouter } from "react-router-dom";
import "../styles/login.scss";
import { useSelector, useDispatch } from "react-redux";
import send_login_request from "../redux/actions/userActions";
function Login() {
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const { isUserLoggedIn } = useSelector((state) => state.all);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(send_login_request(formData));
  };
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    if (isUserLoggedIn) {
      history.push(
        location.state?.prevLocation ? location.state?.prevLocation : "/"
      );
    }
  });

  return (
    <div className="login  mx-auto p-4">
      <div className="wrapper">
        <h2 className="text-center">Login</h2>
        <hr />

        <form className="employee-login" onSubmit={handleSubmit}>
          <h4>Employee Login</h4>
          <br />
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <input
              type="text"
              className="form-control"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
            />
            <div className="form-text">
              We'll never share your username with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="btn btn-primary" id="login-btn">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default withRouter(Login);

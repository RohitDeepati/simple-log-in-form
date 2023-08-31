import React, { useState } from "react";
import "./login.css";
import { Dashboard } from "./Dashboard";

export const Login = (props) => {


  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  
  const [errors, setErrors] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = formValidationHandler();

    if (Object.keys(newErrors).length === 0) {
      setIsLoggedIn(true);
    } else {
      setErrors(newErrors);
    }
  };

  const formValidationHandler = () => {
    const newErrors = {};

    if (!user) {
      newErrors.user = "User Id is required!";
    }
    if (!password) {
      newErrors.password = "Password is required!";
    }
    return newErrors;
  };

  if (isLoggedIn) {
    return <Dashboard />;
  }
  return (
    <>
      <div className="login-card">
        <div className="card-header">
          <div className="log">
            <h2>Login</h2>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">User Id:</label>
            <input
              required=""
              name="username"
              id="username"
              type="email"
              value={user}
              onChange={(e) => setUser(e.target.value)}
            />
            {errors.user && <div className="error">{errors.user}</div>}
          </div>
          <div class="form-group">
            <label htmlFor="password">Password:</label>
            <input
              required=""
              name="password"
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && <div className="error">{errors.password}</div>}
          </div>
          <div class="form-group">
            <input value="Login" type="submit" />
          </div>
          <div class="form-group">
            <input
              value="Don't have an account? Register here."
              type="submit"
              onClick={() => props.onFormSwitch("register")}
            />
          </div>
        </form>
      </div>
    </>
  );
};

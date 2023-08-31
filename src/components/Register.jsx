import React, { useState } from "react";

import "./register.css";
import { RegisterDashBoard } from "./RegisterDashBoard";
export const Register = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [errors, setErros] = useState({});
  const [isRegisterd, setIsRegisterd] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);

    const newErrors = errorsHandler();

    if (Object.keys(newErrors).length === 0) {
      setIsRegisterd(true);
    } else {
      setErros(newErrors);
    }
  };

  const errorsHandler = () => {
    const newErrors = {};

    if (!name) {
      newErrors.name = "Name is required!";
    }
    if (!email) {
      newErrors.email = "Email is required";
    }
    if (!password) {
      newErrors.password = "Password is required";
    }
    return newErrors;
  };

  if (isRegisterd) {
    return <RegisterDashBoard />;
  }

  return (
    <>
      <div className="login-card">
        <div className="card-header">
          <div className="log">
            <h2>Register</h2>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              value={name}
              name="name"
              type="name"
              onChange={(e) => setName(e.target.value)}
              id="name"
            />
            {errors && <div className="error">{errors.name}</div>}
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="email"
              name="email"
            />
            {errors && <div className="error">{errors.email}</div>}
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              id="password"
              name="password"
            />
            {errors && <div className="error">{errors.password}</div>}
          </div>
          {/* <div className="form-group">
            <label htmlFor="password">Confirm Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              id="password"
              name="password"
            />
            {errors && <div className="error">{errors.password}</div>}
          </div> */}
          <div className="form-group">
            <input value="Register" type="submit" />
          </div>
          <div className="form-group">
            <input
              value="Already have an account? Login here."
              type="submit"
              onClick={() => props.onFormSwitch("login")}
            />
          </div>
        </form>
      </div>
    </>
  );
};

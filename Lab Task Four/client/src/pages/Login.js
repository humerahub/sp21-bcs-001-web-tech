import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import Layout from "../components/layouts/Layout";
import "../styles/LoginStyle.css";
import axios from "axios";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);

  const handleChange = (e) => {
    if (e.target.name === "email") setEmail(e.target.value);
    else if (e.target.name === "password") setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = { email, password };
    axios
      .post("http://localhost:4000/api/auth/login", data)
      .then((res) => {
        setRedirect(true);
        localStorage.setItem("token", res.data.token);
      })
      .catch((err) => {
        alert("Wrong credentials");
      });
  };
  if (redirect) {
    return <Navigate to={"/"} />;
  }

  return (
    <Layout>
      <div className="background-login">
        <div className="wrapper2">
          <form className="login-form" onSubmit={handleSubmit} method="POST">
            <h2>Login</h2>
            <div className="input-field">
              <input
                type="text"
                required
                name="email"
                value={email}
                onChange={handleChange}
              />
              <label htmlFor="email">Enter your email</label>
            </div>
            <div className="input-field">
              <input
                type="password"
                required
                name="password"
                value={password}
                onChange={handleChange}
              />
              <label htmlFor="password">Enter your password</label>
            </div>
            <div className="forget">
              <label htmlFor="remember">
                <input type="checkbox" id="remember" />
                <p className="remember">Remember me</p>
              </label>
              <a href="#">Forgot password?</a>
            </div>
            <button className="button-login" type="submit">
              Log In
            </button>
            <div className="register">
              <p>
                Don't have an account? <a href="/Signup">Signup</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Login;

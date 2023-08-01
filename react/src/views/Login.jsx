import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
  // form validation
  const onSubmit = (ev) => {
    ev.preventDefault;
  };

  return (
    <>
      <h1 className="title">Log into your account</h1>
      <form onSubmit={onSubmit}>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button className="btn btn-block">Login</button>
        <p className="message">
          Not Registered? <Link to="/signup">Create an Account</Link>
        </p>
      </form>
    </>
  );
}

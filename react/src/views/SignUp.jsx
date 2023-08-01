import React from "react";
import { Link } from "react-router-dom";

export default function SignUp() {
  // form validation
  const onSubmit = (ev) => {
    ev.preventDefault;
  };
  return (
    <>
      <h1 className="title">SignUp for free</h1>
      <form onSubmit={onSubmit}>
        <input type="text" placeholder="Full Name" />
        <input type="email" placeholder="Email Address" />
        <input type="password" placeholder="Password" />
        <input type="password" placeholder="Confirm Password" />
        <button className="btn btn-block">SignUp</button>
        <p className="message">
          Already Registered? <Link to="/login">Sign in</Link>
        </p>
      </form>
    </>
  );
}

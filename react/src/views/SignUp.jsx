import React, { createRef, useState } from "react";
import { Link } from "react-router-dom";
import axiosClient from "../Axios-client.js";
import { useStateContext } from "../contexts/ContextProvider";

export default function SignUp() {
  const nameRef = createRef();
  const emailRef = createRef();
  const passwordRef = createRef();
  const confirmpasswordRef = createRef();
  
  const { setUser, setToken } = useStateContext();
  const [errors, setErrors] = useState(null);
  
  // form validation
  const onSubmit = (ev) => {
    ev.preventDefault();
    const payload = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      confirm_password: confirmpasswordRef.current.value,
    };
    
  
    axiosClient
      .post("/signup", payload)
      .then(({ data }) => {
        setUser(data.user);

        setToken(data.token);
      })
      .catch((err) => {
        const response = err.response;
        if (response && response.status === 422) {
          setErrors(response.data.errors);
          console.log(err)
        }
      });
  };
  return (
    <div className="login-signup-form animated fadeInDown">
    <div className="form">
      <form onSubmit={onSubmit}>
        <h1 className="title">Signup for Free</h1>
        {errors &&
          <div className="alert">
            {Object.keys(errors).map(key => (
              <p key={key}>{errors[key][0]}</p>
            ))}
          </div>
        }
        <input ref={nameRef} type="text" placeholder="Full Name"/>
        <input ref={emailRef} type="email" placeholder="Email Address"/>
        <input ref={passwordRef} type="password" placeholder="Password"/>
        <input ref={confirmpasswordRef} type="password" placeholder="Repeat Password"/>
        <button className="btn btn-block">Signup</button>
        <p className="message">Already registered? <Link to="/login">Sign In</Link></p>
      </form>
    </div>
  </div>
  );
}

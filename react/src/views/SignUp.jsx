import axios from "axios";
import React, { useRef, useContext } from "react"; // Added 'useContext' import
import { Link } from "react-router-dom";
import axiosClient from "../Axios-client";
import { useStateContext } from "../contexts/ContextProvider"; 

export default function SignUp() {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmpasswordRef = useRef();

  const { setUser, SetToken } = useStateContext();

  // form validation
  const onSubmit = (ev) => {
    ev.preventDefault();
    const payload = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      confirm_password: confirmpasswordRef.current.value,
    };

    axiosClient.post("/signup", payload).then(({ data }) => {
      setUser(data.user);

      SetToken(data.token);
    })
    .catch(err => {
      const response =err.response;
      if (response && response.status ===422) {
        console.log(response.data.errors);
      }

    })

  };
  return (
    <>
      <h1 className="title">SignUp for free</h1>
      <form onSubmit={onSubmit}>
        <input ref={nameRef} type="text" placeholder="Full Name" />
        <input ref={emailRef} type="email" placeholder="Email Address" />
        <input ref={passwordRef} type="password" placeholder="Password" />
        <input
          ref={confirmpasswordRef}
          type="password"
          placeholder="Confirm Password"
        />
        <button className="btn btn-block">SignUp</button>
        <p className="message">
          Already Registered? <Link to="/login">Sign in</Link>
        </p>
      </form>
    </>
  );
}

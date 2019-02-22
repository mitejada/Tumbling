import React from "react";
import { withRouter } from "react-router";
import Login from './Homepage/Login'
import SignUp from '.Homepage/Signup'
// import { Link } from 'react-router-dom'

const Form = ({
  match,
  username,
  password,
  isLoggedIn,
  loginUser,
  registerUser,
  handleChange,
  email
}) => {
  const path = match.path;
  console.log(registerUser)
  return (
    <div>
        <h1> {path === "/auth/login" ? "Login" : "Register"} </h1>
        {path === "auth/login" ?
        <Login

          onSubmit={loginUser}
        /> : <SignUp onSubmit={registerUser}/>
      }
        <p>{isLoggedIn ? "Logged In!" : ""}</p>

      </div>
      )
};

export default withRouter(Form);

import React from "react";
import { withRouter } from "react-router";
import { Link } from 'react-router-dom'

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
    <React.Fragment>
      <h1> {path === "/auth/login" ? "Login" : "Register"} </h1>
      <form onSubmit={path === "/auth/login" ? loginUser : registerUser }>
        <input
          type="text"
          value={username}
          name="username"
          placeholder="username"
          onChange={handleChange}
        />
        <input
        type="text"
        value={email}
        name="email"
        placeholder="email"
        onChange={handleChange}
        />
        <input
          type="text"
          value={password}
          name="password"
          placeholder="password"
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
      <p>{isLoggedIn ? "Logged In!" : ""}</p>
    </React.Fragment>
  );
};

export default withRouter(Form);

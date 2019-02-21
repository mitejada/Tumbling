import React from "react";
import { withRouter } from "react-router";
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
    {path === "auth/login" ?
      (  <div>
        <h1> {path === "/auth/login" ? "Login" : "Register"} </h1>
        <form onSubmit={loginUser}>
        <input
        type="text"
        value={username}
        name="username"
        placeholder="username"
        onChange={handleChange}
        />
        <input
        type="password"
        value={password}
        name="password"
        placeholder="password"
        onChange={handleChange}
        />
        <button type="submit">Submit</button>
        </form>
        <p>{isLoggedIn ? "Logged In!" : ""}</p>
        </div> )

        :

        ( <div>
        <h1> {path === "/auth/login" ? "Login" : "Register"} </h1>
        <form onSubmit={registerUser}>
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
        type="password"
        value={password}
        name="password"
        placeholder="password"
        onChange={handleChange}
        />
        <button type="submit">Submit</button>
        </form>
        </div> )
      }
      </div>
      )
};

export default withRouter(Form);

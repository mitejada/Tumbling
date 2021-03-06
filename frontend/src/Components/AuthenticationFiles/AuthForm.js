import React, { Component } from "react";
import axios from "axios";
// import { withRouter } from "react-router";
import { Route, Switch } from "react-router-dom";
import Auth from "./utils/Auth";
import Login from '../Homepage/Login'
import Signup from '../Homepage/Signup'


class AuthForm extends Component {
  state = {
    username: "",
    password: "",
    email: "",
    avatar_id: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  registerUser = async e => {
    e.preventDefault();
    const { username, password, email, avatar_id } = this.state;


    await axios.post("/users/new", { username, email, password, avatar_id });

    Auth.authenticateUser(username);

    await axios.post("/users/login", { username, password });

    await this.props.checkAuthenticateStatus();

    // this.setState({
    //   username: "",
    //   password: "",
    //   email: "",
    // });
    // // axios.post("/users/new", { username, password }).then(() => {
    //   Auth.authenticateUser(username);
    //   axios
    //     .post("/users/login", { username, password })
    //     .then(() => {
    //       this.props.checkAuthenticateStatus();
    //     })
    //     .then(() => {
    //       this.setState({
    //         username: "",
    //         password: ""
    //       });
    //     });
    // });
  };

  loginUser = e => {
    e.preventDefault();
    const { username, password } = this.state;

    axios
      .post("/users/login", { username, password })
      .then(() => {
        Auth.authenticateUser(username);
      })
      .then(() => {
        this.props.checkAuthenticateStatus();
      })
      .then(() => {
        this.setState({
          username: "",
          password: ""
        });
      });
  };


  render() {
    const { username, password, email, avatar_id } = this.state;
    const { isLoggedIn } = this.props;

    return (
      <Switch>
        <Route
          path="/auth/login"
          render={() => {
            return (
              <Login
                username={username}
                password={password}
                isLoggedIn={isLoggedIn}
                loginUser={this.loginUser}
                registerUser={this.registerUser}
                handleChange={this.handleChange}
                logoutUser={this.logoutUser}
              />
            );
          }}
        />
        <Route
          path="/auth/signup"
          render={() => {
            return (
              <Signup
                username={username}
                password={password}
                email={email}
                avatar_id={avatar_id}
                isLoggedIn={isLoggedIn}
                loginUser={this.loginUser}
                registerUser={this.registerUser}
                handleChange={this.handleChange}
                logoutUser={this.logoutUser}
              />
            );
          }}
        />
      </Switch>
    );
  }
}

export default AuthForm;

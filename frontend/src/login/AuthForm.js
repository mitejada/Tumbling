import React, { Component } from "react";
import axios from "axios";
// import { withRouter } from "react-router";
import { Route, Switch } from "react-router-dom";
import Auth from "../utils/Auth";
import Form from "./Form";

class AuthForm extends Component {
  state = {
    username: "",
    password: "",
    email: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  registerUser = async e => {
    console.log("hello?")
    e.preventDefault();
    const { username, password, email } = this.state;

    console.log("HI");

    await axios.post("/users/new", { username, email, password });

    Auth.authenticateUser(username);

    await axios.post("/users/login", { username, password });

    await this.props.checkAuthenticateStatus();

    this.setState({
      username: "",
      password: "",
      email: ""
    });
    // axios.post("/users/new", { username, password }).then(() => {
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
    const { username, password, email } = this.state;
    const { isLoggedIn } = this.props;

    return (
      <Switch>
        <Route
          path="/auth/login"
          render={() => {
            return (
              <Form
                username={username}
                password={password}
                isLoggedIn={isLoggedIn}
                loginUser={this.loginUser}
                registerUser={this.registerUser}
                handleChange={this.handleChange}
              />
            );
          }}
        />
        <Route
          path="/auth/signup"
          render={() => {
            return (
              <Form
                username={username}
                password={password}
                email={email}
                isLoggedIn={isLoggedIn}
                loginUser={this.loginUser}
                registerUser={this.registerUser}
                handleChange={this.handleChange}
              />
            );
          }}
        />
      </Switch>
    );
  }
}

export default AuthForm;

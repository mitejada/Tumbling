import React, { Component } from 'react'
import Auth from "./utils/Auth";
import axios from 'axios'


class Authenticate extends Component {

  logoutUser = () => {
    axios
      .post("/users/logout")
      .then(() => {
        Auth.deautheticateUser();
      })
      .then(() => {
        this.props.checkAuthenticateStatus();
      });
  };


  render() {
    const { isLoggedIn, username } = this.state;

    let greeting = isLoggedIn ? (
      <span>
        Welcome {username} {" ~ "}
      </span>
    ) : null;
    let logoutButton = isLoggedIn ? (
      <span>
        <button onClick={this.logoutUser}>Logout</button> {" ~ "}
      </span>
    ) : null

    return (
      <div className="App">
        <nav>
          {greeting} {logoutButton}
        </nav>
      </div>
    )
  }
}


export default Authenticate

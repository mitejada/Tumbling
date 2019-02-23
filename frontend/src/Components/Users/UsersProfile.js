import React, { Component } from 'react'
import Navbar from '../Navbar.js'
import PostingNavbar from './PostingNavbar'
import Auth from "../AuthenticationFiles/utils/Auth";
import axios from 'axios'


class UsersProfile extends Component {

  logoutUser = () => {
    axios
      .post("/users/logout")
      .then(() => {
        Auth.deauthenticateUser();
      })
      .then(() => {
        this.props.checkAuthenticateStatus();
      });
  };

  render() {
    return (
      <div>
      <Navbar />
      <PostingNavbar />
      <button onClick={this.logoutUser}>Logout</button>

      </div>
    )
  }
}



export default UsersProfile

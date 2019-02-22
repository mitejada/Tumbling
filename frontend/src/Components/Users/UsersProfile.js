import React from 'react'
import Navbar from '../Navbar.js'
import PostingNavbar from './PostingNavbar'
// import Auth from "../AuthenticationFiles/utils/Auth";


const UsersProfile = (props) => {
  let greeting = props.isLoggedIn ? (
    <span>
    Welcome {props.username} {" ~ "}
    </span>
  ) : null;
  let logoutButton = props.isLoggedIn ? (
    <span>
    <button onClick={this.logoutUser}>Logout</button> {" ~ "}
    </span>
  ) : null

  return (
    <div>
      <Navbar />
      <PostingNavbar />

      <div className="App">
        <nav>
        {greeting} {logoutButton}
        </nav>
      </div>

    </div>
  )
}



export default UsersProfile

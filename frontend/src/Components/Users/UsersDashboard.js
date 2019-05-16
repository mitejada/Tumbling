import React, { Component } from 'react'
import NavBar from '../Navbar.js'
import PostingNavbar from './PostingNavbar'
import RenderAllPosts from './RenderAllPosts'
import axios from 'axios'


class UsersDashboard extends Component {
    render() {

    return (
      <div>
      <NavBar username={this.props.username}/>
      <PostingNavbar />
      <button className='logout_button' onClick={this.props.logoutUser} type='submit'>Logout</button>
      <RenderAllPosts />
      </div>
    )
  }
}

export default UsersDashboard

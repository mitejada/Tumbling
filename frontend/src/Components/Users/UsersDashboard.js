import React, { Component } from 'react'
import Navbar from '../Navbar.js'
import PostingNavbar from './PostingNavbar'
import RenderAllPosts from './RenderAllPosts'


class UsersDashboard extends Component {

    render() {
    return (
      <div>
      <Navbar username={this.props.username}/>
      <PostingNavbar />
      <RenderAllPosts />
      <button className='logout_button' onClick={this.props.logoutUser} type='submit'>Logout</button>
      </div>
    )
  }
}

export default UsersDashboard

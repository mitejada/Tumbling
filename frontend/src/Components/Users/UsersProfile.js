import React, { Component } from 'react'
import Navbar from '../Navbar.js'
import PostingNavbar from './PostingNavbar'
import TextPosting from './TextPosting'
import ImagePosting from './ImagePosting'
// import Auth from "../AuthenticationFiles/utils/Auth";
// import axios from 'axios'
// import PostsForm from './PostsForm'
// import { withRouter } from 'react-router-dom'



class UsersProfile extends Component {

    render() {
    return (
      <div>
      <Navbar />
      <PostingNavbar />
      <TextPosting />
      <ImagePosting />
      <button className='logout_button' onClick={this.props.logoutUser} type='submit'>Logout</button>
      </div>
    )
  }
}

export default UsersProfile

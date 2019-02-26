import React from 'react'
import Navbar from '../Navbar.js'
import PostingNavbar from './PostingNavbar'
import PostsForm from './PostsForm'



const UsersProfile = ({displayText, handleSubmit, logoutUser}) => {


    return (
      <div>
      <Navbar />
      <PostingNavbar />
      <PostsForm handleSubmit={handleSubmit} displayText={displayText}/>
      <button type='submit' onSubmit={logoutUser}>Logout</button>


      </div>
    )
}



export default UsersProfile

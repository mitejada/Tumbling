import React, { Component } from 'react'
import axios from 'axios'
import Navbar from '../../Components/Navbar'


class UsersProfile extends Component {
  state = {
    allPosts: []
  }

  componentDidMount(){
    this.getAllPostsFromUsers()
  }


  getAllPostsFromUsers = () => {
    const usersId = this.props.match.params.username
    axios.get(`/posts/profile/${usersId}/user`)
      .then(posts => {
        this.setState({
          allPosts: posts.data.data
        })
      })
  }

  renderAllUsersPosts = () => {
    const displayingEveryPost = this.state.allPosts.map(posts => {
      return (
        <div className='post_container' key={posts.id}>
          <div className='username'>
            <h3>{posts.username}</h3>
          </div>

          <div className='content'>
            <p>{posts.posts_content}</p>
          </div>

          <div className='display'>
          {posts.posts_img === null ? "" :
            <img className='images_rendering' src={posts.posts_img} alt=''/>
          }
          </div>
        </div>
      )
    })


    return (
      <div>
        {displayingEveryPost}
      </div>
    )
  }

  render(){
    return(
      <div>
        <Navbar />
        <div>
        <h2 className='profile_username'>Welcome {this.props.isLoggedIn}</h2>
        </div>
        {this.renderAllUsersPosts()}
      </div>
    )
  }
}





export default UsersProfile

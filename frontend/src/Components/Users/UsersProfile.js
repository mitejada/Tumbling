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
    const userName = this.props.match.params.username
    axios.get(`/posts/profile/${userName}`)
      .then(posts => {
        console.log(posts.data.data);
        this.setState({
          allPosts: posts.data.data
        })
      })
  }

  renderAllUsersPosts = () => {
    const displayingEveryPost = this.state.allPosts.map(posts => {
      return (
        <div className='post_container' key={posts.id}>
          <div className='avatar'>
            {posts.avatar_id === null ? "" :
              <img className='avatar' src={posts.avatar_id} alt=''></img>
            }
          </div>

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
    const name = this.props.match.params.username
    return(
      <div>
        <Navbar />
        <div>
        <h2 className='profile_username'>Welcome {name}</h2>
        </div>
        {this.renderAllUsersPosts()}
      </div>
    )
  }
}





export default UsersProfile

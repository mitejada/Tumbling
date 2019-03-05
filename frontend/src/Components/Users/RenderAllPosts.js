import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'


class RenderAllPosts extends Component {
  constructor(props){
    super(props)
    this.state = {
      storeAllPosts: []
    }
  }

  componentDidMount() {
    this.getEveryPost()
  }

  getEveryPost = () => {
    axios.get('/posts/dashboard/usersPost')
      .then(results => {
        this.setState({
          storeAllPosts: results.data.info
        })
      })
      .catch(err=>console.log(err))
  }



  render(){
    const displayEveryPost = this.state.storeAllPosts.map(display => {
      if(display.posts_type === 'text') {
        return (
          <div className='post_container' key={display.id}>

            <div className='username'>
            <h3>{display.username}</h3>
            </div>

            <div className='content'>
            <p>{display.posts_content}</p>
            </div>

          </div>
        )
      } else if(display.posts_type === 'image') {
        return (
          <div className='post_container' key={display.id}>

            <div className='username'>
            <h3>{display.username}</h3>
            </div>

            <div className='content'>
            <p>{display.posts_content}</p>
            </div>

            <div className='display'>
            <img className='images_rendering' src={display.posts_img} alt=''/>
            </div>

          </div>
        )
      } else if(display.posts_type === 'links') {
        return (
          <div className='post_container' key={display.id}>
          <div className='username'>
          <h3>{display.username}</h3>
          </div>
          <li><Link to={display.posts_link}></Link></li>
          </div>
        )
      }

      return (
        <div>
        {displayEveryPost}
        </div>
      )
    })

    return (
      <div >
        {displayEveryPost}
      </div>
    )
  }
}







export default RenderAllPosts

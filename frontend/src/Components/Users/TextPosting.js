import React, { Component } from 'react'
import axios from 'axios'
// import ImagePosting from './ImagePosting'


class TextPosting extends Component {
  constructor(){
    super()
    this.state = {
      postStorage: []
    }
  }

  componentDidMount() {
    this.getAllPosts()
  }

  getAllPosts = () => {
    axios.get('/posts/dashboard/usersPost')
      .then(results => {
        this.setState({
          postStorage: results.data.info
        })
      }).catch(err=>console.log(err))
  }

  renderPosts = () => {
    const displayPosts = this.state.postStorage.map(display => {
      return (
        <div className='post_container' key={display.id}>
          <h3>{display.username}</h3>
          <p>{display.posts_content}</p>
        </div>
      )
    })

    return (
      <div className='posts_box_outline'>
        {displayPosts}
      </div>
    )
  }

  render() {
    return (
      <div className='posts_box'>
        {this.renderPosts()}
      </div>
    )
  }
}





export default TextPosting

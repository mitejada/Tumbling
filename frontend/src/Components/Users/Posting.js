import React, { Component } from 'react'
import axios from 'axios'


class Posting extends Component {
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
      })
  }

  renderPosts = () => {
    const displayPosts = this.state.postStorage.map((display, id) => {
      return (
        <div key={display.id}>
          <h3>{display.username}</h3>
          <p>{display.posts_content}</p>
        </div>
      )
    })

    return (
      <div>
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





export default Posting

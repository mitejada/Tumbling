import React, { Component } from 'react'
// import { withRouter } from 'react-router-dom'
import axios from 'axios'

class PostsForm extends Component {
  constructor() {
    super()
      this.state={
        postsText: '',
      }
  }

  handleTextChange = (event) => {
    this.setState({
      postsText: event.target.value
    })
  }

  handleSubmit = async e => {
    e.preventDefault()

    const { postsText } = this.state

    await axios.post('/posts/new/text', { posts_content: postsText } )

  }

    render(){
      return (
        <div>
        <form onSubmit={this.handleSubmit}>
        <input
        type='text'
        name='postsText'
        value={this.state.postsText}
        onChange={this.handleTextChange}
        placeholder='enter text' />
        <button type='submit'>Submit</button>
        </form>
        </div>
      )
    }
}




export default PostsForm

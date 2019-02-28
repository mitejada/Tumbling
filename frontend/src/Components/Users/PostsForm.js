import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import axios from 'axios'
import UsersProfile from './UsersProfile'

class PostsForm extends Component {
  constructor() {
    super()
      this.state={
        postsText: '',
        submitCheck: false
      }
  }

  handleTextChange = (event) => {
    this.setState({
      postsText: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()

    const { postsText } = this.state

    axios.post('/posts/new/text', {posts_content: postsText} )
    
    this.setState({
      submitCheck: true
    })
  }

    render(){
      if(this.state.submitCheck) {
        return <Redirect to='/dashboard/user' component={UsersProfile}/>
      }

      const { postsText } = this.state
      return (
        <div>
        <form onSubmit={this.handleSubmit}>
        <input
        type='text'
        name='postsText'
        value={postsText}
        onChange={this.handleTextChange}
        placeholder='enter text' />
        <button type='submit'>Submit</button>
        </form>

        <button><Link to='/dashboard/user'>Back</Link></button>
        </div>
      )
    }
}




export default PostsForm

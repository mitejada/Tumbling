import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import axios from 'axios'
import UsersDashboard from './UsersDashboard'

class PostsForm extends Component {
  constructor() {
    super()
      this.state={
        postsText: '',
        postsType: 'text',
        submitCheck: false,
      }
  }

  handleTextChange = (event) => {
    this.setState({
      postsText: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()

    const { postsText, postsType } = this.state

    axios.post('/posts/new', {posts_content: postsText, posts_type: postsType} )
      .catch(err => {
        return Error
      })


    this.setState({
      submitCheck: true
    })
  }

    render(){
      if(this.state.submitCheck) {
        return <Redirect to='/dashboard/user' component={UsersDashboard} />
      }

      const { postsText } = this.state
      return (
        <div>
          <div className='forms'>
            <form onSubmit={this.handleSubmit}>
            <input
            className='input_boxes'
            type='text'
            name='postsText'
            value={postsText}
            onChange={this.handleTextChange}
            placeholder='enter text' />
            <button type='submit'>Submit</button>
            </form>
          </div>

          <div className='back_button'>
            <Link to='/dashboard/user'><button>Back</button></Link>
          </div>

        </div>
      )
    }
}




export default PostsForm

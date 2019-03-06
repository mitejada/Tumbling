import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import axios from 'axios'
import UsersDashboard from './UsersDashboard'

class LinksForm extends Component {
  constructor() {
    super()
      this.state={
        postsLink: '',
        postsType: 'link',
        submitCheck: false,
      }
  }

  handleLinkTextChange = (event) => {
    this.setState({
      postsLink: event.target.value
    })
  }

  handleLinkSubmit = (event) => {
    event.preventDefault()

    const { postsLink, postsType } = this.state

    axios.post('/posts/new', {posts_link: postsLink, posts_type: postsType} )
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

      const { postsLink } = this.state
      return (
        <div>
          <div className='forms'>
            <form onSubmit={this.handleLinkSubmit}>
            <input
            className='input_boxes'
            type='text'
            name='postsLink'
            value={postsLink}
            onChange={this.handleLinkTextChange}
            placeholder='enter link url' />
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




export default LinksForm

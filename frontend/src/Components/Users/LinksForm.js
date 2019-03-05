import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import axios from 'axios'
import UsersProfile from './UsersProfile'

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
        return <Redirect to='/dashboard/user' component={UsersProfile} />
      }

      const { postsLink } = this.state
      return (
        <div>
            <form onSubmit={this.handleLinkSubmit}>
            <input
            type='text'
            name='postsLink'
            value={postsLink}
            onChange={this.handleLinkTextChange}
            placeholder='enter link url' />
            <button type='submit'>Submit</button>
            </form>
            <button><Link to='/dashboard/user'>Back</Link></button>
        </div>
      )
    }
}




export default LinksForm

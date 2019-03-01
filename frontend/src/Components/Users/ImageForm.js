import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import axios from 'axios'
import UsersProfile from './UsersProfile'


class ImageForm extends Component {
  constructor() {
    super()
      this.state={
        postsImg: [],
        submitImgCheck: false
      }
  }

  handleImgChange = (event) => {
    this.setState({
      postsImg: event.target.value
    })
  }

  handleImgSubmit = (event) => {
    event.preventDefault()

    const { postsImg } = this.state

    axios.post('/posts/new/photo', {posts_img: postsImg} )

    this.setState({
      submitImgCheck: true
    })
  }

    render(){
      if(this.state.submitImgCheck) {
        return <Redirect to='/dashboard/user' component={UsersProfile} />
      }

      const { postsText, postsImg } = this.state
      return (
        <div>
            <form onSubmit={this.handleImgSubmit}>
              <input
              type='text'
              name='postsImg'
              value={postsImg}
              onChange={this.handleTextChange}
              placeholder='enter img url' />
              <button type='submit'>Submit</button>
            </form>
            <button><Link to='/dashboard/user'>Back</Link></button>
        </div>
      )
    }
}




export default ImageForm

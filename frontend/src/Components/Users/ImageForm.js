import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import axios from 'axios'
import UsersDashboard from './UsersDashboard'


class ImageForm extends Component {
  constructor(props) {
    super(props)
      this.state={
        postsImg: '',
        postsType: 'image',
        postsImgText: '',
        submitImgCheck: false
      }
  }

  handleImgChange = (event) => {
    this.setState({
      postsImg: event.target.value
    })
  }

  handleImgTextChange = (event) => {
    this.setState({
      postsImgText: event.target.value
    })
  }

  handleImgSubmit = (event) => {
    event.preventDefault()

    const { postsImg, postsType, postsImgText } = this.state

    axios.post('/posts/new', {posts_img: postsImg, posts_content: postsImgText, posts_type: postsType} )

    this.setState({
      submitImgCheck: true
    })
  }

    render(){
      if(this.state.submitImgCheck) {
        return <Redirect to='/dashboard/user' component={UsersDashboard} />
      }

      const { postsImg, postsImgText } = this.state
      return (
        <div>
          <div className='forms'>
            <form onSubmit={this.handleImgSubmit}>
              <input
              className='input_boxes'
              type='text'
              name='postsText'
              value={postsImgText}
              onChange={this.handleImgTextChange}
              placeholder='enter title' />
              <input
              className='input_boxes'
              type='text'
              name='postsImg'
              value={postsImg}
              onChange={this.handleImgChange}
              placeholder='enter img url' />
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




export default ImageForm

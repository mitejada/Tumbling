import React, { Component } from 'react'
import axios from 'axios'


class ImagePosting extends Component {
  constructor(){
    super()
    this.state = {
      imageStorage: []
    }
  }

  componentDidMount() {
    this.getAllImgPosts()
  }

  getAllImgPosts = () => {
    axios.get('/posts/dashboard/usersPost')
      .then(results => {
        this.setState({
          imageStorage: results.data.info
        })
      })
  }

  renderImages = () => {
    const displayImages = this.state.imageStorage.map(display => {
      return (
        <div key={display.id}>
          <img className='images_rendering' src={display.posts_img} alt=''/>
        </div>
      )
    })

    return (
      <div className='posts_box_outline'>
        {displayImages}
      </div>
    )
  }

  render() {
    return (
      <div className='images_box'>
        {this.renderImages()}
      </div>
    )
  }
}





export default ImagePosting

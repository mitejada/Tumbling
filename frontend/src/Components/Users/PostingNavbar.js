import React, { Component } from 'react'
import "../../CSSS/PostingNavbar.css"


class PostingNavbar extends Component {
  state = {
    input: ''
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }


  handleClick = () => {
    console.log(this.state.input)
  }

  render() {
    return (
      <div>
      <div className='posting_div'>
      <nav className='posting_navbar'>

      <button onClick={this.handleClick} className='text_button' type='submit'>
      <img className='text_icon' src='https://cdn2.iconfinder.com/data/icons/game-center-mixed-icons/512/note.png' alt=''></img>
      </button>


      <a href='http://localhost:3000/new/photo'>
      <img className='photo_icon' src='http://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/device-camera-icon.png' alt=''></img>
      </a>

      <a href='http://localhost:3000/new/quote'>
      <img className='quote_icon' src='http://clipart-library.com/img/1720950.jpg' alt=''></img>
      </a>

      <a href='http://localhost:3000/new/link'>
      <img className='link_icon' src='http://icon-park.com/imagefiles/link_icon1_blue.png' alt=''></img>
      </a>
      </nav>
      </div>
      </div>
    )
  }
}








export default PostingNavbar

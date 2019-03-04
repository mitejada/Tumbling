import React, { Component } from 'react'
import "../../CSSS/PostingNavbar.css"
import { Link } from 'react-router-dom'


class PostingNavbar extends Component {
  handleTextClick = () => {
    if(this.props.postsType === 'text') {
      this.setState({
        postsType: this.props.postsType
      })
    }
  }


  render() {
    return (
      <div>
      <div className='posting_div'>

      <nav className='posting_navbar'>

      <button onClick={this.handleTextClick} className='text_button'>
      <Link to='/new/text'>
      <img className='text_icon' src='https://cdn2.iconfinder.com/data/icons/game-center-mixed-icons/512/note.png' alt=''></img></Link>
      </button>

      <button className='photo_button'>
      <Link to='/new/photo'>
      <img className='photo_icon' src='http://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/device-camera-icon.png' alt=''></img></Link>
      </button>

      <button className='quote_button'>
      <Link to='/new/quote'>
      <img className='quote_icon' src='https://banner2.kisspng.com/20180402/skw/kisspng-computer-icons-quotation-symbol-quotation-5ac1f74c6913d7.1398692715226611964304.jpg' alt=''></img></Link>
      </button>

      <button className='link_button'>
      <Link to='/new/link'>
      <img className='link_icon' src='http://icon-park.com/imagefiles/link_icon1_blue.png' alt=''></img></Link>
      </button>

      </nav>

      </div>
      </div>
    )
  }
}








export default PostingNavbar

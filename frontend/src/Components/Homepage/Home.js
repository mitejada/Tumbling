import React, { Component } from 'react'
import { Link } from 'react-router-dom'



class Homepage extends Component {
  constructor(){
    super()
    this.state = {
      clicked: false
    }
  }


  render() {
    return (
      <div className='homepage_main'>
          <nav>
            <img className='homepage_pic' src='https://banner2.kisspng.com/20180412/uqw/kisspng-alphabet-letter-clip-art-letter-t-5acefe1ff3dd64.5981215315235149119989.jpg' alt=''></img>
              <img className='magnifying_glass' src='https://cdn.dribbble.com/users/33239/screenshots/4167340/nbdc-magnifyingglass-icon-dribbb.jpg' alt=''></img>
              <input className='search_input' type='text' placeholder='search' />
          </nav>

          <div className='mainpage_buttons'>

          <div className='signup_button'>
            <button className='signup_getStarted'><Link to='/signup'>Get Started</Link></button>
          </div>

          <div className='login_button'>
            <button className='login_start'><Link to='/login'>Login</Link></button>
          </div>

          </div>
      </div>
    )
  }
}


export default Homepage

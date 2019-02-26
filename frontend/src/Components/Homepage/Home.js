import React, { Component } from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import DashboardPage from '../DashboardPage.js'

class Homepage extends Component {

  render() {
    return (
      <div className='homepage_main'>
          <nav className='homepage_leftNav'>
            <img className='homepage_pic' src='https://banner2.kisspng.com/20180412/uqw/kisspng-alphabet-letter-clip-art-letter-t-5acefe1ff3dd64.5981215315235149119989.jpg' alt=''></img>
              <img className='magnifying_glass' src='https://cdn.dribbble.com/users/33239/screenshots/4167340/nbdc-magnifyingglass-icon-dribbb.jpg' alt=''></img>
              <input className='search_input' type='text' placeholder='search' />
              <hr />
          </nav>

          <div className='mainpage_buttons'>
            <div className='signup_button'>
              <button className='signup_getStarted'><Link to='/auth/signup'>Get Started</Link></button>
            </div>

            <div className='login_button'>
              <button className='login_start'><Link to='/auth/login'>Login</Link></button>
            </div>
          </div>


          <Switch>
            <Route exact path='/dashboard' component={DashboardPage} />
          </Switch>

      </div>
    )
  }
}


export default Homepage

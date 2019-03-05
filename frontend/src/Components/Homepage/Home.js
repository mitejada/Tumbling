import React from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import DashboardPage from '../DashboardPage.js'
// import './CSSS/Home.css'
// import PostsForm from '../Users/PostsForm.js'

const Homepage = () => {
    return (
      <div className='homepage_main'>

          <nav className='homepage_leftNav'>

            <img className='homepage_pic' src='https://banner2.kisspng.com/20180412/uqw/kisspng-alphabet-letter-clip-art-letter-t-5acefe1ff3dd64.5981215315235149119989.jpg' alt=''></img>
              <input className='search_input' type='text' placeholder='search' />
              <hr />

          </nav>

          <div className='homepage_midsection'>
          <div className='title'>
            <h1>TUMBLING</h1>
          </div>

          <div className='mainpage_buttons'>

            <div className='signup_button'>
              <button className='signup_getStarted'><Link className='signup_link' to='/auth/signup'>Get Started</Link></button>
            </div>

            <div className='login_button'>
              <button className='login_start'><Link className='login_link' to='/auth/login'>Login</Link></button>
            </div>
          </div>

          </div>


          <div className="footer">
            <a href='https://www.tumblr.com/policy/en/terms-of-service'>Terms</a>
            <a href='https://www.tumblr.com/privacy'>Privacy</a>
            <a href='https://www.tumblr.com/jobs'>Jobs</a>
            <a href ='https://www.tumblr.com/login'>Support</a>
          </div>


          <Switch>
            <Route exact path='/dashboard' component={DashboardPage} />
          </Switch>

      </div>
    )
}


export default Homepage

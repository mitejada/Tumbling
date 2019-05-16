import React from 'react'
import { Route, Switch } from 'react-router-dom'
import DashboardPage from '../DashboardPage.js'
import '../../CSSS/Home.css'
// import PostsForm from '../Users/PostsForm.js'

const Homepage = () => {
    return (
      <div className='homepage_main'>
          <nav>
              <form>
                <div className="nav-wrapper">
                  <div className="input-field">
                    <input id="search" type="search" required/>
                    <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
                    <i className="material-icons">close</i>
                  </div>
                </div>
              </form>
          </nav>

          <div className='homepage_midsection'>
          <div className='title'>
            <h1 className='title_font'>TUMBLING</h1>
          </div>

          <div className='mainpage_buttons'>
            <div> <a href='/auth/signup'class="waves-effect waves-light btn">Get Started</a> </div>

            <div className='login'> <a href='/auth/login'class="waves-effect waves-light btn">Login</a> </div>
          </div>

          </div>


          <div className="footer">
            <a className='footer_links' href='https://www.tumblr.com/policy/en/terms-of-service'>Terms</a>
            <a className='footer_links' href='https://www.tumblr.com/privacy'>Privacy</a>
            <a className='footer_links' href='https://www.tumblr.com/jobs'>Jobs</a>
            <a className='footer_links' href ='https://www.tumblr.com/login'>Support</a>
          </div>


          <Switch>
            <Route exact path='/dashboard' component={DashboardPage} />
          </Switch>

      </div>
    )
}


export default Homepage

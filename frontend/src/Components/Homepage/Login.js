import React, { Component } from 'react'
import M from 'materialize-css'
// import { Link } from 'react-router-dom'

class Login extends Component {

  componentDidUpdate(){
    M.updateTextFields()
  }

  render(){
    const { password, loginUser, handleChange, username } = this.props;

    return (
      <div>
        <div className='login_navbar'>
          <div> <a href='/auth/signup'className="waves-effect waves-light btn">Get Started</a> </div>
        </div>
        <div className="row">
          <form className="col s12" onSubmit={loginUser} >
            <div className="row">
              <div className="input-field col s6">
                <input id="first_name" type="text" name='username' value={username} onChange={handleChange} className="validate"/>
                <label htmlFor="first_name">Username</label>
              </div>
              <div className="input-field col s6">
                <input id="last_name" type="password" name='password' value={password} onChange={handleChange} className="validate"/>
                <label htmlFor="last_name">Password</label>
              </div>
            </div>
            <button className='loginPage_button' type='submit'>Log In</button>
          </form>
        </div>
      </div>
    )

  }
}





export default Login

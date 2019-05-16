import React, { Component } from 'react'
import M from 'materialize-css'

class Signup extends Component {

  componentDidUpdate(){
    M.updateTextFields()

  }

  render(){
    const { username, password, isLoggedIn, registerUser, handleChange, email, avatar_id } = this.props
    return (
      <div>
        <div className='login_navbar'>
          <div> <a href='/auth/login'className="waves-effect waves-light btn">Login</a> </div>
        </div>
        <div className="row">
          <form className="col s12" onSubmit={registerUser} >
            <div className="row">
              <div className="input-field col s6">
                <input id="first_name" type="text" name='email' value={email} onChange={handleChange} class="validate"/>
                <label htmlFor="first_name">Email</label>
              </div>
              <div className="input-field col s6">
                <input id="user_name" type="text" name='username' value={username} onChange={handleChange} class="validate"/>
                <label htmlFor="first_name">Username</label>
              </div>
              <div className="input-field col s6">
                <input id="last_name" type="password" name='password' value={password} onChange={handleChange} class="validate"/>
                <label htmlFor="last_name">Password</label>
              </div>
              <div className="input-field col s6">
                <input id="last_name" type="text" name='avatar_id' value={avatar_id} onChange={handleChange} class="validate"/>
                <label htmlFor="last_name">Profile Pic</label>
              </div>
            </div>
            <button className='signupPage_button' type='submit'>Get Started</button>
          </form>
          <p>{isLoggedIn ? "Logged In!" : ""}</p>
        </div>
      </div>
    )
  }
}

export default Signup

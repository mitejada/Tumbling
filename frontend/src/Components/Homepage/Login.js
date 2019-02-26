import React from 'react'
import { Link } from 'react-router-dom'

const Login = ({
  password,
  isLoggedIn,
  loginUser,
  registerUser,
  handleChange,
  username
}) => {

  return (
    <div>
      <div className='login_navbar'>
        <nav>
          <img className='homepage_pic' src='https://banner2.kisspng.com/20180412/uqw/kisspng-alphabet-letter-clip-art-letter-t-5acefe1ff3dd64.5981215315235149119989.jpg' alt=''></img>
          <input className='login_searchbar' type='text' placeholder='search' />
        </nav>
        <button className='login_signup_button'><Link to='/auth/signup'>SignUp</Link></button>
      </div>
      <form onSubmit={loginUser} className='login_form'>
        <input type='text' name='username' value={username} onChange={handleChange} placeholder='Username' />
        <input type='password' name='password' value={password} onChange={handleChange} placeholder='Password' />
        <button type='submit'>Log In</button>
      </form>
    </div>
  )
}




export default Login

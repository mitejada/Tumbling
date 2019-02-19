import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div>
      <div className='login_navbar'>
        <nav>
          <img className='homepage_pic' src='https://banner2.kisspng.com/20180412/uqw/kisspng-alphabet-letter-clip-art-letter-t-5acefe1ff3dd64.5981215315235149119989.jpg' alt=''></img>
          <input className='login_searchbar' type='text' placeholder='search' />
        </nav>
        <button className='login_signup_button'><Link to='/signup'>SignUp</Link></button>
      </div>
      <form className='login_form'>
        <input type='text' placeholder='Email' />
        <input type='text' placeholder='Password' />
        <button type='submit'>Log In</button>
      </form>
    </div>
  )
}




export default Login

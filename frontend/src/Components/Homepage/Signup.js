import React from 'react'

const Signup = ({
  username,
  password,
  isLoggedIn,
  loginUser,
  registerUser,
  handleChange,
  email}) => {
  return (
    <div>
    <nav>
      <img className='homepage_pic' src='https://banner2.kisspng.com/20180412/uqw/kisspng-alphabet-letter-clip-art-letter-t-5acefe1ff3dd64.5981215315235149119989.jpg' alt=''></img>
      <input className='signup_searchbar' type='text' placeholder='search' />
    </nav>

      <form onSubmit={registerUser} className='signup_form'>
        <input type='text' className='email_input' name='email' value={email} onChange={handleChange} placeholder='Email' />
        <input type='password' className='password_input' name='password' value={password} onChange={handleChange} placeholder='Password' />
        <input type='text' className='username_input' name='username' value={username} onChange={handleChange} placeholder='Username' />
        <button className='signupPage_button' type='submit'>Get Started</button>
      </form>
      <p>{isLoggedIn ? "Logged In!" : ""}</p>
    </div>
  )
}

export default Signup

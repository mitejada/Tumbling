import React from 'react'

const Signup = () => {
  return (
    <div>
    <nav>
      <img className='homepage_pic' src='https://banner2.kisspng.com/20180412/uqw/kisspng-alphabet-letter-clip-art-letter-t-5acefe1ff3dd64.5981215315235149119989.jpg' alt=''></img>
      <input className='signup_searchbar' type='text' placeholder='search' />
    </nav>

      <form className='signup_form'>
        <input type='text' placeholder='Email' />
        <input type='text' placeholder='Password' />
        <input type='text' placeholder='Username' />
        <button type='submit'>Get Started</button>
      </form>
    </div>
  )
}

export default Signup

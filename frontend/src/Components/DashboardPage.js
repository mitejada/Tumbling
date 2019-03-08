import React from 'react'
import Navbar from './Navbar.js'

const DashboardPage = ({username}) => {
  return (
    <div>
      <Navbar username={username}/>
    </div>
  )
}


export default DashboardPage

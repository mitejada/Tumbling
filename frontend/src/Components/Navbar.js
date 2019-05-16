import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
// import { Navbar, NavItem, Icon } from 'react-materialize'
import M from 'materialize-css'
import "../CSSS/Navbar.css"


class NavBar extends Component {

  componentDidMount(){
    document.addEventListener('DOMContentLoaded', function () {
      var elems = document.querySelectorAll('.sidenav');
      M.Sidenav.init(elems);
    });
  }

  render(){
    return (
      <div>
      <nav>
        <div className="nav-wrapper">
          <a href="/" className="brand-logo"><img className='logo_pic' src='https://banner2.kisspng.com/20180412/uqw/kisspng-alphabet-letter-clip-art-letter-t-5acefe1ff3dd64.5981215315235149119989.jpg' alt=''></img></a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a href="/dashboard/user"><i className="material-icons">home</i></a></li>
            <li><a href="/explore"><i className="material-icons">explore</i></a></li>
            <li><a href="/inbox"><i className="material-icons">inbox</i></a></li>
            <li><a href="/messaging"><i className="material-icons">message</i></a></li>
            <li><a href="/activity"><i className="material-icons">tap_and_play</i></a></li>
            <li><a href={'/profile/' + this.props.username}><i className="material-icons">account_circle</i></a></li>
          </ul>
          <ul id="slide-out" className="sidenav">
            <li><a href="/dashboard/user">Home</a></li>
            <li><a href="/explore">Explore</a></li>
            <li><a href="/inbox">Inbox</a></li>
            <li><a href="/messaging">Message</a></li>
            <li><a href="/activity">Activity</a></li>
            <li><a href={'/profile/' + this.props.username}>Profile</a></li>
          </ul>
            <a href="/" data-target="slide-out" className="sidenav-trigger"><i className="material-icons">menu</i></a>
        </div>
      </nav>
      </div>
    )

  }
}


export default withRouter(NavBar)

import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import "../CSSS/Navbar.css"

//   searchUser = (props) => {
//     if(this.state.usersName === this.props.displayU.name){
//       return (
//         <h3>{this.props.displayU.name}</h3>
//       )
//     }
// }

class Navbar extends Component {

  render(){
    
    return (
      <div className='navbar'>

      <div className='navigation'>
      <img className='logo_pic' src='https://banner2.kisspng.com/20180412/uqw/kisspng-alphabet-letter-clip-art-letter-t-5acefe1ff3dd64.5981215315235149119989.jpg' alt=''></img>
      <input className='nav_search_bar' type='text' placeholder="Search Tumbling" />
      <nav className='tab_bar'>
      <div className='home_tab'>
      <Link to='/dashboard/user'><img className='home_pic' src='https://imageog.flaticon.com/icons/png/512/25/25694.png?size=1200x630f&pad=10,10,10,10&ext=png&bg=FFFFFFFF' alt=''></img></Link>
      </div>

      <div className='explore_tab'>
      <Link to='/explore'><img className='explore_pic' src='http://icons.iconarchive.com/icons/icons8/android/512/Maps-Compass-icon.png' alt=''></img></Link>
      </div>

      <div className='inbox_tab'>
      <Link to='/inbox'><img className='inbox_pic' src='https://cdn1.iconfinder.com/data/icons/rcons-line-ios-3/32/mail-512.png' alt=''></img></Link>
      </div>

      <div className='messaging_tab'>
      <Link to='/messaging'><img className='messaging_pic' src='https://previews.123rf.com/images/jemastock/jemastock1708/jemastock170817778/84880921-happy-grin-emoji-instant-messaging-icon-image-vector-illustration-design-black-and-white.jpg' alt=''></img></Link>
      </div>

      <div className='activity_tab'>
      <img className='activity_pic' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOqQgcFm6HD8y5JJep4TvFM5SJPpVDkPg9bqrbNaHJmbBtMvpllA' alt=''></img>
      </div>

      <div className='account_tab'>
      <img className='account_pic' src='https://banner2.kisspng.com/20180419/tdq/kisspng-user-silhouette-my-account-icon-5ad833d36feb49.1187422515241184834584.jpg' alt=''></img>
      </div>

      </nav>

      </div>

      </div>
    )

  }
}


export default withRouter(Navbar)

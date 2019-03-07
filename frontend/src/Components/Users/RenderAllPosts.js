import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'


class RenderAllPosts extends Component {
  constructor(props){
    super(props)
    this.state = {
      storeAllPosts: [],

    }
  }

  componentDidMount() {
    this.getEveryPost()
  }

  getEveryPost = () => {
    axios.get('/posts/dashboard/usersPost')
      .then(results => {
        this.setState({
          storeAllPosts: results.data.info
        })
      })
      .catch(err=>console.log(err))
  }

  deleteAPost = (event) => {
    axios.delete(`/posts/delete/${event.target.id}`)
      .then(() => {
        this.getEveryPost()
      })
      .catch(err => {
        console.log(err);
      })
  }



  render(){
    const displayEveryPost = this.state.storeAllPosts.map(display => {
      if(display.posts_type === 'text') {
        return (
          <div className='post_container' key={display.id}>

          <div className='delete_button'>
            <button className='deleteButtonButton' onClick={this.deleteAPost} id={display.id}><img className='deleteButton' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwbC5E7-yrgBsRqagewVunuk2RH6BH-nIf-Rqgp-RUyo6uO9BNKg' alt='' id={display.id}></img></button>
          </div>

            <div className='username'>
            <h3>{display.username}</h3>
            </div>

            <div className='content'>
            <p className='content'>{display.posts_content}</p>
            </div>

            <div className='likes_button'>
              <button className='likeButtonButton'><img className='likesButton' src='https://imageog.flaticon.com/icons/png/512/30/30767.png?size=1200x630f&pad=10,10,10,10&ext=png&bg=FFFFFFFF' alt=''></img></button>
            </div>

            <div className='empty_div'>

            </div>
          </div>
        )
      } else if(display.posts_type === 'image') {
        return (
          <div className='post_container' key={display.id}>

          <div className='delete_button'>
            <button className='deleteButtonButton' onClick={this.deleteAPost} id={display.id}><img className='deleteButton' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwbC5E7-yrgBsRqagewVunuk2RH6BH-nIf-Rqgp-RUyo6uO9BNKg' alt='' id={display.id}></img></button>
          </div>

            <div className='username'>
              <h3>{display.username}</h3>
            </div>

            <div className='content'>
              <p className='content'>{display.posts_content}</p>
            </div>

            <div className='display'>
              <img className='images_rendering' src={display.posts_img} alt=''/>
            </div>

            <div className='likes_button'>
              <button className='likeButtonButton'><img className='likesButton' src='https://imageog.flaticon.com/icons/png/512/30/30767.png?size=1200x630f&pad=10,10,10,10&ext=png&bg=FFFFFFFF' alt=''></img></button>
            </div>

            <div className='empty_div'>

            </div>

          </div>
        )
      } else if(display.posts_type === 'links') {
        return (
          <div className='post_container' key={display.id}>

          <div className='delete_button'>
            <button className='deleteButtonButton' onClick={this.deleteAPost} id={display.id}><img className='deleteButton' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwbC5E7-yrgBsRqagewVunuk2RH6BH-nIf-Rqgp-RUyo6uO9BNKg' alt='' id={display.id}></img></button>
          </div>

          <div className='username'>
          <h3>{display.username}</h3>
          </div>
          <li><Link to={display.posts_link}></Link></li>

          <div className='likes_button'>
            <button className='likeButtonButton'><img className='likesButton' src='https://imageog.flaticon.com/icons/png/512/30/30767.png?size=1200x630f&pad=10,10,10,10&ext=png&bg=FFFFFFFF' alt=''></img></button>
          </div>

          <div className='empty_div'>

          </div>

          </div>
        )
      }

      return (
        <div>
        {displayEveryPost}
        </div>
      )
    })

    return (
      <>
      <div className='main_render_div'>
        {displayEveryPost}
      </div>
      </>
    )
  }
}







export default RenderAllPosts

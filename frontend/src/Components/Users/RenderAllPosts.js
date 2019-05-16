import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import axios from 'axios'


class RenderAllPosts extends Component {
  constructor(props){
    super(props)
    this.state = {
      storeAllPosts: [],
      liked: false
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
      .catch(err => console.log(err))
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

  addALike = (event) => {
    event.preventDefault()

    if(!this.state.liked) {
      axios.post('/likes/new', { posts_id: event.currentTarget.dataset.postsid, user_id:event.currentTarget.dataset.usersid})
        .catch(err => {
          console.log(err);
        })
    }

    this.setState({
      liked: true
    })

    if(this.state.liked) {
      axios.delete(`/likes/delete/${event.currentTarget.dataset.postsid}/${event.currentTarget.dataset.usersid}`)
        .catch(err => {
          console.log(err);
        })
    }
  }


  render(){

    const displayEveryPost = this.state.storeAllPosts.reverse().map(display => {
      if(display.posts_type === 'text') {
        return (
          <div className='grid-container' key={display.posts_id}>

            <div className="grid-item">
              <div className='avatar'>
                <img className='avatar' src={display.avatar_id} alt=''></img>
              </div>
            </div>

            <div className='grid-item'>
              <div className='username' data-usersid={display.users_id}>
                <h3 data-usersid={display.users_id}>{display.username}</h3>
              </div>
            </div>

            <div className="grid-item">
              <div className='delete_button'>
                <button className='deleteButtonButton' onClick={this.deleteAPost} id={display.id}>
                  <i className="material-icons">delete</i>
                </button>
              </div>
            </div>

            <div className='grid-item'></div>


            <div className='grid-item'>
              <div className='content'>
                <p className='content'>{display.posts_content}</p>
              </div>
            </div>

            <div className='grid-item'>
              <div className='likes_button'>
                <button className='likeButtonButton' onClick={this.addALike} data-postsid={display.posts_id}><i className="material-icons">thumb_up</i></button>
                <p>{display.likes}</p>
              </div>
            </div>
          </div>
        )
      } else if(display.posts_type === 'image') {
        return (
          <div className='grid-container' key={display.posts_id}>

            <div className="grid-item">
              <div className='avatar'>
                <img className='avatar' src={display.avatar_id} alt=''></img>
              </div>
            </div>

            <div className='grid-item'>
              <div className='username'>
                <h3 data-usersid={display.users_id}>{display.username}</h3>
              </div>
            </div>

            <div className="grid-item">
              <div className='delete_button'>
                <button className='deleteButtonButton' onClick={this.deleteAPost} id={display.id}>
                  <i className="material-icons">delete</i>
                </button>
              </div>
            </div>

            <div className='grid-item'></div>


            <div className='grid-item'>
              <div className='content'>
                <p className='content'>{display.posts_content}</p>
              </div>

              <div className='display'>
                <img className='images_rendering' src={display.posts_img} alt=''/>
              </div>
            </div>

            <div className='grid-item'>
              <div className='likes_button'>
                <button className='likeButtonButton'><i className="material-icons" data-postsid={display.posts_id}>thumb_up</i></button>
                <p>{display.likes}</p>
              </div>
            </div>
          </div>
        )
      } else if(display.posts_type === 'links') {
        return (
          <div className='grid-container' key={display.posts_id}>

            <div className="grid-item">
              <div className='avatar'>
                <img className='avatar' src={display.avatar_id} alt=''></img>
              </div>
            </div>

            <div className='grid-item'>
              <div className='username'>
                <h3 data-usersid={display.users_id}>{display.username}</h3>
              </div>
            </div>

            <div className="grid-item">
              <div className='delete_button'>
                <button className='deleteButtonButton' onClick={this.deleteAPost} id={display.id}>
                  <i className="material-icons">delete</i>
                </button>
              </div>
            </div>

            <div className='grid-item'></div>


            <div className='grid-item'>
              <div className='content'>
                <p className='content'>{display.posts_content}</p>
              </div>
            </div>

            <div className='grid-item'>
              <div className='likes_button'>
                <button className='likeButtonButton'><i className="material-icons" data-postsid={display.posts_id}>thumb_up</i></button>
                <p>{display.likes}</p>
              </div>
            </div>
          </div>
        )
      }

      return (
        <div className='container'>
        {displayEveryPost}
        </div>
      )
    })

    return (
      <>
      <div className='container'>
        {displayEveryPost}
      </div>
      </>
    )
  }
}







export default RenderAllPosts

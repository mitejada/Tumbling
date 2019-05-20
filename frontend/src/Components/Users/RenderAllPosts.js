import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import CommentsForm from './CommentsForm'


class RenderAllPosts extends Component {
  constructor(props){
    super(props)
    this.state = {
      storeAllPosts: [],
      liked: false,
      body: '',
      submitted: false
    }
  }


  componentDidMount() {
    this.getEveryPost()
  }

  getEveryPost = () => {
    axios.get('/posts/dashboard/usersPost')
      .then(results => {
        if(results.data.info.likes === null) {
          return ''
        } else {
          this.setState({
            storeAllPosts: results.data.info
          })
        }
      })

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
      axios.post('/likes/new', { posts_id: event.currentTarget.dataset.postsid, user_name: this.props.usersnames})
        .then(() => {
          this.getEveryPost()
        })
        .catch(err => {
          console.log(err);
        })
    }

    this.setState({
      liked: true
    })

    if(this.state.liked) {
      axios.delete(`/likes/delete/${event.currentTarget.dataset.postsid}/${this.props.usersnames}`)
        .then(() => {
          this.getEveryPost()
        })
        .catch(err => {
          console.log(err);
        })
    }

  }

  handleChange = (event) => {
    this.setState({
      body: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const { body } = this.state

    axios.post('/comments/new', {posts_id: event.currentTarget.dataset.post, users_name: this.props.usersnames, body: body})
      .catch(err => {
        return Error
      })

      this.setState({
        submitted: true,
        body: ''
      })
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
              <div className='username'>
                <Link to={`/profile/${display.username}`}><h3>{display.username}</h3></Link>
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

            <div className='grid-item'></div>

            <div className='grid-item'>
              {display.comments.map(i => {
                return (
                  <ul key={i}>{i}</ul>
                )
              })}

              <div data-post={display.posts_id}>
                <CommentsForm
                  posts_id={display.posts_id}
                  body={this.state.body}
                  submitted={this.state.submitted}
                  handleChange={this.handleChange}
                  handleSubmit={this.handleSubmit}
                  />
              </div>
            </div>

            <div className='grid-item'></div>
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
              <Link to={`/profile/${display.username}`}><h3>{display.username}</h3></Link>
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
                <button className='likeButtonButton' onClick={this.addALike} data-postsid={display.posts_id}><i className="material-icons">thumb_up</i></button>
                <p>{display.likes}</p>
              </div>
            </div>

            <div className='grid-item'></div>

            <div className='grid-item'>
              {display.comments.map(i => {
                return (
                  <ul key={i}>{i}</ul>
                )
              })}

              <div data-post={display.posts_id}>
                <CommentsForm
                  posts_id={display.posts_id}
                  body={this.state.body}
                  submitted={this.state.submitted}
                  handleChange={this.handleChange}
                  handleSubmit={this.handleSubmit}
                  />
              </div>
            </div>

            <div className='grid-item'></div>
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
              <Link to={`/profile/${display.username}`}><h3>{display.username}</h3></Link>
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

              <div className='grid-item'></div>

              <div className='grid-item'>
                {display.comments.map(i => {
                  return (
                    <ul key={i}>{i}</ul>
                  )
                })}

                <div data-post={display.posts_id}>
                  <CommentsForm
                    posts_id={display.posts_id}
                    body={this.state.body}
                    submitted={this.state.submitted}
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    />
                </div>
              </div>

              <div className='grid-item'></div>
            </div>

            <div className='grid-item'></div>

            <div className='grid-item'>
              {display.comments.map(i => {
                return (
                  <ul key={i}>{i}</ul>
                )
              })}
            </div>

            <div className='grid-item'></div>
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

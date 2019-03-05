import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import axios from 'axios'
import UsersProfile from './UsersProfile'


class QuotesForms extends Component {
  constructor(props) {
    super(props)
      this.state={
        postsQuote: '',
        postsType: 'quote',
        submitImgCheck: false
      }
  }

  handleQuoteChanges = (event) => {
    this.setState({
      postsQuote: event.target.value
    })
  }

  handleQuoteSubmit = (event) => {
    event.preventDefault()

    const { postsQuote, postsType } = this.state

    axios.post('/posts/new', {posts_quote: postsQuote, posts_type: postsType} )

    this.setState({
      submitImgCheck: true
    })
  }

    render(){
      if(this.state.submitImgCheck) {
        return <Redirect to='/dashboard/user' component={UsersProfile} />
      }

      const { postsQuote } = this.state
      return (
        <div>
            <form onSubmit={this.handleQuoteSubmit}>
              <input
              type='text'
              name='postsQuote'
              value={postsQuote}
              onChange={this.handleQuoteChanges}
              placeholder='enter img url' />
              <button type='submit'>Submit</button>
            </form>
            <button><Link to='/dashboard/user'>Back</Link></button>
        </div>
      )
    }
}




export default QuotesForms

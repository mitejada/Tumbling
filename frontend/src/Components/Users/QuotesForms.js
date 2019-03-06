import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import axios from 'axios'
import UsersDashboard from './UsersDashboard'


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
        return <Redirect to='/dashboard/user' component={UsersDashboard} />
      }

      const { postsQuote } = this.state
      return (
        <div>
          <div className='forms'>
            <form onSubmit={this.handleQuoteSubmit}>
              <input
              className='input_boxes'
              type='text'
              name='postsQuote'
              value={postsQuote}
              onChange={this.handleQuoteChanges}
              placeholder='enter img url' />
              <button type='submit'>Submit</button>
            </form>
          </div>

          <div className='back_button'>
            <Link to='/dashboard/user'><button>Back</button></Link>
          </div>

        </div>
      )
    }
}




export default QuotesForms

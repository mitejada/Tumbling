import React, {Component} from 'react'

class CommentsForm extends Component {
  render() {
    return (
      <div>
      <form onSubmit={this.props.handleSubmit} data-post={this.props.posts_id}>
      <input
      type='text'
      name='body'
      onChange={this.props.handleChange}
      value={this.props.body}
      placeholder='Enter Comment'
      />
      <button type='submit'>Submit</button>
      </form>
      </div>
    )
  }
}



export default CommentsForm

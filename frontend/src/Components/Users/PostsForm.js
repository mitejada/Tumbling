import React from 'react'

const PostsForm = ({handleSubmit, handleChange, displayText}) => {
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <input type='text' onChange={handleChange} value={displayText} placeholder='enter text' />
          <button type='submit'>Submit</button>
        </form>
        {displayText}
      </div>
    )
}




export default PostsForm

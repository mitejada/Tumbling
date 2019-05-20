const { db } = require('./index.js')

const addAComment = (req, res, next) => {
  db.none('INSERT INTO comments(posts_id, users_name, body) VALUES(${posts_id}, ${users_name}, ${body})', {
    posts_id: req.body.posts_id,
    users_name: req.body.users_name,
    body: req.body.body
  })
  .then(() => {
    res.status(200).json({
      status: 'success',
      message: 'You have added a comment'
    })
  })
  .catch(err => {
    return Next(err)
  })
}

const getCommentsForAPost = (req, res, next) => {
  const postsId = req.body.posts_id
  db.any('SELECT * FROM comments JOIN posts ON posts.id = comments.posts_id WHERE posts.id=$1', postsId)
    .then(comments => {
      res.status(200).json({
        status: 'success',
        comments: comments,
      })
    })
    .catch(err => {
      return Next(err)
    })
}

const deleteAComment = (req, res, next) => {
  const userId = req.params.user_name
  db.none('DELETE FROM likes WHERE posts_id=$1 AND user_name=$2', [likesId, userId])
    .then(() => {
      res.status(200).json({
        status: 'success',
        message: 'You have unliked a post'
      })
    })
    .catch(err => {
      return next(err)
    })
}



module.exports = { addAComment, getCommentsForAPost, deleteAComment }

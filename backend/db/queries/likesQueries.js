const { db } = require('./index.js')

const addALike = (req, res, next) => {
  db.none('INSERT INTO likes(posts_id, user_name) VALUES(${posts_id}, ${user_name})', {
   posts_id: req.body.posts_id,
   user_name: req.body.user_name
 })
   .then(() => {
     res.status(200).json({
       status: 'success',
       message: 'You have liked a post !'
     })
   })
   .catch(err => {
     return next(err)
   })
}

const deleteALike = (req, res, next) => {
  const likesId = req.params.id
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

const getLikesPerPost = (req, res, next) => {
  const postId = req.params.post_id
  db.any('SELECT * FROM likes JOIN posts ON posts.id = likes.posts_id WHERE posts.id = $1', postId)
    .then(likes => {
      res.status(200).json({
        status: 'success',
        likes: likes
      })
    })
    .catch(err => {
      return next(err)
    })
}


module.exports = { addALike, deleteALike, getLikesPerPost }

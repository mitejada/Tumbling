const { db } = require('./index.js')


const getAllPosts = (req, res, next) => {
  db.any('SELECT * FROM posts')
    .then((posts) => {
      res.status(200).json({
        posts: posts
      })
    })
    .catch(err => {
      return next(err)
    })
}

const getSinglePost = (req, res, next) => {
  let postsId = parseInt(req.params.id)
  db.one('SELECT * FROM posts WHERE id=$1', postsId)
    .then((data) => {
      res.status(200).json({
        body: data,
        message: 'You have a single post'
      })
    })
    .catch(err => {
      return next(err)
    })
}

const deletePosts = (req, res, next) => {
  let postsId = parseInt(req.params.id)
  db.none('DELETE FROM posts WHERE id=$1', postsId)
    .then(result => {
      res.status(200).json({
        message: 'You have deleted a post!'
      })
    })
    .catch(err => {
      return next(err)
    })
}

const createPost = (req, res, next) => {
  let statement = "INSERT INTO posts"
  console.log(req.body);
  if(req.body.posts_type === 'text') {
    statement = statement.concat("(author_id, posts_content, posts_type) VALUES(${author_id}, ${posts_content}, ${posts_type})");
  } else if( req.body.posts_type === "image") {
    statement = statement.concat('(author_id, posts_content, posts_type, posts_img) VALUES(${author_id}, ${posts_content}, ${posts_type}, ${posts_img})')
  }
  db.none(`${statement}`, {...req.body, author_id: req.user.id})
    .then(() => {
      res.status(200).json({
        message: 'You have created a new Post!'
      })
    })
    .catch(err => {
      return next(err)
    })
}

// const createTextPost = (req, res, next) => {
//   db.none('INSERT INTO posts(author_id, posts_content) VALUES(${author_id}, ${posts_content})', req.body)
// }
//
// const createImagePost = (req, res, next) => {
//   db.none('INSERT INTO posts(author_id, posts_img) VALUES(${author_id}, ${posts_img})', req.body)
//     .then(() => {
//       res.status(200).json({
//         message: 'You have created an Image post!'
//       })
//     })
//     .catch(err => {
//       return next(err)
//     })
// }

const getUsersInfoForThePost = (req, res, next) => {
  req.body.author_id = req.user.id
  db.any('SELECT * FROM users JOIN posts ON posts.author_id = users.id')
    .then(info => {
      res.status(200).json({
        info: info
      })
    })
    .catch(err => {
      return next(err)
    })
}


const editPosts = (req, res, next) => {
  db.none('UPDATE posts SET posts_content=${posts_content} WHERE id=${id}', {
    posts_content: req.body.posts_content,
    id: parseInt(req.params.id)
  })
    .then(() => {
      res.status(200).json({
        message: 'You have update the post'
      })
    })
    .catch(err => {
      return next(err)
    })
}


module.exports = { getAllPosts, getSinglePost, deletePosts, createPost, editPosts, getUsersInfoForThePost }

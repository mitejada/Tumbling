const { db } = require('./index.js')

const getAllUsers = (req, res, next) => {
  db.any('SELECT * FROM users')
    .then((users) => {
      res.status(200).json({
        users:users
      })
    })
    .catch(err => {
      return next(err)
    })
}

const getSingleUser = (req, res, next) => {
  let usersId = parseInt(req.params.id)
  db.one('SELECT * FROM users WHERE id=$1', usersId)
    .then((users) => {
      res.status(200).json({
        users: users
      })
    })
    .catch(err => {
      return next(err)
    })
}


const createAUser = (req, res, next) => {
  db.none('INSERT INTO users(username, email, password, avatar_id) VALUES(${username}, ${email}, ${password}, ${avatar_id})', req.body)
    .then(() => {
      res.status(200).json({
        status: 'success',
        message: 'Welcome to Tumbling! Start Tumbling!'
      })
    })
    .catch(err => {
      return next(err)
    })
}


const deleteAUser = (req, res, next) => {
  let usersId = parseInt(req.params.id)
  db.none('DELETE FROM users WHERE id=$1', usersId)
    .then(() => {
      res.status(200).json({
        status: 'success',
        meesage: 'We are sorry to see you go!'
      })
    })
    .catch(err => {
      return next(err)
    })
}


const editAUser = (req, res, next) => {
  db.none('UPDATE users SET username=${username}, password=${password} WHERE id=${id}', {
    username: req.body.username,
    password: req.body.password,
    id: parseInt(req.params.id)
  })
    .then(() => {
      res.status(200).json({
        status: 'success',
        message: 'You have update your profile'
      })
    })
    .catch(err => {
      return next(err)
    })
}

module.exports = { getAllUsers, getSingleUser, createAUser, deleteAUser, editAUser }

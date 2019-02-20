// const { db } = require('./index.js')
const pgp = require("pg-promise")({});
const connectionString = "postgres://localhost/tumbling";
const db = pgp(connectionString);

const authHelpers = require("../../auth/helpers");


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
  db.none('UPDATE users SET username=${username}, password_scrambled=${password_scrambled} WHERE id=${id}', {
    username: req.body.username,
    password_scrambled: req.body.password_scrambled,
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

function createAUser(req, res, next) {
  const hash = authHelpers.createHash(req.body.password);

  db.none(
    "INSERT INTO users(username, email, password_scrambled) VALUES (${username}, ${email}, ${password})",
    { username: req.body.username,
      email: req.body.email,
      password: hash
    }
  )
    .then(() => {
      res.status(200).json({
        message: "Registration successful."
      });
    })
    .catch(err => {
      res.status(500).json({
        message: err
      });
    });
}

function logoutUser(req, res, next) {
  req.logout();
  res.status(200).send("log out success");
}

function loginUser(req, res) {
  res.json(req.user);
}

function isLoggedIn(req, res) {
  if(req.user) {
    res.json({ username: req.user });
  } else {
    res.json({ username: null });
  }
}

module.exports = { getAllUsers, getSingleUser, deleteAUser, editAUser, createAUser, logoutUser, loginUser, isLoggedIn }

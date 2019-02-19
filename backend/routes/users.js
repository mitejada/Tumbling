var express = require('express');
var router = express.Router();
const db = require('../db/queries')
const { getAllUsers, getSingleUser, createAUser, deleteAUser, editAUser } = require('../db/queries/usersQueries.js')
const passport = require('../auth/local');
const { loginRequired } = require('../auth/helpers')


/* GET users listing. */
router.get('/', getAllUsers)
router.get('/:id', getSingleUser);
router.post('/', createAUser);
router.patch('/:id', editAUser);
router.delete('/:id', deleteAUser)
router.post('/new', db.createUser);
router.post('/login', passport.authenticate("local", {}), db.loginUser);
router.post('/logout', loginRequired, db.logoutUser);

module.exports = router;

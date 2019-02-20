var express = require('express');
var router = express.Router();
const { getAllUsers, getSingleUser, createAUser, deleteAUser, editAUser, logoutUser, loginUser, isLoggedIn  } = require('../db/queries/usersQueries.js')
const passport = require('../auth/local');
const { loginRequired } = require('../auth/helpers')


/* GET users listing. */
router.get('/', getAllUsers)
router.get('/:id', getSingleUser);
router.post('/new', createAUser);
router.patch('/:id', editAUser);
router.delete('/:id', deleteAUser)
router.post('/login', passport.authenticate("local", {}), loginUser);
router.post('/logout', loginRequired, logoutUser);

module.exports = router;

var express = require('express');
var router = express.Router();
const { addALike, deleteALike, getLikesPerPost  } = require('../db/queries/likesQueries.js')

router.get('/posts/:post_id', getLikesPerPost)
router.post('/new', addALike);
router.delete('/delete/:id/:user_id', deleteALike);


module.exports = router

var express = require('express');
var router = express.Router();
const { getAllPosts, getSinglePost, deletePosts, createPosts, editPosts  } = require('../db/queries/postsQueries.js')


router.get('/', getAllPosts);
router.get('/:id', getSinglePost);
router.delete('/:id', deletePosts);
router.post('/new/text', createPosts);
router.patch('/:id', editPosts);



module.exports = router

const express = require('express');
const router = express.Router();
const { getAllPosts, getSinglePost, deletePosts, createPost, editPosts, getUsersInfoForThePost, getAllPostsFromUsers  } = require('../db/queries/postsQueries.js')


router.get('/', getAllPosts);
router.get('/dashboard/usersPost', getUsersInfoForThePost)
router.get('/:id', getSinglePost);
router.delete('/delete/:id', deletePosts);
router.post('/new', createPost)
router.get('/profile/:userName', getAllPostsFromUsers)
router.patch('/:id', editPosts);



module.exports = router

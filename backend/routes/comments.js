const express = require('express');
const router = express.Router();
const { addAComment, getCommentsForAPost, deleteAComment  } = require('../db/queries/commentsQueries.js')

router.get('/:posts_id', getCommentsForAPost);
router.post('/new', addAComment);
router.delete('/delete', deleteAComment);

module.exports = router

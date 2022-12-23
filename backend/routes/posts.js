const express = require('express')

const {
    createPost,
    getAllPosts,
    getSinglePost,
    deletePost
} = require('../controllers/postController')

const router = express.Router()

// GET all posts
router.get('/posts', getAllPosts)

// GET a single post
router.get('/posts/:id', getSinglePost)

// POST a new posts
router.post('/posts', createPost)

// DELETE a post
router.delete('/posts/:id', deletePost)

module.exports = router
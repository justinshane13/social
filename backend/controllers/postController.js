const Post = require('../models/postModel')
const mongoose = require('mongoose')

// get all posts
const getAllPosts = async (req, res) => {
    const posts = await Post.find({}).sort({createdAt: -1})
    res.status(200).json(posts)
}

// get a single post
const getSinglePost = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'Post ID does not exist'})
    }

    const post = await Post.findById(id)

    if (!post) {
        return res.status(404).json({error: 'No such post'})
    }

    res.status(200).json(post)
}

// create a new post
const createPost = async (req, res) => {
    const { title, content, author } = req.body

    const newPost = {
        title: title,
        content: content,
        likes: 0,
        author: author
    }

    let emptyFields = []

    if (!title) {
        emptyFields.push('title')
    }
    if (!content) {
        emptyFields.push('content')
    }
    if (!author) {
        emptyFields.push('author')
    }
    if (emptyFields.length > 0) {
        return res.status(400).json({ error: 'Please fill in all fields', emptyFields })
    }

    // try to add doc to db
    try {
        const post = await Post.create(newPost)
        res.status(200).json(post)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

// delete a post
const deletePost = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'Post ID does not exist'})
    }

    const post = await Post.findOneAndDelete({_id: id})

    if (!post) {
        return res.status(404).json({error: 'No such post'})
    }

    res.status(200).json({post})
}

module.exports = {
    createPost,
    getAllPosts,
    getSinglePost,
    deletePost
}
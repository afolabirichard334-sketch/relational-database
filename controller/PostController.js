
const { Post, User } = require('../model');

// CREATE POST
const createPost = async (req, res) => {
    try {
        const post = await Post.create(req.body);
        res.status(201).json(post);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// GET ALL POSTS
const getPosts = async (req, res) => {
    try {
        const posts = await Post.findAll({
            include: [{ model: User }]
        });
        res.json(posts);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// GET ONE POST
const getPost = async (req, res) => {
    try {
        const post = await Post.findByPk(req.params.id, {
            include: [{ model: User }]
        });

        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }

        res.json(post);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// UPDATE POST
const updatePost = async (req, res) => {
    try {
        const post = await Post.findByPk(req.params.id);

        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }

        await post.update(req.body);
        res.json(post);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// DELETE POST
const deletePost = async (req, res) => {
    try {
        const post = await Post.findByPk(req.params.id);

        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }

        await post.destroy();
        res.json({ message: 'Post deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    createPost,
    getPosts,
    getPost,
    updatePost,
    deletePost
};

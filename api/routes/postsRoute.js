const router = require('express').Router();
const postsModel = require('../models/postsModel');
const { postValidation } = require('../validations/postsValidation');

// create post
router.post('/posts', async (req, res) => {

    //validate post
    const { error } = postValidation(req.body);
    if (error) return res.status(400).send({
        status: "error",
        message: error.details[0].message
    })

    const post = new postsModel({
        url: req.body.url,
        caption: req.body.caption
    });
    try {
        const newPost = await post.save();
        res.status(200).send({
            status: "success",
            post_id: newPost._id
        })
    } catch (error) {
        res.status(400).send({
            status: "error",
            message: error
        })
    }
});

//get all posts
router.get('/posts', async (req, res) => {

    try {
        const posts = await postsModel.find();
        if (posts.length == 0) {
            res.status(200).send({
                status: "not_found",
                results: []
            })
        } else {
            res.status(200).send({
                status: "found",
                results: posts
            })
        }
    } catch (error) {
        res.status(400).send({
            status: "error",
            message: error
        })
    }
});

//get post by id
router.get('/posts/:id', async (req, res) => {

    try {
        const post = await postsModel.findOne({ _id: req.params.id });
        if (post.length == 0) {
            res.status(200).send({
                status: "not_found",
                results: []
            })
        } else {
            res.status(200).send({
                status: "found",
                results: post
            })
        }

    } catch (error) {
        res.status(400).send({
            status: "error",
            message: error
        })
    }
});

module.exports = router;
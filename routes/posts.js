const express = require("express");
const router = express.Router();
const Post = require("../models/Post");

// get all posts
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (err) {
    res.json(`Error: ${err.message}`);
  }
});

// get specific post
router.get("/:postId", async (req, res) => {
  try {
    const post = await Post.findById(req.params.postId);
    res.json(post);
  } catch (err) {
    res.json(`Error: ${err.message}`);
  }
});

// submit a post
router.post("/", async (req, res) => {
  const post = new Post({
    title: req.body.title,
    description: req.body.description,
  });

  try {
    const savedPost = await post.save();
    res.json(savedPost);
  } catch (err) {
    res.json(`Error: ${err.message}`);
  }
});

// delete a post
router.delete("/:postId", async (req, res) => {
  try {
    await Post.remove({ _id: req.params.postId });
    res.json("Successfully deleted");
  } catch (error) {
    res.json(`Error: ${err.message}`);
  }
});

// update a post
router.patch("/:postId", async (req, res) => {
  try {
    const post = await Post.updateOne(
      { _id: req.params.postId },
      { $set: { title: req.body.title } }
    );
    res.json(post);
  } catch (err) {
    res.json(`Error: ${err.message}`);
  }
});

module.exports = router;

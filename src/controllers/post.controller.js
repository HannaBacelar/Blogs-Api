require('dotenv').config();
const rescue = require('express-rescue');
const postService = require('../services/post.service');

 const getBlogPost = rescue(async (req, res) => {
   const result = await postService.getBlogPost();
  
    return res.status(200).json(result);
});

module.exports = { getBlogPost };
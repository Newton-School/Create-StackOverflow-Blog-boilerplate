const Blog   = require("../models/blog.js");


const getAllBlog =async (req, res) => {

    const allBlog = await Blog.find({});
    res.status(200).json({
        "status": "success",
        "data": allBlog
    })
   
}

/*

request.body = {
    heading,
    body,
    creator_id
    tags
}

1. Create new blog from request body .
3. Save heading, body, creator_id, tags for every blog.

Response :

1. Success

200 Code

json = 
{
    message: 'Blog added successfully',
    discussion_id: blog._id, //id of blog that is created.
    status: 'success'
}

2. Fail to do

500 Status Code
json = 
{
    status: 'fail',
    message: error message
}

*/


const createBlog = async (req, res) => {

    //Write your code here.

}

module.exports = { getAllBlog, createBlog };
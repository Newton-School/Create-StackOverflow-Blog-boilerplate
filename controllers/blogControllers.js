const Blog   = require("../models/Blog.js");


const getallblog =async (req, res) => {

    const all_blog = await Blog.find({});
    res.status(200).json({
        "status": "success",
        "data": all_blog
    })
   
}

/*

request.body = {
    "heading": heading,
    "body": description,
    "creator_id": xyz,
    "tags": "JAVA"
}

1. Create new blog from request body .
3. Save heading, body, creator_id, tags for every blog.

Response :

1. Success

200 Code

json = 
{
    "message": 'Blog added successfully',
    "discussion_id": blog._id, //id of blog that is created.
    "status": 'success'
}

2. Fail to do

404 Status Code
json = 
{
    "status": 'fail',
    "message": error message
}

*/


const createblog = async (req, res) => {

    //Write your code here.
   
}

module.exports = { getallblog, createblog };
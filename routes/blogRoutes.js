const express = require("express");

const { getAllBlog, createBlog } = require("../controllers/blogControllers");

const router = express.Router();

router.get("/", getAllBlog);
router.post("/create", createBlog);

module.exports = router;
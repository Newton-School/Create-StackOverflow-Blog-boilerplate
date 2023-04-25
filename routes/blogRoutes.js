const express = require("express");

const { getallblog, createblog } = require("../controllers/blogControllers");

const router = express.Router();

router.get("/", getallblog);
router.post("/create", createblog);

module.exports = router;
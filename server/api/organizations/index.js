const express = require("express");
const endpoints = require("./organizations.endpoints");
const router = express.Router();

router.get("/", endpoints.index);

module.exports = router;
